const _ = require("lodash");

class MOS6502 {
  constructor(syntax) {
    this.mem = new Uint8Array(0x10000); // 64k
    this.syntax = syntax;
    this._mc = null;

    this.A = 0xff;
    this.X = 0xff;
    this.Y = 0xff;
    this.P = 0xff;
    this.S = 0xff;
    this.PC = 0x8000;
  }

  get regs() {
    return _.pick(this, "A", "X", "Y", "P", "S", "PC");
  }

  clone() {
    const cl = new this.constructor(this.syntax);

    // State fields and mc
    Object.assign(cl, this.regs, { mc: this.mc });

    // Copy memory
    cl.mem = Uint8Array.from(this.mem);

    return cl;
  }

  get mc() {
    return (this._mc = this._mc || this.makeInstructionDespatcher(this.syntax));
  }

  set mc(mc) {
    this._mc = mc;
  }

  lookupOp(op) {
    // "impl" is, er, implied
    if (!/\s/.test(op)) op += " impl";
    const opcode = this.mc.opIndex[op];
    if (!opcode) throw new Error(`Bad op: ${op}`);
    return opcode;
  }

  makeInstructionDespatcher(syntax) {
    const { flags } = this.constructor;

    const ops = syntax.map(op => op && op.split(/\s+/));
    const mem = this.mem;

    const sex = v => (v >= 0x80 ? v - 0x100 : v);
    const wrap = word => word & 0xffff;

    const fb = () => {
      const b = mem[this.PC++];
      this.PC = wrap(this.PC);
      return b;
    };

    const fw = () => fb() | (fb() << 8);

    const byt = addr => mem[addr];
    const wrd = addr => mem[addr] | (mem[wrap(addr + 1)] << 8);

    const mkReader = getter => lv =>
      lv !== null && Array.isArray(lv) ? lv[0] : getter(lv);

    const rb = mkReader(byt);
    const rw = mkReader(wrd);

    const rbOrA = lv => (lv === null ? this.A : rb(lv));

    const checkLV = lv => {
      if (lv === null || Array.isArray(lv))
        throw new Error(`LV is not an address`);
      return lv;
    };

    const wb = (lv, byte) => (mem[checkLV(lv)] = byte & 0xff);

    const setFlag = (flag, state) =>
      (this.P = state ? this.P | flags[flag] : this.P & ~flags[flag]);

    const flagsOnSet = v => {
      const vv = v & 0xff;
      setFlag("Z", vv === 0);
      setFlag("N", vv & 0x80);
      return vv;
    };

    const set = (reg, byte) => (this[reg] = flagsOnSet(byte & 0xff));

    // Used for shifts and rotates
    const setShift = (lv, byte, c) => {
      const b = flagsOnSet(byte);
      if (lv === null) this.A = b;
      else wb(lv, b);
      setFlag("C", c);
    };

    const getFlag = flag => (this.P & flags[flag] ? 1 : 0);

    const shiftLeft = (lv, shiftIn) => {
      const r = (rbOrA(lv) << 1) | shiftIn ? getFlag("C") : 0;
      setShift(lv, r, r & 0x100);
    };

    const shiftRight = (lv, shiftIn) => {
      const v = rbOrA(lv);
      const r = (v >> 1) | shiftIn ? getFlag("C") : 0x80;
      setShift(lv, r, v & 0x01);
    };

    const branch = lv => (this.PC = rw(lv));

    const branchIfClear = flag => lv => this.P & flags[flag] || branch(lv);
    const branchIfSet = flag => lv => this.P & flags[flag] && branch(lv);

    const jmp = lv => (this.PC = checkLV(lv));

    const cmp = reg => lv => {
      const v = sex(this[reg]) - rb(lv);
      flagsOnSet(v);
      setFlag("C", (v & 0xff) >= 256);
    };

    const push = byte => {
      mem[this.S] = byte;
      this.S = (this.S - 1) & 0xff;
    };

    const pushw = word => {
      push(word >> 8);
      push(word);
    };

    const pop = () => {
      this.S = (this.S + 1) & 0xff;
      return mem[this.S];
    };

    const popw = () => pop() | (pop() << 8);

    const govia = vec => () => {
      this.PC = wrd(vec);
    };

    const interrupt = vec => () => {
      push(this.P);
      pushw(this.PC);
      govia(vec)();
    };

    // Each addressing mode advances PC and yields an
    // address or undef (implied).
    // Note: as a special case an immediate value is
    // represented as an array containing that value.

    const adModes = {
      "impl": () => null, // implied
      "A": () => null, // implied
      "#": () => [fb()], // imm - see note above
      "rel": () => [wrap(sex(fb()) + this.PC)], // Bxx - treated as an immediate
      "zpg": () => fb(), // zp
      "zpg,X": () => fb() + this.X, // zp, x
      "zpg,Y": () => fb() + this.Y, // zp, y
      "abs": () => fw(),
      "abs,X": () => fw() + this.X, // abs, x
      "abs,Y": () => fw() + this.Y, // abs, y
      "ind,Y": () => wrd(fb()) + this.Y, // (zp), y
      "X,ind": () => wrd(fb() + this.Y), // (zp, x)
      "ind": () => wrd(fw()) // (abs) - no JMP () bug emulation
    };

    const opcodes = {
      NOP: lv => 0,

      CLC: lv => setFlag("C", false),
      CLD: lv => setFlag("D", false),
      CLI: lv => setFlag("I", false),
      CLV: lv => setFlag("V", false),
      SEC: lv => setFlag("C", true),
      SED: lv => setFlag("D", true),
      SEI: lv => setFlag("I", true),

      BCC: branchIfClear("C"),
      BCS: branchIfSet("C"),
      BNE: branchIfClear("Z"),
      BEQ: branchIfSet("Z"),
      BPL: branchIfClear("N"),
      BMI: branchIfSet("N"),
      BVC: branchIfClear("V"),
      BVS: branchIfSet("V"),

      DEC: lv => wb(lv, flagsOnSet(rb(lv) - 1)),
      INC: lv => wb(lv, flagsOnSet(rb(lv) + 1)),

      DEX: lv => set("X", this.X - 1),
      DEY: lv => set("Y", this.Y - 1),
      INX: lv => set("X", this.X + 1),
      INY: lv => set("Y", this.Y + 1),

      LDA: lv => set("A", rb(lv)),
      LDX: lv => set("X", rb(lv)),
      LDY: lv => set("Y", rb(lv)),
      STA: lv => wb(lv, this.A),
      STX: lv => wb(lv, this.X),
      STY: lv => wb(lv, this.Y),

      PHA: lv => push(this.A),
      PHP: lv => push(this.P),
      PLA: lv => set("A", pop()),
      PLP: lv => (this.P = pop() & ~flags.B),

      TAX: lv => set("X", this.A),
      TAY: lv => set("Y", this.A),
      TSX: lv => set("X", this.S),
      TXA: lv => set("A", this.X),
      TXS: lv => (this.S = this.X),
      TYA: lv => set("A", this.Y),

      AND: lv => set("A", this.A & rb(lv)),
      EOR: lv => set("A", this.A ^ rb(lv)),
      ORA: lv => set("A", this.A | rb(lv)),

      JMP: jmp,
      JSR: lv => (pushw(this.PC - 1), jmp(lv)),
      RTS: lv => (this.PC = wrap(popw() + 1)),
      RTI: lv => ((this.PC = popw()), (this.P = pop() & ~flags.B)),
      BRK: lv => (setFlag("B", true), interrupt(0xfffe)()),

      ASL: lv => shiftLeft(lv, false),
      LSR: lv => shiftRight(lv, false),
      ROL: lv => shiftLeft(lv, true),
      ROR: lv => shiftRight(lv, true),

      BIT: lv => {
        const v = rb(lv);
        setFlag("Z", (this.A & v) === 0);
        setFlag("N", v & 0x80);
        setFlag("V", v & 0x40);
      },

      ADC: lv => {
        if (getFlag("D")) {
          throw new Error("Decimal mode");
        } else {
          const v = sex(this.A) + getFlag("C") + sex(rb(lv));
          set("A", v);
          setFlag("C", (v & 0xff) >= 256);
          setFlag("V", v < -128 || v > 127);
        }
      },

      SBC: lv => {
        if (getFlag("D")) {
          throw new Error("Decimal mode");
        } else {
          const v = sex(this.A) + getFlag("C") - 1 - sex(rb(lv));
          set("A", v);
          setFlag("C", (v & 0xff) >= 256);
          setFlag("V", v < -128 || v > 127);
        }
      },

      CMP: cmp("A"),
      CPX: cmp("X"),
      CPY: cmp("Y")
    };

    const dispatch = ops.map((op, opcode) => {
      if (!op) return null;
      const [mnem, addr] = op;
      const inst = opcodes[mnem];
      if (!inst) throw new Error(`Unknown mnemonic: ${mnem}`);
      const addrMode = adModes[addr];
      if (!addrMode) throw new Error(`Unknown address mode: ${addr}`);
      return () => inst(addrMode());
    });

    // nmemonic, address pairs
    const opIndex = Object.fromEntries(
      syntax.map((op, i) => [op, i]).filter(e => e[0] !== null)
    );

    return {
      dispatch,
      opIndex,

      core: () => {
        const op = fb();
        const h = dispatch[op];
        if (!h) throw new Error(`Illegal instruction: ${op.toString(16)}`);
        return h();
      },

      nmi: interrupt(0xfffa),
      reset: govia(0xfffc),
      irq: interrupt(0xfffe)
    };
  }

  step() {
    this.mc.core();
    return this;
  }
}

MOS6502.flags = {
  N: 1 << 7,
  V: 1 << 6,
  X: 1 << 5, // unused
  B: 1 << 4,
  D: 1 << 3,
  I: 1 << 2,
  Z: 1 << 1,
  C: 1 << 0
};

module.exports = { MOS6502 };
