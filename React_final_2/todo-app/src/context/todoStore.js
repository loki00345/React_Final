import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? updatedTodo : t)),
    })),
}));

export default useTodoStore;
