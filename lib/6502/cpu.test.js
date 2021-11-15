const { MOS6502 } = require("./cpu");
const syntax = require("../../ref/6502");

const prog = 0x2000;

const tFlagClear = (op, flag) => ({
  op,
  want: cpu => {
    cpu.P = 0xff & ~MOS6502.flags[flag];
    cpu.PC++;
  }
});

const tFlagSet = (op, flag) => ({
  op,
  setup: cpu => {
    cpu.P = 0;
  },
  want: cpu => {
    cpu.P = MOS6502.flags[flag];
    cpu.PC++;
  }
});

const cneg = (neg, value) => 0xff & (neg ? ~value : value);

const tBranch = (op, flag, neg) => [
  {
    op,
    args: [10],
    desc: `${flag} ${neg ? "clear" : "set"}, offset 10`,
    setup: cpu => {
      cpu.P = cneg(neg, MOS6502.flags[flag]);
    },
    want: cpu => {
      cpu.PC = prog + 2 + 10;
    }
  },
  {
    op,
    args: [-10],
    desc: `${flag} ${neg ? "clear" : "set"}, offset -10`,
    setup: cpu => {
      cpu.P = cneg(neg, MOS6502.flags[flag]);
    },
    want: cpu => {
      cpu.PC = prog + 2 - 10;
    }
  },
  {
    op,
    args: [10],
    desc: `${flag} ${neg ? "set" : "clear"}`,
    setup: cpu => {
      cpu.P = cneg(!neg, MOS6502.flags[flag]);
    },
    want: cpu => {
      cpu.PC = prog + 2;
    }
  }
];

describe("instructions", () => {
  const tests = [
    tFlagClear("CLC", "C"),
    tFlagSet("SEC", "C"),
    tFlagClear("CLD", "D"),
    tFlagSet("SED", "D"),
    tFlagClear("CLI", "I"),
    tFlagSet("SEI", "I"),
    tFlagClear("CLV", "V"),
    tBranch("BCC rel", "C", true),
    tBranch("BCS rel", "C", false),
    tBranch("BNE rel", "Z", true),
    tBranch("BEQ rel", "Z", false),
    tBranch("BPL rel", "N", true),
    tBranch("BMI rel", "N", false),
    tBranch("BVC rel", "V", true),
    tBranch("BVS rel", "V", false)
  ];
  for (const { op, desc, args, want, setup } of tests.flat()) {
    it(`${op}${(desc && ` (${desc})`) || ""} should work`, () => {
      const cpu = new MOS6502(syntax);

      const opcode = cpu.lookupOp(op);

      let pc = prog;
      cpu.mem[pc++] = opcode;
      for (const arg of args || []) cpu.mem[pc++] = arg & 0xff;

      cpu.S = 0xff;
      cpu.PC = prog;

      if (setup) setup(cpu);

      const ref = cpu.clone();
      want(ref);

      cpu.step();
      expect(cpu.regs).toEqual(ref.regs);
      expect(cpu.mem).toEqual(ref.mem);
    });
  }
});
