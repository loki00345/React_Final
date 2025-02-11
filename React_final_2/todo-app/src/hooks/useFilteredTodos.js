import { useState } from "react";
import useTodoStore from "../context/todoStore";

const useFilteredTodos = () => {
  const { todos } = useTodoStore();
  const [query, setQuery] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return { query, setQuery, filteredTodos };
};

export default useFilteredTodos;
