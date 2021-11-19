const parseBase = b => n => parseInt(n, b);

const numberFormats = [
  [/^(?:%|0b)([0-1]+)$/, parseBase(2)],
  [/^(?:[$&]|0x)([0-9a-f]+)$/i, parseBase(16)],
  [/^0o?([0-7]+)$/i, parseBase(8)]
];

const parseNumber = num => {
  for (const [re, cvt] of numberFormats) {
    const m = num.match(re);
    if (m) return { tag: "number", value: cvt(m[1]) };
  }

  const value = Number(num);
  if (!Number.isNaN(value)) return { tag: "number", value };
};

// Wrap symbols in calls to f.getSym()
const parseSymbol = sym => {
  // Pass through dotted identifiers (e.g. Math.max
  if (/^[a-z_]\w*(?:\.[a-z_]\w*)+$/i.test(sym))
    return { tag: "sym", scope: "js", value: sym };

  if (sym === "*" || sym.toLowerCase() === "org")
    return { tag: "sym", scope: "internal", value: "pc" };

  const ms = sym.match(/^([.:]?)([a-z_]\w*)$/i);
  if (ms) {
    const [, ns, sym] = ms;
    const scope = ns === "." ? "local" : "global";
    return { tag: "sym", scope, value: sym };
  }

  const mr = sym.match(/^(-+|\++)$/);
  if (mr) return { tag: "sym", scope: "relative", value: mr[1] };
};

const makeRequired = (tl, ex) => () => {
  const res = ex();
  if (!res) {
    if (tl.toks.length) throw new Error(`Syntax error: ${tl.toks[0]}`);
    throw new Error(`Unexpected end of input`);
  }
  return res;
};

function exprTranslator(tl) {
  const exprAtom = () => {
    if (!tl.hasMore()) return;

    const peek = tl.expectNext();

    switch (peek) {
      case "(": {
        tl.getNext();
        const res = exprRequired();
        tl.checkNext(")");
        return res;
      }
      case "-": {
        // Maybe it's relative symbol?
        tl.getNext();
        const res = exprAtom();
        if (res) return { tag: "negate", children: [res] };
        return parseSymbol(peek);
      }
      // Pass through
      case "!":
      case "~":
      case "...":
        tl.getNext();
        return { tag: peek, children: [exprRequireAtom()] };

      case "+":
        tl.getNext();
        return exprRequireAtom();

      case "<":
      case ">": {
        tl.getNext();
        const tag = peek === "<" ? "op.loByte" : "op.hiByte";
        return { tag, chilren: [exprRequired()] };
      }
    }

    const tkString = value => ({ tag: "string", value });

    if ("'\"".includes(peek)) {
      let str = [];

      tl.getToken();

      while (true) {
        if (!tl.toks.length) throw new Error(`Missing ${peek}`);
        const next = tl.getToken();
        if (next === peek) break;
        if (/^\\/.test(next)) str.push(JSON.parse(`"${next}"`));
        else str.push(next);
      }

      const value = str.join("");
      const tag = peek === "'" ? "chars" : "string";
      return { tag, value };
    }

    if (peek === "`") {
      const nodes = [];
      const str = [];

      const flush = () =>
        str.length && nodes.push(tkString(str.splice(0).join("")));

      tl.getToken();

      while (true) {
        if (!tl.toks.length) throw new Error(`Missing ${peek}`);
        const next = tl.getToken();
        if (next === peek) break;

        // Handle nested
        if (peek === "`" && next === "${") {
          flush();
          nodes.push(exprRequired());
          const closer = tl.getToken();
          if (closer !== "}") throw new Error(`Missing "}", got "${closer}"`);
          continue;
        }

        if (/^\\/.test(next)) str.push(JSON.parse(`"${next}"`));
        else str.push(next);
      }

      flush();

      return nodes.reduce((a, b) => ({ tag: "+", children: [a, b] }));
    }

    const sym = parseSymbol(peek);
    if (sym) {
      tl.getNext();
      return sym;
    }

    const num = parseNumber(peek);
    if (num !== undefined) {
      tl.getNext();
      return num;
    }
  };

  const exprRequireAtom = makeRequired(tl, exprAtom);

  const exprFunc = () => {
    let lhs = exprAtom();
    if (!lhs) return;

    while (tl.toks.length) {
      const peek = tl.expectNext();
      if (peek !== "(") break;
      const children = [lhs];
      while (true) {
        tl.getNext();
        const next = tl.expectNext();
        if (next === ")") break;
        children.push(exprRequired());
        const sep = tl.expectNext();
        if (sep === ",") continue;
        if (sep === ")") break;
      }
      tl.getNext();
      lhs = { tag: "fn", children };
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
    const exprRequireUp = makeRequired(tl, exprUp);

    return () => {
      let lhs = exprUp();
      if (!lhs) return;
      while (tl.toks.length) {
        const peek = tl.expectNext();
        const op = opMap[peek];
        if (!op) break;
        tl.getNext();
        lhs = { tag: op, children: [lhs, exprRequireUp()] };
      }

      return lhs;
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
        const truePart = exprRequired();
        if (tl.getNext() !== ":") throw new Error(`Missing ":"`);
        const falsePart = exprRequired();
        return { tag: "?", children: [lhs, truePart, falsePart] };
      }
    }
    return lhs;
  };

  const expr = exprTernIf;
  const exprRequired = makeRequired(tl, expr);

  return { expr, exprRequired };
}

const exprOptional = tl => exprTranslator(tl).expr();
const exprRequired = tl => exprTranslator(tl).exprRequired();

module.exports = {
  exprTranslator,
  exprOptional,
  exprRequired,
  parseNumber,
  parseSymbol,
  makeRequired
};
