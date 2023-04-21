// npm install --save styled-components
// emmet snippet: rafce

// npm install --save style-components

import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem"

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList'))
    /*
    [
    {
      id: 1,
      checked: false,
      itemName: "K1 מקלדת דגם",
    },
    {
      id: 2,
      checked: false,
      itemName: "K2 מקלדת דגם",
    },
    {
      id: 3,
      checked: true,
      itemName: "K3 מקלדת דגם",
    },
  ]
  */

  );

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }

  const addItem = (itemName) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const AddedNewItem = { id, checked:false, itemName};
    const listItems = [...items, AddedNewItem];

    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    // return opposite boolean https://stackoverflow.com/questions/12772494/how-to-get-opposite-boolean-value-of-variable-in-javascript

    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    
    setAndSaveItems(listItems);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log(newItem)
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="ColorCode" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(
          item => ( (item.itemName).toLowerCase().includes(
            search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
