const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const getUser = obj => obj.user;
const getName = user => user.name;

const data = { user: { name: "j797", age: 70 }};

console.log(compose(getName, getUser)(data));
console.log(pipe(getUser, getName)(data));