import "./ToDoList.css";
export default function ToDoList() {
  return (
    <ul className="todo-list">
      <li className="todo-list__item">
        <input value="Enkaufen gehen" type="checkbox" />
        <span>Einkaufen gehen</span>
      </li>
    </ul>
  );
}
