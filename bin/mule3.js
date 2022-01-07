require("../use");

const { RT } = require("lib/6502/assembler/runTime");

const rt = new RT();

rt.setSymbol("oswrch", 0xffee);
rt.setSymbol("-", 0x7fee);
// rt.setSymbol("*", 0x8000);
rt.setSymbol("+", 0x8010);
rt.setSymbol("-", 0x8000);
rt.setSymbol("+", 0x8000);

// console.log(JSON.stringify(rt.symtab, null, 2));

const syms = ["-", "+", "oswrch", "*"];

for (const name of syms) {
  const sym = rt.symtab.resolve(name);
  console.log(`${name} = 0x${Number(sym).toString(16)}`);
}
