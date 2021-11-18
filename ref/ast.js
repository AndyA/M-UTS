// AST for this code:
//
// !addr oswrch   = $ffee
// *              = $8000
// showChars      LDX #'!'   ; print ! to ~
//
// -              TXA
//                JSR oswrch ; OSWRCH
//                INX
//                CPX #'~' + 1
//                BCC -
//
//                RTS        ; all done
//
// -              JSR oswrch ; OSWRCH
//                INY
// prStr          LDA ($70), y
//                BNE -
//                RTS
//
// :msg           +msg "Hello, World", 10, 0
//                !byte 1, 2, 3, 4
// :govec         JMP ($020e)

module.exports = {
  tag: "source.file",
  file: "mule3.a",
  children: [
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 1,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              chilren: [
                { tag: "sym", scope: "global", value: "oswrch" },
                { tag: "number", value: 65518 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 2,
      children: [
        {
          tag: "assign",
          chilren: [
            { tag: "sym", scope: "pc" },
            { tag: "number", value: 32768 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 3,
      children: [
        { tag: "sym", scope: "global", value: "showChars" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "op.arg",
              value: ["#"],
              children: [{ tag: "chars", value: "!" }]
            }
          ]
        },
        { tag: "comment", value: " print ! to ~" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 5,
      children: [
        { tag: "sym", scope: "relative", value: "-" },
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
      ln: 6,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "op.arg",
              value: ["abs"],
              children: [{ tag: "sym", scope: "global", value: "oswrch" }]
            }
          ]
        },
        { tag: "comment", value: " OSWRCH" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 7,
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
      ln: 8,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "op.arg",
              value: ["#"],
              children: [
                {
                  tag: "+",
                  children: [
                    { tag: "chars", value: "~" },
                    { tag: "number", value: 1 }
                  ]
                }
              ]
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
          value: "BCC",
          children: [
            {
              tag: "op.arg",
              value: ["rel"],
              children: [{ tag: "sym", scope: "relative", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 11,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "op.arg", value: ["impl"] }]
        },
        { tag: "comment", value: " all done" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 13,
      children: [
        { tag: "sym", scope: "relative", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "op.arg",
              value: ["abs"],
              children: [{ tag: "sym", scope: "global", value: "oswrch" }]
            }
          ]
        },
        { tag: "comment", value: " OSWRCH" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 14,
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
      ln: 15,
      children: [
        { tag: "sym", scope: "global", value: "prStr" },
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
      ln: 16,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "op.arg",
              value: ["rel"],
              children: [{ tag: "sym", scope: "relative", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 17,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "op.arg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 19,
      children: [
        { tag: "sym", scope: "global", value: "msg" },
        {
          tag: "macro.call",
          value: "MSG",
          children: [
            { tag: "string", value: "Hello, World" },
            { tag: "number", value: 10 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 20,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 3 },
            { tag: "number", value: 4 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 21,
      children: [
        { tag: "sym", scope: "global", value: "govec" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "op.arg",
              value: ["(ind)"],
              children: [{ tag: "number", value: 526 }]
            }
          ]
        }
      ]
    }
  ]
};
