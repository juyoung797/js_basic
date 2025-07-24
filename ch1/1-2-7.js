function curryAdd(a) {
    return function(b) {
        return a + b;
    };
}

const addTen = curryAdd(10);
console.log(addTen(5));

const addTwelve = curryAdd(12);
console.log(addTwelve(8));
