const _ = require("lodash");
const { tokenList } = require("./tokens");

// Make an address mode parser from a (currently 6502)
// addressing mode identifier

const getTokens = mode =>
  mode
    .replace(/^#$/, "#imm")
    .replace(/^impl$/, "")
    .split(/([(),XYA#])/)
    .map((s, i) => (i & 1 ? s : s.length ? "expr" : ""))
    .filter(s => s.length);

function addMode(node, value, ...toks) {
  if (toks.length) {
    const [next, ...tail] = toks;
    const slot = (node.next ||= {});
    addMode((slot[next] = slot[next] ||= {}), value, ...tail);
  } else {
    (node.term = node.term || []).push(value);
  }
}

function addParser(node, exprEval) {
  node.parser = (tl, rec = {}) => {
    if (tl.hasMore() && node.next) {
      const peek = tl.expectNext();
      const { expr, ...tokens } = node.next;
      for (const [tok, nextNode] of Object.entries(tokens)) {
        if (peek === tok && nextNode.parser(tl, rec)) return rec;
      }

      if (expr) {
        const res = exprEval(tl);
        if (res && expr.parser(tl, rec)) {
          (rec.children = rec.children || []).push(res);
          return rec;
        }
      }
    }

    if (node.term) {
      rec.tag = "op.arg";
      rec.value = node.term;
      return rec;
    }
  };
}

function addParsers(node, exprEval) {
  addParser(node, exprEval);
  if (node.next)
    node.next = _.mapValues(node.next, n => addParsers(n, exprEval));
  return node;
}

function makeAdModeParser(adModes, exprEval) {
  const toks = adModes.map(getTokens);
  // console.log(toks);
  const root = {};
  for (const [adm, tok] of _.zip(adModes, toks)) addMode(root, adm, ...tok);
  addParsers(root, exprEval);

  // console.log(root);
  return root.parser;
  //
}

module.exports = { makeAdModeParser };
