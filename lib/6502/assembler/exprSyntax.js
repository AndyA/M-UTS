const _ = require("lodash");
const { lazyAttr } = require("../../tools/lazy-attr");
const { SyntaxError } = require("./error");

function nameIndex(ops) {
  const idx = {};
  const lc = n => n.toLowerCase();
  for (const op of ops) {
    for (const name of op.name.map(lc)) {
      if (idx[name]) throw new Error(`Duplicate ops for ${name}`);
      idx[name] = op;
    }
  }
  return tok => idx[lc(tok)];
}

const expectValue = (val, tl) => {
  if (!val) {
    if (tl.hasMore()) throw new SyntaxError(`Syntax error: ${tl.toks[0]}`);
    throw new SyntaxError(`Unexpected end of input`);
  }
  return val;
};

const makeExpect = parse => tl => expectValue(parse(tl), tl);

const makePair = parse => ({ parse, expect: makeExpect(parse) });

const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const ExpressionSyntax = lazyAttr(
  class {
    constructor(spec, atomParser) {
      this.spec = spec.slice(0).reverse();
      this.rawAtomParser = atomParser;
    }

    expect(val, tl) {
      return expectValue(val, tl);
    }
  },
  {
    flatOps: function () {
      return this.spec.map(l => l.ops).flat();
    },

    opIndex: function () {
      return _(this.flatOps).keyBy("op").value();
    },

    // All of the tokens sorted by descending length
    tokens: function () {
      return _(this.flatOps)
        .map(o => o.name.concat(o.sep || []))
        .flatten()
        .uniq()
        .sort((a, b) => cmp(b.length, a.length) || cmp(a, b))
        .value();
    },

    // A list of all ops; useful for checking they're all
    // implemented and covered.
    ops: function () {
      return this.flatOps.map(o => o.op).sort();
    },

    levels: function () {
      const makers = {
        unary: (up, ops) => {
          const ni = nameIndex(ops);
          return tl => {
            if (!tl.hasMore()) return;
            const op = ni(tl.expectNext());
            if (!op) return levels[up].parse(tl);
            tl.getNext();
            // Recursive call to this level
            const rhs = levels[up + 1].expect(tl);
            return { tag: op.op, children: [rhs] };
          };
        },

        binary: (up, ops) => {
          const ni = nameIndex(ops);
          return tl => {
            let lhs = levels[up].parse(tl);
            if (!lhs) return;
            while (tl.hasMore()) {
              const op = ni(tl.expectNext());
              if (!op) break;
              tl.getNext();
              const rhs = levels[up].expect(tl);
              lhs = { tag: op.op, children: [lhs, rhs] };
            }
            return lhs;
          };
        },

        ternary: (up, ops) => {
          const ni = nameIndex(ops);
          return tl => {
            let lhs = levels[up].parse(tl);
            if (!lhs) return;
            while (tl.hasMore()) {
              const op = ni(tl.expectNext());
              if (!op) break;
              tl.getNext();
              const truePart = levels[up].expect(tl);
              tl.checkNext(op.sep);
              const falsePart = levels[up].expect(tl);
              lhs = { tag: op.op, children: [lhs, truePart, falsePart] };
            }
            return lhs;
          };
        }
      };

      const makeLevel = ({ tag, ops }, pri) => makers[tag](pri, ops);
      const atom = tl => this.rawAtomParser(tl, this);

      const levels = [atom, ...this.spec.map(makeLevel)].map(makePair);

      return levels;
    },

    parser: function () {
      return _.last(this.levels);
    },

    atomParser: function () {
      return _.first(this.levels);
    }
  }
);

module.exports = { ExpressionSyntax };
