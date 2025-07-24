const composeMany = 
    (...fns) => 
    x => 
        fns.reduceRight((acc, fn) => fn(acc), x);

const splitWords = (str) => str.split(" ");
const firstWord = (arr) => arr[0];
const exclaim = (word) => word + "!";

const getFirstExclaimed = composeMany(exclaim, firstWord, splitWords);

console.log(getFirstExclaimed("나는 지금 배가 무지 고프다!"));