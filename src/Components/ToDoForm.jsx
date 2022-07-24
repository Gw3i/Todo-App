export default function ToDoForm() {
  return (
    <form>
      <label htmlFor="todoInput">Add new todo</label>
      <input type="text" name="todoInput" id="todoInput" />
      <button type="submit">add</button>
    </form>
  );
}
