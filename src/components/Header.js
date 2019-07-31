import React from "react";
import "./css/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header(props) {
  console.log(props)
  return (
    <div className="score-bar">
      <div className="score">Score: {props.score}</div>
      <div id="win-lose">Correct!</div>
      <div className="high-score">High Score: {props.highscore}</div>
    </div>
  );
}

export default Header;
