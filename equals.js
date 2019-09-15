const equals = (a, b) => {
  if (a === b) return true;
  if (typeof a !== "object" && typeof b !== "object") return a === b;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};

const result = equals({ a: [2, { e: 3 }], b: [4], c: "foo" }, { a: [2, { e: 3 }], b: [4], c: "foo" }); // true

console.log(result);