import React, { useEffect } from "react";
import { axiosAuth } from "../utils/axiosAuth";

// Components
import GameMap from "./GameMap";
import DirectionPad from "./DirectionPad";

const Dashboard = () => {
  // NavBar
  // Map
  // Directional Pad
  // Log of actions

  return (
    <div>
      <GameMap />
      <DirectionPad />
    </div>
  );
};

export default Dashboard;
