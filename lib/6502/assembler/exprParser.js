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
  if (sym === "*" || sym.toLowerCase() === "org")
    return { tag: "sym", value: "*" };

  const ms = sym.match(/^([.:]?)([a-z_]\w*)$/i);
  if (ms) {
    const [, ns, sym] = ms;
    const value = (ns === "." ? ns : "") + sym;
    return { tag: "sym", value };
  }

  const mr = sym.match(/^(-+|\++)$/);
  if (mr) return { tag: "sym", value: mr[1] };
};

const makeRequired = (tl, ex) => () => {
  const res = ex();
  if (!res) {
    if (tl.hasMore()) throw new Error(`Syntax error: ${tl.toks[0]}`);
    throw new Error(`Unexpected end of input`);
  }
  return res;
};

function exprTranslator(tl) {
  const exprSymbol = () => {
    if (!tl.hasMore()) return;
    const peek = tl.expectNext();
    const sym = parseSymbol(peek);
    if (sym) {
      tl.getToken();
      return sym;
    }

    // Indirect symbol
    if (peek === "?(") {
      tl.getToken();
      const children = [exprRequired()];
      tl.checkNext(")");
      return { tag: "sym", children };
    }
  };

  const exprRequiredSymbol = makeRequired(tl, exprSymbol);

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
        tl.getToken();
        const res = exprAtom();
        if (res) return { tag: "negate", children: [res] };
        return parseSymbol(peek);
      }
      // Pass through
      case "!":
      case "~":
      case "...":
        tl.getToken();
        return { tag: peek, children: [exprRequiredAtom()] };

      case "+":
        tl.getToken();
        return exprRequiredAtom();

      case "<":
      case ">": {
        tl.getToken();
        const tag = peek === "<" ? "op.loByte" : "op.hiByte";
        return { tag, children: [exprRequired()] };
      }

      case "[": {
        tl.getToken();
        return { tag: "list", children: exprList("]") };
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

    {
      const next = exprSymbol();
      if (next) return next;
    }

    const num = parseNumber(peek);
    if (num !== undefined) {
      tl.getToken();
      return num;
    }
  };

  const exprRequiredAtom = makeRequired(tl, exprAtom);

  const exprSubscript = () => {
    let lhs = exprAtom();
    if (!lhs) return;

    while (tl.hasMore()) {
      const peek = tl.expectNext();

      {
        // Special case required because .foo is a valid symbol token
        const m = peek.match(/^\.([a-z_]\w*)/);
        if (m) {
          tl.getToken();
          tl.putBack(".", m[1]);
          continue;
        }
      }

      // array index?
      if (peek === "[") {
        tl.getToken();
        lhs = { tag: "index", children: [lhs, exprRequired()] };
        tl.checkNext("]");
        continue;
      }

      if (peek === ".") {
        tl.getToken();
        lhs = { tag: "member", children: [lhs, exprRequiredSymbol()] };
        continue;
      }

      break;
    }
    return lhs;
  };

  const exprList = term => {
    const children = [];
    while (true) {
      const next = tl.expectNext();
      if (next === term) break;
      children.push(exprRequired());
      const sep = tl.expectNext();
      if (sep === term) break;
      if (sep !== ",")
        throw new Error(`Missing "${term}" or ",", got "${sep}"`);
      tl.getToken();
    }
    tl.getToken();
    return children;
  };

  const exprFunc = () => {
    let lhs = exprSubscript();
    if (!lhs) return;

    while (tl.hasMore()) {
      const peek = tl.expectNext();
      if (peek !== "(") break;
      tl.getToken();
      lhs = { tag: "fn", value: lhs, children: exprList(")") };
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
    const exprRequiredUp = makeRequired(tl, exprUp);

    return () => {
      let lhs = exprUp();
      if (!lhs) return;
      while (tl.toks.length) {
        const peek = tl.expectNext();
        const op = opMap[peek];
        if (!op) break;
        tl.getToken();
        lhs = { tag: op, children: [lhs, exprRequiredUp()] };
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
        tl.getToken();
        const truePart = exprRequired();
        if (tl.getToken() !== ":") throw new Error(`Missing ":"`);
        const falsePart = exprRequired();
        return { tag: "?", children: [lhs, truePart, falsePart] };
      }
    }
    return lhs;
  };

  const expr = exprTernIf;
  const exprRequired = makeRequired(tl, expr);

  return { expr, exprRequired, exprSymbol };
}

const exprOptional = tl => exprTranslator(tl).expr();
const exprRequired = tl => exprTranslator(tl).exprRequired();
const exprSymbolOptional = tl => exprTranslator(tl).exprSymbol();

module.exports = {
  exprTranslator,
  exprOptional,
  exprRequired,
  exprSymbolOptional,
  makeRequired
};
