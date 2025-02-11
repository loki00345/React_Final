import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📋 Список справ</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;
