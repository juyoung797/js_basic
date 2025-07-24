function add(a, b) {
    return a + b;
}

function square(n) {
  return n * n;
}

const point = { x: 1, y: 2 };

function movePoint(p, dx, dy) {
    return { x: p.x + dx, y: p.y + dy };
}

function assertEqual(actual, expected, desc) {
    if (actual !== expected) {
        console.error(`❌ ${desc}: expected ${expected}, got ${actual}`);
    } else {
        console.log(`✅ ${desc}`);
    }
}

assertEqual(add(1, 2), 3,  "add(1, 2) === 3");
assertEqual(add(1, 2), 3,  "add 재 호출, 결과는 동일.");
assertEqual(add(1, 2), 0,  "틀림");

assertEqual(square(5), 25, "square(5) === 25");
assertEqual(square(5), 25, "square 재 호출, 결과는 동일.");

assertEqual(
    JSON.stringify(movePoint(point, 2, 3)),
    JSON.stringify({ x: 3, y: 5 }),
    "movePoint 동작 확인"
);