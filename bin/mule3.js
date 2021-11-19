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

// const cleanSource = str => JSON.stringify(str).replace(/^"(.*)"$/, "$1");

const asm = new MOS6502Assembler(syntax);

if (0) {
  const ap = asm.getAddrParser("LDA");
  console.log(ap);
}

if (1) {
  const source = [
    "               !macro print .str { ; print a string",
    "               }",
    "",
    "!addr oswrch   = $ffee",
    "*              = $8000",
    "showChars      LDX #'!'   ; print ! to ~",
    "",
    "-              TXA",
    "               JSR oswrch ; OSWRCH",
    "               INX",
    "               CPX #'~' + 1",
    "               BCC -",
    "",
    "               RTS        ; all done",
    "",
    "-              JSR oswrch ; OSWRCH",
    "               INY",
    "prStr          LDA ($70), y",
    "               BNE -",
    "               RTS",
    "",
    ':msg           +msg "Hello, World", 10, 0',
    "               !byte 1, 2, 3, 4",
    ":govec         JMP ($020e)"
  ];

  const ast = asm.compileSource(source, "mule3.a");

  const comment = ["AST for this code:", "", ...source]
    .map(ln => `// ${ln}`)
    .join("\n");

  console.log(`${comment}\n\nmodule.exports = ${JSON.stringify(ast)};`);
}
