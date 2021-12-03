const { SyntaxError } = require("./error");
const parseBase = b => n => parseInt(n, b);

const numberFormats = [
  [/^(?:%|0b)([0-1]+)$/, parseBase(2)],
  [/^(?:[$&]|0x)([0-9a-f]+)$/i, parseBase(16)],
  [/^0o?([0-7]+)$/i, parseBase(8)]
];

function parseNumber(num) {
  for (const [re, cvt] of numberFormats) {
    const m = num.match(re);
    if (m) return { tag: "number", value: cvt(m[1]) };
  }

  const value = Number(num);
  if (!Number.isNaN(value)) return { tag: "number", value };
}

function parseSymbol(sym) {
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
}

function exprSymbol(tl, syn) {
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
    const children = [syn.parser.expect(tl)];
    tl.checkNext(")");
    return { tag: "sym", children };
  }
}

function exprMacroSymbol(tl, syn) {
  if (!tl.hasMore()) return;
  const peek = tl.expectNext();
  if (peek === "~") {
    tl.getToken();
    return { tag: "ref", children: [syn.expect(exprSymbol(tl, syn), tl)] };
  }
  return exprSymbol(tl, syn);
}

function exprRoot(tl, syn) {
  if (!tl.hasMore()) return;

  const peek = tl.expectNext();

  switch (peek) {
    case "(": {
      tl.getNext();
      const res = syn.parser.expect(tl);
      tl.checkNext(")");
      return res;
    }

    case "+":
    case "-": {
      // Maybe it's relative symbol?
      tl.getToken();
      const res = exprRoot(tl, syn);
      if (res) return peek === "+" ? res : { tag: "neg", children: [res] };
      return parseSymbol(peek);
    }
    // Pass through
    case "!":
    case "~":
    case "...":
      tl.getToken();
      return { tag: peek, children: [syn.atomParser.expect(tl)] };

    case "[": {
      tl.getToken();
      return { tag: "list", children: exprList(tl, syn, "]") };
    }
  }

  const tkString = value => ({ tag: "string", value });

  if ("'\"".includes(peek)) {
    let str = [];

    tl.getToken();

    while (true) {
      if (!tl.hasMoreNoSkip()) throw new SyntaxError(`Missing ${peek}`);
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
      if (!tl.hasMoreNoSkip()) throw new SyntaxError(`Missing ${peek}`);
      const next = tl.getToken();
      if (next === "`") break;

      // Handle nested
      if (peek === "`" && next === "${") {
        flush();
        nodes.push(syn.parser.expect(tl));
        const closer = tl.getNext();
        if (closer !== "}")
          throw new SyntaxError(`Missing "}", got "${closer}"`);
        continue;
      }

      if (/^\\/.test(next)) str.push(JSON.parse(`"${next}"`));
      else str.push(next);
    }

    flush();

    return nodes.reduce((a, b) => ({ tag: "add", children: [a, b] }));
  }

  {
    const next = exprSymbol(tl, syn);
    if (next) return next;
  }

  const num = parseNumber(peek);
  if (num !== undefined) {
    tl.getToken();
    return num;
  }
}

function exprSubscript(tl, syn) {
  let lhs = exprRoot(tl, syn);
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
      lhs = { tag: "index", children: [lhs, syn.parser.expect(tl)] };
      tl.checkNext("]");
      continue;
    }

    if (peek === ".") {
      tl.getToken();

      lhs = {
        tag: "member",
        children: [lhs, syn.expect(exprSymbol(tl, syn), tl)]
      };
      continue;
    }

    break;
  }
  return lhs;
}

function exprList(tl, syn, term) {
  const children = [];
  while (true) {
    const next = tl.expectNext();
    if (next === term) break;
    children.push(syn.parser.expect(tl));
    const sep = tl.expectNext();
    if (sep === term) break;
    if (sep !== ",")
      throw new SyntaxError(`Missing "${term}" or ",", got "${sep}"`);
    tl.getToken();
  }
  tl.getToken();
  return children;
}

function exprFunc(tl, syn) {
  let lhs = exprSubscript(tl, syn);
  if (!lhs) return;

  while (tl.hasMore()) {
    const peek = tl.expectNext();
    if (peek !== "(") break;
    tl.getToken();
    lhs = { tag: "fn", value: lhs, children: exprList(tl, syn, ")") };
  }

  return lhs;
}

module.exports = { atomParser: exprFunc, exprSymbol, exprMacroSymbol };
