const fs = require("fs");

async function readSource(src) {
  const txt = await fs.promises.readFile(src, "utf-8");
  return txt.split(/\n/);
}

async function main(args) {
  for (const src of args) {
    const lines = await readSource(src);
    for (let l = 0; l < lines.length; l++) {}
  }
}

main(process.argv.slice(2)).catch((e) => {
  console.error(e);
  proces.exit(1);
});
