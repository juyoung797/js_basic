const curry2 = fn => a => b => fn(a, b);

// function curry2(fn) {
//     return function (a) {
//         return function (b) {
//             return fn(a, b);
//         }
//     }
// }

function multiply(a, b) {
    return a * b;
}

const curriedMultiply = curry2(multiply);

const double = curriedMultiply(2);
const triple = curriedMultiply(3);

console.log(double(5));
console.log(triple(5));