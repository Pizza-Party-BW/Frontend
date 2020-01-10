import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getMap } from "../actions";
import styled from "styled-components";

import Room from "./Room";
import Player from "./player/Player";

const GameMap = () => {
  const [{ mapState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

  return (
    <GameMapContainer>
      <Player />
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
