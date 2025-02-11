import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

const priorities = ["Високий", "Нормальний", "Низький"];

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [priority, setPriority] = useState(priorities[1]); // "Нормальний" за замовчуванням

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTodo({
      id: Date.now(),
      title,
      description,
      date,
      priority,
    });

    setTitle("");
    setDescription("");
    setDate(null);
    setPriority(priorities[1]); // Скидання до "Нормальний"
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-4">
      <InputText
        placeholder="📌 Назва справи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 w-full"
      />
      <InputText
        placeholder="📝 Опис справи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 w-full"
      />
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        placeholder="📅 Виберіть дату"
        className="w-full"
      />
      <Dropdown
        value={priority}
        options={priorities}
        onChange={(e) => setPriority(e.value)}
        placeholder="📌 Виберіть пріоритет"
        className="w-full"
      />
      <Button type="submit" label="✅ Додати справу" className="w-full" />
    </form>
  );
};

export default TodoForm;
