const curry = (fn) => {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }

    return (...more) => curried(...args, ...more);
  };
};

function sum3(a, b, c) {
  return a + b + c;
}

const curriedSum3 = curry(sum3);

console.log(curriedSum3(1)(2)(3));
console.log(curriedSum3(1, 2)(3));
console.log(curriedSum3(1)(2, 3));
console.log(curriedSum3(1, 2, 3));