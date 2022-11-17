import React, { useState, useEffect } from "react";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import "../styles/Mode.css";

function Mode({setStateMode}) {
  const [stateSwitch, setStateSwitch] = useState(false); //modo por default es light

  const modeChange = () => {
    setStateSwitch((mode) => {
      return !mode;
    });
  };

  useEffect(() => {
    setStateMode(stateSwitch)
  }, [stateSwitch])

  const localSwitch = stateSwitch ? "darkSwitch" : "lightSwitch";
  const localIcon = stateSwitch ? Moon : Sun;
  const localCircle = stateSwitch ? "darkCircle" : "lightCircle";

  return (
    <div className={` switch ${localSwitch}`} onClick={modeChange}>
      {localSwitch === "darkSwitch" ? (
        <>
          <img className="icon" src={localIcon}></img>
          <div className={`circle ${localCircle}`}></div>
        </>
      ) : (
        <>
          <div className={ `circle ${localCircle}`}></div>
          <img className="icon" src={localIcon}></img>
        </>
      )}
    </div>
  );
}

export default Mode;
