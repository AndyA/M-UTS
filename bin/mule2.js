const toks = [
  [{ tag: "string", value: "Hello" }],
  [
    { tag: "string", value: "Hello, " },
    { tag: "string", value: "World" }
  ],
  [
    { tag: "string", value: "Hello" },
    { tag: "string", value: ", " },
    { tag: "string", value: "World" }
  ]
];

const foldAppend = toks =>
  toks.reduce((a, b) => ({ tag: "+", tx: "+", children: [a, b] }));

for (const seq of toks) {
  const ast = foldAppend(seq);
  console.log(JSON.stringify(ast, null, 2));
}
