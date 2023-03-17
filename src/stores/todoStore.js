import { writable } from 'svelte/store';
export const todos = writable([]);

export const loadTodos = () => {
	const loadedTodos = JSON.parse(localStorage.getItem('todos')) || [];

	todos.set(loadedTodos);
};
loadTodos();

export const addTodo = (text) => {
	todos.update((current) => [...current, { text, completed: false, id: Date.now() }]);
};

export const deleteTodo = (id) => {
	todos.update((current) => current.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id, currentTodoState) => {
	todos.update((current) =>
		current.map((todo) => {
			if (todo.id === id) {
				todo.completed = currentTodoState ? false : true;
			}
			return todo;
		})
	);
};
