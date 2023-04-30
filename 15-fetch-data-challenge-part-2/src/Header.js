// emmet snippet: rafce

import React from "react";
import Button from "./Button"

// destructuring the props object
const Header = ({ reqType, setReqType }) => {
  return (
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="container-fluid header fixed-top">
      <div className="row">
            <Button
                buttonText="users"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText="posts"
                reqType={reqType}
                setReqType={setReqType}
            />
            <Button
                buttonText="comments"
                reqType={reqType}
                setReqType={setReqType}
            />
            </div> 
            </div>
      </form>
  );
};


// default properties set when there is no property to override it
Header.defaultPros = {
  title: "Default Title",
};

export default Header;
