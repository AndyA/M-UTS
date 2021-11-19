// AST for this code:
//
//                !macro print .str { ; print a string
//                }
//
// !addr oswrch   = $ffee
// *              = $8000
// !addr HWM      = Math.min(* + $2000, $c000)
// msg_len        = ("Hello").length
// symName        = "aSymbol"
// ?(symName)     = ?(symName) + 1
//
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
          tag: "macroStart",
          value: "print",
          children: [{ tag: "sym", value: ".str" }]
        },
        { tag: "comment", value: " print a string" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 2,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 4,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              chilren: [
                { tag: "sym", value: "oswrch" },
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
      ln: 5,
      children: [
        {
          tag: "assign",
          chilren: [
            { tag: "sym", value: "*" },
            { tag: "number", value: 32768 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 6,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              chilren: [
                { tag: "sym", value: "HWM" },
                {
                  tag: "fn",
                  value: {
                    tag: "member",
                    children: [
                      { tag: "sym", value: "Math" },
                      { tag: "sym", value: "min" }
                    ]
                  },
                  children: [
                    {
                      tag: "+",
                      children: [
                        { tag: "sym", value: "*" },
                        { tag: "number", value: 8192 }
                      ]
                    },
                    { tag: "number", value: 49152 }
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
      ln: 7,
      children: [
        {
          tag: "assign",
          chilren: [
            { tag: "sym", value: "msg_len" },
            {
              tag: "member",
              children: [
                { tag: "string", value: "Hello" },
                { tag: "sym", value: "length" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 8,
      children: [
        {
          tag: "assign",
          chilren: [
            { tag: "sym", value: "symName" },
            { tag: "string", value: "aSymbol" }
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
          tag: "assign",
          chilren: [
            { tag: "sym", children: [{ tag: "sym", value: "symName" }] },
            {
              tag: "+",
              children: [
                { tag: "sym", children: [{ tag: "sym", value: "symName" }] },
                { tag: "number", value: 1 }
              ]
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
        { tag: "sym", value: "showChars" },
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
      ln: 13,
      children: [
        { tag: "sym", value: "-" },
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
      ln: 14,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "op.arg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        },
        { tag: "comment", value: " OSWRCH" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 15,
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
      ln: 16,
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
      ln: 17,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "op.arg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 19,
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
      ln: 21,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "op.arg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        },
        { tag: "comment", value: " OSWRCH" }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 22,
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
      ln: 23,
      children: [
        { tag: "sym", value: "prStr" },
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
      ln: 24,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "op.arg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "mule3.a",
      ln: 25,
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
      ln: 27,
      children: [
        { tag: "sym", value: "msg" },
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
      ln: 28,
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
      ln: 29,
      children: [
        { tag: "sym", value: "govec" },
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
