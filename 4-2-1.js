function multiply(a, b) {
  return a * b;
}

function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  }
}

const multiplyBy = n => partial(multiply, n);

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));
console.log(double(7));
console.log(triple(5));
console.log(triple(7));