function createCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counterA = createCounter();
console.log(counterA());
console.log(counterA());

const counterB = createCounter();
console.log(counterB());