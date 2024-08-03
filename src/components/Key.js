import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";

function Key({ keyVal, bigKey, disabled }) {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);
  const sellectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={sellectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
