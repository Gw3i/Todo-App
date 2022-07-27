import "./App.css";
import Headline from "./Components/Headline";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import FetchRecipes from "./Components/FetchRecipes";
import { nanoid } from "nanoid";
import { saveToLocalStorage, loadFromLocalStorage } from "./lib/localStorage";
import React, { useState, useEffect } from "react";
import useFetch from "./lib/useFetch";

function App() {
  const [toDoListItems, setToDoListItems] = useState(
    loadFromLocalStorage("toDo-List") ?? [
      { id: nanoid(), todo: "Einkaufen gehen", checked: false },
      { id: nanoid(), todo: "Sport machen", checked: false },
    ]
  );

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

  useEffect(() => {
    saveToLocalStorage("toDo-List", toDoListItems);
  }, [toDoListItems]);

  useEffect(() => {
    loadFromLocalStorage(toDoListItems);
  }, [toDoListItems]);

  //////////// BEER LIST /////////////////

  const [beerList, setBeerList] = useState([{ id: nanoid(), name: "Buzz" }]);

  const beerURL = "https://api.punkapi.com/v2/beers";

  const [data] = useFetch(beerURL);

  useEffect(() => {
    setBeerList(data);
  }, [data]);

  // useEffect(() => {
  //   loadBeer();
  // }, []);

  // async function loadBeer() {
  //   const response = await fetch("https://api.punkapi.com/v2/beers");
  //   if (response.ok) {
  //     const data = await response.json();
  //     setBeerList(data);
  //   }
  // }

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
