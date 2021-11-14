const fs = require("fs");

async function readSource(src) {
  const txt = await fs.promises.readFile(src, "utf-8");
  return txt.split(/\n/);
}

function fixup(lines) {
  // find all the labels
  const labels = new Set();
  for (const ln of lines) {
    const m = ln.match(/^(\w+)/);
    if (m) labels.add(m[1]);
  }

  // console.log(labels);
  const re = new RegExp(
    "^\\S*\\s+.*(" + [...labels].map(l => `(?:\\b${l}\\b)`).join("|") + ")"
  );

  for (const ln of lines) {
    const m = ln.match(re);
    if (m) labels.delete(m[1]);
  }

  const unused = [...labels].filter(l => /^[SL]/.test(l));

  const ure = new RegExp("^(?:" + unused.join("|") + ")");

  return lines.map(ln => ln.replace(ure, "     "));

  // console.log(unused);

  // console.log(re);
  // console.log(lines.filter(ln => re.test(ln)));

  // return lines;
}

async function main(args) {
  for (const src of args) {
    const lines = await readSource(src);
    const fixed = fixup(lines).join("\n");
    console.log(fixed);
  }
}

main(process.argv.slice(2)).catch(e => {
  console.error(e);
  process.exit(1);
});
