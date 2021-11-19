require("../use");

const fs = require("fs");
const syntax = require("ref/6502");

const { MOS6502Assembler } = require("lib/6502/assembler");

const asm = new MOS6502Assembler(syntax);

async function parseSource(file) {
  const source = await fs.promises.readFile(file, "utf8");
  const lines = source.split(/\n/);
  return asm.compileSource(lines, file);
}

async function main(files) {
  for (const file of files) {
    const ast = await parseSource(file);
    console.log(`module.exports = ${JSON.stringify(ast)}`);
  }
}

main(process.argv.slice(2)).catch(e => {
  console.error(e);
  process.exit(1);
});
