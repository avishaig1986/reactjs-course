// npm install --save styled-components
// emmet snippet: rafce

// npm install --save style-components

import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'

function App() {

  const [items, setItems] = useState([
    { 
        id : 1,
        checked: false,
        itemName: "K1 מקלדת דגם"
    },
    { 
        id : 2,
        checked: false,
        itemName: "K2 מקלדת דגם"
    },
    { 
        id : 3,
        checked: true,
        itemName: "K3 מקלדת דגם"
    }
    ]);

    const handleCheck = (id) => {
      // return opposite boolean https://stackoverflow.com/questions/12772494/how-to-get-opposite-boolean-value-of-variable-in-javascript

      console.log(`item: ${items.forEach((item) => console.log(item))}`)
      const listItems = items.map((item) => item.id === id ? {  ...item, checked: !item.checked } : item);

      setItems(listItems)

      localStorage.setItem('shoppingList', JSON.stringify(listItems));
      }
      
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id );
        setItems(listItems)
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

  return (
    <div className="App">
      <Header 
          title="חנות מקלדות"
        />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
