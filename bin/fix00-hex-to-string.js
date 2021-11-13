const fs = require("fs");

async function readSource(src) {
  const txt = await fs.promises.readFile(src, "utf-8");
  return txt.split(/\n/);
}

function acmeString(bytes) {
  const args = [];
  let inString = false;
  for (const b of bytes) {
    if (b >= 32 && b < 127 && b !== 0x22) {
      // printable, not a quote
      if (args.length === 0 || typeof args[args.length - 1] !== "string")
        args.push("");
      args[args.length - 1] += String.fromCharCode(b);
    } else {
      args.push(b);
    }
  }
  return args
    .map((arg) =>
      typeof arg === "string"
        ? `"${arg}"`
        : arg === 0
        ? 0
        : `\$${arg.toString(16)}`
    )
    .join(", ");
}

function fixHex(line) {
  const m = line.match(/^(.*)!hex ([0-9a-f]{2}(?: [0-9a-f]{2})+)/);
  if (!m) return line;
  const [, prefix, hex] = m;
  const bytes = hex.split(/ /).map((h) => parseInt(h, 16));
  const rep = acmeString(bytes);
  return `${prefix}!text ${rep}`;
}

async function main(args) {
  for (const src of args) {
    const lines = await readSource(src);
    for (let l = 0; l < lines.length; l++) {
      const line = lines[l];
      const nl = fixHex(line);
      lines[l] = nl;
    }
    console.log(lines.join("\n"));
  }
}

main(process.argv.slice(2)).catch((e) => {
  console.error(e);
  proces.exit(1);
});
