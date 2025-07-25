const user = { name: "h662", age: 17 };

const update = Object.assign({}, user, { age: 25 });
const updated = { ...user, age: 30, isRich: false };

console.log(user);
console.log(update);
console.log(updated);