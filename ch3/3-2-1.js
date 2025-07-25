function square(n) {
  return n * n;
}

const a = square(4);
const b = 16;

console.log("참조 투명성 체크: ", a === b);