require("../use");

const _ = require("lodash");
const { tokenList } = require("lib/6502/assembler/tokens");
const spec = require("ref/expr");

function nameIndex(ops) {
  const idx = {};
  for (const op of ops) {
    for (const name of op.name) {
      if (idx[name]) throw new Error(`Duplicate ops for ${name}`);
      idx[name] = op;
    }
  }
  return idx;
}

function makeParser(spec, atomParser) {
  const evalCache = { 0: atomParser };
  const levels = _.groupBy(spec, "pri");

  const makers = {
    unary: (evalUp, ops) => {
      const ni = nameIndex(ops);

      const evalNext = tl => {
        if (!tl.hasMore()) return;
        const peek = tl.expectNext();
        // console.log(`unary ${Object.keys(ni).join(", ")} versus ${peek}`);
        const op = ni[peek];
        if (!op) return evalUp(tl);
        tl.getNext();
        const rhs = evalNext(tl);
        if (!rhs) throw new Error(`Missing value after ${peek}`);

        return { tag: op.op, children: [rhs] };
      };

      return evalNext;
    },

    binary: (evalUp, ops) => {
      const ni = nameIndex(ops);
      return tl => {
        let lhs = evalUp(tl);
        if (!lhs) return;
        console.log(lhs);
        while (tl.hasMore()) {
          const peek = tl.expectNext();
          // console.log(`binary ${Object.keys(ni).join(", ")} versus ${peek}`);
          const op = ni[peek];
          if (!op) break;
          tl.getNext();
          const rhs = evalUp(tl);
          if (!rhs) throw new Error(`Missing value after ${peek}`);
          lhs = { tag: op.op, children: [lhs, rhs] };
        }
        return lhs;
      };
    }
  };

  function makeLevel(level) {
    console.log(`Making l${level} parser`);
    const info = levels[level];
    if (!info) throw new Error(`No ops defined at level ${level}`);
    // Group the info by tag
    const opGroup = Object.entries(_.groupBy(info, "tag"));
    if (opGroup.length > 1)
      throw new Error(
        `Mixed tags at level ${level}: ${opGroup.map(o => o[0]).join(", ")}`
      );
    const [tag, ops] = opGroup[0];
    const maker = makers[tag];
    if (!maker) throw new Error(`No maker for ${tag}`);
    const evalUp = evalForLevel(level - 1);
    return maker(evalUp, ops);
  }

  const evalForLevel = level =>
    (evalCache[level] = evalCache[level] || makeLevel(Number(level)));

  return evalForLevel;
}

const atomParser = tl => tl.hasMore() && { tag: "sym", value: tl.getNext() };

const parser = makeParser(spec, atomParser)(13);
const tl = tokenList(["a", "XOR", "c", "|", "2"]);
const ast = parser(tl);
console.log(JSON.stringify(ast, null, 2));
