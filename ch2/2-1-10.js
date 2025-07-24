total = 0;
function impureAdd(a, b) {
    total += a + b;
    return total;
}

result = 0;
function impureSquare(n) {
    result = n * n;
    return result;
}


function assertEqual(actual, expected, desc) {
    if (actual !== expected) {
        console.error(`❌ ${desc}: expected ${expected}, got ${actual}`);
    } else {
        console.log(`✅ ${desc}`);
    }
}

assertEqual(impureAdd(1, 2), 3,  "add(1, 2) === 3");
assertEqual(impureAdd(1, 2), 3,  "add 재 호출, 결과는 동일??");
assertEqual(impureAdd(1, 2), 0,  "틀림");

assertEqual()