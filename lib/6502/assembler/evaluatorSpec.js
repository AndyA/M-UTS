// Each element in the top level array represents a precedence level
// in the parser. The first (lor) has the lowest precedence
module.exports = [
  {
    tag: "ternary",
    ops: [{ op: "if", name: ["?"], sep: ":", gen: "%0 ? %1 : %2", desc: "If" }]
  },
  {
    tag: "binary",
    ops: [{ op: "lor", name: ["||"], gen: "%0 || %1", desc: "Logical OR" }]
  },
  {
    tag: "binary",
    ops: [{ op: "land", name: ["&&"], gen: "%0 && %1", desc: "Logical AND" }]
  },
  {
    tag: "binary",
    ops: [{ op: "or", name: ["OR", "|"], gen: "%0 | %1", desc: "Bit-wise OR" }]
  },
  {
    tag: "binary",
    ops: [
      {
        op: "xor",
        name: ["XOR", "EOR"],
        gen: "%0 ^ %1",
        desc: "Bit-wise exclusive OR"
      }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "and", name: ["&", "AND"], gen: "%0 & %1", desc: "Bit-wise AND" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "eq", name: ["=", "=="], gen: "%0 == %1", desc: "Equal" },
      { op: "xeq", name: ["==="], gen: "%0 === %1", desc: "Identical" }
    ]
  },
  {
    tag: "binary",
    ops: [
      {
        op: "ne",
        name: ["!=", "<>", "><"],
        gen: "%0 != %1",
        desc: "Not equal"
      },
      { op: "xne", name: ["!=="], gen: "%0 !== %1", desc: "Not identical" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "le", name: ["<="], gen: "%0 <= %1", desc: "Lower or equal" },
      { op: "lt", name: ["<"], gen: "%0 < %1", desc: "Lower than" },
      { op: "ge", name: [">="], gen: "%0 >= %1", desc: "Higher or equal" },
      { op: "gt", name: [">"], gen: "%0 > %1", desc: "Higher than" }
    ]
  },
  {
    tag: "unary",
    ops: [
      { op: "lo", name: ["<"], gen: "rt.lo(%0)", desc: "Lowbyte of" },
      { op: "hi", name: [">"], gen: "rt.hi(%0)", desc: "Highbyte of" },
      { op: "bank", name: ["^"], gen: "rt.bank(%0)", desc: "Bankbyte of" }
    ]
  },
  {
    tag: "binary",
    ops: [
      {
        op: "lsl",
        name: ["<<", "<<<", "ASL", "LSL"],
        gen: "%0 << %1",
        desc: "Shift left"
      },
      {
        op: "asr",
        name: [">>", "ASR"],
        gen: "%0 >> %1",
        desc: "Arithmetic shift right"
      },
      {
        op: "lsr",
        name: [">>>", "LSR"],
        gen: "%0 >>> %1",
        desc: "Logical shift right"
      }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "add", name: ["+"], gen: "%0 + %1", desc: "Add" },
      { op: "sub", name: ["-"], gen: "%0 + %1", desc: "Subtract" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "mul", name: ["*"], gen: "%0 * %1", desc: "Multiply" },
      { op: "div", name: ["/"], gen: "%0 / %1", desc: "Divide" },
      {
        op: "idiv",
        name: ["DIV"],
        gen: "Math.floor(%0 / %1)",
        desc: "Integer-Divide"
      },
      {
        op: "imod",
        name: ["%", "MOD"],
        gen: "Math.floor(%0 % %1)",
        desc: "Remainder of DIV"
      }
    ]
  },

  // TODO these are handled at the atom level for the special case that
  // + and - are used as relative symbols. This breaks the precedence of
  // exponentiation (^) - so that should be handled explicitly in the
  // atom parser too.
  //
  // {
  //   tag: "unary",
  //   ops: [
  //     { op: "neg", name: ["-"], gen:"- %0", desc: "Negate" },
  //     { op: "nop", name: ["+"], gen:"%0", desc: "NOP" }
  //   ]
  // },

  {
    tag: "binary",
    ops: [
      {
        op: "pow",
        name: ["^"],
        gen: "Math.pow(%0, %1)",
        desc: "To the power of"
      }
    ]
  },
  {
    tag: "unary",
    ops: [{ op: "not", name: ["!", "NOT"], gen: "~%0", desc: "Complement of" }]
  }
];
