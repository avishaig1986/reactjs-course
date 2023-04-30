// emmet snippet: rafce

// react icons: https://www.npmjs.com/package/react-icons
// npm install react-icons --save
import React from "react";

function Button({ buttonText, reqType, setReqType }) {

  return (
            <button
              className={buttonText === reqType 
                ? "col-sm btn btn-dark border text-center" 
                : "col-sm btn btn-light border text-center"}
              type="button"
              onClick={() => setReqType(buttonText)}
            >
              {buttonText}
            </button>
  );
}

export default Button;
