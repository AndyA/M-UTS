const bs = require("binary-search");
const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

class Symbol {
  constructor(name, value, opt = {}) {
    this.name = name;
    this.opt = { ro: false, type: "general", ...opt };
    this.init(value);
  }

  init(value) {
    const { onChange, ro } = this.opt;
    if (onChange) onChange(this, value);
    this.value = value;
    return this;
  }

  set(value) {
    const { ro } = this.opt;
    // TODO context aware throwage.
    if (ro) throw new Error(`Attempt to change read-only symbol ${this.name}`);
    return this.init(value);
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

  findHandler(name) {
    if (this.canHandle(name)) return this;
    return this.parent && this.parent.of(name);
  }

  of(name) {
    const h = this.findHandler(name);
    if (!h) throw new Error(`No symbol table for ${name}`);
    return h;
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
    const addr = Number(value);
    if (Number.isNaN(addr)) throw new Error(`${value} is not a number`);
    const pos = bs(slot, addr, cmp);
    if (pos < 0) slot.splice(~pos, 0, addr);
  }

  getSymbol(name) {
    const org = this.parent.resolve("*"); // org
    const slot = this.symbols[name] || [];
    const pos = bs(slot, org, cmp);
    const idx = pos >= 0 ? pos : ~pos - /-/.test(name) ? 1 : 0;
    if (idx >= 0 && idx < slot.length)
      return new Symbol(name, slot[idx], { ro: true, type: "addr" });
  }
}

class SymbolsGlobal extends SymbolTable {
  canHandle(name) {
    return "*" === name || /^:?[a-z_]\w*$/.test(name);
  }
}

class SymbolsLocal extends SymbolTable {
  canHandle(name) {
    return /^\.[a-z_]\w*$/.test(name);
  }
}

module.exports = {
  Symbol,
  SymbolTable,
  SymbolsGlobal,
  SymbolsLocal,
  SymbolsRelative
};
