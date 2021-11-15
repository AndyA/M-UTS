const _ = require("lodash");

class MOS6502 {
  constructor(syntax) {
    this.mem = new Uint8Array(0x10000); // 64k
    this.syntax = syntax;
    this._mc = null;
    this.reset();
  }

  reset() {
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

    const fb = () => {
      const b = mem[this.PC++];
      this.PC = this.PC & 0xffff;
      return b;
    };

    const fw = () => fb() | (fb() << 8);

    const byt = addr => mem[addr];
    const wrd = addr => mem[addr] | (mem[(addr + 1) & 0xffff] << 8);

    const mkReader = getter => lv =>
      lv !== null && Array.isArray(lv) ? lv[0] : getter(lv);

    const rb = mkReader(byt);
    const rw = mkReader(wrd);

    const wb = (lv, byte) => {
      if (lv === null || Array.isArray(lv))
        throw new Error(`Not a writeable lv`);
      return (mem[lv] = byte & 0xff);
    };

    const jmp = lv => (this.PC = rw(lv));

    const flags_on_set = v => {
      return v;
    };

    const set = (reg, byte) => (this[reg] = flags_on_set(byte & 0xff));

    // Each addressing mode advances PC and yields an
    // address or undef (implied).
    // Note: as a special case an immediate value is
    // represented as an array containing that value.

    const adModes = {
      "impl": () => null, // implied
      "A": () => null, // implied
      "#": () => [fb()], // imm - see note above
      "rel": () => [(sex(fb()) + this.PC) & 0xffff], // Bxx - treated as an immediate
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

    const branch_if_clear = bit => lv => this.P & bit || jmp(lv);
    const branch_if_set = bit => lv => this.P & bit && jmp(lv);
    const push = byte => {
      mem[this.S] = byte;
      this.S = (this.S - 1) & 0xff;
    };

    const pop = () => {
      this.S = (this.S + 1) & 0xff;
      return mem[this.S];
    };

    const opcodes = {
      ADC: lv => null,
      AND: lv => set("A", this.A & rb(lv)),
      ASL: lv => null,
      BCC: branch_if_clear(flags.C),
      BCS: branch_if_set(flags.C),
      BNE: branch_if_clear(flags.Z),
      BEQ: branch_if_set(flags.Z),
      BPL: branch_if_clear(flags.N),
      BMI: branch_if_set(flags.N),
      BVC: branch_if_clear(flags.V),
      BVS: branch_if_set(flags.V),

      CLC: lv => (this.P = this.P & ~flags.C),
      CLD: lv => (this.P = this.P & ~flags.D),
      CLI: lv => (this.P = this.P & ~flags.I),
      CLV: lv => (this.P = this.P & ~flags.V),
      SEC: lv => (this.P = this.P | flags.C),
      SED: lv => (this.P = this.P | flags.D),
      SEI: lv => (this.P = this.P | flags.I),

      BIT: lv => null,
      BRK: lv => null,
      CMP: lv => null,
      CPX: lv => null,
      CPY: lv => null,
      DEC: lv => null,
      DEX: lv => set("X", this.X - 1),
      DEY: lv => set("Y", this.Y - 1),
      EOR: lv => set("A", this.A ^ rb(lv)),
      INC: lv => null,
      INX: lv => set("X", this.X + 1),
      INY: lv => set("Y", this.Y + 1),
      JMP: lv => null,
      JSR: lv => null,
      LDA: lv => set("A", rb(lv)),
      LDX: lv => set("X", rb(lv)),
      LDY: lv => set("Y", rb(lv)),
      LSR: lv => null,
      NOP: lv => 0,
      ORA: lv => set("A", this.A | rb(lv)),
      PHA: lv => push(this.A),
      PHP: lv => push(this.P),
      PLA: lv => set("A", pop()),
      PLP: lv => (this.P = pop()),
      ROL: lv => null,
      ROR: lv => null,
      RTI: lv => null,
      RTS: lv => null,
      SBC: lv => null,
      STA: lv => wb(lv, this.A),
      STX: lv => wb(lv, this.X),
      STY: lv => wb(lv, this.Y),
      TAX: lv => set("X", this.A),
      TAY: lv => set("Y", this.A),
      TSX: lv => set("X", this.S),
      TXA: lv => set("A", this.X),
      TXS: lv => (this.S = this.X),
      TYA: lv => set("A", this.Y)
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

    const core = () => {
      const op = fb();
      const h = dispatch[op];
      if (!h) throw new Error(`Illegal instruction: ${op.toString(16)}`);
      return h();
    };

    return { dispatch, opIndex, core };
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
