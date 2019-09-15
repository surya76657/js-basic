const deepClone = (obj) => {
  let copy = Array.isArray(obj) ? [] : {};
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    copy[key] = typeof val === 'object' ? deepClone(val) : val;
  })
  return copy;
}

// examples for deep-clone
const temp = [
  {
    a: {
      b: {
        c: [1, 2],
        fn: name => console.log("I am executed by", name)
      }
    },
    d: {
      e: {
        f: [3, 4]
      }
    }
  }
];

const temp2 = deepClone(temp);
temp2[0].a.b.fn = null;
temp[0].a.b.fn("temp");

console.log(JSON.stringify(temp2, null, 2));
console.log(JSON.stringify(temp, null, 2));