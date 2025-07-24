const compose = (f, g) => x => f(g(x));

const trim = str => str.trim();
const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const repeat = str => str + str + "";

const shout = compose(toUpper, trim);
console.log(shout("    hello world    "));

const exclaimRepeate = compose(exclaim, repeat);
console.log(exclaimRepeate("hello"));

const repeatExclaim = compose(repeat, exclaim);
console.log(repeatExclaim("hello"));