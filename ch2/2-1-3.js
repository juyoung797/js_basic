// 클로저

function createAdder() {
    let total = 0;
    return function (a, b) {
        total += a + b;
        return total;
    }
}

//영역1
const add = createAdder();
console.log(add(2, 3));
console.log(add(2, 3));

//영역2
const add2 = createAdder();
console.log(add(2, 3));
console.log(add(2, 3));