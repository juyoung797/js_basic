const nums = [9, 4, 16, 4, 9, 16];
const memo = {};
const expensiveSqrt = n => {
  if (memo[n]) {
    console.log(`cache hit: ${n}`);
    return memo[n];
  }
  console.log(`calculating: ${n}`);
  const result = Math.sqrt(n);
  memo[n] = result;
  return result;
}

const result = nums.map(expensiveSqrt);
console.log(result);