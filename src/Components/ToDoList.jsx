import "./ToDoList.css";
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
                          ...chechedListItem,
                          checked: !chechedListItem.checked,
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
          </li>
        );
      })}
    </ul>
  );
}
