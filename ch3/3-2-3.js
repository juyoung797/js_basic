function IO(effect) {
  return {
    run: effect, // 로직을 나중에 실행하겠다.
    map(fn) {
      return IO(() => fn(effect)); // Functor
    },
    flatMap(fn) {
      return fn(effect());          // Monad
    }
  }
}

function getRandom() {
  return Math.random();
}

const getRandomIO = IO(() => Math.random());

// 참조 투명성 유지
const rand1IO = getRandomIO;
const rand2IO = getRandomIO;

const rand1 = rand1IO.run();
const rand2 = rand2IO.run();

console.log(rand1);
console.log(rand2);
console.log(rand1IO === rand2IO);
console.log(rand1 === rand2);