import React from "react";
import "../styles/Display.css";
import { evaluate } from "mathjs";

function Display({ stateMode, stateInputValue }) {
  const operationLetterMode = stateMode
    ? "operationDarkLetter"
    : "operationLightLetter";
  const resultLetterMode = stateMode ? "resultDarkLetter" : "resultLightLetter";

  const inputValueResult = 0;
  
  return (
    <div className="Display">
      <div className={`operation ${operationLetterMode}`}>
        {stateInputValue}
      </div>
      <div className={`result ${resultLetterMode}`}>{inputValueResult}</div>
    </div>
  );
}

export default Display;
