require("../use");
// const _ = require("lodash");
const syntax = require("ref/6502");

const { MOS6502 } = require("lib/6502/cpu");
const {
  MOS6502Assembler,
  MOS6502Build,
  compileExpression,
  exParse
} = require("lib/6502/assembler");

// const cpu = new MOS6502(syntax);
// console.log(MOS6502.statusC);

const asm = new MOS6502Assembler(syntax);

const exs = [
  "(0)",
  "-0b111",
  "< 0xffee",
  "9 * $ff / 2 + .bee",
  ":A / 2 + foo",
  "-- + 3",
  "A + 1",
  "Math.floor(.x / 3)",
  `"\\""`,
  "`:x ${x} OK?`"
];

for (const ex of exs) {
  const comp = exParse(ex);
  console.log(JSON.stringify(comp, null, 2));
}
