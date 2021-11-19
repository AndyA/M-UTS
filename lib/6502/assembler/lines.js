const { tokenList } = require("./tokens");

function lineList([...lines], file, tokenizer) {
  let ln = 0;

  const hasMore = () => ln < lines.length;

  const peekNext = () => lines[ln];

  const getNext = () => {
    if (hasMore()) {
      const line = lines[ln++];
      const toks = tokenList(tokenizer(line));
      return { ...toks, line, file, ln };
    }
  };

  const getLineNumber = () => ln;

  return { hasMore, getNext, peekNext, getLineNumber, file };
}

module.exports = { lineList };
