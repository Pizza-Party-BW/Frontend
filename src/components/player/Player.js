import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import turtleR from "../player/assets/turtle-r.png";
import turtleL from "../player/assets/turtle-l.png";

const Player = props => {
  const [{ gameState }, dispatch] = useStateValue();

  const x = gameState.location.x;
  const y = gameState.location.y;

  return (
    <div
      style={{
        backgroundImage: `url(${turtleR})`,
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
  );
};

export default Player;
