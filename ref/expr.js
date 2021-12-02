module.exports = [
  // { tag: "fn", name: ["sin"], pri: 14, desc: "Trigonometric sine function" },
  // { tag: "fn", name: ["cos"], pri: 14, desc: "Trigonometric cosine function" },
  // { tag: "fn", name: ["tan"], pri: 14, desc: "Trigonometric tangent function" },
  // { tag: "fn", name: ["arcsin"], pri: 14, desc: "Inverse of sin()" },
  // { tag: "fn", name: ["arccos"], pri: 14, desc: "Inverse of cos()" },
  // { tag: "fn", name: ["arctan"], pri: 14, desc: "Inverse of tan()" },
  // { tag: "fn", name: ["addr", "address"], pri: 14, desc: "Mark as address" },
  // { tag: "fn", name: ["int"], pri: 14, desc: "Convert to integer" },
  // { tag: "fn", name: ["float"], pri: 14, desc: "Convert to float" },

  {
    tag: "unary",
    op: "not",
    name: ["!", "NOT"],
    pri: 13,
    desc: "Complement of"
  },
  { tag: "binary", op: "pow", name: ["^"], pri: 12, desc: "To the power of" },
  { tag: "unary", op: "neg", name: ["-"], pri: 11, desc: "Negate" },
  { tag: "binary", op: "mul", name: ["*"], pri: 10, desc: "Multiply" },
  { tag: "binary", op: "div", name: ["/"], pri: 10, desc: "Divide" },
  { tag: "binary", op: "idiv", name: ["DIV"], pri: 10, desc: "Integer-Divide" },
  {
    tag: "binary",
    op: "imod",
    name: ["%", "MOD"],
    pri: 10,
    desc: "Remainder of DIV"
  },
  { tag: "binary", op: "add", name: ["+"], pri: 9, desc: "Add" },
  { tag: "binary", op: "sub", name: ["-"], pri: 9, desc: "Subtract" },
  {
    tag: "binary",
    op: "lsl",
    name: ["<<", "ASL", "LSL"],
    pri: 8,
    desc: "Shift left"
  },
  {
    tag: "binary",
    op: "asr",
    name: [">>", "ASR"],
    pri: 8,
    desc: "Arithmetic shift right"
  },
  {
    tag: "binary",
    op: "lsr",
    name: [">>>", "LSR"],
    pri: 8,
    desc: "Logical shift right"
  },
  { tag: "unary", op: "lo", name: ["<"], pri: 7, desc: "Lowbyte of" },
  { tag: "unary", op: "hi", name: [">"], pri: 7, desc: "Highbyte of" },
  { tag: "unary", op: "bank", name: ["^"], pri: 7, desc: "Bankbyte of" },
  { tag: "binary", op: "le", name: ["<="], pri: 6, desc: "Lower or equal" },
  { tag: "binary", op: "lt", name: ["<"], pri: 6, desc: "Lower than" },
  { tag: "binary", op: "ge", name: [">="], pri: 6, desc: "Higher or equal" },
  { tag: "binary", op: "gt", name: [">"], pri: 6, desc: "Higher than" },
  {
    tag: "binary",
    op: "ne",
    name: ["!=", "<>", "><"],
    pri: 5,
    desc: "Not equal"
  },
  { tag: "binary", op: "eq", name: ["="], pri: 4, desc: "Equal" },
  {
    tag: "binary",
    op: "and",
    name: ["&", "AND"],
    pri: 3,
    desc: "Bit-wise AND"
  },
  {
    tag: "binary",
    op: "xor",
    name: ["XOR"],
    pri: 2,
    desc: "Bit-wise exclusive OR"
  },
  { tag: "binary", op: "or", name: ["OR", "|"], pri: 1, desc: "Bit-wise OR" }
];
