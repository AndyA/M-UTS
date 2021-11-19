const { SyntaxError } = require("./error");

function tokenList([...toks]) {
  const hasMoreNoSkip = () => toks.length > 0;

  const hasNext = token => hasMore() && expectNext() === token;

  const putBack = (...tokens) => toks.unshift(...tokens);

  const skipSpace = () => {
    while (toks.length && /^\s+$/.test(toks[0])) toks.shift();
  };

  const requireToken = () => {
    if (!hasMoreNoSkip()) throw new SyntaxError(`Unexpected end of input`);
  };

  const expectToken = () => {
    requireToken();
    return toks[0];
  };

  const getToken = () => {
    requireToken();
    return toks.shift();
  };

  const hasMore = () => {
    skipSpace();
    return hasMoreNoSkip();
  };

  const expectNext = () => {
    skipSpace();
    return expectToken();
  };

  const getNext = () => {
    skipSpace();
    return getToken();
  };

  const getTail = () => toks.splice(0).join("");

  const checkNext = token => {
    const next = getNext();
    if (next !== token)
      throw new SyntaxError(`Missing "${token}", got "${next}" instead`);
  };

  const checkEnd = () => {
    if (toks.length)
      throw new SyntaxError(`Syntax error: ${toks.join("").substr(0, 20)}`);
  };

  return {
    hasMoreNoSkip,
    hasMore,
    hasNext,
    putBack,
    skipSpace,
    requireToken,
    expectToken,
    getToken,
    expectNext,
    getNext,
    getTail,
    checkNext,
    checkEnd
  };
}

module.exports = { tokenList };
