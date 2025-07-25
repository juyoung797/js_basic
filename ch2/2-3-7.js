const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const trim = (str) => str.trim();
const toUpper = (str) => str.toUpperCase();
const exclaim = (str) => str + "!";

const shout = pipe(trim, toUpper, exclaim);
console.log(shout("      Hello, World!    "));

const shout2 = compose(trim, toUpper, exclaim);
console.log(shout2("      Hello, World!    "));