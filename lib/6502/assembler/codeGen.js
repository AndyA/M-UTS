const js = JSON.stringify;
const join = (...kids) => kids.flat().filter(Boolean).join("");

class CodeGen {
  constructor(syn) {
    this.syn = syn;
  }

  subst(template, ...args) {
    const a = args.flat();
    const sub = (m, tick, index) => {
      const i = Number(index);
      if (i < 0 || i >= a.length) throw new Error(`Index out of range`);
      return tick === "'" ? js(a[i]) : a[i];
    };
    return template.replace(/%('?)(\d+)/g, sub);
  }

  render(ast) {
    const opIndex = {
      ...this.syn.opIndex,
      neg: { gen: "-%0" },
      nop: { gen: "%0" }
    };

    const renderKids = node => (node.children || []).map(renderNode);
    const andKids = h => node => join(h(node), renderKids(node));

    const callWithKids = fn => node =>
      this.subst("rt.%0(%1)", fn, renderKids(node).join(", "));

    const callRT = fn => node =>
      this.subst(
        "rt.%0(%1)",
        fn,
        [js(node.value), renderKids(node)].flat().join(", ")
      );

    const renderers = {
      "source.file": andKids(node => `// ${node.file}\n`),
      "source.line": node => {
        const children = [...(node.children || [])];
        const out = [
          this.subst("\nrt.location(%'0, %'1);\n", node.file, node.ln)
        ];

        if (children.length && children[0].tag === "sym") {
          const sym = children.shift();
          out.push(this.subst("rt.label(%0);\n", renderNode(sym)));
        }

        out.push(children.map(renderNode));
        return join(out);
      },
      "source.line2": andKids(node =>
        this.subst("\nrt.location(%'0, %'1);\n", node.file, node.ln)
      ),
      "directive": callRT("directive"),
      "string": node => js(node.value),
      "chars": node => this.subst("rt.chars(%'0)", node.value),
      "number": node => js(node.value),
      "sym": node => this.subst("rt.symbol(%'0)", node.value),
      "assign": callWithKids("assign"),
      "macroStart": callRT("macroStart"),
      "macroEnd": callRT("macroEnd"),
      "macroCall": callRT("macroCall"),
      "ref": callWithKids("ref"),
      "~": callWithKids("ref"),
      "opcode": callRT("opcode"),
      "opArg": callRT("opArg"),
      "comment": node => `//${node.value}\n`
    };

    const renderNode = node => {
      const renderer = renderers[node.tag];
      if (renderer) return renderer(node);
      const op = opIndex[node.tag];
      if (op)
        return this.subst(
          op.gen,
          renderKids(node).map(s => `(${s})`)
        );
      // return "";
      throw new Error(`Can't render a ${node.tag}`);
    };

    return renderNode(ast);
  }
}

module.exports = { CodeGen };
