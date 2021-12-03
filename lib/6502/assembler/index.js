const _ = require("lodash");
const { SyntaxError, ParseError } = require("./error");
const { tokenList } = require("./tokens");
const { lineList } = require("./lines");
const { atomParser, exprSymbol, exprMacroSymbol } = require("./exprAtom");
const { makeAdModeParser, adModeTokens } = require("./adMode");

const spec = require("./evaluatorSpec");
const { ExpressionSyntax } = require("./exprSyntax");

function put(obj, value, ...path) {
  const [next, ...p] = [...path];
  if (p.length) put((obj[next] = obj[next] || {}), value, p);
  else obj[next] = value;
}

const repSymbol = `(?:(?:[.:]?[a-z_]\\w*)|-+|\\++)`;
const repHex = `(?:[$&]|0x)[0-9a-f]+`;
const repOct = `0o?[0-7]+`;
const repBin = `(?:%|0b)[0-1]+`;
const repDirective = `(?:[!+]\\w+)`;

const repAnyOf = (...parts) => parts.flat().join("|");
const reCapture = (...parts) => new RegExp(`(` + repAnyOf(...parts) + ")", "i");
const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

function makeToker(...tokens) {
  const toks = _(tokens)
    .flatten()
    .uniq()
    .sort((a, b) => cmp(b.length, a.length) || cmp(a, b))
    .value();

  const reTokenise = reCapture(
    [repDirective, repHex, repOct, repBin, repSymbol],
    [`\\\\.`, `\\\${`, `\\.\\.\\.`, `\\?\\(`],
    toks.map(_.escapeRegExp),
    `[;.,"'\`(){}\\[\\]]`,
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

  getAddrParserForModes(modes) {
    const key = modes.join("|");
    return (this.addrParsers[key] =
      this.addrParsers[key] || makeAdModeParser(modes, this.syn.parser.parse));
  }

  getAddrParser(opName) {
    const op = this.dict.op[opName];
    if (!op) throw new SyntaxError(`Unknown nmemonic ${opName}`);
    return this.getAddrParserForModes(Object.keys(op).sort());
  }

  get addrParser() {
    return this.getAddrParserForModes(Object.keys(this.dict.addr));
  }

  makeEngine(syntax) {
    this.dict = makeOpcodeDictionary(syntax);
    this.syn = new ExpressionSyntax(spec, atomParser);
    this.toker = makeToker(
      Object.keys(this.dict.op),
      this.syn.tokens,
      adModeTokens
    );
  }

  compile(expr) {
    const tl = tokenList(this.toker(expr));
    const res = this.syn.parser.expect(tl);
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
    const { dict, syn } = this;

    const parseArgList = tl => {
      const children = [];
      while (tl.hasMore()) {
        const res = this.syn.parser.parse(tl);
        if (!res) break;
        children.push(res);
        if (!tl.hasNext(",")) break;
        tl.getToken();
      }
      return children;
    };

    const parseMacroArgs = tl => {
      const children = [];
      while (tl.hasMore()) {
        const sym = exprMacroSymbol(tl, syn);
        if (!sym) break;
        children.push(sym);
        if (!tl.hasNext(",")) break;
        tl.getToken();
      }

      if (!tl.hasNext("{"))
        throw new SyntaxError(`Missing { in MACRO definition`);
      tl.getToken();

      return children;
    };

    const analyzer = tl => {
      const getThing = () => {
        const peek = tl.expectNext();
        const ucPeek = peek.toUpperCase();

        {
          // opcode?
          const op = dict.op[ucPeek];
          if (op) {
            tl.getToken();
            const children = [this.getAddrParser(ucPeek)(tl)];
            if (!children) throw new SyntaxError(`Bad arguments to ${ucPeek}`);
            return { tag: "opcode", value: ucPeek, children };
          }
        }

        if (ucPeek === "!ADDR" || ucPeek === "!SET") {
          tl.getToken();
          return {
            tag: "directive",
            value: ucPeek.substr(1),
            children: [getThing()]
          };
        }

        if (ucPeek === "!MACRO") {
          tl.getToken();
          const value = tl.getNext();
          const children = parseMacroArgs(tl);
          return { tag: "macroStart", value, children };
        }

        {
          // directives
          const m = peek.match(/^([+!])(\w+)$/);
          if (m) {
            tl.getToken();
            const tag = m[1] === "+" ? "macro.call" : "directive";
            return {
              tag,
              value: m[2].toUpperCase(),
              children: parseArgList(tl)
            };
          }
        }

        {
          // symbol
          const sym = exprSymbol(tl, syn);
          if (sym) {
            // assignment?
            if (tl.hasNext("=")) {
              tl.getToken();
              return {
                tag: "assign",
                children: [sym, this.syn.parser.expect(tl)]
              };
            }
            return sym;
          }
        }

        if (peek === "}") {
          tl.getToken();
          return { tag: "macroEnd" };
        }

        // comment
        if (peek === ";") {
          tl.getToken();
          return { tag: "comment", value: tl.getTail() };
        }
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
    const errors = [];

    const tryLine = () => {
      const source = lb.peekNext();
      try {
        return parseLine();
      } catch (e) {
        if (e instanceof SyntaxError) {
          const err = new ParseError(
            lb.file,
            lb.getLineNumber(),
            source,
            e.message
          );
          errors.push(err);
          console.error(`${err}\n    ${source}`);
        } else {
          throw e;
        }
      }
    };

    while (lb.hasMore()) {
      const res = tryLine();
      if (res) children.push(res);
    }

    // TODO check errors

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
