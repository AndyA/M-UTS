const syntax = require("../../../ref/6502");
const { MOS6502Assembler } = require(".");

describe("instructions", () => {
  const TST = (source, ast) => ({ source, ast });

  const TVC = (tag, value, children) => ({ tag, value, children });
  const TC = (tag, children) => ({ tag, children });
  const TV = (tag, value) => ({ tag, value });
  const T = tag => ({ tag });

  const tests = [
    // TST("!macro print .str { ; print a string", [
    //   TVC("macroStart", "print", [TV("sym", ".str")]),
    //   TV("comment", " print a string")
    // ]),

    TST("}", [T("macroEnd")]),

    TST("!addr oswrch = $ffee", [
      TVC("directive", "ADDR", [
        TC("assign", [TV("sym", "oswrch"), TV("number", 65518)])
      ])
    ]),

    TST("* = $8000", [TC("assign", [TV("sym", "*"), TV("number", 32768)])]),

    TST("!addr HWM = Math.min(* + $2000, $c000)", [
      TVC("directive", "ADDR", [
        TC("assign", [
          TV("sym", "HWM"),
          TVC("fn", TC("member", [TV("sym", "Math"), TV("sym", "min")]), [
            TC("add", [TV("sym", "*"), TV("number", 8192)]),
            TV("number", 49152)
          ])
        ])
      ])
    ]),

    TST('msg_len = ("Hello").length', [
      TC("assign", [
        TV("sym", "msg_len"),
        TC("member", [TV("string", "Hello"), TV("sym", "length")])
      ])
    ]),

    TST('symName = "aSymbol"', [
      TC("assign", [TV("sym", "symName"), TV("string", "aSymbol")])
    ]),

    // TST('list = [oswrch, "Hello", [1, 2, 3]]', [
    //   TC("assign", [
    //     TV("sym", "list"),
    //     TC("list", [
    //       TV("sym", "oswrch"),
    //       TV("string", "Hello"),
    //       TC("list", [TV("number", 1), TV("number", 2), TV("number", 3)])
    //     ])
    //   ])
    // ]),

    // TST("?(symName) = ?(symName) + 1 + .a[msg_len - 1]", [
    //   TC("assign", [
    //     TC("sym", [TV("sym", "symName")]),
    //     TC("add", [
    //       TC("add", [TC("sym", [TV("sym", "symName")]), TV("number", 1)]),
    //       TC("index", [
    //         TV("sym", ".a"),
    //         TC("-", [TV("sym", "msg_len"), TV("number", 1)])
    //       ])
    //     ])
    //   ])
    // ]),

    TST('term = debug ? " (debug)" : " (production)"', [
      TC("assign", [
        TV("sym", "term"),
        TC("if", [
          TV("sym", "debug"),
          TV("string", " (debug)"),
          TV("string", " (production)")
        ])
      ])
    ]),

    TST("showChars LDX #'!' ; print ! to ~", [
      TV("sym", "showChars"),
      TVC("opcode", "LDX", [TVC("opArg", ["#"], [TV("chars", "!")])]),
      TV("comment", " print ! to ~")
    ]),

    TST("- TXA", [
      TV("sym", "-"),
      TVC("opcode", "TXA", [TV("opArg", ["impl"])])
    ]),

    TST("JSR oswrch ; OSWRCH", [
      TVC("opcode", "JSR", [TVC("opArg", ["abs"], [TV("sym", "oswrch")])]),
      TV("comment", " OSWRCH")
    ]),

    TST("INX", [TVC("opcode", "INX", [TV("opArg", ["impl"])])]),

    TST("CPX #'~' + 1", [
      TVC("opcode", "CPX", [
        TVC("opArg", ["#"], [TC("add", [TV("chars", "~"), TV("number", 1)])])
      ])
    ]),

    // TST("BCC -", [
    //   TVC("opcode", "BCC", [TVC("opArg", ["rel"], [TV("sym", "-")])])
    // ]),

    TST("RTS ; all done", [
      TVC("opcode", "RTS", [TV("opArg", ["impl"])]),
      TV("comment", " all done")
    ]),

    TST("- JSR oswrch ; OSWRCH", [
      TV("sym", "-"),
      TVC("opcode", "JSR", [TVC("opArg", ["abs"], [TV("sym", "oswrch")])]),
      TV("comment", " OSWRCH")
    ]),

    TST("INY", [TVC("opcode", "INY", [TV("opArg", ["impl"])])]),

    TST("prStr LDA ($70), y", [
      TV("sym", "prStr"),
      TVC("opcode", "LDA", [TVC("opArg", ["(zpg),Y"], [TV("number", 112)])])
    ]),

    // TST("BNE -", [
    //   TVC("opcode", "BNE", [TVC("opArg", ["rel"], [TV("sym", "-")])])
    // ]),

    TST("RTS", [TVC("opcode", "RTS", [TV("opArg", ["impl"])])]),

    TST(":msg +msg `Hello, ${name}`, 10, 0", [
      TV("sym", "msg"),
      TVC("macro.call", "MSG", [
        TC("add", [TV("string", "Hello, "), TV("sym", "name")]),
        TV("number", 10),
        TV("number", 0)
      ])
    ]),

    TST("hello LDA #<:msg", [
      TV("sym", "hello"),
      TVC("opcode", "LDA", [
        TVC("opArg", ["#"], [TC("lo", [TV("sym", "msg")])])
      ])
    ]),

    TST("STA $70", [
      TVC("opcode", "STA", [TVC("opArg", ["abs", "zpg"], [TV("number", 112)])])
    ]),

    TST("LDA #>:msg", [
      TVC("opcode", "LDA", [
        TVC("opArg", ["#"], [TC("hi", [TV("sym", "msg")])])
      ])
    ]),

    TST("STA $71", [
      TVC("opcode", "STA", [TVC("opArg", ["abs", "zpg"], [TV("number", 113)])])
    ]),

    TST("BNE prStr", [
      TVC("opcode", "BNE", [TVC("opArg", ["rel"], [TV("sym", "prStr")])])
    ]),

    TST("!byte 1, 2, 3, 4", [
      TVC("directive", "BYTE", [
        TV("number", 1),
        TV("number", 2),
        TV("number", 3),
        TV("number", 4)
      ])
    ]),

    TST(":govec JMP ($020e)", [
      TV("sym", "govec"),
      TVC("opcode", "JMP", [TVC("opArg", ["(ind)"], [TV("number", 526)])])
    ]),

    // TST("BPL +", [
    //   TVC("opcode", "BPL", [TVC("opArg", ["rel"], [TV("sym", "add")])])
    // ]),

    TST("", [])

    // TST("!macro cmd ~.token {", [
    //   TVC("macroStart", "cmd", [TC("ref", [TV("sym", ".token")])])
    // ])
  ];

  const asm = new MOS6502Assembler(syntax);
  for (const { source, ast } of tests) {
    it(`Should parse "${source}"`, () => {
      const want = {
        tag: "source.file",
        file: "test.a",
        children: ast.length
          ? [{ tag: "source.line", file: "test.a", ln: 1, children: ast }]
          : []
      };
      const got = asm.compileSource([source], "test.a");
      expect(got).toEqual(want);
    });
  }
});
