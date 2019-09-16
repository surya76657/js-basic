const throttle = (fn, delay) => {
  let firedAt;
  return function (...args) {
    const currentTime = Date.now();
    if (!firedAt || delay < currentTime - firedAt) {
      firedAt = currentTime;
      fn.apply(this, args);
    }
  };
};

const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    clearInterval(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce2 = function (fn, d) {
  let timer;
  return function (arguments) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), d);
  }
}

const betterFunction = debounce2(getData, 300);