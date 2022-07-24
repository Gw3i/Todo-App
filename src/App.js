import "./App.css";
import Headline from "./Components/Headline";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <section className="List-section">
      <Headline headlineText="ToDo-App"></Headline>
      <ToDoForm />
      <ToDoList />
    </section>
  );
}

export default App;
