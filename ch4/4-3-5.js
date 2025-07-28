function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (cache[arg] !== undefined) {
      console.log(`chache hit: ${arg}`);
      return cache[arg];
    }
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const slowSquare = n => {
  for (let i = 0; i < 1e7; i++) {
    return n*n;
  }
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4));
console.log(fastSquare(4));