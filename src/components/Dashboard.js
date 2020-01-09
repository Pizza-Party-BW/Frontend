import React from "react";

// Components
import GameMap from "./GameMap";
import DirectionPad from "./direction/DirectionPad";
import ActionLog from "./ActionLog";

import styled from "styled-components";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <GameMap />
      <DirectionPad />
      <ActionLog />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;
