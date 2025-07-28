export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const square = (n) => multiply(n, n);
export const sum = (arr) => arr.reduce((acc, x) => add(acc, x), 0);