const genfun = require("generate-function");

const reSymbol = `(?:(?:[.:]?[a-z_]\\w*)|[-+]+)`;
const reDirective = `(?:[!+]?[a-z]\\w*)`;

function extractExpression(src) {
  const toks = src.split(/(\\.|\${|["'`{}\[\]()]|\/\/|\/\*|\*\/)/);

  console.log(toks);
  return [];
}

class MOS6502Assembler {
  constructor(syntax) {
    this.syntax = syntax;
  }

  compile(src) {
    const reLine = new RegExp(
      `^(?:///\\s)?\\s*(${reSymbol})?(?:\\s+(${reDirective})?)\\s*(.*)$`
    );

    console.log(reLine);

    const parseAsmLine = ln => {
      console.log(`parse "${ln}"`);
      const m = ln.match(reLine);
      if (!m) return;
      console.log(m);
    };

    const lines = src.split(/\n/);
    const code = lines.map((line, ln) => {
      const al = parseAsmLine(line);
    });
  }
}

module.exports = { MOS6502Assembler, extractExpression };