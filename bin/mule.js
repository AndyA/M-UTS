require("../use");
// const _ = require("lodash");
const syntax = require("ref/6502");

const { MOS6502 } = require("lib/6502/cpu");
const {
  MOS6502Assembler,
  MOS6502Build,
  compileExpression
} = require("lib/6502/assembler");

// const cpu = new MOS6502(syntax);
// console.log(MOS6502.statusC);

const asm = new MOS6502Assembler(syntax);

const exs = [
  "(0)",
  "-0b111",
  "< 0xffee",
  "> $ffee",
  "9 * $ff / 2 + .bee",
  ":A / 2 + foo",
  "3 + -",
  "A + 1",
  "Math.floor(.x / 3)",
  "Math.min(:rom, 0x800)",
  `"\\""`,
  "`:x ${x}`",
  "A + 2 | A - 3",
  "!(A <= 3 && b !== $80)",
  "A < 10 ? B / 2 : C & 0xFFDD",
  "terminate('Hello')"
  // "terminate('Hello')(1)"
  // "foo({.name, ...rest})"
];

for (const ex of exs) {
  const comp = compileExpression(ex);
  console.log(`== ${ex} ==`);
  // console.log(JSON.stringify(comp, null, 2));
  console.log(`${ex} => ${comp.join("")}`);
}
