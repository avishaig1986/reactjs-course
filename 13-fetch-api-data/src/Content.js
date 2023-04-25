// emmet snippet: rafce
import React from "react";
import ItemList from "./ItemList";

// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save

function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>סל הקניות ריק</p>
      )}
    </>
  );
}

export default Content;
