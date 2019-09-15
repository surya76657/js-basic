Array.prototype.filter = function (fn) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    const value = fn(this[i], i);
    if (value) filteredArray.push(this[i]);
  }
  return filteredArray;
};

console.log([1, 2, 3, 4, 5].filter(item => item % 2 === 0));


Array.prototype.map = function (fn) {
  let transformedArray = Array.from({ length: this.length });
  for (let i = 0; i < this.length; i++) {
    transformedArray[i] = fn(this[i], i);
  }
  return transformedArray;
};

console.log([10, 6].map(item => item ** 2));

Array.prototype.reduce = function (fn, initial) {
  if (!this.length) return;
  let last = initial;
  if (initial) {
    for (let i = 0; i < this.length; i++) {
      last = fn(last, this[i]);
    }
  } else {
    last = this[0];
    for (let i = 1; i < this.length; i++) {
      last = fn(last, this[i]);
    }
  }
  return last;
};

const result = [1, 2, 3, 4].reduce((prev, current) => prev + current, 5);

console.log(result);