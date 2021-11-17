const js = JSON.stringify;

function exprTranslator(tl) {
  const parseBase = b => n => parseInt(n, b);

  const numberFormats = [
    [/^(?:%|0b)([0-1]+)$/, parseBase(2)],
    [/^(?:[$&]|0x)([0-9a-f]+)$/i, parseBase(16)],
    [/^0o?([0-7]+)$/i, parseBase(8)]
  ];

  const requireMaker = ex => () => {
    const res = ex();
    if (!res) {
      if (tl.toks.length) throw new Error(`Syntax error: ${tl.toks[0]}`);
      throw new Error(`Unexpected end of input`);
    }
    return res;
  };

  const parseNumber = num => {
    for (const [re, cvt] of numberFormats) {
      const m = num.match(re);
      if (m) return cvt(m[1]);
    }

    return Number(num);
  };

  // Wrap symbols in calls to f.getSym()
  const parseSymbol = sym => {
    // Pass through dotted identifiers (e.g. Math.max
    if (/^[a-z_]\w*(?:\.[a-z_]\w*)+$/i.test(sym)) return sym;

    const ms = sym.match(/^([.:]?)([a-z_]\w*)$/i);
    if (ms) {
      const [, ns, sym] = ms;
      const space = ns === "." ? "l" : "g";
      return `rt.getSym(${js(sym)}, ${js(space)})`;
    }

    const mr = sym.match(/^(-+|\++)$/);
    if (mr) return `rt.getSym(${js(mr[1])}, "r")`;
  };

  const exprAtom = () => {
    const peek = tl.expectNext();

    switch (peek) {
      case "(":
        tl.getNext();
        const res = expr();
        tl.checkNext(")");
        return ["(", res, ")"].flat();

      case "-":
        // Maybe it's relative symbol?
        tl.getNext();
        try {
          return [peek, exprRequireAtom()].flat();
        } catch (e) {
          return [parseSymbol(peek)];
        }

      // Pass through
      case "!":
      case "~":
      case "...":
        return [tl.getNext(), "(", exprRequireAtom(), ")"].flat();

      case "+":
        tl.getNext();
        return exprRequireAtom();

      case "<":
        tl.getNext();
        return [`(`, exprRequire(), `) & 0xff`].flat();

      case ">":
        tl.getNext();
        return [`((`, exprRequire(), `) >> 8) &`, `0xff`].flat();
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
          node.push("+", "(", exprRequire(), ")");
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

    const sym = parseSymbol(peek);
    if (sym) {
      tl.getNext();
      return [sym].flat();
    }

    const num = parseNumber(peek);
    if (!Number.isNaN(num)) {
      tl.getNext();
      return [num];
    }
  };

  const exprRequireAtom = requireMaker(exprAtom);

  const exprFunc = () => {
    const lhs = exprAtom();
    if (!lhs) return;

    if (tl.toks.length) {
      const peek = tl.expectNext();
      if (peek === "(") {
        const args = [];
        while (true) {
          tl.getNext();
          const next = tl.expectNext();
          if (next === ")") break;
          args.push(exprRequire());
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

  const makePassthrough = (exprUp, ...ops) => {
    const opMap = mkOpMap(...ops);
    const exprRequireUp = requireMaker(exprUp);
    let complex = false;

    return () => {
      const res = exprUp();
      if (!res) return;
      while (tl.toks.length) {
        const peek = tl.expectNext();
        const op = opMap[peek];
        if (!op) break;
        tl.getNext();
        res.push(op, exprRequireUp());
        complex = true;
      }

      return (complex ? ["(", ...res, ")"] : res).flat();
    };
  };

  const exprMult = makePassthrough(exprFunc, ["*", "/", "%"]);
  const exprAdd = makePassthrough(exprMult, ["+", "-"]);
  const exprBitwise = makePassthrough(exprAdd, ["|", "&", "^"]);
  const exprRel = makePassthrough(
    exprBitwise,
    { "<>": "!==" },
    ["<", ">", "<=", ">="],
    ["==", "===", "!=", "!=="]
  );
  const exprLogical = makePassthrough(exprRel, ["||", "&&"]);

  const exprTernIf = () => {
    const lhs = exprLogical();
    if (!lhs) return;
    if (tl.toks.length) {
      const peek = tl.expectNext();
      if (peek === "?") {
        tl.getNext();
        const truePart = exprRequire();
        if (tl.getNext() !== ":") throw new Error(`Missing ":"`);
        const falsePart = exprRequire();
        return [lhs, "?", "(", truePart, ")", ":", "(", falsePart, ")"].flat();
      }
    }
    return lhs;
  };

  const expr = exprTernIf;
  const exprRequire = requireMaker(expr);

  return { expr, exprRequire };
}

const exprOptional = tl => exprTranslator(tl).expr();
const exprRequired = tl => exprTranslator(tl).exprRequire();

module.exports = { exprTranslator, exprOptional, exprRequired };
