const _ = require("lodash");

function encodeMnemonic(mnem) {
  const bytes = mnem.split("").map(c => c.charCodeAt(0) - 0x3f);
  const code = (bytes[0] << 11) | (bytes[1] << 6) | (bytes[2] << 1);
  return code.toString(16);
}

function mnem(bytes) {
  const [lo, hi, bits, mask] = bytes;
  const cc = lo + (hi << 8);
  // console.log(cc.toString(16));
  const c1 = String.fromCharCode(((cc >> 11) & 0x1f) + 0x3f);
  const c2 = String.fromCharCode(((cc >> 6) & 0x1f) + 0x3f);
  const c3 = String.fromCharCode(((cc >> 1) & 0x1f) + 0x3f);
  const code = `+mnem '${c1}', '${c2}', '${c3}', \$${bits.toString(
    16
  )}, \$${mask.toString(16)}`;
  return code;
}

// const ops = "a2 5b 4c df";
// console.log(encodeMnemonic("JMP"));
const ops = [
  "08 19 90 ff 28 19 b0 ff a4 19 f0 ff ",
  "94 1b 30 ff cc 1b d0 ff 5a 1c 10 ff d8 1c 00 ff ",
  "c8 1d 50 ff e8 1d 70 ff 48 23 18 ff 4a 23 d8 ff ",
  "54 23 58 ff 6e 23 b8 ff b2 29 ca ff b4 29 88 ff ",
  "f2 53 e8 ff f4 53 c8 ff 26 5d 20 ff 22 7c ea ff ",
  "44 8a 48 ff 62 8a 08 ff 44 8b 68 ff 62 8b 28 ff ",
  "54 9d 40 ff 68 9d 60 ff 88 a1 38 ff 8a a1 f8 ff ",
  "94 a1 78 ff b2 a8 aa ff b4 a8 a8 ff 32 ad ba ff ",
  "44 ae 8a ff 68 ae 9a ff 84 ae 98 ff aa 1a 24 f7 ",
  "a2 5b 4c df ",
  "72 24 e0 f3 74 24 c0 f3 72 a5 86 e7 ",
  "74 a5 84 e7 88 29 c6 e7 c8 53 e6 e7 1a 15 02 e3 ",
  "26 6d 42 e3 1a 9c 22 e3 26 9c 62 e3 72 69 a2 e3 ",
  "74 69 a0 e3 44 a5 81 e3 48 11 61 e3 ca 13 21 e3 ",
  "a2 23 c1 e3 26 34 41 e3 44 69 a1 e3 c4 84 01 e3 ",
  "c8 a0 e1 e3"
].join(" ");

const code = _.chunk(
  ops.split(/\s+/).map(h => parseInt(h, 16)),
  4
).map(mnem);

console.log(code.join("\n"));
