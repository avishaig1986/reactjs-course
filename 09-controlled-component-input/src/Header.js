// emmet snippet: rafce

import React from "react";

// destructuring the props object
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
/*

// props holds all the different properties from the parent component
const Header = (props) => {

  return (
    <header>
          <h1>${props.title}</h1>
      </header>
  )
}
*/

// default properties set when there is no property to override it
Header.defaultPros = {
  title: "Default Title",
};

export default Header;
