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


// 커링으로 만든 version
function multiply(a, b) {
  return a * b;
}

const curry2 = fn => a => b => fn(a, b);
const curriedMultiply = curry2(multiply);

const dbl = curriedMultiply(2);
const tpl = curriedMultiply(3);

console.log(dbl(5)); // 10
console.log(tpl(5)); // 15