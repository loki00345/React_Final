import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    tag: "",
    priority: "",
    dateRange: "all",
  });

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  // Фільтрація за пошуком, тегами, пріоритетом та датою
  const filteredTodos = todos.filter((todo) => {
    const today = new Date();
    let matchesSearch =
      filter.search === "" ||
      todo.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      todo.description.toLowerCase().includes(filter.search.toLowerCase());

    let matchesTag =
      filter.tag === "" || todo.tags.some((tag) => tag.includes(filter.tag));

    let matchesPriority =
      filter.priority === "" || todo.priority === filter.priority;

    let matchesDate = true;
    if (filter.dateRange !== "all") {
      const todoDate = new Date(todo.date);
      if (filter.dateRange === "day") {
        matchesDate = todoDate.toDateString() === today.toDateString();
      } else if (filter.dateRange === "week") {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        matchesDate = todoDate >= weekStart && todoDate <= weekEnd;
      } else if (filter.dateRange === "month") {
        matchesDate =
          todoDate.getMonth() === today.getMonth() &&
          todoDate.getFullYear() === today.getFullYear();
      }
    }

    return matchesSearch && matchesTag && matchesPriority && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-4 text-center">Список справ ✅</h1>
        <TodoForm addTodo={addTodo} />
        <TodoFilters setFilter={setFilter} />
        <TodoList todos={filteredTodos} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
