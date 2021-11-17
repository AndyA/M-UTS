function tokenList(tokens) {
  const toks = [...tokens];

  const skipSpace = () => {
    while (toks.length && /^\s+$/.test(toks[0])) toks.shift();
  };

  const requireToken = () => {
    if (!toks.length) throw new Error(`Unexpected end of input`);
  };

  const expectToken = () => {
    requireToken();
    return toks[0];
  };

  const getToken = () => {
    requireToken();
    return toks.shift();
  };

  const expectNext = () => {
    skipSpace();
    return expectToken();
  };

  const getNext = () => {
    skipSpace();
    return getToken();
  };

  const checkNext = token => {
    const next = getNext();
    if (next !== token)
      throw new Error(`Missing "${token}", got "${next}" instead`);
  };

  return {
    toks,
    skipSpace,
    requireToken,
    expectToken,
    getToken,
    expectNext,
    getNext,
    checkNext
  };
}

module.exports = { tokenList };
