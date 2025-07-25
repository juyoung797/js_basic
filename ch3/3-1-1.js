function factorial(n) {
  if (n < 0) {
    throw new Error("음수는 팩토리얼 연산을 수행할 수 없습니다.");
  }

  console.log(`팩토리얼 진입: ${n}`);

  if (n === 0 || n === 1) {
    console.log("1 반환");

    return 1;
  }

  const result = n * factorial(n - 1);
  console.log(`${n}으로 부터 ${result}를 반환합니다.`);
  return result;
}

console.log(factorial(10));