const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);

console.log(nums);
console.log(doubled);

let arr1 = nums.map((n) => n * 2);
let arr2 = [1 * 2, 2 * 2, 3 * 2];
let arr3 = [2, 4, 6];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2));
console.log(JSON.stringify(arr2) === JSON.stringify(arr3));