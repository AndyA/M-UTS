const { tokenList } = require("lib/parser/tokens");

const reSymbol = `(?:(?:[.:]?[a-z_]\\w*)(?:\.[a-z_]\\w*)*|-+|\\++)`;
const reHex = `(?:[$&]|0x)[0-9a-f]+`;
const reOct = `0o?[0-7]+`;
const reBin = `(?:%|0b)[0-1]+`;
// const reDirective = `(?:[!+]?[a-z]\\w*)`;

function put(obj, value, ...path) {
  const [next, ...p] = [...path];
  if (p.length) put((obj[next] = obj[next] || {}), value, p);
  else obj[next] = value;
}

const reTokenise = new RegExp(
  `(` +
    [
      `\\\\.`,
      `\\\${`,
      reHex,
      reOct,
      reBin,
      reSymbol,
      `\\&\\&`,
      `\\|\\|`,
      `<>`,
      `<=`,
      `>=`,
      `===`,
      `==`,
      `!==`,
      `!=`,
      `\\.\\.\\.`,
      `[~!-+*/%<>?:.,^"'\`(){}\\[\\]\\|\\&]`,
      `\\s+`
    ].join("|") +
    ")",
  "i"
);

const exTokenise = expr =>
  expr.split(reTokenise).filter(s => s !== undefined && !/^$/.test(s));

function compileExpression(expr) {
  const tl = tokenList(exTokenise(expr));
  // console.log({ tl.toks });

  const parseBase = b => n => parseInt(n, b);
  const numberFormats = [
    [/^(?:%|0b)([0-1]+)$/, parseBase(2)],
    [/^(?:[$&]|0x)([0-9a-f]+)$/i, parseBase(16)],
    [/^0o?([0-7]+)$/i, parseBase(8)]
  ];

  const exRequire = ex => () => {
    const res = ex();
    if (!res) {
      if (tl.toks.length) throw new Error(`Syntax error: ${tl.toks[0]}`);
      throw new Error(`Unexpected end of input`);
    }
    return res;
  };

  const exNumber = num => {
    for (const [re, cvt] of numberFormats) {
      const m = num.match(re);
      if (m) return cvt(m[1]);
    }

    return Number(num);
  };

  const exSymbol = sym => {
    if (/^[a-z_]\w*(?:\.[a-z_]\w*)+$/i.test(sym)) return sym;

    const ms = sym.match(/^([.:]?)([a-z_]\w*)$/i);
    if (ms) {
      const [, ns, sym] = ms;
      const space = ns === "." ? "local" : "global";
      return `v.${space}[${JSON.stringify(sym)}]`;
    }

    const mr = sym.match(/^(-+|\++)$/);
    if (mr) return `f.resolveRelative(${JSON.stringify(mr[1])})`;
  };

  const exAtom = () => {
    const peek = tl.expectNext();

    switch (peek) {
      case "(":
        tl.getNext();
        const res = exTop();
        tl.checkNext(")");
        return ["(", res, ")"].flat();

      case "-":
        // Maybe it's relative symbol?
        tl.getNext();
        try {
          return [peek, exRequireAtom()].flat();
        } catch (e) {
          return [exSymbol(peek)];
        }

      // Pass through
      case "!":
      case "~":
      case "...":
        return [tl.getNext(), "(", exRequireAtom(), ")"].flat();

      case "+":
        tl.getNext();
        return exRequireAtom();

      case "<":
        tl.getNext();
        return [`(`, exRequireTop(), `) & 0xff`].flat();

      case ">":
        tl.getNext();
        return [`((`, exRequireTop(), `) >> 8) &`, `0xff`].flat();
    }

    if ("'\"`".includes(peek)) {
      let node = [];
      let str = [];

      const flush = () => {
        if (str.length) {
          if (node.length) node.push("+");
          node.push(JSON.stringify(str.join("")));
        }
        str = [];
      };

      tl.getToken();

      while (true) {
        if (!tl.toks.length) throw new Error(`Missing ${peek}`);
        const next = tl.getToken();
        if (next === peek) break;

        // Handle nested
        if (peek === "`" && next === "${") {
          flush();
          node.push("+", "(", exRequireTop(), ")");
          const closer = tl.getToken();
          if (closer !== "}") throw new Error(`Missing "}", got "${closer}"`);
          continue;
        }

        if (/^\\/.test(next)) str.push(JSON.parse(`"${next}"`));
        else str.push(next);
      }
      flush();
      return node.flat();
    }

    const sym = exSymbol(peek);
    if (sym) {
      tl.getNext();
      return [sym].flat();
    }

    const num = exNumber(peek);
    if (!Number.isNaN(num)) {
      tl.getNext();
      return [num];
    }
  };

  const exRequireAtom = exRequire(exAtom);

  const exFunc = () => {
    const lhs = exAtom();
    if (!lhs) return;

    if (tl.toks.length) {
      const peek = tl.expectNext();
      if (peek === "(") {
        const args = [];
        while (true) {
          tl.getNext();
          const next = tl.expectNext();
          if (next === ")") break;
          args.push(exRequireTop());
          const sep = tl.expectNext();
          if (sep === ",") continue;
          if (sep === ")") break;
        }
        tl.getNext();
        return [lhs, "(", args.map(a => a.join("")).join(", "), ")"];
      }
    }

    return lhs;
  };

  const mkOpMap = (...ops) =>
    Object.assign(
      {},
      ...ops.map(ops =>
        Array.isArray(ops)
          ? Object.fromEntries(ops.flat().map(op => [op, op]))
          : ops
      )
    );

  const exPass = (exUp, ...ops) => {
    const opMap = mkOpMap(...ops);
    const exRequireUp = exRequire(exUp);
    let complex = false;

    return () => {
      const expr = exUp();
      if (!expr) return;
      while (tl.toks.length) {
        const peek = tl.expectNext();
        const op = opMap[peek];
        if (!op) break;
        tl.getNext();
        expr.push(op, exRequireUp());
        complex = true;
      }

      return (complex ? ["(", ...expr, ")"] : expr).flat();
    };
  };

  const exMult = exPass(exFunc, ["*", "/", "%"]);
  const exAdd = exPass(exMult, ["+", "-"]);
  const exBitwise = exPass(exAdd, ["|", "&", "^"]);
  const exRel = exPass(
    exBitwise,
    { "<>": "!==" },
    ["<", ">", "<=", ">="],
    ["==", "===", "!=", "!=="]
  );
  const exLogical = exPass(exRel, ["||", "&&"]);

  const exTernIf = () => {
    const lhs = exLogical();
    if (!lhs) return;
    if (tl.toks.length) {
      const peek = tl.expectNext();
      if (peek === "?") {
        tl.getNext();
        const truePart = exRequireTop();
        if (tl.getNext() !== ":") throw new Error(`Missing ":"`);
        const falsePart = exRequireTop();
        return [lhs, "?", "(", truePart, ")", ":", "(", falsePart, ")"].flat();
      }
    }
    return lhs;
  };

  const exTop = exTernIf;
  const exRequireTop = exRequire(exTop);

  const res = exRequireTop();
  if (tl.toks.length) throw new Error(`Syntax error: ${tl.toks.join("")}`);
  return res;
}

class MOS6502Assembler {
  constructor(syntax) {
    this.makeEngine(syntax);
  }

  makeEngine(syntax) {
    const ops = syntax
      .map(op => op && op.split(/\s+/))
      .map((op, opcode) => op && [...op, opcode])
      .filter(Boolean);

    const dict = {};
    for (const [mnem, addr, opcode] of ops) put(dict, opcode, mnem, addr);

    // console.log(dict);
  }
}

class MOS6502Build {
  constructor(assembler) {
    this.assembler = assembler;
    this.symtab = {};
  }
}

module.exports = { MOS6502Assembler, MOS6502Build, compileExpression };
