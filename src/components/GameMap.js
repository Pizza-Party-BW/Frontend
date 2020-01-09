import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getMap } from "../actions";
import styled from "styled-components";

import Room from "./Room";
import turtle from "./player/assets/turtle-l.png";

const GameMap = () => {
  const [{ mapState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

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

      {/* 
        id: 870
        title: "Sewer Passageway"
        description: "A dank and dark sewer passageway. Grating rests atop one of the walls, with no lighting protruding. The water reeks here. Tunnels continue south, and west. "
        x: 6
        y: 1
        n_to: 0
        s_to: 869
        e_to: 0
        w_to: 860
      */}
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
