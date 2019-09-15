const memoize = (fn) => {
  const store = new Map();
  return function (val) {
    if (!store.has(val)) {
      const result = fn.call(this, val)
      store.set(val, result)
    }
    return store.get(val)
  }
}

const add = (input) => input + 10

const memoizeAdd = memoize(add);

console.log(memoizeAdd(1))
console.log(memoizeAdd(2))
console.log(memoizeAdd(3))
console.log(memoizeAdd(1))
console.log(memoizeAdd(2))
console.log(memoizeAdd(3))