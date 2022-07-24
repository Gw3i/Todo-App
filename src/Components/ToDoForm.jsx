import "./ToDoForm.css";
import { useState } from "react";

export default function ToDoForm({ onListItemsInput }) {
  const [inputValue, setInputValue] = useState("");

  function getValue(event) {
    event.preventDefault();
    onListItemsInput(inputValue);
  }

  return (
    <form className="todo-form" onSubmit={getValue}>
      <label className="todo-form__label" htmlFor="todoInput">
        Add new todo
      </label>
      <input
        className="todo-form__input"
        type="text"
        name="todoInput"
        id="todoInput"
        placeholder="Your todo"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button className="button" type="submit">
        add
      </button>
    </form>
  );
}
