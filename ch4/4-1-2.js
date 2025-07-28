const data = [-3, 7, -1, 0, 5];
const result = data
  .filter(n => n >= 0)
  .map(n => Math.abs(n))
  .sort((a, b) => a - b);

console.log(result);
