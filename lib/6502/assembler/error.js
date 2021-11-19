class SyntaxError extends Error {}

class ParseError extends Error {
  constructor(file, line, code, message) {
    super(message);
    this.file = file;
    this.line = line;
    this.code = code;
  }

  toString() {
    return `${this.file}, line ${this.line}: ${this.message}`;
  }
}

module.exports = { SyntaxError, ParseError };
