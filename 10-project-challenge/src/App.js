// npm install --save styled-components
// emmet snippet: rafce

// npm install --save style-components

import React from "react";
import Content from "./Content";
import { useState } from "react";
import SearchItem from "./SearchItem"

function App() {

  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <Content
        color={search}
        />   
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
       </div>
  );
}

export default App;
