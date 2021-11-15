require("../use");
const _ = require("lodash");
const syntax = require("ref/6502");

const { MOS6502 } = require("lib/6502/cpu");

const cpu = new MOS6502(syntax);

console.log(MOS6502.statusC);
