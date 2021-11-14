const _ = require("lodash");

function encodeMnemonic(mnem) {
  const bytes = mnem.split("").map(c => c.charCodeAt(0) - 0x3f);
  const code = (bytes[0] << 11) | (bytes[1] << 6) | (bytes[2] << 1);
  return code.toString(16);
}

const byteToLengths = byte => [
  (byte >> 6) & 3,
  (byte >> 4) & 3,
  (byte >> 2) & 3,
  (byte >> 0) & 3
];

function pack(bytes) {
  const lens = bytes.flatMap(byteToLengths);
  return "+ilen " + lens.join(", ");
}

// const ops = "a2 5b 4c df";
// console.log(encodeMnemonic("JMP"));
const ops = [
  "69 69 65 7d a5 69 75 7d e5 a9 65 fd a5 69 75 7d ",
  "65 69 65 fd a5 69 75 7d 65 69 65 fd a5 69 75 7d ",
  "65 a9 55 fd a5 a9 75 75 a9 a9 65 fd a5 a9 75 fd ",
  "a5 a9 65 fd a5 69 75 7d a5 a9 65 fd a5 69 75 7d "
].join(" ");

const code = _.chunk(
  ops.split(/\s+/).map(h => parseInt(h, 16)),
  4
).map(pack);

console.log(code.join("\n"));
