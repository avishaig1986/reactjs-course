// emmet snippet: rafce
import React from "react";

// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save

const Content = ( {color} ) => {

  return (
    <main
      className="colorSquare"
      style={{backgroundColor: color}}
    >
      {
        color ? <p>{color}</p> : <p>type value</p>
      }
    </main>
  );
}

export default Content;
