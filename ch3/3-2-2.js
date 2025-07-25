function getRandom() {
  return Math.random();
}

const rand1 = getRandom();
const rand2 = getRandom();

console.log(rand1);
console.log(rand2);
console.log("참조 투명성 여부: ", rand1 === rand2);