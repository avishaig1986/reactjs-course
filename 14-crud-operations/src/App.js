// npm install --save styled-components
// emmet snippet: rafce

// npm install --save style-components

// npx json-server -p 3500 -w data/db.json

import React, { useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem"
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("failed to fetch items!");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null)
      
      } catch (err) {
        setFetchError(err.message)

      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
    
  },  [])

 

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }

  const addItem = async (itemName) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const AddedNewItem = { id, checked:false, itemName};
    const listItems = [...items, AddedNewItem];

    setAndSaveItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(AddedNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  }

  const handleCheck = async (id) => {
    // return opposite boolean https://stackoverflow.com/questions/12772494/how-to-get-opposite-boolean-value-of-variable-in-javascript

    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(listItems);
    const addedItem = listItems.filter((item => item.id === id))
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: addedItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions)
    if(result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item => item.id !== id));
    
    setAndSaveItems(listItems);
    const deleteOptions = { method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
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
      <main>
        { fetchError && <p style={{ color: "Red"}}>{`Error: ${fetchError}`}
        </p>}
        {!fetchError && <Content
          items={items.filter(
            item => ( (item.itemName).toLowerCase().includes(
              search.toLowerCase()
              )))
            }
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          isLoading={isLoading}
       
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
