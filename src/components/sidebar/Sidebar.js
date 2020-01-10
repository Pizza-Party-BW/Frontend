import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import DirectionPad from "./direction/DirectionPad";
import DescriptionText from "./Description";
import turtleAvatar from "./assets/turtleAvatar.png";

import styled from "styled-components";

const Sidebar = () => {
  const [{ gameState }] = useStateValue();

  return (
    <SideBarContainer>
      <Avatar src={turtleAvatar} />
      <PlayerName>Welcome {gameState.location.name}</PlayerName>
      <DescriptionText />
      <DirectionPad />
    </SideBarContainer>
  );
};

export default Sidebar;

const SideBarContainer = styled.div`
  display: grid;
  grid-column: 6/9;
  justify-self: end;
  width: 350px;
  height: 640px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 15px;
  grid-template-columns: repeat(5, 70px);
  grid-template-rows: repeat(20, 32px);
`;

const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  display: grid;
  grid-column: 2/3;
  grid-row: 2/3;
`;

const PlayerName = styled.div`
  font-size: ${({ theme }) => theme.smallFont};
  color: ${({ theme }) => theme.primaryColor};
  font-family: "Press Start 2P";
  display: grid;
  width: 300px;
  grid-column: 1/6;
  grid-row: 9/10;
  justify-self: center;
`;
