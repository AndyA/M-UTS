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
  // "($70), y",
  // "(0x020e)",
  // "#<:romBase",
  // "#>:romBase",
  // "(base * (2 + n), x)",
  // "-",
  // "-3",
  // "name.length" // props are a problem
  // "oswrch"
  // "-0b111",
  // "< 0xffee",
  // "> $ffee",
  // "9 * $ff / 2 + .bee",
  // ":A / 2 + foo",
  // "3 + -",
  // "AA + 1",
  // "Math",
  "Math(1)",
  "Math.floor",
  "Math.floor(.x / 3)"
  // "Math.min(:rom, 0x8000)",
  // `"\\""`,
  // "`:x ${x}`",
  // "`:x ${x} OK?`",
  // "':x ${x}'",
  // ":A + 2 | :A - 3",
  // "!(A <= 3 && b !== $80)",
  // ":A < 10 ? B / 2 : C & 0xFFDD",
  // "terminate('Hello')",
  // "terminate('Hello', ...args)",
  // "Math.floor(:x / 2) <> 0",
  // "terminate('Hello')(1)"
  // "foo({.name, ...rest})"
];

for (const ex of exs) {
  console.log(`\n== COMPILE "${ex}" ==`);
  const comp = asm.compileMule(ex);
  console.log(JSON.stringify(comp, null, 2));
  // console.log(`${ex} => ${comp.join(" ")}`);
}
