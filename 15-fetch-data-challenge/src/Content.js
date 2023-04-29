// emmet snippet: rafce
import React, { useEffect } from "react";

// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save
const API_URL = "https://jsonplaceholder.typicode.com";

function Content({ blogObjects}) {

  return (
    <>
    <ul>
      { blogObjects.map( 
          item => 
            item.selected && 

            item.content.map( 
              itemContent =>
                <li>
                  {
                  JSON.stringify(itemContent)
                  }
                </li>
         
       ))}
    </ul>
    </>
  );
}

export default Content;
