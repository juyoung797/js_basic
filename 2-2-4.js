const todos = [
    { id: 1, text: "Eat" },
    { id: 2, text: "Pray" },
    { id: 3, text: "Love" }
];

const filtered = todos.filter((todo) => todo.id !== 1);

console.log(todos.length);
console.log(todos);
console.log(filtered);