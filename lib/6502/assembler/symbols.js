const bs = require("binary-search");

class Symbol {
  constructor(name, value, opt = {}) {
    this.name = name;
    this.opt = { ro: false, type: "general", ...opt };
    this.set(value);
  }

  set(value) {
    const { onChange, ro } = this.opt;
    // TODO context aware throwage.
    if (ro) throw new Error(`Attempt to change read-only symbol ${this.name}`);
    if (onChange) onChange(this, value);
    this.value = value;
    return this;
  }

  valueOf() {
    const { onRead } = this.opt;
    if (onRead) onRead(this);
    return this.value;
  }
}

class SymbolTable {
  constructor(parent = null) {
    this.parent = parent;
    this.symbols = {};
  }

  canHandle(name) {
    return false;
  }

  of(name) {
    if (this.canHandle(name)) return this;
    return this.parent && this.parent.of(name);
  }

  setValue(name, value, opt) {
    const sym = this.symbols[name];
    if (!sym) this.symbols[name] = new Symbol(name, value, opt);
    else sym.set(value);
  }

  getSymbol(name) {
    return this.symbols[name];
  }

  set(name, value, opt) {
    this.of(name).setValue(name, value, opt);
  }

  resolve(name) {
    const val = this.of(name).getSymbol(name);
    if (val === undefined) throw new Error(`${name} is undefined`);
    return val;
  }
}

class SymbolsRelative extends SymbolTable {
  canHandle(name) {
    return /^(?:-+|\++)$/.test(name);
  }

  setValue(name, value, opt) {
    const slot = (this.symbols[name] = this.symbols[name] || []);
    // const idx = bs(s)
    // slot[value] =
    //   slot[value] || new Symbol(name, value, { ro: true, type: "addr" });
  }

  getSymbol(name) {
    // const org = this.parent.resolve("*");
    // const labels = this.symbols[name] || {};
    // const addrs = Object.keys(labels).map(Number);
  }
}

class SymbolsGlobal extends SymbolTable {
  canHandle(name) {
    return "*" === name || /^:?[a-z_]\w*$/.test(name);
  }
}

class SymbolsLocal extends SymbolTable {
  canHandle(name) {
    return /^\.?[a-z_]\w*$/.test(name);
  }
}

module.exports = {
  Symbol,
  SymbolTable,
  SymbolsGlobal,
  SymbolsLocal,
  SymbolsRelative
};
