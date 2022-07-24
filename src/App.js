import "./App.css";
import Headline from "./Components/Headline";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import { nanoid } from "nanoid";

import React, { useState } from "react";

function App() {
  const [toDoListItems, setToDoListItems] = useState([
    { id: nanoid, todo: "Einkaufen gehen", checked: false },
    { id: nanoid, todo: "Sport machen", checked: false },
    { id: nanoid, todo: "Blumen gießen", checked: false },
    { id: nanoid, todo: "Gitarre spielen", checked: false },
  ]);

  return (
    <section className="List-section">
      <Headline headlineText="ToDo-App"></Headline>
      <ToDoForm />
      <ToDoList toDoListItems={toDoListItems} />
    </section>
  );
}

export default App;
