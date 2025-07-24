const pipeMany = 
    (...fns) => 
    (x) => 
        fns.reduceRight((acc, fn) => fn(acc), x);

const splitWords = (str) => str.split(" ");
const firstWord = (arr) => arr[0];
const exclaim = (word) => word + "!";
const trim = str => str.trim();
const toUpper = str => str.toUpperCase();
const repeat = str => str + str + "";


const pipe1 = pipeMany(trim, repeat, trim, repeat, firstWord, exclaim);
console.log(pipe1("ewwe weewek jfkjfke"));