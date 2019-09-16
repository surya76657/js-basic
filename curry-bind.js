const curry = (fn, ...args) => fn.length === args.length ? fn(...args) : curry.bind(this, fn, ...args);

const add = (a, b, c, d, e, f, g, h, i) => a + b + c + d + e + f + g + h + i;

const curried = curry(add);

console.log(curried(1, 2, 2)(4, 4, 3, 2)(4, 4))


// const res = add1.bind({ temp: 1 }, 1, 2, 2).bind({ temp: 2 }, 4, 4, 3, 2).bind({ temp: 3 }, 4, 4).apply({ temp: 4 });

// bind
// const bind = (fn, context, ...boundedArgs) => (...newArgs) => fn.apply(context, [...boundedArgs, newArgs]);

// const test = {
//   name: "shyam",
//   sayHello: () => {
//     console.log("Hi", this.name);
//   }
// };

// const boundedHello = test.sayHello.bind({ name: "arora" });
// const customBind = bind(test.sayHello, { name: "new context" });

// test.sayHello();
// boundedHello();
// customBind();


let name = {
  firstname: "Surya",
  lastname: "Prakash"
}

let printName = function (hometown, state, country) {
  console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
printMyName("India");

Function.prototype.mybind = function (...args) {
  return (...args2) => {
    this.apply(args[0], [...args.slice(1), ...args2]);
  }
}

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
printMyName2("India");