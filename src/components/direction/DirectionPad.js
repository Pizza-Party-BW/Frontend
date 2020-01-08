import React, { useEffect } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { movePlayer } from "../../actions";
import styled from "styled-components";

// Images for the direction pad
import north from "./assets/north.png";
import south from "./assets/south.png";
import west from "./assets/west.png";
import east from "./assets/east.png";

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
      <DirectionPadWrapper>
        <button
          value="n"
          onClick={e => movePlayer(dispatch, e.target.value)}
          style={{
            ...DirectionPadButton,
            backgroundImage: `url(${north})`,
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 0,
            gridRowEnd: 1
          }}
        ></button>
        <button
          value="w"
          onClick={e => movePlayer(dispatch, e.target.value)}
          style={{
            ...DirectionPadButton,
            backgroundImage: `url(${west})`,
            gridColumnStart: 0,
            gridColumnEnd: 1,
            gridRowStart: 1,
            gridRowEnd: 2
          }}
        ></button>
        <button
          value="s"
          onClick={e => movePlayer(dispatch, e.target.value)}
          style={{
            ...DirectionPadButton,
            backgroundImage: `url(${south})`,
            gridColumnStart: 1,
            gridColumnEnd: 2,
            gridRowStart: 2,
            gridRowEnd: 3
          }}
        ></button>
        <button
          value="e"
          onClick={e => movePlayer(dispatch, e.target.value)}
          style={{
            ...DirectionPadButton,
            backgroundImage: `url(${east})`,
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: 1,
            gridRowEnd: 2
          }}
        ></button>
      </DirectionPadWrapper>
    </>
  );
};

export default DirectionPad;

const DirectionPadWrapper = styled.div`
  display: grid;
  height: 96px;
  width: 96px;
`;

const DirectionPadButton = {
  width: 32,
  height: 32,
  cursor: "pointer",
  border: "none",
  backgroundColor: "transparent"
};
