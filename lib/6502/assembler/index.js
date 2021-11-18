const _ = require("lodash");
const { tokenList } = require("./tokens");
const { lineList } = require("./lines");
const { exprRequired, exprOptional, parseSymbol } = require("./exprParser");
const { makeAdModeParser, adModeTokens } = require("./adMode");

function put(obj, value, ...path) {
  const [next, ...p] = [...path];
  if (p.length) put((obj[next] = obj[next] || {}), value, p);
  else obj[next] = value;
}

const repSymbol = `(?:(?:[.:]?[a-z_]\\w*)(?:\.[a-z_]\\w*)*|-+|\\++)`;
const repHex = `(?:[$&]|0x)[0-9a-f]+`;
const repOct = `0o?[0-7]+`;
const repBin = `(?:%|0b)[0-1]+`;
// const repDirective = `(?:[!+]?[a-z]\\w*)`;

const repAnyOf = (...parts) => parts.flat().join("|");
const reCapture = (...parts) => new RegExp(`(` + repAnyOf(...parts) + ")", "i");

function makeToker(mnemonics) {
  const reTokenise = reCapture(
    [repHex, repOct, repBin, repSymbol],
    [...mnemonics].sort().map(_.escapeRegExp),
    adModeTokens,
    [`\\&\\&`, `\\|\\|`],
    [`<>`, `<=`, `>=`, `===`, `==`, `!==`, `!=`],
    [`\\\\.`, `\\\${`, `\\.\\.\\.`],
    `[~!-+*/%<>?:;.,^"'\`(){}\\[\\]\\|\\&]`,
    `\\s+`
  );

  return expr =>
    expr.split(reTokenise).filter(s => s !== undefined && !/^$/.test(s));
}

const makeOpcodeDictionary = syntax => {
  const ops = syntax
    .map(op => op && op.split(/\s+/))
    .map((op, opcode) => op && [...op, opcode])
    .filter(Boolean);

  const op = {};
  const addr = {};

  for (const [mnem, adMode, opcode] of ops) {
    put(op, opcode, mnem, adMode);
    put(addr, opcode, adMode, mnem);
  }

  return { op, addr };
};

class MOS6502Assembler {
  constructor(syntax) {
    this.addrParsers = {};
    this.makeEngine(syntax);
  }

  getAddrParser(opName) {
    const op = this.dict.op[opName];
    if (!op) throw new Error(`Unknown nmemonic ${opName}`);
    const modes = Object.keys(op).sort();
    const key = modes.join("|");
    return (this.addrParsers[key] =
      this.addrParsers[key] || makeAdModeParser(modes, exprOptional));
  }

  makeEngine(syntax) {
    this.dict = makeOpcodeDictionary(syntax);

    this.addrParser = makeAdModeParser(
      Object.keys(this.dict.addr),
      exprOptional
    );

    this.toker = makeToker(Object.keys(this.dict.op));
  }

  compile(expr) {
    const tl = tokenList(this.toker(expr));
    const res = exprRequired(tl);
    tl.checkEnd();
    return res;
  }

  compileMule(expr) {
    const tl = tokenList(this.toker(expr));
    const res = this.addrParser(tl);
    tl.checkEnd();
    return res;
  }

  compileLines(lb) {
    const { dict } = this;

    const analyzer = tl => {
      const getThing = () => {
        const peek = tl.expectNext();

        {
          // opcode?
          const opName = peek.toUpperCase();
          const op = dict.op[opName];
          if (op) {
            tl.getToken();
            const children = [this.getAddrParser(opName)(tl)];
            if (!children) throw new Error(`Bad arguments to ${opName}`);
            return { tag: "opcode", value: opName, children };
          }
        }

        {
          const sym = parseSymbol(peek);
          if (sym) {
            tl.getToken();
            return sym;
          }
        }

        if (peek === ";") return { tag: "comment", value: tl.getTail() };
      };

      return { ...tl, getThing };
    };

    const parseLine = () => {
      const children = [];
      const tl = analyzer(lb.getNext());

      while (tl.hasMore()) {
        const next = tl.getThing();
        if (!next) break;
        children.push(next);
      }

      tl.checkEnd();

      if (children.length)
        return { tag: "source.line", file: tl.file, ln: tl.ln, children };
    };

    const children = [];
    while (lb.hasMore()) {
      const res = parseLine();
      if (res) children.push(res);
    }
    return { tag: "source.file", file: lb.file, children };
  }

  compileSource(lines, file) {
    return this.compileLines(lineList(lines, file, this.toker));
  }
}

class MOS6502Build {
  constructor(assembler) {
    this.assembler = assembler;
    this.symtab = {};
  }
}

module.exports = { MOS6502Assembler, MOS6502Build };
