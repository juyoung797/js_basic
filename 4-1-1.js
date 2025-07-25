const nums = [12, 3, 7, 8, 15, 6, 9, 10, 1];

// 짝수만 추출
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

// 10 이상인 값만
const large = nums.filter(n => n >= 10);
console.log(large);

// 합계 계산
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);     // 71

// 최대값 찾기
const max = nums.reduce((acc, n) => n > acc ? n : acc, nums[0]);
console.log(max);     // 15