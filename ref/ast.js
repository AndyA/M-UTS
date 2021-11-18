module.exports = {
  tag: "source.file",
  file: "mule3.a",
  children: [
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 1,
      children: [
        { tag: "sym.global", value: "showChars" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "op.arg",
              value: ["#"],
              children: [{ tag: "string", value: "!" }]
            }
          ]
        },
        { tag: "comment", value: "; print ! to ~" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 3,
      children: [
        { tag: "sym.relative", value: "-" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "op.arg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 4,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "op.arg",
              value: ["abs"],
              children: [{ tag: "number", value: 65518 }]
            }
          ]
        },
        { tag: "comment", value: "; OSWRCH" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 5,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "op.arg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 6,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "op.arg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 7,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "op.arg",
              value: ["rel"],
              children: [{ tag: "sym.relative", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 9,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "op.arg", value: ["impl"] }]
        },
        { tag: "comment", value: "; all done" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 11,
      children: [
        { tag: "sym.relative", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "op.arg",
              value: ["abs"],
              children: [{ tag: "number", value: 65518 }]
            }
          ]
        },
        { tag: "comment", value: "; OSWRCH" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 12,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "op.arg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 13,
      children: [
        { tag: "sym.global", value: "prStr" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "op.arg",
              value: ["(zpg),Y"],
              children: [{ tag: "number", value: 112 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 14,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "op.arg",
              value: ["rel"],
              children: [{ tag: "sym.relative", value: "-" }]
            }
          ]
        }
      ]
    }
  ]
};
