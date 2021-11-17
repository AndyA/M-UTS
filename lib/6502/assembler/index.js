const _ = require("lodash");
const { tokenList } = require("./tokens");
const { exprRequired, exprOptional } = require("./exprParser");
const { makeAdModeParser } = require("./adMode");

function put(obj, value, ...path) {
  const [next, ...p] = [...path];
  if (p.length) put((obj[next] = obj[next] || {}), value, p);
  else obj[next] = value;
}

const reSymbol = `(?:(?:[.:]?[a-z_]\\w*)(?:\.[a-z_]\\w*)*|-+|\\++)`;
const reHex = `(?:[$&]|0x)[0-9a-f]+`;
const reOct = `0o?[0-7]+`;
const reBin = `(?:%|0b)[0-1]+`;
// const reDirective = `(?:[!+]?[a-z]\\w*)`;

const reAnyOf = (...parts) => parts.flat().join("|");
const reCapture = (...parts) => new RegExp(`(` + reAnyOf(...parts) + ")", "i");

const reTokenise = reCapture(
  [reHex, reOct, reBin, reSymbol],
  ["A", "X", "Y", "#"], // TODO don't hardwire regs
  [`\\&\\&`, `\\|\\|`],
  [`<>`, `<=`, `>=`, `===`, `==`, `!==`, `!=`],
  [`\\\\.`, `\\\${`, `\\.\\.\\.`],
  `[~!-+*/%<>?:;.,^"'\`(){}\\[\\]\\|\\&]`,
  `\\s+`
);

const exTokenise = expr =>
  expr.split(reTokenise).filter(s => s !== undefined && !/^$/.test(s));

const makeOpcodeDictionary = syntax => {
  const ops = syntax
    .map(op => op && op.split(/\s+/))
    .map((op, opcode) => op && [...op, opcode])
    .filter(Boolean);

  const opDict = {};
  const addrDict = {};

  for (const [mnem, addr, opcode] of ops) {
    put(opDict, opcode, mnem, addr);
    put(addrDict, opcode, addr, mnem);
  }

  return { opDict, addrDict };
};

class MOS6502Assembler {
  constructor(syntax) {
    this.makeEngine(syntax);
  }

  makeEngine(syntax) {
    const dict = makeOpcodeDictionary(syntax);

    // console.log(Object.keys(dict.addrDict));
    // process.exit(1);
    this.parser = makeAdModeParser(Object.keys(dict.addrDict), exprOptional);
  }

  compile(expr) {
    const tl = tokenList(exTokenise(expr));
    const res = exprRequired(tl);
    tl.checkEnd();
    return res;
  }

  compileMule(expr) {
    const tl = tokenList(exTokenise(expr));
    const res = this.parser(tl);
    tl.checkEnd();
    return res;
  }
}

class MOS6502Build {
  constructor(assembler) {
    this.assembler = assembler;
    this.symtab = {};
  }
}

module.exports = { MOS6502Assembler, MOS6502Build };
