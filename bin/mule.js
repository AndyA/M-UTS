require("../use");

const spec = require("lib/6502/assembler/evaluatorSpec");
const { ExpressionSyntax } = require("lib/6502/assembler/exprSyntax");
const { CodeGen } = require("lib/6502/assembler/codeGen");
const muts = require("../muts");

const syn = new ExpressionSyntax(spec, tl => null);
const gen = new CodeGen(syn);
const src = gen.render(muts);
console.log(src);
