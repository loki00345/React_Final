import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const TodoFilters = ({ setFilter }) => {
  const priorities = ["", "Високий", "Нормальний", "Низький"];
  const dateOptions = [
    { label: "Всі", value: "all" },
    { label: "На день", value: "day" },
    { label: "На тиждень", value: "week" },
    { label: "На місяць", value: "month" },
  ];

  return (
    <div className="mb-4 flex flex-col gap-2">
      <InputText
        placeholder="🔍 Пошук за назвою або описом"
        onChange={(e) => setFilter((prev) => ({ ...prev, search: e.target.value }))}
        className="p-2 w-full"
      />
      <InputText
        placeholder="🔖 Пошук за тегом"
        onChange={(e) => setFilter((prev) => ({ ...prev, tag: e.target.value }))}
        className="p-2 w-full"
      />
      <Dropdown
        options={priorities}
        placeholder="📌 Виберіть пріоритет"
        onChange={(e) => setFilter((prev) => ({ ...prev, priority: e.value }))}
        className="w-full"
      />
      <Dropdown
        options={dateOptions}
        placeholder="📅 Фільтр за датою"
        onChange={(e) => setFilter((prev) => ({ ...prev, dateRange: e.value }))}
        className="w-full"
      />
    </div>
  );
};

export default TodoFilters;
