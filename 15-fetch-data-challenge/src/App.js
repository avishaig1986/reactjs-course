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
//const bootstrap = require('bootstrap') 
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const blogObjectsList = 
    [{
      title: "users",
      selected: true,
      content: [{
        one: "user1",
        two: "user2",
        three: "user3"
      },{
        four: "user1",
        five: "user2",
        six: "user3"
      },
    ]
    },
    {
    title: "posts",
    selected: false,
    content: ["post1","post2","user3"]
    },  
    {
      title: "comments",
      selected: false,
      content: ["comment1","comment2","user3"]
    }
  ]

  const [blogObjects, setBlogObjects] = useState(blogObjectsList)

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

  return (
    <div className="App">

      <Header
        blogObjects={blogObjects}
        setBlogObjects={setBlogObjects}
      />
      <Content
        blogObjects={blogObjects}
      />


    </div>
  );
}

export default App;
