import "./ToDoForm.css";

export default function ToDoForm() {
  return (
    <form className="todo-form">
      <label className="todo-form__label" htmlFor="todoInput">
        Add new todo
      </label>
      <input
        className="todo-form__input"
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Your todo"
      />
      <button className="button" type="submit">
        add
      </button>
    </form>
  );
}
