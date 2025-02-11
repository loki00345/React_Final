import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

const priorities = ["Високий", "Нормальний", "Низький"];

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  const [editTodo, setEditTodo] = useState(null);

  const handleEdit = (todo) => {
    setEditTodo({ ...todo });
  };

  const handleUpdate = () => {
    updateTodo(editTodo.id, editTodo);
    setEditTodo(null);
  };

  return (
    <div className="space-y-4">
      {todos.length === 0 && <p className="text-center text-gray-500">Список порожній 😢</p>}
      {todos.map((todo) => (
        <div key={todo.id} className="p-3 shadow-md bg-white rounded-md">
          <h3 className="font-bold">{todo.title}</h3>
          <p>{todo.description}</p>
          <p className="text-sm text-gray-500">📅 Дата: {todo.date?.toLocaleDateString()}</p>
          <p className="text-sm text-gray-600">📌 Пріоритет: {todo.priority}</p>
          <div className="flex gap-2 mt-2">
            <Button label="✏️ Редагувати" className="p-button-secondary" onClick={() => handleEdit(todo)} />
            <Button label="🗑️ Видалити" className="p-button-danger" onClick={() => removeTodo(todo.id)} />
          </div>
        </div>
      ))}

      {/* Діалогове вікно редагування */}
      <Dialog visible={!!editTodo} onHide={() => setEditTodo(null)} header="Редагувати справу">
        {editTodo && (
          <div className="flex flex-col gap-2">
            <InputText value={editTodo.title} onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })} />
            <InputText value={editTodo.description} onChange={(e) => setEditTodo({ ...editTodo, description: e.target.value })} />
            <Calendar value={editTodo.date} onChange={(e) => setEditTodo({ ...editTodo, date: e.value })} />
            <Dropdown
              value={editTodo.priority}
              options={priorities}
              onChange={(e) => setEditTodo({ ...editTodo, priority: e.value })}
            />
            <Button label="💾 Зберегти" icon="pi pi-check" onClick={handleUpdate} />
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default TodoList;
