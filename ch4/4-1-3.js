const items = [
  { name: "Apple", qty: 10 },
  { name: "Banana", qty: 5 },
  { name: "Apple", qty: 2 },
  { name: "Kiwi", qty: 7 },
  { name: "Banana", qty: 4 },
  { name: "Apple", qty: 3 },
];

const totalByName = items.reduce((acc, item) => {
  acc[item.name] = (acc[item.name] || 0) + item.qty;
  return acc;
}, {});

console.log(totalByName);