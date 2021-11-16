require("../use");
// const _ = require("lodash");
const syntax = require("ref/6502");

const { MOS6502 } = require("lib/6502/cpu");
const { MOS6502Assembler } = require("lib/6502/assembler");

// const cpu = new MOS6502(syntax);
// console.log(MOS6502.statusC);

const asm = new MOS6502Assembler(syntax);
const src = [
  `define("byte", (...bytes) => {`,
  `  for (const b of bytes) putByte(b);`,
  `});`,
  `/// prstr         ldx #msg_len - 1         ; see above`,
  `/// -             lda msg, x`,
  `///               jsr oswrch`,
  `///               dex`,
  `///               bpl -`,
  `///               rts`
].join("\n");

const code = asm.compile(src);
