require("../use");

const {
  SymbolsGlobal,
  SymbolsLocal,
  SymbolsRelative
} = require("lib/6502/assembler/symbols");

const globals = new SymbolsRelative(new SymbolsGlobal());
const syms = new SymbolsLocal(globals);

syms.set("oswrch", 0xffee);
syms.set("-", 0x7fee);
syms.set("*", 0x8000);
syms.set("+", 0x8003);
syms.set("+", 0x8010);

console.log(JSON.stringify(syms, null, 2));

const sym = syms.resolve("+");
console.log(JSON.stringify(sym + 0, null, 2));
