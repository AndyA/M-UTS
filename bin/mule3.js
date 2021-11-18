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

if (0) {
  const ap = asm.getAddrParser("LDA");
  console.log(ap);
}

if (1) {
  const source = [
    "showChars  LDX #'!'   ; print ! to ~",
    "",
    "-          TXA",
    "           JSR 0xffee ; OSWRCH",
    "           INX",
    "           CPX #127",
    "           BCC -",
    "",
    "           RTS        ; all done",
    "",
    "-          JSR 0xffee ; OSWRCH",
    "           INY",
    "prStr      LDA ($70), y",
    "           BNE -",
    ""
  ];

  const ast = asm.compileSource(source, "mule3.a");
  console.log(`module.exports = ${JSON.stringify(ast)};`);
}
