const curry = fn => (a) => (b) => fn(a, b);

const add = curry((a, b) => a + b);
const subtract = curry((a, b) => a - b);
const multiply = curry((a, b) => a * b);
const divide = curry((a, b) => {
  if (b === 0) throw new Error("Division by Zero");
  return a / b;
});
const power = curry((a, b) => a ** b);

export { add, subtract, multiply, divide, power };