const fs = require("fs");

async function readSource(src) {
  const txt = await fs.promises.readFile(src, "utf-8");
  return txt.split(/\n/);
}

const isPrint = c => c >= 32 && c < 127;

function acmeStringParts(bytes) {
  const out = [];
  for (const b of bytes) {
    if (isPrint(b) && b !== 0x22) {
      // printable, not a quote
      if (out.length === 0 || typeof out[out.length - 1] !== "string")
        out.push("");
      out[out.length - 1] += String.fromCharCode(b);
    } else {
      out.push(b);
    }
  }
  return out;
}

function acmeStringFormat(parts) {
  return parts
    .map(arg => {
      if (Array.isArray(arg)) return arg[0];
      if (typeof arg === "string") return `"${arg}"`;
      if (arg === 0) return 0;
      if (arg === 0x22) return `'"'`;
      return `\$${arg.toString(16)}`;
    })
    .join(", ");
}

function acmeString(bytes) {
  const parts = acmeStringParts(bytes);
  return acmeStringFormat(parts);
}

function fixHex(line) {
  const m = line.match(/^(.*)!hex ([0-9a-f]{2}(?: [0-9a-f]{2})+)/);
  if (!m) return line;
  const [, prefix, hex] = m;
  const bytes = hex.split(/ /).map(h => parseInt(h, 16));
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

main(process.argv.slice(2)).catch(e => {
  console.error(e);
  proces.exit(1);
});
