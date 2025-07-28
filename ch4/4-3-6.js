function memoizeAsync(fn) {
  const cache = {};

  return async function (arg) {
    if (cache[arg] !== undefined) {
      console.log(`chache hit: ${arg}`);
      return cache[arg];
    }
    const result = await fn(arg);
    cache[arg] = result;
    return result;
  };
}

const slowSquare = n => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve (n * n)}, 10000);
  });
}

const fastSquare = memoizeAsync(slowSquare);

(async () => {
  console.log(await fastSquare(4));
  console.log(await fastSquare(4));
})();