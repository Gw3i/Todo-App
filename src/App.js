import "./App.css";
import Headline from "./Components/Headline";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";


import React, { useState } from "react";

function App() {
  const [toDoListItems, settoDoListItems] = useState({});

  return (
    <section className="List-section">
      <Headline headlineText="ToDo-App"></Headline>
      <ToDoForm />
      <ToDoList />
    </section>
  );
}

export default App;
