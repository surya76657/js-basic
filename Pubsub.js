const PubSub = (() => {
  const store = {};
  return {
    publish: (eventName, data = {}) => {
      if (store[eventName]) {
        store[eventName].forEach(fn => {
          fn(data);
        });
      }
    },
    subscribe: (eventName, callback) => {
      if (!store[eventName]) {
        store[eventName] = [];
      }
      const index = store[eventName].push(callback) - 1;
      return {
        remove() {
          delete store[eventName][index];
        }
      };
    }
  };
})();

PubSub.subscribe("eventId", data => {
  console.log("Sb1", data);
});
PubSub.subscribe("eventId", data => {
  console.log("Sb2", data);
});
PubSub.subscribe("eventId", data => {
  console.log("Sb3", data);
});
const ref4 = PubSub.subscribe("eventId", data => {
  console.log("Sb4", data);
});

ref4.remove();

PubSub.publish("eventId", "hello");