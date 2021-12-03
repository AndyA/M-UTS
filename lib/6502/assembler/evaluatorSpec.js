// Each element in the top level array represents a precedence level
// in the parser. The first (lor) has the lowest precedence
module.exports = [
  { tag: "ternary", ops: [{ op: "if", name: ["?"], sep: ":", desc: "If" }] },
  { tag: "binary", ops: [{ op: "lor", name: ["||"], desc: "Logical OR" }] },
  { tag: "binary", ops: [{ op: "land", name: ["&&"], desc: "Logical AND" }] },
  {
    tag: "binary",
    ops: [{ op: "or", name: ["OR", "|"], desc: "Bit-wise OR" }]
  },
  {
    tag: "binary",
    ops: [{ op: "xor", name: ["XOR", "EOR"], desc: "Bit-wise exclusive OR" }]
  },
  {
    tag: "binary",
    ops: [{ op: "and", name: ["&", "AND"], desc: "Bit-wise AND" }]
  },
  {
    tag: "binary",
    ops: [
      { op: "eq", name: ["=", "=="], desc: "Equal" },
      { op: "xeq", name: ["==="], desc: "Identical" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "ne", name: ["!=", "<>", "><"], desc: "Not equal" },
      { op: "xne", name: ["!=="], desc: "Not identical" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "le", name: ["<="], desc: "Lower or equal" },
      { op: "lt", name: ["<"], desc: "Lower than" },
      { op: "ge", name: [">="], desc: "Higher or equal" },
      { op: "gt", name: [">"], desc: "Higher than" }
    ]
  },
  {
    tag: "unary",
    ops: [
      { op: "lo", name: ["<"], desc: "Lowbyte of" },
      { op: "hi", name: [">"], desc: "Highbyte of" },
      { op: "bank", name: ["^"], desc: "Bankbyte of" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "lsl", name: ["<<", "<<<", "ASL", "LSL"], desc: "Shift left" },
      { op: "asr", name: [">>", "ASR"], desc: "Arithmetic shift right" },
      { op: "lsr", name: [">>>", "LSR"], desc: "Logical shift right" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "add", name: ["+"], desc: "Add" },
      { op: "sub", name: ["-"], desc: "Subtract" }
    ]
  },
  {
    tag: "binary",
    ops: [
      { op: "mul", name: ["*"], desc: "Multiply" },
      { op: "div", name: ["/"], desc: "Divide" },
      { op: "idiv", name: ["DIV"], desc: "Integer-Divide" },
      { op: "imod", name: ["%", "MOD"], desc: "Remainder of DIV" }
    ]
  },
  {
    tag: "unary",
    ops: [
      { op: "neg", name: ["-"], desc: "Negate" },
      { op: "nop", name: ["+"], desc: "NOP" }
    ]
  },
  { tag: "binary", ops: [{ op: "pow", name: ["^"], desc: "To the power of" }] },
  {
    tag: "unary",
    ops: [{ op: "not", name: ["!", "NOT"], desc: "Complement of" }]
  }
];
