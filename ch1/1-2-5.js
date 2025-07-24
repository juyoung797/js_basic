const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled = nums.map(n => n * 2);
console.log(doubled);

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);