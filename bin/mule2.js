require("../use");
const { makeAdModeParser } = require("lib/6502/assembler/adMode");

const modes = [
  "impl",
  "(zpg,X)",
  "zpg",
  "#",
  "A",
  "abs",
  "rel",
  "(zpg),Y",
  "zpg,X",
  "abs,Y",
  "abs,X",
  "zpg,Y",
  "(ind)"
];

const p = makeAdModeParser(modes);
console.log(JSON.stringify(p, null, 2));
console.log(p);
