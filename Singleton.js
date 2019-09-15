const Singleton = (() => {
  let instance;
  createInstance = () => new Object("this is instance")
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance()
      }
      return instance;
    }
  }
})();

const result = Singleton.getInstance();
const result2 = Singleton.getInstance();
console.log(result === result2);

