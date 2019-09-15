const testInput = { a: { b: { "c.d": [{ a: 12 }] } } };

const pathOr = (input, path = [], or) => path.reduce((acc, current) => acc[current] || or, input);

const result = pathOr(testInput, ["a", "b", "c.d", [0], "a"], "hi");

console.log(result);