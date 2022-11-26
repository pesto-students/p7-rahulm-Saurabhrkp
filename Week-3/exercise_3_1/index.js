//Given reducer method:
const add = (a, b = 0) => a + b;

const memoize = (func) => {
  // a cache of results
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
//then calling...
console.log(memoizeAdd(100, 100));
//returns 200
console.log(memoizeAdd(100));
//returns 100
console.log(memoizeAdd(100, 200));
//returns 300
console.log(memoizeAdd(100, 100));
//returns 200 without computing
