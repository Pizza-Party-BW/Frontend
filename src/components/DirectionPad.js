import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { movePlayer, getKeyCode } from "../actions";

const DirectionPad = () => {
  const [{ locationState }, dispatch] = useStateValue();

  useEffect(() => {
    // Add event listener for keyboard press
    window.addEventListener("keydown", e => getKeyCode(dispatch, e));

    // Used to clean up the event listener
    return () =>
      window.removeEventListener("keydown", e => getKeyCode(dispatch, e));
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
