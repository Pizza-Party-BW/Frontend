import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { movePlayer, getKeyCode } from "../actions";

const DirectionPad = () => {
  const [{ locationState }, dispatch] = useStateValue();

  const getKeyCode = e => {
    let keyCode = null;

    switch (e.keyCode) {
      case 37:
        keyCode = "w";
        break;
      case 38:
        keyCode = "n";
        break;
      case 39:
        keyCode = "e";
        break;
      case 40:
        keyCode = "s";
        break;
      default:
        break;
    }

    movePlayer(dispatch, keyCode);
  };

  useEffect(() => {
    // Add event listener for keyboard press
    window.addEventListener("keydown", getKeyCode);

    // Used to clean up the event listener
    return () => window.removeEventListener("keydown", getKeyCode);
  }, []);

  return (
    <>
      <button value="n" onClick={e => movePlayer(dispatch, e.target.value)}>
        North
      </button>
      <button value="w" onClick={e => movePlayer(dispatch, e.target.value)}>
        West
      </button>
      <button value="s" onClick={e => movePlayer(dispatch, e.target.value)}>
        South
      </button>
      <button value="e" onClick={e => movePlayer(dispatch, e.target.value)}>
        East
      </button>
    </>
  );
};

export default DirectionPad;
