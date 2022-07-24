import "./ToDoList.css";
export default function ToDoList({ toDoListItems }) {
  return (
    <ul className="todo-list">
      {toDoListItems.map((listItem) => {
        return (
          <li key={listItem.id} className="todo-list__item">
            <input type="checkbox" value={listItem.todo} />
            <span>{listItem.todo}</span>
          </li>
        );
      })}
    </ul>
  );
}
