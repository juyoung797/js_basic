function sayHello() {
  console.log("Hello,", this);
}

const person = { name: "j797" };

sayHello();
sayHello.call(person);
sayHello.apply(person); // 함수 인자를 같이 바인딩할 때 쓴다.
// sayHello.bind(person); // ❌ bind 는 변수에 할당해서 사용.
const bound = sayHello.bind(person);
bound();