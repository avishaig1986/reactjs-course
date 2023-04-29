// emmet snippet: rafce

import React from "react";

// destructuring the props object
const Header = ({ blogObjects, setBlogObjects }) => {

  const handleSelected = (title) => {
    const newState = blogObjects.map( item => {
      if (item.title === title) {
        return {...item, selected: true};
      }
      return  {...item, selected: false};
    });
    setBlogObjects(newState)
    };

  return (
<header> 
<div class="container-fluid">
  <div class="row">
  {
    blogObjects.map((item) => (
      item.selected ? (
        <div class="col-sm
        border
        text-center
        bg-dark 
        text-white"
        >
         <h5> {item.title} </h5>
          </div>
      ) : (
        <div class="col-sm 
        border
        text-center
        bg-light 
        text-dark"
        onClick={ () => handleSelected(item.title)}>
          <h5> {item.title} </h5>
          </div>
      )
      
      ))
  }
  </div>
</div>
</header>
  );
};


// default properties set when there is no property to override it
Header.defaultPros = {
  title: "Default Title",
};

export default Header;
