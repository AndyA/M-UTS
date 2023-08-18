module.exports = {
  tag: "source.file",
  file: "src/muts.a",
  children: [
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1,
      children: [
        {
          tag: "directive",
          value: "TO",
          children: [
            { tag: "string", value: "m-uts.rom" },
            { tag: "sym", value: "plain" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "*" },
            { tag: "number", value: 32768 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 5,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osfind" },
                { tag: "number", value: 65486 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 6,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osgbpb" },
                { tag: "number", value: 65489 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 7,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osbput" },
                { tag: "number", value: 65492 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 8,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osbget" },
                { tag: "number", value: 65495 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 9,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osargs" },
                { tag: "number", value: 65498 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 10,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osfile" },
                { tag: "number", value: 65501 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 11,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osrdch" },
                { tag: "number", value: 65504 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 12,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osasci" },
                { tag: "number", value: 65507 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 13,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osnewl" },
                { tag: "number", value: 65511 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 14,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
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
      file: "src/muts.a",
      ln: 15,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osword" },
                { tag: "number", value: 65521 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 16,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "osbyte" },
                { tag: "number", value: 65524 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 17,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "oscli" },
                { tag: "number", value: 65527 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 18,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "irq2v" },
                { tag: "number", value: 518 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 19,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "irq1v" },
                { tag: "number", value: 516 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 20,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "brkv" },
                { tag: "number", value: 514 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 21,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "userv" },
                { tag: "number", value: 512 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 22,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "uptv" },
                { tag: "number", value: 546 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 23,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "evntv" },
                { tag: "number", value: 544 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 24,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "fscv" },
                { tag: "number", value: 542 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 25,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "findv" },
                { tag: "number", value: 540 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 26,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "gbpbv" },
                { tag: "number", value: 538 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 27,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "bputv" },
                { tag: "number", value: 536 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 28,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "bgetv" },
                { tag: "number", value: 534 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 29,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "argsv" },
                { tag: "number", value: 532 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 30,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "filev" },
                { tag: "number", value: 530 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 31,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "rdchv" },
                { tag: "number", value: 528 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 32,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "wrchv" },
                { tag: "number", value: 526 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 33,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "wordv" },
                { tag: "number", value: 524 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 34,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "bytev" },
                { tag: "number", value: 522 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 35,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cliv" },
                { tag: "number", value: 520 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 37,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "ptr0" },
                { tag: "number", value: 168 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 39,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "acc0" },
                { tag: "number", value: 170 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 40,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "acc1" },
                { tag: "number", value: 172 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 42,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cmd_offset" },
                { tag: "number", value: 174 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 44,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cmdjmp" },
                { tag: "number", value: 176 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 45,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cmdhelp" },
                { tag: "number", value: 178 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 47,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "acc2" },
                { tag: "number", value: 180 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 48,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "acc3" },
                { tag: "number", value: 182 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 50,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "hex_pfx" },
                { tag: "number", value: 184 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 52,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cmdline" },
                { tag: "number", value: 242 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 53,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cur_rom" },
                { tag: "number", value: 244 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 54,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "err" },
                { tag: "number", value: 253 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 55,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "esc_flag" },
                { tag: "number", value: 255 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 57,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 256 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 59,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "vars" },
                { tag: "number", value: 768 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 61,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "regs" },
                { tag: "number", value: 1024 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 62,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "reg_a" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "regs" },
                    {
                      tag: "mul",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "A" },
                            { tag: "chars", value: "A" }
                          ]
                        },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 63,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "reg_pc" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "regs" },
                    {
                      tag: "mul",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "I" },
                            { tag: "chars", value: "A" }
                          ]
                        },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 64,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "reg_x" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "regs" },
                    {
                      tag: "mul",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "X" },
                            { tag: "chars", value: "A" }
                          ]
                        },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 65,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "reg_y" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "regs" },
                    {
                      tag: "mul",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "Y" },
                            { tag: "chars", value: "A" }
                          ]
                        },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 66,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "reg_p" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "regs" },
                    {
                      tag: "mul",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "P" },
                            { tag: "chars", value: "A" }
                          ]
                        },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 67,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "reg_s" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "regs" },
                    {
                      tag: "mul",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "S" },
                            { tag: "chars", value: "A" }
                          ]
                        },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 69,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "n_breakpoints" },
            { tag: "number", value: 16 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 70,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "breakpoints" },
                { tag: "number", value: 1280 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 72,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "base_addr" },
                { tag: "number", value: 1536 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 73,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "rom_sel" },
                { tag: "number", value: 1538 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 74,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "prompt" },
                { tag: "number", value: 1539 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 76,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "cmd_line_len" },
            { tag: "number", value: 160 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 77,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "cmd_line" },
                { tag: "number", value: 1792 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 79,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "brk_cmd" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmd_line" },
                    { tag: "sym", value: "cmd_line_len" }
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
      file: "src/muts.a",
      ln: 81,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "rom_private" },
                { tag: "number", value: 3568 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 83,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "x_present" },
                { tag: "number", value: 40960 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 84,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "x_assemble" },
                { tag: "number", value: 40961 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 85,
      children: [
        {
          tag: "directive",
          value: "ADDR",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "x_eval" },
                { tag: "number", value: 40964 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 87,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_left" },
            { tag: "number", value: 136 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 88,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_right" },
            { tag: "number", value: 137 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 89,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_down" },
            { tag: "number", value: 138 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 90,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_up" },
            { tag: "number", value: 139 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 92,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_sh_left" },
            { tag: "number", value: 160 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 93,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_sh_right" },
            { tag: "number", value: 161 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 94,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_sh_down" },
            { tag: "number", value: 162 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 95,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "key_sh_up" },
            { tag: "number", value: 163 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 97,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: "case_mask" },
            { tag: "number", value: 223 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 99,
      children: [
        {
          tag: "macroStart",
          value: "inc16",
          children: [{ tag: "sym", value: "addr" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 100,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 101,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 102,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "addr" },
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
      file: "src/muts.a",
      ln: 103,
      children: [{ tag: "sym", value: "+" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 104,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 106,
      children: [
        { tag: "comment", value: " FIXME reproduces bug in original code" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 107,
      children: [
        {
          tag: "macroStart",
          value: "dec16bug",
          children: [{ tag: "sym", value: ".addr" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 108,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".addr" },
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
      file: "src/muts.a",
      ln: 109,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 110,
      children: [
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".addr" },
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
      file: "src/muts.a",
      ln: 111,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 112,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 114,
      children: [
        {
          tag: "macroStart",
          value: "dec16",
          children: [{ tag: "sym", value: ".addr" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 115,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 116,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 117,
      children: [
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".addr" },
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
      file: "src/muts.a",
      ln: 118,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 119,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 121,
      children: [
        {
          tag: "macroStart",
          value: "adc16",
          children: [
            { tag: "sym", value: ".dst" },
            { tag: "sym", value: ".lhs" },
            { tag: "sym", value: ".rhs" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 122,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".lhs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 123,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".rhs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 124,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 125,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".lhs" },
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
      file: "src/muts.a",
      ln: 126,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".rhs" },
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
      file: "src/muts.a",
      ln: 127,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 128,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 130,
      children: [
        {
          tag: "macroStart",
          value: "sbc16",
          children: [
            { tag: "sym", value: ".dst" },
            { tag: "sym", value: ".lhs" },
            { tag: "sym", value: ".rhs" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 131,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".lhs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 132,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".rhs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 133,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 134,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".lhs" },
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
      file: "src/muts.a",
      ln: 135,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".rhs" },
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
      file: "src/muts.a",
      ln: 136,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 137,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 139,
      children: [
        {
          tag: "macroStart",
          value: "cmp16",
          children: [
            { tag: "sym", value: ".lhs" },
            { tag: "sym", value: ".rhs" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 140,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".lhs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 141,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".rhs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 142,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".lhs" },
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
      file: "src/muts.a",
      ln: 143,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".rhs" },
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
      file: "src/muts.a",
      ln: 144,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 146,
      children: [
        {
          tag: "macroStart",
          value: "cmz16",
          children: [{ tag: "sym", value: ".reg" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 147,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".reg" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 148,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".reg" },
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
      file: "src/muts.a",
      ln: 149,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 151,
      children: [
        {
          tag: "macroStart",
          value: "mov16",
          children: [
            { tag: "sym", value: ".dst" },
            { tag: "sym", value: ".src" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 152,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".src" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 153,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 154,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".src" },
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
      file: "src/muts.a",
      ln: 155,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 156,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 158,
      children: [
        {
          tag: "macroStart",
          value: "mov16i",
          children: [
            { tag: "sym", value: ".dst" },
            { tag: "sym", value: ".addr" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 159,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                { tag: "lo", children: [{ tag: "sym", value: ".addr" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 160,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 161,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                { tag: "hi", children: [{ tag: "sym", value: ".addr" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 162,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 163,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 165,
      children: [
        {
          tag: "macroStart",
          value: "mov16z",
          children: [{ tag: "sym", value: ".dst" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 166,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 167,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 168,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 169,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 171,
      children: [
        {
          tag: "macroStart",
          value: "stxy",
          children: [{ tag: "sym", value: ".dst" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 172,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 173,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 174,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 176,
      children: [{ tag: "comment", value: " Add A to 16 bit reg" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 177,
      children: [
        {
          tag: "macroStart",
          value: "adca16",
          children: [{ tag: "sym", value: ".dst" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 178,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 179,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".dst" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 180,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 181,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".dst" },
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
      file: "src/muts.a",
      ln: 182,
      children: [{ tag: "sym", value: "+" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 183,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 185,
      children: [
        {
          tag: "macroStart",
          value: "asl16",
          children: [{ tag: "sym", value: ".reg" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 186,
      children: [
        {
          tag: "opcode",
          value: "ASL",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".reg" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 187,
      children: [
        {
          tag: "opcode",
          value: "ROL",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".reg" },
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
      file: "src/muts.a",
      ln: 188,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 190,
      children: [
        {
          tag: "macroStart",
          value: "rol16",
          children: [{ tag: "sym", value: ".reg" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 191,
      children: [
        {
          tag: "opcode",
          value: "ROL",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".reg" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 192,
      children: [
        {
          tag: "opcode",
          value: "ROL",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".reg" },
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
      file: "src/muts.a",
      ln: 193,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 195,
      children: [
        {
          tag: "macroStart",
          value: "push16",
          children: [{ tag: "sym", value: ".addr" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 196,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 197,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 198,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".addr" },
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
      file: "src/muts.a",
      ln: 199,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 200,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 202,
      children: [
        {
          tag: "macroStart",
          value: "pop16",
          children: [{ tag: "sym", value: ".addr" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 203,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 204,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: ".addr" },
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
      file: "src/muts.a",
      ln: 205,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 206,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: ".addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 207,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 209,
      children: [{ tag: "comment", value: " For assembler tables" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 211,
      children: [
        {
          tag: "macroStart",
          value: "mnem",
          children: [
            { tag: "sym", value: ".c1" },
            { tag: "sym", value: ".c2" },
            { tag: "sym", value: ".c3" },
            { tag: "sym", value: ".bits" },
            { tag: "sym", value: ".mask" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 212,
      children: [
        {
          tag: "directive",
          value: "SET",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: ".cc" },
                {
                  tag: "or",
                  children: [
                    {
                      tag: "or",
                      children: [
                        {
                          tag: "lsl",
                          children: [
                            {
                              tag: "sub",
                              children: [
                                { tag: "sym", value: ".c1" },
                                { tag: "number", value: 63 }
                              ]
                            },
                            { tag: "number", value: 11 }
                          ]
                        },
                        {
                          tag: "lsl",
                          children: [
                            {
                              tag: "sub",
                              children: [
                                { tag: "sym", value: ".c2" },
                                { tag: "number", value: 63 }
                              ]
                            },
                            { tag: "number", value: 6 }
                          ]
                        }
                      ]
                    },
                    {
                      tag: "lsl",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "sym", value: ".c3" },
                            { tag: "number", value: 63 }
                          ]
                        },
                        { tag: "number", value: 1 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 213,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "lo", children: [{ tag: "sym", value: ".cc" }] },
            { tag: "hi", children: [{ tag: "sym", value: ".cc" }] },
            { tag: "sym", value: ".bits" },
            { tag: "sym", value: ".mask" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 214,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 216,
      children: [
        {
          tag: "macroStart",
          value: "ilen4",
          children: [
            { tag: "sym", value: ".l0" },
            { tag: "sym", value: ".l1" },
            { tag: "sym", value: ".l2" },
            { tag: "sym", value: ".l3" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 217,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "or",
              children: [
                {
                  tag: "or",
                  children: [
                    {
                      tag: "or",
                      children: [
                        {
                          tag: "lsl",
                          children: [
                            { tag: "sym", value: ".l0" },
                            { tag: "number", value: 6 }
                          ]
                        },
                        {
                          tag: "lsl",
                          children: [
                            { tag: "sym", value: ".l1" },
                            { tag: "number", value: 4 }
                          ]
                        }
                      ]
                    },
                    {
                      tag: "lsl",
                      children: [
                        { tag: "sym", value: ".l2" },
                        { tag: "number", value: 2 }
                      ]
                    }
                  ]
                },
                {
                  tag: "lsl",
                  children: [
                    { tag: "sym", value: ".l3" },
                    { tag: "number", value: 0 }
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
      file: "src/muts.a",
      ln: 218,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 220,
      children: [
        {
          tag: "macroStart",
          value: "ilen",
          children: [
            { tag: "sym", value: ".l0" },
            { tag: "sym", value: ".l1" },
            { tag: "sym", value: ".l2" },
            { tag: "sym", value: ".l3" },
            { tag: "sym", value: ".l4" },
            { tag: "sym", value: ".l5" },
            { tag: "sym", value: ".l6" },
            { tag: "sym", value: ".l7" },
            { tag: "sym", value: ".l8" },
            { tag: "sym", value: ".l9" },
            { tag: "sym", value: ".l10" },
            { tag: "sym", value: ".l11" },
            { tag: "sym", value: ".l12" },
            { tag: "sym", value: ".l13" },
            { tag: "sym", value: ".l14" },
            { tag: "sym", value: ".l15" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 221,
      children: [
        {
          tag: "macroCall",
          value: "ILEN4",
          children: [
            { tag: "sym", value: ".l0" },
            { tag: "sym", value: ".l1" },
            { tag: "sym", value: ".l2" },
            { tag: "sym", value: ".l3" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 222,
      children: [
        {
          tag: "macroCall",
          value: "ILEN4",
          children: [
            { tag: "sym", value: ".l4" },
            { tag: "sym", value: ".l5" },
            { tag: "sym", value: ".l6" },
            { tag: "sym", value: ".l7" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 223,
      children: [
        {
          tag: "macroCall",
          value: "ILEN4",
          children: [
            { tag: "sym", value: ".l8" },
            { tag: "sym", value: ".l9" },
            { tag: "sym", value: ".l10" },
            { tag: "sym", value: ".l11" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 224,
      children: [
        {
          tag: "macroCall",
          value: "ILEN4",
          children: [
            { tag: "sym", value: ".l12" },
            { tag: "sym", value: ".l13" },
            { tag: "sym", value: ".l14" },
            { tag: "sym", value: ".l15" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 225,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 227,
      children: [
        { tag: "sym", value: "rom_language" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "language" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 228,
      children: [
        { tag: "sym", value: "rom_service" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "service" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 230,
      children: [{ tag: "comment", value: " ROM type" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 231,
      children: [
        { tag: "sym", value: "rom_type" },
        {
          tag: "directive",
          value: "BYTE",
          children: [{ tag: "number", value: 194 }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 232,
      children: [
        {
          tag: "comment",
          value: " Copyright offset. Points to 0 before copyright"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 233,
      children: [
        { tag: "sym", value: "copyright_offset" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "copyright" },
                    { tag: "sym", value: "rom_language" }
                  ]
                },
                { tag: "number", value: 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 234,
      children: [{ tag: "comment", value: " Version" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 235,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [{ tag: "number", value: 2 }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 236,
      children: [
        { tag: "sym", value: "title" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "M-UTS" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 237,
      children: [
        { tag: "sym", value: "version" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "1.60" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 238,
      children: [
        { tag: "sym", value: "copyright" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(C) AIAA 1984" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 240,
      children: [
        {
          tag: "comment",
          value:
            " Jump table to expose well known addresses to optional upper half of ROM"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 242,
      children: [
        { tag: "sym", value: "j_prstr" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 243,
      children: [
        { tag: "sym", value: "j_throw" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 244,
      children: [
        { tag: "sym", value: "j_newline" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 245,
      children: [
        { tag: "sym", value: "j_check_escape" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 246,
      children: [
        { tag: "sym", value: "j_hexbyte" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 247,
      children: [
        { tag: "sym", value: "j_hexbyte_space" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 248,
      children: [
        { tag: "sym", value: "j_radix_out" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_out" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 249,
      children: [
        { tag: "sym", value: "j_getch" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 250,
      children: [
        { tag: "sym", value: "j_skip_space" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 251,
      children: [
        { tag: "sym", value: "j_eval" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 252,
      children: [
        { tag: "sym", value: "j_eval_byte" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_byte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 253,
      children: [
        { tag: "sym", value: "j_check_eol" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 254,
      children: [
        { tag: "sym", value: "j_parse_bytestring" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_bytes" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 255,
      children: [
        { tag: "sym", value: "j_try_poke" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 256,
      children: [
        { tag: "sym", value: "j_acc0_to_tmp0" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "acc0_to_acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 257,
      children: [
        { tag: "sym", value: "j_unget" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 258,
      children: [
        { tag: "sym", value: "j_x0" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 259,
      children: [
        { tag: "sym", value: "j_x1" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 261,
      children: [
        {
          tag: "comment",
          value:
            " Command lookup table. Each entry is the command name with the top bit of"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 262,
      children: [
        {
          tag: "comment",
          value:
            " the last char set followed by abs pointers to the code and help text for"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 263,
      children: [{ tag: "comment", value: " that command." }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 265,
      children: [
        {
          tag: "directive",
          value: "SET",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "next_token" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 267,
      children: [
        {
          tag: "macroStart",
          value: "cmd",
          children: [
            { tag: "ref", children: [{ tag: "sym", value: ".token" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 268,
      children: [
        {
          tag: "assign",
          children: [
            { tag: "sym", value: ".token" },
            { tag: "sym", value: "next_token" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 269,
      children: [
        {
          tag: "directive",
          value: "SET",
          children: [
            {
              tag: "assign",
              children: [
                { tag: "sym", value: "next_token" },
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "next_token" },
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
      file: "src/muts.a",
      ln: 270,
      children: [{ tag: "macroEnd" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 272,
      children: [
        { tag: "sym", value: "cmd_table" },
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_assemble" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 273,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "ASSEMBL" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 274,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_assemble" },
            { tag: "sym", value: "h_assemble" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 276,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_base" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 277,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "BAS" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 278,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_base" },
            { tag: "sym", value: "h_base" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 280,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_calc" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 281,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "CAL" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "C" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 282,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_calc" },
            { tag: "sym", value: "h_calc" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 284,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_change" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 285,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "CHANG" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 286,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_change" },
            { tag: "sym", value: "h_change" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 288,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_clr" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 289,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "CL" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "R" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 290,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_clr" },
            { tag: "sym", value: "h_clr" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 292,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_dis" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 293,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "DI" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "S" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 294,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_dis" },
            { tag: "sym", value: "h_dis" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 296,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_edit" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 297,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "EDI" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 298,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_edit" },
            { tag: "sym", value: "h_edit" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 300,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_flist" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 301,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "FLIS" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 302,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_flist" },
            { tag: "sym", value: "h_flist" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 304,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_form" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 305,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "FOR" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "M" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 306,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_form" },
            { tag: "sym", value: "h_form" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 308,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_find" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 309,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "FIN" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "D" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 310,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_find" },
            { tag: "sym", value: "h_find" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 312,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_get" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 313,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "GE" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 314,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_get" },
            { tag: "sym", value: "h_get" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 316,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_go" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 317,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "G" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "O" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 318,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_go" },
            { tag: "sym", value: "h_go" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 320,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_look" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 321,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "LOO" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "K" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 322,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_look" },
            { tag: "sym", value: "h_look" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 324,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_mem" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 325,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "ME" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "M" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 326,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_mem" },
            { tag: "sym", value: "h_mem" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 328,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_mode" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 329,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "MOD" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 330,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_mode" },
            { tag: "sym", value: "h_mode" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 332,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_monitor" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 333,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "MONITO" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "R" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 334,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_monitor" },
            { tag: "sym", value: "h_monitor" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 336,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_move" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 337,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "MOV" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 338,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_move" },
            { tag: "sym", value: "h_move" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 340,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_onbrk" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 341,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "ONBR" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "K" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 342,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_onbrk" },
            { tag: "sym", value: "h_onbrk" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 344,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_put" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 345,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "PU" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 346,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_put" },
            { tag: "sym", value: "h_put" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 348,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_regs" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 349,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "REG" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "S" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 350,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_regs" },
            { tag: "sym", value: "h_regs" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 352,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_same" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 353,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "SAM" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 354,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_same" },
            { tag: "sym", value: "h_same" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 356,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_select" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 357,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "SELEC" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 358,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_select" },
            { tag: "sym", value: "h_select" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 360,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_set" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 361,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "SE" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 362,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_set" },
            { tag: "sym", value: "h_set" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 364,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_step" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 365,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "STE" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "P" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 366,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_step" },
            { tag: "sym", value: "h_step" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 368,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_vdu" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 369,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "VD" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "U" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 370,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_vdu" },
            { tag: "sym", value: "h_vdu" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 372,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_verify" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 373,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "VERIF" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "Y" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 374,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_verify" },
            { tag: "sym", value: "h_verify" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 376,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [
            { tag: "~", children: [{ tag: "sym", value: "tok_where" }] }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 377,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "WHER" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "E" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 378,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "sym", value: "c_where" },
            { tag: "sym", value: "h_where" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 380,
      children: [
        {
          tag: "comment",
          value: " The command table is also used for operator names"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 382,
      children: [{ tag: "comment", value: " AND" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 383,
      children: [
        { tag: "sym", value: "op_and" },
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_and" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 384,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "AN" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "D" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 385,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 387,
      children: [{ tag: "comment", value: " OR" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 388,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_or" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 389,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "O" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "R" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 390,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 392,
      children: [{ tag: "comment", value: " EOR" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 393,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_eor" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 394,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "EO" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "R" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 395,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 397,
      children: [{ tag: "comment", value: " NOT" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 398,
      children: [
        {
          tag: "macroCall",
          value: "CMD",
          children: [{ tag: "~", children: [{ tag: "sym", value: "tok_not" }] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 399,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "NO" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: "T" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 400,
      children: [
        {
          tag: "directive",
          value: "WORD",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 401,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [{ tag: "number", value: 0 }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 403,
      children: [
        {
          tag: "comment",
          value:
            " Help text per command. Top bit of last char of each entry is set"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 405,
      children: [{ tag: "sym", value: "help_table" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 406,
      children: [
        { tag: "sym", value: "h_assemble" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<fsp> <fsp" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 407,
      children: [
        { tag: "sym", value: "h_base" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 408,
      children: [
        { tag: "sym", value: "h_calc" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<expr" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 409,
      children: [
        { tag: "sym", value: "h_change" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr> <byte string" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 410,
      children: [
        { tag: "sym", value: "h_clr" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(<addr>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 411,
      children: [
        { tag: "sym", value: "h_dis" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<strt>(..<end>) (H<prefix>) (P,L" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 412,
      children: [
        { tag: "sym", value: "h_edit" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 413,
      children: [
        { tag: "sym", value: "h_flist" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(<number>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 414,
      children: [
        { tag: "sym", value: "h_form" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<tracks> (<drv>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 415,
      children: [
        { tag: "sym", value: "h_find" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<strt>(..<end>) <byte string" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 416,
      children: [
        { tag: "sym", value: "h_get" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<track> (<drv>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 417,
      children: [
        { tag: "sym", value: "h_go" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr> (<A>) (<X>) (<Y>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 418,
      children: [
        { tag: "sym", value: "h_look" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr> (H<prefix>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 419,
      children: [
        { tag: "sym", value: "h_mem" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<strt>(..<end>) (P,L" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 420,
      children: [
        { tag: "sym", value: "h_mode" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<mode" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 421,
      children: [
        { tag: "sym", value: "h_monitor" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            {
              tag: "add",
              children: [
                { tag: "chars", value: " " },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 422,
      children: [
        { tag: "sym", value: "h_move" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(>) <src> <dest> <len> (<addr>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 423,
      children: [
        { tag: "sym", value: "h_onbrk" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<command line" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 424,
      children: [
        { tag: "sym", value: "h_put" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<track> (<drv>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 425,
      children: [
        { tag: "sym", value: "h_regs" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            {
              tag: "add",
              children: [
                { tag: "chars", value: " " },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 426,
      children: [
        { tag: "sym", value: "h_same" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr> <addr> <len" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 427,
      children: [
        { tag: "sym", value: "h_select" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<rom number" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 428,
      children: [
        { tag: "sym", value: "h_set" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 429,
      children: [
        { tag: "sym", value: "h_step" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<addr> (H<prefix>) (P,L" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 430,
      children: [
        { tag: "sym", value: "h_vdu" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "<byte string" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ">" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 431,
      children: [
        { tag: "sym", value: "h_verify" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(<drv>" },
            {
              tag: "add",
              children: [
                { tag: "chars", value: ")" },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 432,
      children: [
        { tag: "sym", value: "h_where" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            {
              tag: "add",
              children: [
                { tag: "chars", value: " " },
                { tag: "number", value: 128 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 433,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [{ tag: "number", value: 0 }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 435,
      children: [
        {
          tag: "comment",
          value:
            " The ASSEMBLE command checks the upper half of the ROM for a possible"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 436,
      children: [{ tag: "comment", value: " assembler implementation" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 438,
      children: [
        { tag: "sym", value: "c_assemble" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "x_present" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 439,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 440,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_noasm" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 441,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "x_assemble" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 443,
      children: [
        { tag: "sym", value: "throw_noasm" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 444,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 160 },
            { tag: "string", value: "No assembler" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 446,
      children: [{ tag: "comment", value: " Attempt to execute a command" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 448,
      children: [
        { tag: "sym", value: "dispatch_cmd" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 449,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "lookup_command" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 450,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "dispatch_done" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 451,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 452,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 453,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "A" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 454,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 455,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "chars", value: "Z" },
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
      file: "src/muts.a",
      ln: 456,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 457,
      children: [
        { tag: "sym", value: "dispatch_done" },
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 458,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 459,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 461,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 462,
      children: [
        {
          tag: "macroCall",
          value: "CMZ16",
          children: [{ tag: "sym", value: "cmdjmp" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 463,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "dispatch_done" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 464,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 465,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 466,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "call_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 467,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 468,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 470,
      children: [
        { tag: "sym", value: "call_cmd" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["(ind)"],
              children: [{ tag: "sym", value: "cmdjmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 472,
      children: [{ tag: "comment", value: " Print M-UTS with version" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 474,
      children: [
        { tag: "sym", value: "pr_muts" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 475,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "M-UTS 1.60" },
            { tag: "number", value: 13 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 476,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 478,
      children: [{ tag: "comment", value: " Print a banner" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 480,
      children: [
        { tag: "sym", value: "pr_banner" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 481,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "pr_muts" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 482,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 483,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "string", value: "MONITOR" },
            { tag: "number", value: 13 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 484,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 486,
      children: [
        { tag: "comment", value: " Output a character counting it in acc2" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 488,
      children: [
        { tag: "sym", value: "oswrch_counted" },
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 489,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 491,
      children: [
        { tag: "sym", value: "show_help" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 492,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "pr_muts" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 493,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 494,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 495,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 496,
      children: [
        {
          tag: "macroCall",
          value: "MOV16I",
          children: [
            { tag: "sym", value: "acc0" },
            { tag: "sym", value: "help_table" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 497,
      children: [
        { tag: "sym", value: "--" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 498,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 499,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 500,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 501,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 502,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 503,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 504,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 505,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "cmd_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 506,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 507,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 508,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 509,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch_counted" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 510,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 511,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 512,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 513,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 514,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 515,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 516,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 517,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch_counted" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 518,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg,X)"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 519,
      children: [
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 520,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 521,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 522,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch_counted" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 523,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 524,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 525,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 526,
      children: [{ tag: "comment", value: " pad with spaces to 40 cols" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 527,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 528,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 529,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch_counted" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 530,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 531,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 40 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 532,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 533,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 534,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg,X)"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 535,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 536,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 538,
      children: [
        { tag: "sym", value: "prstr" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 539,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 540,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 541,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 542,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 543,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 544,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 545,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 546,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 547,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 548,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 549,
      children: [
        { tag: "sym", value: "--" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 550,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 551,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 552,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 553,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osasci" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 554,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 555,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 556,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 557,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 558,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 559,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 561,
      children: [
        { tag: "sym", value: "throw" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "reset_terminal" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 562,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 563,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 564,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 565,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 566,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 567,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 568,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 569,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 570,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 571,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 572,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 574,
      children: [
        { tag: "sym", value: "newline" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osnewl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 575,
      children: [
        { tag: "sym", value: "check_escape" },
        {
          tag: "opcode",
          value: "BIT",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "esc_flag" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 576,
      children: [
        {
          tag: "opcode",
          value: "BMI",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 577,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 579,
      children: [
        { tag: "sym", value: "throw_escape" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 580,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 17 },
            { tag: "string", value: "Escape" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 582,
      children: [
        { tag: "sym", value: "hexbyte" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 583,
      children: [{ tag: "opcode", value: "ROR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 584,
      children: [{ tag: "opcode", value: "ROR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 585,
      children: [{ tag: "opcode", value: "ROR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 586,
      children: [{ tag: "opcode", value: "ROR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 587,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexnybble" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 588,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 589,
      children: [
        { tag: "sym", value: "hexnybble" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 590,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 15 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 591,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 592,
      children: [
        {
          tag: "opcode",
          value: "SED",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 593,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 594,
      children: [
        {
          tag: "opcode",
          value: "CLD",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 595,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 596,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 597,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 599,
      children: [
        { tag: "sym", value: "hexbyte_space" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 600,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 601,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 602,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 604,
      children: [
        { tag: "sym", value: "radix_out" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 605,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 606,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 607,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 608,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 609,
      children: [
        { tag: "sym", value: "--" },
        {
          tag: "macroCall",
          value: "ASL16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 610,
      children: [{ tag: "opcode", value: "ROL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 611,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 612,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 613,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 614,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 615,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "DEY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 616,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 617,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 618,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 619,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    {
                      tag: "sub",
                      children: [
                        { tag: "chars", value: "A" },
                        { tag: "chars", value: "9" }
                      ]
                    },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 620,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 621,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 622,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 623,
      children: [
        {
          tag: "macroCall",
          value: "CMZ16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 624,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 625,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 626,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 627,
      children: [
        {
          tag: "opcode",
          value: "BMI",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 628,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 629,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 630,
      children: [{ tag: "sym", value: "+" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 631,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 632,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 633,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 634,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 636,
      children: [
        { tag: "sym", value: "getch" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 637,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 638,
      children: [
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 639,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 641,
      children: [
        { tag: "sym", value: "skip_space" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 642,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 643,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 644,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 645,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 647,
      children: [
        { tag: "sym", value: "to_upper" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 648,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 649,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "A" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 650,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 651,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "chars", value: "Z" },
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
      file: "src/muts.a",
      ln: 652,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 653,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 654,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 655,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 657,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 658,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 660,
      children: [
        { tag: "sym", value: "radix_parse" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 661,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 662,
      children: [
        {
          tag: "macroCall",
          value: "MOV16Z",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 663,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 664,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "to_upper" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 665,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 666,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 667,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 668,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 669,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 670,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "add",
                  children: [
                    {
                      tag: "sub",
                      children: [
                        {
                          tag: "sub",
                          children: [
                            { tag: "chars", value: "A" },
                            { tag: "chars", value: "9" }
                          ]
                        },
                        { tag: "number", value: 1 }
                      ]
                    },
                    { tag: "number", value: 10 }
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
      file: "src/muts.a",
      ln: 671,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 672,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    {
                      tag: "sub",
                      children: [
                        { tag: "chars", value: "A" },
                        { tag: "chars", value: "9" }
                      ]
                    },
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
      file: "src/muts.a",
      ln: 673,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 674,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 675,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 676,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 677,
      children: [
        {
          tag: "macroCall",
          value: "MOV16Z",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 678,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 679,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 680,
      children: [
        { tag: "sym", value: "--" },
        { tag: "opcode", value: "ROR", children: [] }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 681,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 682,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 683,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 684,
      children: [
        {
          tag: "macroCall",
          value: "ADC16",
          children: [
            { tag: "sym", value: "acc0" },
            { tag: "sym", value: "acc0" },
            { tag: "sym", value: "ptr0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 685,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 686,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "macroCall",
          value: "ASL16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 687,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 688,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 689,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 690,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 691,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 692,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 693,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 694,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 695,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 696,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 697,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 698,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 699,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 700,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 701,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 702,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 703,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 704,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdline" },
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
      file: "src/muts.a",
      ln: 705,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 706,
      children: [
        {
          tag: "opcode",
          value: "DEY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 707,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 709,
      children: [
        {
          tag: "comment",
          value:
            " Expression evaluator. This has a longstanding bug (since 1984): it"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 710,
      children: [
        {
          tag: "comment",
          value:
            " right-recurses - so it evaluates A - B - C as A - (B - C) rather"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 711,
      children: [
        {
          tag: "comment",
          value:
            " than (A - B) - C. I knew about it at the time but, for some reason,"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 712,
      children: [{ tag: "comment", value: " didn't fix it." }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 714,
      children: [
        { tag: "sym", value: "eval_atom" },
        {
          tag: "opcode",
          value: "TSX",
          children: [{ tag: "opArg", value: ["impl"] }]
        },
        { tag: "comment", value: " check SP" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 715,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 128 }]
            }
          ]
        },
        { tag: "comment", value: " could just be a BMI" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 716,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 717,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 718,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 161 },
            { tag: "string", value: "Formula too complex" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 720,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "lookup_token" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 721,
      children: [{ tag: "comment", value: " - = negate term" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 722,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 723,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 724,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 725,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 726,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 727,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 728,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 729,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 730,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 731,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 732,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 734,
      children: [{ tag: "comment", value: " + = skipped" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 735,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 736,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 738,
      children: [{ tag: "comment", value: " ? = peek" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 739,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "?" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 740,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 741,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 742,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 743,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 744,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 745,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 746,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 748,
      children: [{ tag: "comment", value: " ! = word peek" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 749,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "!" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 750,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 751,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 752,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 753,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 754,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 755,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 756,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 757,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 758,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 759,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 761,
      children: [{ tag: "comment", value: " @ = set radix" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 762,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "@" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 763,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 764,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 765,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 766,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_d" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 767,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 768,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 769,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_bad_base" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 770,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 35 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 771,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_bad_base" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 772,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 773,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_comma" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 774,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 776,
      children: [{ tag: "comment", value: " 9e = NOT" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 777,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "tok_not" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 778,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 779,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 780,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 781,
      children: [
        {
          tag: "opcode",
          value: "EOR",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 782,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 783,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 784,
      children: [
        {
          tag: "opcode",
          value: "EOR",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 785,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 786,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 788,
      children: [
        { tag: "sym", value: "throw_bad_base" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 789,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 162 },
            { tag: "string", value: "Bad base" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 791,
      children: [{ tag: "comment", value: " ( = nested" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 792,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "(" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 793,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 794,
      children: [{ tag: "comment", value: " { = nested" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 795,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "{" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 796,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 797,
      children: [{ tag: "comment", value: " [ = nested" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 798,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "[" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 799,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 800,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "chars", value: "[" },
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
      file: "src/muts.a",
      ln: 801,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 802,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 803,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_hex" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 804,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 805,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 806,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 807,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 808,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 809,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 810,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 163 },
            { tag: "string", value: "Missing bracket" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 812,
      children: [{ tag: "comment", value: " ' = char const" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 813,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "string", value: "'" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 814,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 815,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 816,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 817,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 818,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 819,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "string", value: "'" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 820,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "syn_err_jump" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 821,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 823,
      children: [{ tag: "comment", value: " : = variable lookup" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 824,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: ":" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 825,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 826,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 827,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 828,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "A" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 829,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 831,
      children: [
        { tag: "sym", value: "throw_badvar" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 832,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 164 },
            { tag: "string", value: "Bad variable" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 834,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "chars", value: "Z" },
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
      file: "src/muts.a",
      ln: 835,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_badvar" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 836,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 837,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 838,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "vars" },
                    {
                      tag: "mul",
                      children: [
                        { tag: "chars", value: "?" },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 839,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 840,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    {
                      tag: "add",
                      children: [
                        { tag: "sym", value: "vars" },
                        {
                          tag: "mul",
                          children: [
                            { tag: "chars", value: "?" },
                            { tag: "number", value: 2 }
                          ]
                        }
                      ]
                    },
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
      file: "src/muts.a",
      ln: 841,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 842,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 844,
      children: [
        {
          tag: "comment",
          value:
            " The top 8k of the ROM can optionally contain an assembler which"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 845,
      children: [
        {
          tag: "comment",
          value:
            " handles the ASSEMBLE command and can also extend the expression"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 846,
      children: [
        {
          tag: "comment",
          value: " evaluator by parsing additional atoms here."
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 848,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "x_present" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 849,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 850,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 851,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "x_eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 853,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 854,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 855,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_parse" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 856,
      children: [
        {
          tag: "opcode",
          value: "BMI",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "syn_err_jump" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 857,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 858,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "to_upper" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 859,
      children: [{ tag: "comment", value: " k suffix?" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 860,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "K" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 861,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 862,
      children: [{ tag: "comment", value: " multiply by 1024" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 863,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 864,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 865,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 866,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 867,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 868,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 869,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 871,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 873,
      children: [
        { tag: "sym", value: "syn_err_jump" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "syntax_error" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 875,
      children: [
        { tag: "sym", value: "eval_b" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_atom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 876,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 877,
      children: [{ tag: "comment", value: " * = multiply" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 878,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "*" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 879,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 880,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 881,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_b" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 882,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 883,
      children: [
        {
          tag: "macroCall",
          value: "MOV16Z",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 884,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        },
        { tag: "comment", value: " bits" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 885,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LSR",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 886,
      children: [
        {
          tag: "opcode",
          value: "ROR",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 887,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 888,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 889,
      children: [
        {
          tag: "macroCall",
          value: "ADC16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "ptr0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 890,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "macroCall",
          value: "ASL16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 891,
      children: [
        {
          tag: "opcode",
          value: "DEY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 892,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 893,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 895,
      children: [{ tag: "comment", value: " / = divide" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 896,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "/" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 897,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 898,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "divmod" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 899,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 900,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 901,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "+++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 903,
      children: [{ tag: "comment", value: " % = mod" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 904,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "%" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 905,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 906,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "divmod" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 907,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 908,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 909,
      children: [
        { tag: "sym", value: "+++" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 910,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 911,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 913,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 915,
      children: [
        { tag: "sym", value: "eval_c" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_b" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 916,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 917,
      children: [{ tag: "comment", value: " + = add" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 918,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 919,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 920,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 921,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 922,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 923,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 924,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_c" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 925,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 926,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 927,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 928,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 929,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 930,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 931,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 932,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 934,
      children: [{ tag: "comment", value: " - = subtract" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 935,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 936,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 937,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 938,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 939,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 940,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 941,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_c" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 942,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 943,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 944,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 945,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 946,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 947,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 948,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 949,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 951,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 953,
      children: [
        { tag: "sym", value: "divmod" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 954,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_b" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 955,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 956,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 957,
      children: [
        {
          tag: "macroCall",
          value: "MOV16Z",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 958,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "macroCall",
          value: "ASL16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 959,
      children: [
        {
          tag: "macroCall",
          value: "ROL16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 960,
      children: [
        {
          tag: "macroCall",
          value: "CMP16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 961,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 962,
      children: [
        {
          tag: "macroCall",
          value: "SBC16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 963,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 964,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "DEY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 965,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 966,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 968,
      children: [
        { tag: "sym", value: "eval_hex" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 969,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 970,
      children: [
        { tag: "sym", value: "eval_d" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_c" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 971,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "lookup_token" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 972,
      children: [{ tag: "comment", value: " AND" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 973,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "tok_and" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 974,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 975,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 976,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_d" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 977,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 978,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 979,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 980,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 981,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 982,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 983,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 985,
      children: [{ tag: "comment", value: " OR" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 986,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "tok_or" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 987,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 988,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 989,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_d" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 990,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 991,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 992,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 993,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 994,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 995,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 996,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 998,
      children: [{ tag: "comment", value: " EOR" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 999,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "tok_eor" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1000,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1001,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1002,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_d" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1003,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1004,
      children: [
        {
          tag: "opcode",
          value: "EOR",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1005,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1006,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1007,
      children: [
        {
          tag: "opcode",
          value: "EOR",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1008,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1009,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1011,
      children: [
        { tag: "sym", value: "unget" },
        {
          tag: "macroCall",
          value: "DEC16BUG",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1012,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1014,
      children: [
        { tag: "sym", value: "eval" },
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1015,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1016,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1017,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1018,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1019,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1020,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1021,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1022,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_hex" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1023,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_comma" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1024,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1025,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1026,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1027,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1028,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1029,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1030,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1031,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1032,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1034,
      children: [
        { tag: "sym", value: "eval_byte" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1035,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1036,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1037,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1038,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1039,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1040,
      children: [{ tag: "comment", value: ' "Byte out of range"' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1041,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 165 },
            { tag: "string", value: "Byte out of range" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1042,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1043,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1044,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1046,
      children: [
        { tag: "sym", value: "skip_comma" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1047,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "," }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1048,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1049,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1050,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1052,
      children: [
        { tag: "sym", value: "lookup_token" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmd_offset" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1053,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1054,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "cmdhelp" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1055,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "lookup_command" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1056,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1057,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "cmdhelp" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1058,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1059,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmd_offset" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1060,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1061,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1063,
      children: [
        { tag: "sym", value: "lookup_command" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1064,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1065,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 128 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1066,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc1" },
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
      file: "src/muts.a",
      ln: 1067,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1068,
      children: [
        { tag: "sym", value: "lc_next_cmd" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1069,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmd_offset" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1070,
      children: [
        { tag: "sym", value: "lc_next_char" },
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1071,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1072,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1073,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1074,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "cmd_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1075,
      children: [
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1076,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1077,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1078,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1079,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "lc_dot" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1080,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1081,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "lc_next_char" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1082,
      children: [
        { tag: "sym", value: "lc_match" },
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1083,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1084,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1085,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1086,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1087,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1088,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "lc_copy" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1089,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdline" },
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
      file: "src/muts.a",
      ln: 1090,
      children: [
        { tag: "sym", value: "lc_copy" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "cmd_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1091,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "cmdjmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1092,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1093,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1094,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1095,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "lc_copy" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1096,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc1" },
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
      file: "src/muts.a",
      ln: 1097,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1099,
      children: [
        { tag: "comment", value: " check for . abbreviation of command" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1100,
      children: [
        { tag: "sym", value: "lc_dot" },
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1101,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc1" },
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
      file: "src/muts.a",
      ln: 1102,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1103,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1104,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1105,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "cmd_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1106,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1107,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1108,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1109,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "." }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1110,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "lc_match" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1111,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1112,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1113,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1114,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1115,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "cmd_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1116,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "lc_next_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1117,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1119,
      children: [{ tag: "comment", value: ' "Syntax: "' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1120,
      children: [
        { tag: "sym", value: "syntax_prefix" },
        {
          tag: "directive",
          value: "TEXT",
          children: [{ tag: "string", value: "Syntax: " }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1122,
      children: [
        { tag: "sym", value: "check_eol" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1123,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "syntax_error" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1124,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1126,
      children: [
        { tag: "sym", value: "syntax_error" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1127,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1128,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc1" },
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
      file: "src/muts.a",
      ln: 1129,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 1130,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmd_offset" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1131,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1132,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "syn_copy" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1133,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1134,
      children: [{ tag: "comment", value: ' "Bad expression"' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1135,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 166 },
            { tag: "string", value: "Bad expression" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1136,
      children: [
        { tag: "sym", value: "syn_copy" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "syntax_prefix" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1137,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 1138,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1139,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 8 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1140,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "syn_copy" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1141,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "cmd_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1142,
      children: [
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1143,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1144,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 1145,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1146,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1147,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1148,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1149,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1150,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 1151,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1152,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "cmdhelp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1153,
      children: [
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1154,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1155,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 3 }
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
      file: "src/muts.a",
      ln: 1156,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1157,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1158,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1159,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1161,
      children: [
        { tag: "sym", value: "stack_jmp" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1162,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 3 }
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
      file: "src/muts.a",
      ln: 1163,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1165,
      children: [
        { tag: "sym", value: "parse_bytes" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1166,
      children: [
        { tag: "sym", value: "parse_bytes_tail" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_comma" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1167,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1168,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 34 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1169,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1170,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1171,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 34 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1172,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1173,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1174,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 34 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1175,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1176,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1177,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1178,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1179,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1181,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1182,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1184,
      children: [{ tag: "comment", value: " $ = peek?" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1185,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "$" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1186,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1187,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1188,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1189,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1190,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1191,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1193,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1194,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_comma" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1195,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_byte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1196,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1197,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_bytes_tail" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1199,
      children: [
        { tag: "sym", value: "+++" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "syntax_error" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1201,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1202,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1203,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1204,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1205,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1206,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "parse_bytes_tail" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1207,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1208,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1209,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1210,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1212,
      children: [
        { tag: "sym", value: "try_poke" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1213,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1214,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1215,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1217,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1218,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 167 },
            { tag: "string", value: "Read only memory" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1220,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1221,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1222,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1224,
      children: [
        { tag: "sym", value: "acc0_to_acc2" },
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1225,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1227,
      children: [
        { tag: "sym", value: "c_find" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_range" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1228,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1229,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1230,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1231,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 1232,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_bytes" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1233,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1234,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1235,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1236,
      children: [
        { tag: "sym", value: "--" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1237,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1238,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1239,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1240,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1241,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1242,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1243,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 1244,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1245,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1246,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1247,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1248,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1249,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1250,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 1251,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "macroCall",
          value: "CMP16",
          children: [
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1252,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1253,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1255,
      children: [
        { tag: "sym", value: "c_change" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1256,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1257,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_bytes" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1259,
      children: [
        { tag: "sym", value: "print_or_page" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1260,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "ret1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1261,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "," }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1262,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "print_or_page" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1263,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1264,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "P" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1265,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1266,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 14 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1267,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1268,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "print_or_page" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1269,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "L" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1270,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1271,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "enable_printer" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1272,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "print_or_page" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1274,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1275,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "ret1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1276,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "syntax_error" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1278,
      children: [
        { tag: "sym", value: "ret1" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1280,
      children: [{ tag: "comment", value: " flush buffers" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1281,
      children: [
        { tag: "sym", value: "enable_printer" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 15 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1282,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1283,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1284,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1285,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1286,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1287,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1288,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "*" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1289,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "ret1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1290,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1291,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1292,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1293,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1294,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1295,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1296,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1297,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 128 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1298,
      children: [
        {
          tag: "opcode",
          value: "DEY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1299,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 252 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1300,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1301,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 63 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1302,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_noprinter" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1303,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1304,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1306,
      children: [
        { tag: "sym", value: "throw_noprinter" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1307,
      children: [{ tag: "comment", value: ' "No printer"' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1308,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 168 },
            { tag: "string", value: "No printer" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1310,
      children: [
        { tag: "sym", value: "parse_range" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1311,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "acc0_to_acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1312,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1313,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "." }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1314,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1315,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1316,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "." }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1317,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1318,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "syntax_error" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1320,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1321,
      children: [{ tag: "comment", value: " $ffff = end of memory" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1322,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1323,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1324,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1325,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1327,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1329,
      children: [
        { tag: "sym", value: "reset_terminal" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1330,
      children: [{ tag: "comment", value: " disable printer, page mode off" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1331,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 3 },
            { tag: "number", value: 15 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1332,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1334,
      children: [
        { tag: "sym", value: "calc_columns" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osnewl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1335,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 8 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1336,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1337,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 134 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1338,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1339,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1340,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1341,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "number", value: 80 },
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
      file: "src/muts.a",
      ln: 1342,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1343,
      children: [{ tag: "opcode", value: "LSR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1344,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1346,
      children: [
        { tag: "sym", value: "ram_warning" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1347,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1348,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1349,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1350,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1351,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "RAM from " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1352,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1353,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1354,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1355,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1356,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1357,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "to " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1358,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1359,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1360,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1361,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1362,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1363,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "will be corrupted" },
            { tag: "number", value: 13 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1365,
      children: [
        { tag: "sym", value: "ask_continue" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1366,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "continue (Y/N) ? " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1367,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osrdch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1368,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1369,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1371,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1372,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "Y" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1373,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1374,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "N" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1375,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1376,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1377,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1378,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1379,
      children: [{ tag: "opcode", value: "LSR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1380,
      children: [
        { tag: "sym", value: "ret2" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1382,
      children: [
        { tag: "sym", value: "c_monitor" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1383,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1384,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1385,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1386,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "stack" },
            { tag: "sym", value: "cmdline" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1387,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 131 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1388,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1389,
      children: [
        {
          tag: "macroCall",
          value: "STXY",
          children: [
            {
              tag: "add",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 2 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1390,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 130 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1391,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1392,
      children: [
        {
          tag: "macroCall",
          value: "STXY",
          children: [
            {
              tag: "add",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 4 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1393,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1394,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 6 }
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
      file: "src/muts.a",
      ln: 1395,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1396,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1397,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osfile" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1398,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cur_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1399,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 142 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1400,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1402,
      children: [{ tag: "comment", value: " address" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1403,
      children: [
        { tag: "sym", value: "readline_parms" },
        {
          tag: "directive",
          value: "WORD",
          children: [{ tag: "sym", value: "cmd_line" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1404,
      children: [{ tag: "comment", value: " length" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1405,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "cmd_line_len" },
                { tag: "number", value: 2 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1406,
      children: [{ tag: "comment", value: " min char" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1407,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [{ tag: "chars", value: " " }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1408,
      children: [{ tag: "comment", value: " max char" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1409,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [{ tag: "number", value: 255 }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1411,
      children: [
        { tag: "sym", value: "empty" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 13 },
            { tag: "number", value: 0 },
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1413,
      children: [{ tag: "comment", value: " ROM service entry" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1414,
      children: [
        { tag: "sym", value: "language" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1415,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "ret2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1416,
      children: [
        {
          tag: "macroCall",
          value: "MOV16I",
          children: [
            { tag: "sym", value: "brkv" },
            { tag: "sym", value: "brk_handler" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1417,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1418,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 63 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1419,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "base_addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1420,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "base_addr" },
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
      file: "src/muts.a",
      ln: 1421,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "rom_sel" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1422,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1423,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1424,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1425,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1426,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "empty" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1427,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "brk_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1428,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1429,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1430,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1431,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "number", value: 1540 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1432,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 240 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1433,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_s" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1434,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 93 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1435,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "prompt" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1436,
      children: [
        {
          tag: "opcode",
          value: "CLI",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1437,
      children: [
        {
          tag: "opcode",
          value: "CLD",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1438,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1440,
      children: [
        { tag: "sym", value: "brk_handler" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1441,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1442,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1443,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "err" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1444,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1445,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1446,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1447,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "err" },
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
      file: "src/muts.a",
      ln: 1448,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1449,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1450,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1451,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1452,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1453,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1454,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 1455,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1456,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "bp_handler" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1458,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1459,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1460,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1461,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1462,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "mul",
                  children: [
                    { tag: "sym", value: "n_breakpoints" },
                    { tag: "number", value: 4 }
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
      file: "src/muts.a",
      ln: 1463,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1464,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 126 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1465,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1466,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osnewl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1467,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1468,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "err" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1469,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1470,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1471,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1472,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1473,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1474,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1475,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1476,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1477,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CLI",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1478,
      children: [
        {
          tag: "opcode",
          value: "CLD",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1479,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1480,
      children: [
        {
          tag: "opcode",
          value: "TXS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1481,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osnewl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1483,
      children: [{ tag: "comment", value: " start of repl loop" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1484,
      children: [
        { tag: "sym", value: "repl" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "set_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1485,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1486,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "prompt" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1487,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1488,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1489,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1490,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1491,
      children: [{ tag: "comment", value: " readline_parms" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1492,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "lo",
                  children: [{ tag: "sym", value: "readline_parms" }]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1493,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "hi",
                  children: [{ tag: "sym", value: "readline_parms" }]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1494,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osword" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1495,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "repl_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1496,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1498,
      children: [
        { tag: "sym", value: "repl_next" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 7 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1499,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdline" },
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
      file: "src/muts.a",
      ln: 1500,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1501,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1503,
      children: [{ tag: "comment", value: " :<var> =" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1504,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: ":" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1505,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1506,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1507,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1508,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "A" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1509,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1510,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw_badvar" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1512,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "chars", value: "Z" },
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
      file: "src/muts.a",
      ln: 1513,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1514,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1515,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1516,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1517,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmd_offset" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1518,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1519,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "string", value: "=" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1520,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1522,
      children: [
        { tag: "sym", value: "throw_missingeq" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1523,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 169 },
            { tag: "string", value: "Missing =" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1525,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1526,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1527,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1528,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "vars" },
                    {
                      tag: "mul",
                      children: [
                        { tag: "chars", value: "?" },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 1529,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1530,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    {
                      tag: "add",
                      children: [
                        { tag: "sym", value: "vars" },
                        {
                          tag: "mul",
                          children: [
                            { tag: "chars", value: "?" },
                            { tag: "number", value: 2 }
                          ]
                        }
                      ]
                    },
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
      file: "src/muts.a",
      ln: 1531,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1533,
      children: [{ tag: "comment", value: " / = set prompt" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1534,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "/" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1535,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1536,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1537,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1538,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1539,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1540,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "prompt" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1541,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1542,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1543,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1544,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "prompt" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1545,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1547,
      children: [{ tag: "comment", value: " ? = show help" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1548,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "?" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1549,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1550,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_help" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1551,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1553,
      children: [{ tag: "comment", value: " $<addr> = bytestring" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1554,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "$" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1555,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1556,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1557,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1558,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1559,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 61 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1560,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "throw_missingeq" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1561,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_bytes" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1562,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1563,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1564,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1566,
      children: [{ tag: "comment", value: " attempt command" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1567,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1568,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "dispatch_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1569,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1570,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1572,
      children: [{ tag: "comment", value: " fallback to oscli" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1573,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                { tag: "lo", children: [{ tag: "sym", value: "cmd_line" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1574,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                { tag: "hi", children: [{ tag: "sym", value: "cmd_line" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1575,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oscli" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1576,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1578,
      children: [
        { tag: "sym", value: "bp_handler" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1579,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_x" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1580,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "number", value: 252 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1581,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_a" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1582,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_y" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1583,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1584,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_p" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1585,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1586,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "Break: PC = " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1587,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1588,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1589,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1590,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1591,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1592,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 160 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1593,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1594,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "repl_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1596,
      children: [
        { tag: "sym", value: "do_calc" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1597,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1598,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1599,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 18 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1600,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1601,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 8 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1602,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 8 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1603,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1604,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1605,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 7 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1606,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1607,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1608,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 6 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1609,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1610,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "number", value: 1026 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1611,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1612,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1613,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 36 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1614,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1615,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cur_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1616,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "rom_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1617,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1618,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1619,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1620,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 13 },
            { tag: "string", value: "Base " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1621,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1622,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1623,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1624,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1625,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1626,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1627,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1628,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1629,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1630,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1631,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1632,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: ": " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1633,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1634,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1635,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1636,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1637,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1639,
      children: [
        { tag: "sym", value: "radix_print" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1640,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1641,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_out" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1642,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1643,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1645,
      children: [
        { tag: "sym", value: "c_calc" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "do_calc" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1646,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1648,
      children: [
        { tag: "sym", value: "c_move" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1649,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1650,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1651,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: ">" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1652,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1653,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1654,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1655,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1656,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1657,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "acc0_to_acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1658,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1659,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 131 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1660,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1661,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1662,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1663,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1664,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 1665,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1666,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1667,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1668,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1669,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1670,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1671,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1672,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1673,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "Destination <= " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1674,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1675,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1676,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1677,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1678,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1679,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "ask_continue" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1680,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1681,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1683,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1684,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1685,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1686,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1687,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1688,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1689,
      children: [
        {
          tag: "macroCall",
          value: "CMP16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc2" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1690,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "move_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1691,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1692,
      children: [
        {
          tag: "macroCall",
          value: "ADC16",
          children: [
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1693,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1694,
      children: [
        {
          tag: "macroCall",
          value: "ADC16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1695,
      children: [
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1696,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1697,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1698,
      children: [
        {
          tag: "macroCall",
          value: "DEC16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1699,
      children: [
        {
          tag: "macroCall",
          value: "DEC16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1700,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "countdown" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1701,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1702,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1704,
      children: [
        { tag: "sym", value: "move_next" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1705,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1706,
      children: [
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1707,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "countdown" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1708,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "move_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1709,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1710,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1711,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1712,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1713,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["(ind)"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1715,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1717,
      children: [
        { tag: "sym", value: "countdown" },
        {
          tag: "macroCall",
          value: "DEC16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1718,
      children: [
        {
          tag: "macroCall",
          value: "CMZ16",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1719,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1721,
      children: [
        { tag: "sym", value: "set_private" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 255 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1722,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1724,
      children: [
        { tag: "sym", value: "clr_private" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1725,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cur_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1726,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "rom_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1727,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1729,
      children: [
        { tag: "sym", value: "get_private" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cur_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1730,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "rom_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1731,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1733,
      children: [
        { tag: "sym", value: "check_cmd_mode" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "get_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1734,
      children: [
        {
          tag: "opcode",
          value: "BMI",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1735,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1736,
      children: [{ tag: "comment", value: ' "Command mode only"' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1737,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 170 },
            { tag: "string", value: "Command mode only" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1739,
      children: [{ tag: "sym", value: "addr_modes" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1740,
      children: [
        { tag: "sym", value: "addr_zp" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_zp" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1741,
      children: [
        { tag: "sym", value: "addr_zpi" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_zpi" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1742,
      children: [
        { tag: "sym", value: "addr_abs" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_abs" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1743,
      children: [
        { tag: "sym", value: "addr_absix" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_absix" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1744,
      children: [
        { tag: "sym", value: "addr_absy" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_absy" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1745,
      children: [
        { tag: "sym", value: "addr_absi" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_absi" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1746,
      children: [
        { tag: "sym", value: "addr_zpiy" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_zpiy" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1747,
      children: [
        { tag: "sym", value: "addr_zpix" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_zpix" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1748,
      children: [
        { tag: "sym", value: "addr_a" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_a" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1749,
      children: [
        { tag: "sym", value: "addr_impl" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_impl" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1750,
      children: [
        { tag: "sym", value: "addr_imm" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_imm" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1751,
      children: [
        { tag: "sym", value: "addr_rel" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "a_rel" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1753,
      children: [
        { tag: "sym", value: "a_zp" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "H1" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1754,
      children: [
        { tag: "sym", value: "a_zpi" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "H1,I" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1755,
      children: [
        { tag: "sym", value: "a_abs" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "2" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1756,
      children: [
        { tag: "sym", value: "a_absix" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "2,I" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1757,
      children: [
        { tag: "sym", value: "a_absy" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "2,Y" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1758,
      children: [
        { tag: "sym", value: "a_absi" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(2)" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1759,
      children: [
        { tag: "sym", value: "a_zpiy" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(H1),Y" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1760,
      children: [
        { tag: "sym", value: "a_zpix" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "(H1,X)" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1761,
      children: [
        { tag: "sym", value: "a_a" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "A" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1762,
      children: [
        { tag: "sym", value: "a_impl" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: " " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1763,
      children: [
        { tag: "sym", value: "a_imm" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "#H1" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1764,
      children: [
        { tag: "sym", value: "a_rel" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "H+" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1765,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 13 },
            { tag: "number", value: 12 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1767,
      children: [
        {
          tag: "comment",
          value: " first two bytes are 5 bits-per-char encodings of mnemonic"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1768,
      children: [
        { tag: "comment", value: " second two bytes are mask and bit pattern" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1771,
      children: [
        { tag: "sym", value: "op_decode" },
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "C" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 144 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1772,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "C" },
            { tag: "chars", value: "S" },
            { tag: "number", value: 176 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1773,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "Q" },
            { tag: "number", value: 240 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1774,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "M" },
            { tag: "chars", value: "I" },
            { tag: "number", value: 48 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1775,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "N" },
            { tag: "chars", value: "E" },
            { tag: "number", value: 208 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1776,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "P" },
            { tag: "chars", value: "L" },
            { tag: "number", value: 16 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1777,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "R" },
            { tag: "chars", value: "K" },
            { tag: "number", value: 0 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1778,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "V" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 80 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1779,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "V" },
            { tag: "chars", value: "S" },
            { tag: "number", value: 112 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1780,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "L" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 24 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1781,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "L" },
            { tag: "chars", value: "D" },
            { tag: "number", value: 216 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1782,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "L" },
            { tag: "chars", value: "I" },
            { tag: "number", value: 88 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1783,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "L" },
            { tag: "chars", value: "V" },
            { tag: "number", value: 184 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1784,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "D" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 202 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1785,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "D" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "Y" },
            { tag: "number", value: 136 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1786,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "I" },
            { tag: "chars", value: "N" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 232 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1787,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "I" },
            { tag: "chars", value: "N" },
            { tag: "chars", value: "Y" },
            { tag: "number", value: 200 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1788,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "J" },
            { tag: "chars", value: "S" },
            { tag: "chars", value: "R" },
            { tag: "number", value: 32 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1789,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "N" },
            { tag: "chars", value: "O" },
            { tag: "chars", value: "P" },
            { tag: "number", value: 234 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1790,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "P" },
            { tag: "chars", value: "H" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 72 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1791,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "P" },
            { tag: "chars", value: "H" },
            { tag: "chars", value: "P" },
            { tag: "number", value: 8 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1792,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "P" },
            { tag: "chars", value: "L" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 104 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1793,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "P" },
            { tag: "chars", value: "L" },
            { tag: "chars", value: "P" },
            { tag: "number", value: 40 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1794,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "R" },
            { tag: "chars", value: "T" },
            { tag: "chars", value: "I" },
            { tag: "number", value: 64 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1795,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "R" },
            { tag: "chars", value: "T" },
            { tag: "chars", value: "S" },
            { tag: "number", value: 96 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1796,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 56 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1797,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "D" },
            { tag: "number", value: 248 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1798,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "I" },
            { tag: "number", value: 120 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1799,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "T" },
            { tag: "chars", value: "A" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 170 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1800,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "T" },
            { tag: "chars", value: "A" },
            { tag: "chars", value: "Y" },
            { tag: "number", value: 168 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1801,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "T" },
            { tag: "chars", value: "S" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 186 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1802,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "T" },
            { tag: "chars", value: "X" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 138 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1803,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "T" },
            { tag: "chars", value: "X" },
            { tag: "chars", value: "S" },
            { tag: "number", value: 154 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1804,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "T" },
            { tag: "chars", value: "Y" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 152 },
            { tag: "number", value: 255 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1805,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "B" },
            { tag: "chars", value: "I" },
            { tag: "chars", value: "T" },
            { tag: "number", value: 36 },
            { tag: "number", value: 247 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1806,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "J" },
            { tag: "chars", value: "M" },
            { tag: "chars", value: "P" },
            { tag: "number", value: 76 },
            { tag: "number", value: 223 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1807,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "P" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 224 },
            { tag: "number", value: 243 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1808,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "P" },
            { tag: "chars", value: "Y" },
            { tag: "number", value: 192 },
            { tag: "number", value: 243 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1809,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "T" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 134 },
            { tag: "number", value: 231 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1810,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "T" },
            { tag: "chars", value: "Y" },
            { tag: "number", value: 132 },
            { tag: "number", value: 231 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1811,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "D" },
            { tag: "chars", value: "E" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 198 },
            { tag: "number", value: 231 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1812,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "I" },
            { tag: "chars", value: "N" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 230 },
            { tag: "number", value: 231 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1813,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "A" },
            { tag: "chars", value: "S" },
            { tag: "chars", value: "L" },
            { tag: "number", value: 2 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1814,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "L" },
            { tag: "chars", value: "S" },
            { tag: "chars", value: "R" },
            { tag: "number", value: 66 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1815,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "R" },
            { tag: "chars", value: "O" },
            { tag: "chars", value: "L" },
            { tag: "number", value: 34 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1816,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "R" },
            { tag: "chars", value: "O" },
            { tag: "chars", value: "R" },
            { tag: "number", value: 98 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1817,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "L" },
            { tag: "chars", value: "D" },
            { tag: "chars", value: "X" },
            { tag: "number", value: 162 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1818,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "L" },
            { tag: "chars", value: "D" },
            { tag: "chars", value: "Y" },
            { tag: "number", value: 160 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1819,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "T" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 129 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1820,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "A" },
            { tag: "chars", value: "D" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 97 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1821,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "A" },
            { tag: "chars", value: "N" },
            { tag: "chars", value: "D" },
            { tag: "number", value: 33 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1822,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "C" },
            { tag: "chars", value: "M" },
            { tag: "chars", value: "P" },
            { tag: "number", value: 193 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1823,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "E" },
            { tag: "chars", value: "O" },
            { tag: "chars", value: "R" },
            { tag: "number", value: 65 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1824,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "L" },
            { tag: "chars", value: "D" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 161 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1825,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "O" },
            { tag: "chars", value: "R" },
            { tag: "chars", value: "A" },
            { tag: "number", value: 1 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1826,
      children: [
        {
          tag: "macroCall",
          value: "MNEM",
          children: [
            { tag: "chars", value: "S" },
            { tag: "chars", value: "B" },
            { tag: "chars", value: "C" },
            { tag: "number", value: 225 },
            { tag: "number", value: 227 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1827,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 0 },
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1828,
      children: [{ tag: "sym", value: "op_decode_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1830,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1832,
      children: [
        { tag: "comment", value: " Maps opcode, mask to offset index in" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1833,
      children: [
        { tag: "comment", value: " addr_modes. Would be more efficient" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1834,
      children: [{ tag: "comment", value: " to map directly to offset" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1835,
      children: [
        { tag: "sym", value: "addr_decode" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 32 },
            { tag: "number", value: 255 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_abs" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1836,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 16 },
            { tag: "number", value: 31 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_rel" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1837,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 9 },
            { tag: "number", value: 31 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_imm" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1838,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 10 },
            { tag: "number", value: 159 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_a" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1839,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 8 },
            { tag: "number", value: 13 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_impl" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1840,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 159 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_impl" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1841,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 76 },
            { tag: "number", value: 255 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_abs" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1842,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 128 },
            { tag: "number", value: 157 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_imm" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1843,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 132 },
            { tag: "number", value: 157 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_zp" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1844,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 140 },
            { tag: "number", value: 157 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_abs" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1845,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 148 },
            { tag: "number", value: 157 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_zpi" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1846,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 156 },
            { tag: "number", value: 157 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_absix" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1847,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 108 },
            { tag: "number", value: 255 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_absi" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1848,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 0 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_zpix" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1849,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 4 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_zp" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1850,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 12 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_abs" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1851,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 16 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_zpiy" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1852,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 20 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_zpi" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1853,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 24 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_absy" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1854,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 28 },
            { tag: "number", value: 28 },
            {
              tag: "sub",
              children: [
                { tag: "sym", value: "addr_absix" },
                { tag: "sym", value: "addr_modes" }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1855,
      children: [{ tag: "sym", value: "addr_decode_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1857,
      children: [{ tag: "comment", value: " Illegal opcodes" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1858,
      children: [
        { tag: "sym", value: "bad_op" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 4 },
            { tag: "number", value: 12 },
            { tag: "number", value: 18 },
            { tag: "number", value: 20 },
            { tag: "number", value: 26 },
            { tag: "number", value: 28 },
            { tag: "number", value: 34 },
            { tag: "number", value: 50 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1859,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 52 },
            { tag: "number", value: 58 },
            { tag: "number", value: 60 },
            { tag: "number", value: 66 },
            { tag: "number", value: 68 },
            { tag: "number", value: 82 },
            { tag: "number", value: 84 },
            { tag: "number", value: 90 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1860,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 92 },
            { tag: "number", value: 98 },
            { tag: "number", value: 100 },
            { tag: "number", value: 114 },
            { tag: "number", value: 116 },
            { tag: "number", value: 122 },
            { tag: "number", value: 124 },
            { tag: "number", value: 128 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1861,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 130 },
            { tag: "number", value: 137 },
            { tag: "number", value: 146 },
            { tag: "number", value: 156 },
            { tag: "number", value: 158 },
            { tag: "number", value: 178 },
            { tag: "number", value: 194 },
            { tag: "number", value: 210 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1862,
      children: [
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 212 },
            { tag: "number", value: 218 },
            { tag: "number", value: 220 },
            { tag: "number", value: 226 },
            { tag: "number", value: 242 },
            { tag: "number", value: 244 },
            { tag: "number", value: 250 },
            { tag: "number", value: 252 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1863,
      children: [{ tag: "sym", value: "bad_op_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1865,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "stack_jmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1866,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1867,
      children: [
        { tag: "sym", value: "peek" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1868,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1869,
      children: [
        { tag: "sym", value: "read_rom" },
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1870,
      children: [
        {
          tag: "opcode",
          value: "SEI",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1871,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1872,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1873,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1874,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "number", value: 246 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1875,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 1876,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "number", value: 247 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1877,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "get_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1878,
      children: [
        {
          tag: "opcode",
          value: "BMI",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1879,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1880,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1881,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "rom_sel" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1882,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1883,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "number", value: 65465 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1884,
      children: [
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1885,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1886,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1887,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1888,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 7 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1889,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1890,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1891,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 10 }
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
      file: "src/muts.a",
      ln: 1892,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1893,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1894,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1895,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1896,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1897,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1899,
      children: [
        { tag: "sym", value: "dump_line" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1900,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1901,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 1902,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1903,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1904,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1905,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1906,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1907,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1908,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1909,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "peek" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1910,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1911,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1912,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1913,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1914,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1915,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1916,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1917,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1918,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 1919,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1920,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1921,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1922,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1923,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "peek" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1924,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "safe_ascii" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1925,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1926,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1927,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1928,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1929,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1931,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "." }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1932,
      children: [
        { tag: "sym", value: "safe_ascii" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1933,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1934,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1935,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1936,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1938,
      children: [
        { tag: "sym", value: "c_mem" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_range" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1939,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "calc_columns" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1940,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1941,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "print_or_page" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1942,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1943,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1944,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1945,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "dump_line" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1946,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1947,
      children: [
        {
          tag: "macroCall",
          value: "CMP16",
          children: [
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1948,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1949,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1950,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "reset_terminal" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1952,
      children: [
        { tag: "sym", value: "decode_admode" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1953,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1954,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1955,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1956,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "addr_decode" },
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
      file: "src/muts.a",
      ln: 1957,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "addr_decode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1958,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1959,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1960,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1961,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1962,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1963,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "add",
                  children: [
                    {
                      tag: "sub",
                      children: [
                        { tag: "sym", value: "addr_decode_end" },
                        { tag: "sym", value: "addr_decode" }
                      ]
                    },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 1964,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1965,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1966,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1967,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "addr_decode" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 1968,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 12 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1969,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1970,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc3" },
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
      file: "src/muts.a",
      ln: 1971,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1972,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1973,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1974,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1975,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "addr_modes" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1976,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1977,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "addr_modes" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1978,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1979,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1981,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1982,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1983,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1984,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1985,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1987,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1988,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1989,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "pr_sym16" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1990,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1992,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1993,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1994,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1995,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1996,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1997,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1998,
      children: [
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 1999,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2000,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2001,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2002,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2003,
      children: [
        { tag: "sym", value: "+++" },
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2004,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2005,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2006,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2007,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2008,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2009,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "pr_addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2010,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2011,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2013,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "I" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2014,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2015,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc3" },
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
      file: "src/muts.a",
      ln: 2017,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "H" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2018,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2019,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "hex_pfx" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2020,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2021,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2023,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2025,
      children: [
        { tag: "sym", value: "pr_addr" },
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2026,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2027,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2028,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2029,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2030,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 2031,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2032,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2033,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2035,
      children: [
        { tag: "sym", value: "decode_instr" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2036,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "X" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2037,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc3" },
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
      file: "src/muts.a",
      ln: 2038,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2040,
      children: [{ tag: "comment", value: " illegal op?" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2041,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2042,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "bad_op" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2043,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2044,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2045,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "bad_op_end" },
                    { tag: "sym", value: "bad_op" }
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
      file: "src/muts.a",
      ln: 2046,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2047,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2048,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2049,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2050,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2051,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 11 }]
            }
          ]
        },
        { tag: "comment", value: " indicate bad op" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2052,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2053,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc3" },
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
      file: "src/muts.a",
      ln: 2055,
      children: [{ tag: "comment", value: " lookup op" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2056,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2057,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2058,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2059,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "op_decode" },
                    { tag: "number", value: 3 }
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
      file: "src/muts.a",
      ln: 2060,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "op_decode" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 2061,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2062,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2063,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2064,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2065,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2066,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2067,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "op_decode_end" },
                    { tag: "sym", value: "op_decode" }
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
      file: "src/muts.a",
      ln: 2068,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2069,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2070,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        },
        { tag: "comment", value: " found match" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2072,
      children: [{ tag: "comment", value: " stash packed mnemonic" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2073,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "op_decode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2074,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2075,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "op_decode" },
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
      file: "src/muts.a",
      ln: 2076,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 2078,
      children: [{ tag: "comment", value: " decode 2 bytes -> 3 chars" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2079,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2080,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2081,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2082,
      children: [
        { tag: "sym", value: "--" },
        {
          tag: "macroCall",
          value: "ASL16",
          children: [{ tag: "sym", value: "stack" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2083,
      children: [{ tag: "opcode", value: "ROL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2084,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2085,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2086,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2087,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "?" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2088,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2089,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "X" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2090,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2091,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc3" },
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
      file: "src/muts.a",
      ln: 2092,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "DEY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2093,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2094,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2095,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2097,
      children: [
        { tag: "sym", value: "dis_op" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "pr_addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2098,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2099,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2100,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "decode_instr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2101,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "decode_admode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2102,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 134 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2103,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2104,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2105,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2106,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2107,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 19 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2108,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2109,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2110,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 11 }
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
      file: "src/muts.a",
      ln: 2111,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2112,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2113,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2114,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2115,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 134 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2116,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2117,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2118,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2119,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2120,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 29 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2121,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2122,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2123,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 11 }
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
      file: "src/muts.a",
      ln: 2124,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "safe_ascii" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2125,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2126,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2127,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2128,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2130,
      children: [
        { tag: "sym", value: "c_base" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2131,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2132,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2133,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "base_addr" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2134,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2136,
      children: [
        { tag: "sym", value: "copyright_marker" },
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 0 },
            { tag: "string", value: "(C)" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2138,
      children: [
        { tag: "sym", value: "c_select" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2139,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_byte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2140,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2141,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2142,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2143,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2144,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2145,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2146,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 171 },
            { tag: "string", value: "Bad ROM" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2147,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "rom_sel" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2148,
      children: [
        {
          tag: "macroCall",
          value: "MOV16I",
          children: [
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "copyright_offset" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2149,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2150,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2151,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2152,
      children: [
        { tag: "sym", value: "--" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2153,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2154,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2155,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2156,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2157,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2158,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "copyright_marker" }]
            }
          ]
        },
        { tag: "comment", value: " seems dodgy" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2159,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2160,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2161,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2162,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "--" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2163,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 9 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2164,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2165,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2166,
      children: [{ tag: "comment", value: ' "Rom: "' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2167,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "Rom: " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2168,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2169,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2170,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2171,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2173,
      children: [
        { tag: "sym", value: "c_dis" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "parse_range" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2174,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "get_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2175,
      children: [
        {
          tag: "opcode",
          value: "BMI",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2176,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2177,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2178,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2180,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "macroCall",
          value: "CMZ16",
          children: [{ tag: "sym", value: "base_addr" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2181,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2182,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "base_addr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2183,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "base_addr" },
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
      file: "src/muts.a",
      ln: 2184,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2185,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 2186,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2187,
      children: [
        {
          tag: "macroCall",
          value: "SBC16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc2" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2188,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hex_prefix" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2189,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "print_or_page" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2190,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "dis_op" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2191,
      children: [
        {
          tag: "macroCall",
          value: "CMP16",
          children: [
            { tag: "sym", value: "acc2" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2192,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2193,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "reset_terminal" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2195,
      children: [
        { tag: "sym", value: "hex_prefix" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2196,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "H" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2197,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2198,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2199,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2200,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2201,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "&" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2202,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "hex_pfx" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2203,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2205,
      children: [
        { tag: "sym", value: "service" },
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2206,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2207,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2208,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2209,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2210,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2211,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2212,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2213,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2214,
      children: [
        {
          tag: "macroCall",
          value: "ADCA16",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2215,
      children: [
        {
          tag: "opcode",
          value: "TSX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2216,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 5 }
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
      file: "src/muts.a",
      ln: 2218,
      children: [{ tag: "comment", value: " star command not recognised?" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2219,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2220,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "star_command" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2222,
      children: [{ tag: "comment", value: " *help?" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2223,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 9 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2224,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "help" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2226,
      children: [
        { tag: "sym", value: "service_done" },
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "cmdline" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2227,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2228,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2230,
      children: [
        { tag: "sym", value: "service_exit" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2231,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2232,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2233,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2234,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2236,
      children: [
        { tag: "sym", value: "help" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2237,
      children: [
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2238,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2239,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2240,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2241,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "lookup_command" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2242,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 143 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2243,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2244,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_help" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2245,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "+++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2247,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "pr_banner" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2248,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "service_done" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2250,
      children: [
        { tag: "sym", value: "star_command" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "clr_private" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2251,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "dispatch_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2252,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2253,
      children: [
        { tag: "sym", value: "+++" },
        {
          tag: "opcode",
          value: "TSX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2254,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2255,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 5 }
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
      file: "src/muts.a",
      ln: 2256,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2257,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2258,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2259,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2260,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "service_exit" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2261,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "service_done" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2263,
      children: [
        { tag: "sym", value: "regnames" },
        {
          tag: "directive",
          value: "TEXT",
          children: [{ tag: "string", value: "AXYS" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2264,
      children: [{ tag: "sym", value: "regnames_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2266,
      children: [
        { tag: "sym", value: "flagnames" },
        {
          tag: "directive",
          value: "TEXT",
          children: [{ tag: "string", value: "nv.bdizc" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2267,
      children: [{ tag: "sym", value: "flagnames_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2269,
      children: [
        { tag: "sym", value: "show_regs" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2270,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2271,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "regnames" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2272,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2273,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2274,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2275,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: " = " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2276,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2277,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2278,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2279,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "vars" },
                    {
                      tag: "mul",
                      children: [
                        { tag: "chars", value: "?" },
                        { tag: "number", value: 2 }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          tag: "comment",
          value: " odd calculation - would expect to sub from base"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2280,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2281,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2282,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "regnames_end" },
                    { tag: "sym", value: "regnames" }
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
      file: "src/muts.a",
      ln: 2283,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2284,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2285,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 13 },
            { tag: "string", value: "P = " },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2287,
      children: [
        { tag: "sym", value: "show_flags" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2288,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_p" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2289,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "." }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2290,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2291,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2292,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y", "zpg,Y"],
              children: [{ tag: "sym", value: "flagnames" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2293,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2294,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2295,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2296,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2297,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2298,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "flagnames_end" },
                    { tag: "sym", value: "flagnames" }
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
      file: "src/muts.a",
      ln: 2299,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2300,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2302,
      children: [
        { tag: "sym", value: "c_regs" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_regs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2303,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2305,
      children: [
        { tag: "sym", value: "c_go" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2306,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2307,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2308,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2309,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2310,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2311,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "regnames" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2312,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2313,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2314,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_byte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2315,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2316,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "vars" },
                    {
                      tag: "mul",
                      children: [
                        { tag: "chars", value: "?" },
                        { tag: "number", value: 2 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 2317,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2318,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "regnames_end" },
                    { tag: "sym", value: "regnames" }
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
      file: "src/muts.a",
      ln: 2319,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2320,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "syntax_error" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2322,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2323,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "load_regs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2324,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "go_acc" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2325,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "save_regs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2326,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2328,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2330,
      children: [
        { tag: "sym", value: "go_acc" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["(ind)"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2332,
      children: [
        { tag: "sym", value: "load_regs" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_p" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2333,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2334,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_a" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2335,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_x" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2336,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_y" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2337,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2338,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2340,
      children: [
        { tag: "sym", value: "save_regs" },
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2341,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_a" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2342,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_x" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2343,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_y" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2344,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2345,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_p" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2346,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2348,
      children: [
        { tag: "sym", value: "c_where" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2349,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2350,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2351,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "Breakpoints:" },
            { tag: "number", value: 13 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2352,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2353,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2354,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2355,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2356,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2357,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2358,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2359,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2360,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2361,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2362,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2363,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2364,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "mul",
                  children: [
                    { tag: "sym", value: "n_breakpoints" },
                    { tag: "number", value: 4 }
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
      file: "src/muts.a",
      ln: 2365,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2366,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2368,
      children: [
        { tag: "sym", value: "c_set" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2369,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2370,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2371,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2372,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "ptr0" },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2373,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2374,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2375,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2376,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2377,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2378,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2379,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2380,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "mul",
                  children: [
                    { tag: "sym", value: "n_breakpoints" },
                    { tag: "number", value: 4 }
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
      file: "src/muts.a",
      ln: 2381,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2382,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2383,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 172 },
            { tag: "string", value: "No room" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2384,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2385,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2386,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2387,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 2388,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2389,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "try_poke" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2390,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2391,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2392,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2393,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2394,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2395,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2396,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2398,
      children: [
        { tag: "sym", value: "c_clr" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2399,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2400,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2401,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2402,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2403,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2404,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2405,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2406,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2407,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2408,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2409,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2410,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2411,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 2412,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2413,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2414,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2415,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2416,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2418,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2419,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2420,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2421,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2422,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "mul",
                  children: [
                    { tag: "sym", value: "n_breakpoints" },
                    { tag: "number", value: 4 }
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
      file: "src/muts.a",
      ln: 2423,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2424,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2425,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 173 },
            { tag: "string", value: "Breakpoint not found" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2426,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2427,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2428,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2429,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2430,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2431,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2432,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2433,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2434,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2435,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 2436,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2437,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2438,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "breakpoints" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2439,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "breakpoints" },
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
      file: "src/muts.a",
      ln: 2440,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2441,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2442,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2443,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2444,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "mul",
                  children: [
                    { tag: "sym", value: "n_breakpoints" },
                    { tag: "number", value: 4 }
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
      file: "src/muts.a",
      ln: 2445,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2446,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2448,
      children: [
        { tag: "sym", value: "c_onbrk" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2449,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2450,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2451,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "brk_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2452,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2453,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2454,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2455,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2457,
      children: [
        { tag: "sym", value: "get_put_parms" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2458,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 9 }
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
      file: "src/muts.a",
      ln: 2459,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 6 }
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
      file: "src/muts.a",
      ln: 2460,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            {
              tag: "add",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 7 }
              ]
            },
            { tag: "sym", value: "acc0" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2462,
      children: [{ tag: "comment", value: " page" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2463,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 131 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2464,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2465,
      children: [
        {
          tag: "macroCall",
          value: "STXY",
          children: [
            {
              tag: "add",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2467,
      children: [{ tag: "comment", value: " machine address" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2468,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 130 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2469,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2470,
      children: [
        {
          tag: "macroCall",
          value: "STXY",
          children: [
            {
              tag: "add",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 3 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2472,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2473,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 5 }
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
      file: "src/muts.a",
      ln: 2474,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2475,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                { tag: "lo", children: [{ tag: "sym", value: "stack" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2476,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                { tag: "hi", children: [{ tag: "sym", value: "stack" }] }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2477,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2479,
      children: [
        { tag: "sym", value: "get_drive" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2480,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2481,
      children: [{ tag: "comment", value: " machine high order address" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2482,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 130 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2483,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2484,
      children: [
        {
          tag: "macroCall",
          value: "STXY",
          children: [
            {
              tag: "add",
              children: [
                { tag: "sym", value: "stack" },
                { tag: "number", value: 3 }
              ]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2485,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "lo",
                  children: [
                    {
                      tag: "add",
                      children: [
                        { tag: "sym", value: "stack" },
                        { tag: "number", value: 8 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 2486,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 2487,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "hi",
                  children: [
                    {
                      tag: "add",
                      children: [
                        { tag: "sym", value: "stack" },
                        { tag: "number", value: 8 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 2488,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 2 }
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
      file: "src/muts.a",
      ln: 2489,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 6 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2490,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2491,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osgbpb" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2492,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 9 }
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
      file: "src/muts.a",
      ln: 2493,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2494,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2496,
      children: [
        { tag: "sym", value: "c_verify" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "get_drive" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2497,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2498,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2499,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2500,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2501,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2502,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2504,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2505,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_byte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2506,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2507,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2508,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2509,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2510,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2512,
      children: [
        { tag: "sym", value: "throw_baddrive" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2513,
      children: [{ tag: "comment", value: ' "Bad drive"' }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2514,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 174 },
            { tag: "string", value: "Bad drive" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2516,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "star_drive" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2517,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2518,
      children: [
        {
          tag: "macroCall",
          value: "MOV16Z",
          children: [{ tag: "sym", value: "acc0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2519,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "disk_size" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2520,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2521,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2522,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2523,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 42 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2524,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 95 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2525,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "get_put_parms" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2526,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osword" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2527,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2528,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 10 }
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
      file: "src/muts.a",
      ln: 2529,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2530,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "?" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2531,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2532,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2533,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2534,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2535,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2536,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2537,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2538,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2539,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2540,
      children: [
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2541,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2542,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2543,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2544,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "star_drive" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2546,
      children: [
        { tag: "sym", value: "disk_size" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdhelp" },
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
      file: "src/muts.a",
      ln: 2547,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2548,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2549,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2550,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "lo",
                  children: [
                    {
                      tag: "add",
                      children: [
                        { tag: "sym", value: "cmdhelp" },
                        { tag: "number", value: 1 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 2551,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "hi",
                  children: [
                    {
                      tag: "add",
                      children: [
                        { tag: "sym", value: "cmdhelp" },
                        { tag: "number", value: 1 }
                      ]
                    }
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
      file: "src/muts.a",
      ln: 2552,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 126 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2553,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osword" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2554,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2555,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2556,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2557,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdhelp" },
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
      file: "src/muts.a",
      ln: 2558,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2560,
      children: [
        { tag: "sym", value: "drive_cmd" },
        {
          tag: "directive",
          value: "TEXT",
          children: [{ tag: "string", value: "DRIVE " }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2561,
      children: [{ tag: "sym", value: "drive_cmd_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2563,
      children: [
        { tag: "sym", value: "star_drive" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2564,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2565,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "drive_cmd" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2566,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 10 }
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
      file: "src/muts.a",
      ln: 2567,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2568,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "drive_cmd_end" },
                    { tag: "sym", value: "drive_cmd" }
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
      file: "src/muts.a",
      ln: 2569,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2570,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2571,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2572,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 16 }
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
      file: "src/muts.a",
      ln: 2573,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2574,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 17 }
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
      file: "src/muts.a",
      ln: 2575,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2576,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2577,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oscli" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2579,
      children: [
        { tag: "sym", value: "show_fkeys" },
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2580,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_fkey" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2581,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2582,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2583,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2584,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2586,
      children: [
        { tag: "sym", value: "c_flist" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "skip_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2587,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "show_fkeys" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2588,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "unget" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2589,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval_byte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2590,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2591,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2592,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2593,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 251 },
            { tag: "string", value: "Bad key" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2594,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2596,
      children: [
        { tag: "sym", value: "show_fkey" },
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2597,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2598,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "*KEY" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2599,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2600,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2601,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2602,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2603,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "radix_print" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2604,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2605,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 128 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2606,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2607,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2608,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 138 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2609,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2610,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2611,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2612,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2613,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2614,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2615,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 129 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2616,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2617,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2618,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2619,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2620,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2621,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2622,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "esc_char" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2623,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2625,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2626,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2627,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2628,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2629,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2631,
      children: [
        { tag: "sym", value: "esc_char" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "|" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2632,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 128 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2633,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2634,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2635,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2636,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2637,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "!" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2638,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2639,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2640,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2641,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2642,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2643,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2644,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2645,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2646,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2647,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "@" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2648,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "|" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2649,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2650,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2651,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 127 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2652,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2653,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2654,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2655,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "?" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2656,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2658,
      children: [
        { tag: "sym", value: "times3" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2659,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2660,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2661,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2662,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2664,
      children: [
        { tag: "sym", value: "div3" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2665,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 8 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2666,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2667,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "ASL",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2668,
      children: [{ tag: "opcode", value: "ROL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2669,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2670,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2671,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2672,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2673,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2674,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2675,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 2676,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2678,
      children: [
        { tag: "sym", value: "show_line" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2679,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "cursor_off" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2680,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2681,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2682,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2683,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "dump_line" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2684,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 134 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2685,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2686,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 31 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2687,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2688,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2689,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2690,
      children: [
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2691,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2692,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2693,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "cursor_on" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2695,
      children: [
        { tag: "sym", value: "c_edit" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2696,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "acc0_to_acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2697,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_eol" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2698,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2699,
      children: [
        { tag: "comment", value: " restore default windows, clear screen" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2700,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 26 },
            { tag: "number", value: 12 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2701,
      children: [
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2702,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "calc_columns" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2703,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2704,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2705,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 2706,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2707,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2708,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 8 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2709,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_copy_layout" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2710,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "layout_80" },
                    { tag: "sym", value: "layout_40" }
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
      file: "src/muts.a",
      ln: 2711,
      children: [
        { tag: "sym", value: "edit_copy_layout" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,Y"],
              children: [{ tag: "sym", value: "layout_40" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2712,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "cmdjmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2713,
      children: [
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2714,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2715,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    { tag: "sym", value: "layout_80" },
                    { tag: "sym", value: "layout_40" }
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
      file: "src/muts.a",
      ln: 2716,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_copy_layout" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2717,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2718,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "dump_line" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2719,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2721,
      children: [{ tag: "comment", value: " read cursor position" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2722,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 134 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2723,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2724,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 2725,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2726,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 2727,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2728,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2729,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2730,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "acc2" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2731,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2733,
      children: [{ tag: "comment", value: " move cursor home" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2734,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 30 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2736,
      children: [{ tag: "comment", value: " setup keyboard" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2737,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2738,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2739,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2741,
      children: [{ tag: "comment", value: " function key base code" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2742,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 225 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2743,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 124 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2744,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2745,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2747,
      children: [{ tag: "comment", value: " shift function key base code" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2748,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 226 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2749,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 148 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2750,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2751,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2753,
      children: [
        { tag: "sym", value: "edit_getch" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_line" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2754,
      children: [{ tag: "comment", value: " flush input buffers" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2755,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 15 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2756,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2757,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2758,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osrdch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2759,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_dispatch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2760,
      children: [{ tag: "comment", value: " ack escape and exit" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2761,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 126 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2762,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2763,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2764,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2765,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2766,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 225 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2767,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2768,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2769,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 226 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2770,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2771,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2772,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2774,
      children: [{ tag: "comment", value: " left" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2775,
      children: [
        { tag: "sym", value: "edit_dispatch" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_left" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2776,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2777,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2778,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2779,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2780,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2781,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2782,
      children: [
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2783,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2784,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdjmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2785,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2786,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdhelp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2787,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2788,
      children: [{ tag: "comment", value: " fake up" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2789,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_up" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2790,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_up" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2792,
      children: [{ tag: "comment", value: " right" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2793,
      children: [
        { tag: "sym", value: "is_right" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2794,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_down" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2795,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2796,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdjmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2797,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2798,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdhelp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2799,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "++" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2800,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2801,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2802,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2803,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2804,
      children: [
        { tag: "sym", value: "++" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2805,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2806,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_down" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2808,
      children: [{ tag: "comment", value: " down" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2809,
      children: [
        { tag: "sym", value: "is_down" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_down" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2810,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_up" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2811,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_line" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2812,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2813,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2814,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2815,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2816,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2817,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2818,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2819,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2820,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2822,
      children: [{ tag: "comment", value: " up" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2823,
      children: [
        { tag: "sym", value: "is_up" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_up" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2824,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_sh_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2825,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_line" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2826,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 11 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2827,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2828,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2829,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2830,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 2831,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2832,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2833,
      children: [
        {
          tag: "opcode",
          value: "DEC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 2834,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        },
        { tag: "comment", value: " oops - duplication" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2836,
      children: [
        { tag: "sym", value: "edit_next" },
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2838,
      children: [
        { tag: "comment", value: " shift right = skip to ascii column" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2839,
      children: [
        { tag: "sym", value: "is_sh_right" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_sh_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2840,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_sh_left" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2841,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "cmdjmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2842,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2843,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2844,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2845,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2846,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2847,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "div3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2848,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2849,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2850,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2851,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2852,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2854,
      children: [{ tag: "comment", value: " shift left = skip to hex column" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2855,
      children: [
        { tag: "sym", value: "is_sh_left" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_sh_left" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2856,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "is_ret" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2857,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2858,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2859,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2860,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2861,
      children: [
        {
          tag: "opcode",
          value: "SEC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2862,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2863,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "times3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2864,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2865,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2866,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2867,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2869,
      children: [{ tag: "comment", value: " return" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2870,
      children: [
        { tag: "sym", value: "is_ret" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 13 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2871,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_input" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2872,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 5 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2873,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2874,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2875,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2876,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2877,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2879,
      children: [
        {
          tag: "comment",
          value:
            " fake line down. Could just jump to the code after the key test"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2880,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_down" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2881,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "is_down" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2883,
      children: [{ tag: "comment", value: " text input" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2884,
      children: [
        { tag: "sym", value: "edit_input" },
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2885,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2886,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2887,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_hex" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2888,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "cmdjmp" },
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
      file: "src/muts.a",
      ln: 2889,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2890,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2891,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2892,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2893,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_bell" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2895,
      children: [
        {
          tag: "comment",
          value: " fake right. Could just jump in after the test"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2896,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2897,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "is_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2899,
      children: [
        { tag: "sym", value: "edit_hex" },
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2900,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2901,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "div3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2902,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2903,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2904,
      children: [{ tag: "comment", value: " move forward and try again" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2905,
      children: [
        {
          tag: "opcode",
          value: "INC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2906,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2907,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2908,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2910,
      children: [
        { tag: "sym", value: "edit_bell" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 7 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2911,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2912,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2914,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2915,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 47 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2916,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_bell" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2917,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2918,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2919,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 17 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2920,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_bell" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2921,
      children: [
        {
          tag: "opcode",
          value: "SBC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 7 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2922,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2923,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_bell" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2924,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 240 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2925,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 2926,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2927,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 15 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2928,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2929,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2930,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2931,
      children: [{ tag: "opcode", value: "ASL", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2932,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 2933,
      children: [
        {
          tag: "opcode",
          value: "LDY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2934,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2935,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2936,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
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
      file: "src/muts.a",
      ln: 2937,
      children: [
        {
          tag: "opcode",
          value: "ORA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "stack" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2938,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2939,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["(zpg),Y"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2940,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "edit_bell" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2941,
      children: [{ tag: "comment", value: " fake right" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2942,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "key_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2943,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "is_right" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2945,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "edit_getch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2947,
      children: [{ tag: "comment", value: " Full screen editor columns" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2948,
      children: [
        { tag: "sym", value: "layout_40" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 27 },
            { tag: "number", value: 29 },
            { tag: "number", value: 36 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2949,
      children: [
        { tag: "sym", value: "layout_80" },
        {
          tag: "directive",
          value: "BYTE",
          children: [
            { tag: "number", value: 51 },
            { tag: "number", value: 53 },
            { tag: "number", value: 68 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2951,
      children: [
        { tag: "sym", value: "cursor_off" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2952,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2953,
      children: [{ tag: "comment", value: " cursor off" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2954,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 23 },
            { tag: "number", value: 1 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2955,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2957,
      children: [
        { tag: "sym", value: "cursor_on" },
        {
          tag: "macroCall",
          value: "PUSH16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2958,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2959,
      children: [{ tag: "comment", value: " cursor on" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2960,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 23 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2961,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "TYA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2962,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 10 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2963,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2964,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2965,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2966,
      children: [
        {
          tag: "macroCall",
          value: "POP16",
          children: [{ tag: "sym", value: "ptr0" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2967,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2969,
      children: [
        {
          tag: "comment",
          value: " Instruction lengths packed into two bit fields"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2971,
      children: [
        { tag: "sym", value: "inst_len_table" },
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2972,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2973,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 3 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2974,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2975,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2976,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2977,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2978,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2979,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2980,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2981,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2982,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2983,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2984,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2985,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2986,
      children: [
        {
          tag: "macroCall",
          value: "ILEN",
          children: [
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 2 },
            { tag: "number", value: 2 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 1 },
            { tag: "number", value: 3 },
            { tag: "number", value: 3 },
            { tag: "number", value: 1 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2988,
      children: [
        {
          tag: "comment",
          value: " Compute the length in bytes of the opcode in A"
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2990,
      children: [
        { tag: "sym", value: "inst_len" },
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2991,
      children: [{ tag: "opcode", value: "LSR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2992,
      children: [{ tag: "opcode", value: "LSR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2993,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2994,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2995,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2996,
      children: [
        {
          tag: "opcode",
          value: "TAY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2997,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "inst_len_table" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2998,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "INY",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 2999,
      children: [
        {
          tag: "opcode",
          value: "CPY",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3000,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3001,
      children: [{ tag: "opcode", value: "LSR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3002,
      children: [{ tag: "opcode", value: "LSR", children: [] }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3003,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3005,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 3 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3006,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3008,
      children: [{ tag: "comment", value: " bootstrap for stepper" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3009,
      children: [
        { tag: "sym", value: "step_bootstrap" },
        {
          tag: "opcode",
          value: "NOP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3010,
      children: [
        {
          tag: "opcode",
          value: "NOP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3011,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "stepped" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3012,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "branched" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3013,
      children: [{ tag: "sym", value: "step_bootstrap_end" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3015,
      children: [
        { tag: "sym", value: "c_step" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_cmd_mode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3016,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "eval" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3017,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "acc0_to_acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3018,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hex_prefix" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3019,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "print_or_page" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3020,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_s" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3021,
      children: [
        {
          tag: "opcode",
          value: "CPX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 128 }]
            }
          ]
        },
        { tag: "comment", value: " or just BMI" }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3022,
      children: [
        {
          tag: "opcode",
          value: "BCS",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3023,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3024,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 175 },
            { tag: "string", value: "Stack overflow" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3026,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "TXS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3027,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3028,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "PC" },
            { tag: "neg", children: [{ tag: "number", value: 3 }] },
            { tag: "string", value: "A" },
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "string", value: "X" },
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "string", value: "Y" },
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "string", value: "P" },
            { tag: "neg", children: [{ tag: "number", value: 8 }] },
            { tag: "string", value: "S" },
            { tag: "neg", children: [{ tag: "number", value: 2 }] },
            { tag: "string", value: "Opcode" },
            { tag: "number", value: 13 },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3030,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3031,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 3032,
      children: [
        { tag: "sym", value: "step_next" },
        {
          tag: "macroCall",
          value: "INC16",
          children: [{ tag: "sym", value: "reg_pc" }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3033,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 3034,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3035,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3036,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3037,
      children: [
        {
          tag: "opcode",
          value: "TSX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3038,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_s" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3039,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_a" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3040,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3041,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_x" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3042,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3043,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_y" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3044,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3045,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_p" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3046,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "show_flags" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3047,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: " " }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3048,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3049,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_s" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3050,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "hexbyte_space" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3051,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [
                {
                  tag: "sub",
                  children: [
                    {
                      tag: "sub",
                      children: [
                        { tag: "sym", value: "step_bootstrap_end" },
                        { tag: "sym", value: "step_bootstrap" }
                      ]
                    },
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
      file: "src/muts.a",
      ln: 3052,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [{ tag: "sym", value: "step_bootstrap" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3053,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs,X", "zpg,X"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 12 }
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
      file: "src/muts.a",
      ln: 3054,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3055,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3056,
      children: [
        {
          tag: "macroCall",
          value: "MOV16",
          children: [
            { tag: "sym", value: "acc0" },
            { tag: "sym", value: "acc2" }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3057,
      children: [
        {
          tag: "opcode",
          value: "INX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3058,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3059,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "decode_instr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3060,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3061,
      children: [
        {
          tag: "opcode",
          value: "STX",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3062,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "decode_admode" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3063,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osrdch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3064,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3066,
      children: [{ tag: "comment", value: " JMP, Bxx, RTS etc are emulated" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3067,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 11 }
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
      file: "src/muts.a",
      ln: 3068,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_brk" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3069,
      children: [{ tag: "comment", value: " JSR" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3070,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 32 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3071,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_jsr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3072,
      children: [{ tag: "comment", value: " JMP" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3073,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 76 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3074,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_jmp" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3075,
      children: [{ tag: "comment", value: " JMP ()" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3076,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 108 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3077,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_jmpi" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3078,
      children: [{ tag: "comment", value: " RTS" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3079,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 96 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3080,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_rts" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3081,
      children: [{ tag: "comment", value: " RTI" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3082,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 64 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3083,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_rti" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3084,
      children: [{ tag: "comment", value: " branch?" }]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3085,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 31 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3086,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 16 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3087,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_branch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3089,
      children: [
        { tag: "sym", value: "step_execute" },
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3090,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3091,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3092,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3093,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc3" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3094,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "load_regs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3095,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 11 }
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
      file: "src/muts.a",
      ln: 3097,
      children: [
        { tag: "sym", value: "do_brk" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "throw" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3098,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "number", value: 176 },
            { tag: "string", value: "Halted" },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3100,
      children: [
        { tag: "sym", value: "do_jsr" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "ex_or_step" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3101,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "step_execute" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3102,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3103,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3104,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 2 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3105,
      children: [
        {
          tag: "opcode",
          value: "TAX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3106,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 3107,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3108,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3109,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3110,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3112,
      children: [
        { tag: "sym", value: "do_jmp" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "next_pc" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3113,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "indirect" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3114,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "step_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3116,
      children: [
        { tag: "sym", value: "do_jmpi" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "next_pc" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3117,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "indirect" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3118,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "indirect" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3119,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "step_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3121,
      children: [
        { tag: "sym", value: "do_rts" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3122,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3123,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3124,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3125,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3126,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 3127,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "step_next" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3129,
      children: [
        { tag: "sym", value: "do_rti" },
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3130,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "reg_p" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3131,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3132,
      children: [
        {
          tag: "opcode",
          value: "BCC",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "do_rts" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3134,
      children: [
        { tag: "sym", value: "do_branch" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 12 }
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
      file: "src/muts.a",
      ln: 3135,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc1" },
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
      file: "src/muts.a",
      ln: 3136,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 4 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3137,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "stack" },
                    { tag: "number", value: 12 }
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
      file: "src/muts.a",
      ln: 3138,
      children: [
        {
          tag: "opcode",
          value: "JMP",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "step_execute" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3140,
      children: [
        { tag: "sym", value: "ex_or_step" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "prstr" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3141,
      children: [
        {
          tag: "directive",
          value: "TEXT",
          children: [
            { tag: "string", value: "Execute" },
            { tag: "neg", children: [{ tag: "number", value: 1 }] },
            { tag: "string", value: "or" },
            { tag: "neg", children: [{ tag: "number", value: 1 }] },
            { tag: "string", value: "step" },
            { tag: "neg", children: [{ tag: "number", value: 1 }] },
            { tag: "string", value: "(E/S)" },
            { tag: "neg", children: [{ tag: "number", value: 1 }] },
            { tag: "string", value: "?" },
            { tag: "neg", children: [{ tag: "number", value: 1 }] },
            { tag: "number", value: 0 }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3142,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "ptr0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3143,
      children: [
        {
          tag: "opcode",
          value: "STY",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "ptr0" },
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
      file: "src/muts.a",
      ln: 3144,
      children: [
        { tag: "sym", value: "-" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "osrdch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3145,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "check_escape" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3146,
      children: [
        {
          tag: "opcode",
          value: "AND",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "sym", value: "case_mask" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3147,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "S" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3148,
      children: [
        {
          tag: "opcode",
          value: "BEQ",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3149,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "E" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3150,
      children: [
        {
          tag: "opcode",
          value: "BNE",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "-" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3151,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "oswrch" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3152,
      children: [
        {
          tag: "opcode",
          value: "CMP",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "chars", value: "S" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3153,
      children: [
        {
          tag: "opcode",
          value: "PHP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3154,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "newline" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3155,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3156,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3158,
      children: [
        { tag: "sym", value: "indirect" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3159,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3160,
      children: [
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "read_rom" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3161,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 3162,
      children: [
        {
          tag: "opcode",
          value: "PLA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3163,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3164,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3166,
      children: [
        { tag: "sym", value: "next_pc" },
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc0" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3167,
      children: [
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3168,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 1 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3169,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3170,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc0" },
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
      file: "src/muts.a",
      ln: 3171,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3172,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 3173,
      children: [
        {
          tag: "opcode",
          value: "RTS",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3175,
      children: [
        { tag: "sym", value: "branched" },
        {
          tag: "opcode",
          value: "JSR",
          children: [
            {
              tag: "opArg",
              value: ["abs"],
              children: [{ tag: "sym", value: "save_regs" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3176,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc1" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3177,
      children: [
        {
          tag: "opcode",
          value: "PHA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3178,
      children: [
        {
          tag: "opcode",
          value: "PLP",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3179,
      children: [
        {
          tag: "opcode",
          value: "LDX",
          children: [
            {
              tag: "opArg",
              value: ["#"],
              children: [{ tag: "number", value: 0 }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3180,
      children: [
        {
          tag: "opcode",
          value: "LDA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc1" },
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
      file: "src/muts.a",
      ln: 3181,
      children: [
        {
          tag: "opcode",
          value: "BPL",
          children: [
            {
              tag: "opArg",
              value: ["rel"],
              children: [{ tag: "sym", value: "+" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3182,
      children: [
        {
          tag: "opcode",
          value: "DEX",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3183,
      children: [
        { tag: "sym", value: "+" },
        {
          tag: "opcode",
          value: "CLC",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3184,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3185,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [{ tag: "sym", value: "acc2" }]
            }
          ]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3186,
      children: [
        {
          tag: "opcode",
          value: "TXA",
          children: [{ tag: "opArg", value: ["impl"] }]
        }
      ]
    },
    {
      tag: "source.line",
      file: "src/muts.a",
      ln: 3187,
      children: [
        {
          tag: "opcode",
          value: "ADC",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
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
      file: "src/muts.a",
      ln: 3188,
      children: [
        {
          tag: "opcode",
          value: "STA",
          children: [
            {
              tag: "opArg",
              value: ["abs", "zpg"],
              children: [
                {
                  tag: "add",
                  children: [
                    { tag: "sym", value: "acc2" },
                    { tag: "number", value: 1 }
                  ]
            }