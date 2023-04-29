// emmet snippet: rafce
import React from "react";
import ItemList from "./ItemList";

// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save

function Content({ items, handleCheck, handleDelete, isLoading}) {
  
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        isLoading ? 
          <p style={{ marginTop: "2rem" }}>Loading...</p> :
          <p style={{ marginTop: "2rem" }}>סל הקניות ריק</p>
      )}
    </>
  );
}

export default Content;
