import React, { useEffect } from "react";
import { useStateValue } from "../../../hooks/useStateValue";
import { movePlayer } from "../../../actions";
import styled from "styled-components";

// Images for the direction pad
import north from "./assets/north.png";
import south from "./assets/south.png";
import west from "./assets/west.png";
import east from "./assets/east.png";

const DirectionPad = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const getKeyCode = e => {
      e.preventDefault();
      let keyCode = null;

      let up = document.querySelector(".north");
      let left = document.querySelector(".west");
      let down = document.querySelector(".south");
      let right = document.querySelector(".east");

      switch (e.keyCode) {
        case 37:
          keyCode = "w";
          left.style.transform = "scale(0.8)";
          break;
        case 38:
          keyCode = "n";
          up.style.transform = "scale(0.8)";
          break;
        case 39:
          keyCode = "e";
          right.style.transform = "scale(0.8)";
          break;
        case 40:
          keyCode = "s";
          down.style.transform = "scale(0.8)";
          break;
        default:
          break;
      }

      movePlayer(dispatch, keyCode);

      setTimeout(() => {
        up.removeAttribute("style");
        down.removeAttribute("style");
        left.removeAttribute("style");
        right.removeAttribute("style");
      }, 100);
    };
    // Add event listener for keyboard press
    window.addEventListener("keydown", getKeyCode);

    // Used to clean up the event listener
    return () => window.removeEventListener("keydown", getKeyCode);
  }, [dispatch]);
  return (
    <DirectionPadWrapper>
      <button
        value="n"
        onClick={e => movePlayer(dispatch, e.target.value)}
        className="north"
      ></button>
      <button
        value="w"
        onClick={e => movePlayer(dispatch, e.target.value)}
        className="west"
      ></button>
      <button
        value="s"
        onClick={e => movePlayer(dispatch, e.target.value)}
        className="south"
      ></button>
      <button
        value="e"
        onClick={e => movePlayer(dispatch, e.target.value)}
        className="east"
      ></button>
    </DirectionPadWrapper>
  );
};

export default DirectionPad;

const DirectionPadWrapper = styled.div`
  display: grid;
  height: 192px;
  width: 192px;
  grid-column: 3 / 4;
  grid-row: 15 / 20;
  justify-self: center;
  align-self: center;

  button {
    width: 64px;
    height: 64px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    background-size: cover;
    background-position: center;
  }

  button.north {
    background-image: url(${north});
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 0;
    grid-row-end: 1;
  }

  button.west {
    background-image: url(${west});
    grid-column-start: 0;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  button.south {
    background-image: url(${south});
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  button.east {
    background-image: url(${east});
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  button:active {
    transform: scale(0.8);
  }
`;
