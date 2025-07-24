let total = 0; // 전역 변수

function impureAdd(a, b) { // 외부에 영향을 주는 impure function
    total += a + b;
    return total;
}

console.log(impureAdd(2, 3));
console.log(impureAdd(2, 3));

function pureAdd(a, b) { // 외부에 영향을 주지 않는 pure function
    return a + b;
}

console.log(pureAdd(2, 3));
console.log(pureAdd(2, 3));