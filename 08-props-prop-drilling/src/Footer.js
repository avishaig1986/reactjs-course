// emmet snippet: rafce

import React from "react";

function Footer({ length }) {
  return (
    <footer>
      <p>
        {length} נבחרו {length === 1 ? "פריט" : "פריטים"}
      </p>
    </footer>
  );
}

/*
function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>כל הזכויות שמורות &copy; {year}</p>
    </footer>
  )
}
*/
export default Footer;
