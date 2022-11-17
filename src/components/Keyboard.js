import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../styles/Keyboard.css";
import { evaluate } from "mathjs";

function Keyboard({ stateMode, setStateInputValue }) {
  const [stateInput, setStateInput] = useState("");

  const keyboardMode1 = stateMode ? "grayButton" : "softGrayButton";
  const keyboardMode2 = stateMode ? "darkGrayButton" : "whiteButton";

  const inputPush = (e) => {
    const screenInput = e.target.innerHTML;
    console.log(e.target.innerHTML);
    let newstate=stateInput;
    if (screenInput === "C" || screenInput === "=" || screenInput === "DEL") {
      newstate = stateInput;
    } else {
      setStateInput(stateInput + screenInput);
      newstate = stateInput + screenInput;
    }

    if (stateInput.includes("x")) {
      setStateInput(stateInput.replace("x", "*"));
    }

    if (screenInput === "C") {
      setStateInput("");
    } else if (screenInput === "DEL") {
      setStateInput(stateInput.slice(0, -1));
    } else if (screenInput === "=") {
      setStateInput(evaluate(stateInput));
    }
    setStateInput(newstate);
  };

  useEffect(() => {
    setStateInputValue(stateInput);
  }, [stateInput]);

  return (
    <div className="Keyboard">
      <div className="row1">
        <Button
          color={keyboardMode1}
          text="C"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode1}
          text="+/-"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode1}
          text="%"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color="purpleButton"
          text="/"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
      </div>
      <div className="row2">
        <Button
          color={keyboardMode2}
          text="7"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="8"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="9"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color="purpleButton"
          text="x"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
      </div>
      <div className="row3">
        <Button
          color={keyboardMode2}
          text="4"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="5"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="6"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color="purpleButton"
          text="-"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
      </div>
      <div className="row4">
        <Button
          color={keyboardMode2}
          text="1"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="2"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="3"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color="purpleButton"
          text="+"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
      </div>
      <div className="row5">
        <Button
          color={keyboardMode2}
          text="."
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="0"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color={keyboardMode2}
          text="DEL"
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
        <Button
          color="purpleButton"
          text="="
          stateMode={stateMode}
          onClick={inputPush}
        ></Button>
      </div>
    </div>
  );
}

export default Keyboard;
