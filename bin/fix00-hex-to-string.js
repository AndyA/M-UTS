const fs = require("fs");

async function readSource(src) {
  const txt = await fs.promises.readFile(src, "utf-8");
  return txt.split(/\n/);
}

const isPrint = c => c >= 32 && c < 127;

const isHiLastByte = bytes => {
  const b = [...bytes];
  const lb = b.pop();
  return lb >= 0x80 && b.every(isPrint) && isPrint(lb & 0x7f);
};

const isNegSpace = bytes => {
  const b = [...bytes];
  const lb = b.pop();
  return lb === 0 && b.every(bb => isPrint(b) || b > 0xa0);
};

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
      if (arg < 0x20) return arg;
      if (arg === 0x22) return `'"'`;
      return `\$${arg.toString(16)}`;
    })
    .join(", ");
}

function acmeString(bytes) {
  const parts = acmeStringParts(bytes);
  if (isHiLastByte(bytes)) {
    const lb = parts.pop();
    parts.push([`'${String.fromCharCode(lb & 0x7f)}' + $80`]);
  } else if (isNegSpace(bytes)) {
    return acmeStringFormat(
      parts.map(p => (typeof p === "number" && p > 0 ? p - 256 : p))
    );
  }

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

function fixDelta(line, key) {
  const re = new RegExp(";\\s*" + key + "([-+])");
  const m = line.match(re);
  if (!m) return 0;
  return m[1] == "+" ? 1 : -1;
}

async function main(args) {
  for (const src of args) {
    const lines = await readSource(src);
    let fixing = 0;
    for (let l = 0; l < lines.length; l++) {
      const line = lines[l];
      fixing += fixDelta(line, "fix00");
      if (fixing >= 0) {
        const nl = fixHex(line);
        lines[l] = nl;
      }
    }
    console.log(lines.join("\n"));
  }
}

main(process.argv.slice(2)).catch(e => {
  console.error(e);
  proces.exit(1);
});
