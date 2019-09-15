// compose

const multiplyBy5 = x => x * 5;
const add = (a, b) => a + b;
const compose = (...fns) => fns.reduce((acc, curr) => (...args) => acc(curr(...args)));
const result = compose(multiplyBy5, add);
console.log(result(10, 10));

// composeright

const multiplyByR5 = (x, y) => x * y;
const addR = a => a + 9;
const composeR = (...fns) => fns.reduce((acc, curr) => (...args) => curr(acc(...args)));
const resultR = composeR(multiplyByR5, addR);
console.log(resultR(10, 10));

// const composeR2 = (...fns) => fns.reduceRight((acc, curr) => (...args) => acc(curr(...args)));


// const result2 = composeR2(multiplyByR5, addR);

// console.log(result2(10, 10));