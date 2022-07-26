import "./ToDoList.css";
import "./button.css";
export default function ToDoList({ toDoListItems, setToDoListItems }) {
  return (
    <ul className="todo-list">
      {toDoListItems.map((listItem) => {
        return (
          <li key={listItem.id} className="todo-list__item">
            <input
              type="checkbox"
              checked={listItem.checked}
              value={listItem.todo}
              onChange={() => {
                setToDoListItems(
                  toDoListItems.map((chechedListItem) => {
                    return chechedListItem.id === listItem.id
                      ? {
                          ...listItem,
                          checked: !listItem.checked,
                        }
                      : chechedListItem;
                  })
                );
              }}
            />

            <span
              style={{ textDecoration: listItem.checked && "line-through" }}
            >
              {listItem.todo}
            </span>
            <button
              className="delete-button"
              onClick={() => {
                setToDoListItems(
                  toDoListItems.filter(
                    (listItem_) => listItem_.id !== listItem.id
                  )
                );
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}
