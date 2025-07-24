const point = { x: 1, y: 2 };

function movePoint(p, dx, dy) {
  return { x: p.x + dx, y: p.y + dy };
}

const p2 = movePoint(point, 5, 5);
console.log(point);
console.log(p2);