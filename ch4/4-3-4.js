function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const addFive = makeAdder(5);
console.log(addFive(2));
console.log(addFive(10));

const addTen = makeAdder(10);
console.log(addTen(3));