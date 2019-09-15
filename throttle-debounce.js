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
