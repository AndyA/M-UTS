require("../use");

class Symbol {
  constructor(name, value, hooks = {}) {
    this.name = name;
    this.hooks = hooks;
    this.set(value);
  }

  set(value) {
    const { onChange } = this.hooks;
    if (onChange) onChange(value, this.value);
    this.value = value;
  }

  valueOf() {
    const { onRead } = this.hooks;
    if (onRead) onRead(this.values);
    return this.value;
  }
}

// const sym = new Symbol(123);
const sym = new Symbol("message", "Hello", { onChange: console.log });
console.log(sym + 999);
