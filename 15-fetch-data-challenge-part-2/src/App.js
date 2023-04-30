// npm install --save styled-components
// emmet snippet: rafce

// npm install --save style-components

// npx json-server -p 3500 -w data/db.json

import React, { useEffect } from "react";
import Header from "./Header";
import List from "./List"
import { useState } from "react";
import Table from "./Table.js";
//const bootstrap = require('bootstrap') 

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}/${reqType}`)
        const data = await response.json();

        setItems(data)

      } catch (err) {
        console.log(err)

      } finally {
        setIsLoading(false)
      }
    }

    fetchItems()
  }, [reqType])


  return (
    <div className="App">

      <Header
        reqType={reqType}
        setReqType={setReqType}
      />

     {/* <List items={items}/>*/}

     <Table
      items={items}
     />

      
    </div>
  );
}

export default App;
