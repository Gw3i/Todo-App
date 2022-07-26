import "./App.css";
import Headline from "./Components/Headline";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import FetchRecipes from "./Components/FetchRecipes";
import { nanoid } from "nanoid";

import React, { useState, useEffect } from "react";

function App() {
  const [toDoListItems, setToDoListItems] = useState([
    { id: nanoid(), todo: "Einkaufen gehen", checked: false },
    { id: nanoid(), todo: "Sport machen", checked: false },
    { id: nanoid(), todo: "Blumen gießen", checked: false },
    { id: nanoid(), todo: "Gitarre spielen", checked: false },
  ]);

  function handleListItemsInput(inputValue) {
    setToDoListItems([
      ...toDoListItems,
      {
        id: nanoid(),
        todo: inputValue,
        checked: false,
      },
    ]);
  }

  const [beerList, setBeerList] = useState([{ id: nanoid(), name: "Buzz" }]);

  useEffect(() => {
    loadBeer();
  }, []);

  async function loadBeer() {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    if (response.ok) {
      const data = await response.json();
      setBeerList(data);
    }
  }

  return (
    <section className="List-section">
      <Headline headlineText="ToDo-App"></Headline>
      <ToDoForm onListItemsInput={handleListItemsInput} />
      <ToDoList
        toDoListItems={toDoListItems}
        setToDoListItems={setToDoListItems}
      />
      <FetchRecipes list={beerList} />
    </section>
  );
}

export default App;
