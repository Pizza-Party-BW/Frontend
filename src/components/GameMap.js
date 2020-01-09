import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getMap } from "../actions";
import styled from "styled-components";

import turtle from "./player/assets/turtle-l.png";

const GameMap = () => {
  const [{ mapState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

  console.log("mapState", mapState);
  const rooms = mapState.map;
  console.log(rooms);

  const x = 1;
  const y = 1;
  // console.log(mapState.map, "maps");
  return (
    <GameMapContainer>
      <div
        style={{
          backgroundImage: `url(${turtle})`,
          width: 48,
          height: 48,
          border: "1px solid green",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "auto auto",
          gridColumn: `${x} / ${x + 1}`,
          gridRow: `${y * -1} / ${(y + 1) * -1}`
        }}
      ></div>
      {rooms.length > 0 &&
        rooms.map(room => {
          return <Room></Room>;
        })}
    </GameMapContainer>
  );
};

export default GameMap;

const GameMapContainer = styled.div`
  width: 640px;
  height: 640px;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(10, 64px);
  grid-template-rows: repeat(10, 64px);
  grid-columns: 1 / 6;
  grid-rows: 1 / 6;
`;

const Room = styled.div`
  outline: 1px solid black;
`;
