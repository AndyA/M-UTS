require("../use");
const _ = require("lodash");
const syntax = require("ref/6502");

const { MOS6502Assembler } = require("lib/6502/assembler");

const asm = new MOS6502Assembler(syntax);

const source = [
  // "",
  // "               }",
  // "!addr oswrch   = $ffee",
  // "*              = $8000",
  // "!addr HWM      = Math.min(* + $2000, $c000)",
  // 'msg_len        = ("Hello").length',
  // 'symName        = "aSymbol"',
  // 'list           = [oswrch, "Hello", [1, 2, 3]]',
  // "?(symName)     = ?(symName) + 1 + .a[msg_len - 1]",
  // 'term           = debug ? " (debug)" : " (production)"',
  // "showChars      LDX #'!'   ; print ! to ~",
  // "-              TXA",
  // "               JSR oswrch ; OSWRCH",
  // "               INX",
  // "               CPX #'~' + 1",
  // "               BCC -",
  // "               RTS        ; all done",
  // "-              JSR oswrch ; OSWRCH",
  // "               INY",
  // "prStr          LDA ($70), y",
  // "               BNE -",
  // "               RTS",
  // ':msg           +msg "Hello, World", 10, 0',
  // "hello          LDA #<:msg",
  // "               STA $70",
  // "               LDA #>:msg",
  // "               STA $71",
  // "               BNE prStr",
  // "               !byte 1, 2, 3, 4",
  // ":govec         JMP ($020e)",
  ":msg +msg `Hello, ${name}`, 10, 0"
].map(s => s.replace(/\s+/g, " "));

const ast = asm.compileSource(source, "mule3.a");

const comment = ["AST for this code:", "", ...source]
  .map(ln => `// ${ln}`)
  .join("\n");

// console.log(`${comment}\n\nmodule.exports = ${JSON.stringify(ast, null, 2)};`);
