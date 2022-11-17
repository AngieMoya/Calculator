import React from "react";
import "../styles/Button.css";

function Button({ color, text, onClick, stateMode }) {
  const letter = stateMode ? "darkLetterButton" : "lightLetterButton";
  return (
    <button className={`button ${letter} ${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
