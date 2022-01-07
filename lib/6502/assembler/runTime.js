const _ = require("lodash");
const { SymbolsGlobal, SymbolsLocal, SymbolsRelative } = require("./symbols");

class RT {
  constructor() {
    // A single global symbol table
    this.globals = new SymbolsGlobal(this);
    // Local symbol tables by context
    this.localContexts = {};
    this.contextStack = [];
    this.pushLocalContext("INIT");
    this.setSymbol("*", 0x8000);
  }

  stackCheck() {
    if (!this.contextStack.length) throw new Error(`Context stack empty`);
    return this;
  }

  getLocalContext(sig) {
    return (this.localContexts[sig] =
      this.localContexts[sig] ||
      new SymbolsLocal(this, new SymbolsRelative(this, this.globals)));
  }

  pushLocalContext(sig) {
    this.contextStack.push(sig);
    return this;
  }

  popLocalContext() {
    this.stackCheck().contextStack.pop();
    return this;
  }

  switchLocalContext(sig) {
    this.popLocalContext().pushLocalContext(sig);
  }

  get symtab() {
    return this.stackCheck().getLocalContext(_.last(this.contextStack));
  }

  setSymbol(name, value, opt = {}) {
    this.symtab.set(name, value, opt);
  }

  label() {}
  location() {}
  directive() {}
  chars() {}
  symbol() {}
  assign() {}
  macroStart() {}
  macroEnd() {}
  macroCall() {}
  ref() {}
  opcode() {}
  opArg() {}
}

module.exports = { RT };
