const point = { x: 1, y: 2 };

function movePoint(p, dx, dy) {
    p.x += dx;
    p.y += dy;
    return p;
}

const p2 = movePoint(point, 5, 1);
console.log(point);
console.log(p2);