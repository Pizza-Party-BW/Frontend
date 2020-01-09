import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getMap } from "../actions";
import styled from "styled-components";

import Room from "./Room";
import turtle from "./player/assets/turtle-r.png";

const GameMap = () => {
  const [{ mapState, gameState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

  const x = gameState.location.x;
  const y = gameState.location.y;

  return (
    <GameMapContainer>
      <div
        style={{
          backgroundImage: `url(${turtle})`,
          width: 36,
          height: 36,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "auto auto",
          gridColumn: `${x + 1} / ${x + 2}`,
          gridRow: `${(y + 1) * -1} / ${(y + 2) * -1}`,
          zIndex: 110
        }}
      ></div>

      {mapState["map"].length > 0 &&
        mapState["map"].map(room => {
          return <Room room={room} />;
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
