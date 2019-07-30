import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header(props) {
  console.log(props)
  return (
    <header style={{backgroundColor: "red", fontSize: 100}} className="header">
      <h1>{props.greeting}</h1>
    </header>
  );
}

export default Header;
