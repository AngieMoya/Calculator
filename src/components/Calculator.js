import React, { useState } from "react";
import "../styles/Calculator.css";
import Mode from "../components/Mode";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";

function Calculator() {
  const [stateMode, setStateMode] = useState(false);
  const [stateInputValue, setStateInputValue] = useState();

  const backgroundMode = stateMode ? "darkBackground" : "lightBackground";

  return (
    <div className={`Calculator ${backgroundMode}`}>
      <Mode setStateMode={setStateMode} />
      <Display stateMode={stateMode} stateInputValue={stateInputValue} />
      <Keyboard stateMode={stateMode} setStateInputValue={setStateInputValue} />
    </div>
  );
}

export default Calculator;
