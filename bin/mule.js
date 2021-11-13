function encodeMnemonic(mnem) {
  const bytes = mnem.split("").map((c) => c.charCodeAt(0) - 0x3f);
  const code = (bytes[0] << 11) | (bytes[1] << 6) | (bytes[2] << 1);
  return code.toString(16);
}

console.log(encodeMnemonic("JMP"));
