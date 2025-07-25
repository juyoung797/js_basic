const initTodos = [];

function addTodo(todos, newTodo) {
    return [...todos, newTodo];
}

function toggleTodo(todos, id) {
    return todos.map(todo => todo.id === id ? 
        { ...todo, completed: !todo.completed } : todo);
}

const added = addTodo(initTodos, { id: 1, text: "공부하기", completed: false });
console.log("할일 추가 후 길이 증가 확인: ", added.length === initTodos.length + 1);
console.log(initTodos);
console.log(added);

const toggled = toggleTodo(added, 1);
console.log(toggled);

console.log(
    "completed 값 토글 확인: ",
    added[0].completed !== toggled[0].completed
);
console.log("새 배열 생성 확인: ", added !== toggled);

function removeTodo(todos, id) {
    return todos.filter(todo => todo.id !== id);
}

const removed = removeTodo(toggled, 1);
console.log("삭제 후 배열 길이 확인: ", removed.length === 0);