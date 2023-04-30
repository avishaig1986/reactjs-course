// emmet snippet: rafce

// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save
import React from "react";
import ListItem from "./ListItem"
function List({ items, isLoading }) {

  return (
    <>
    {items.length ? (
        <ul>
        { items.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
        </ul>
      ) : (
        isLoading &&
          <p style={{ marginTop: "10px" }}>Loading...</p> 
      )}
    </>
  );
}

export default List;
