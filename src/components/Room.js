import React from "react";

import none from "./map/assets/none.png";

const Room = ({ room }) => {
  console.log("props: ", room);
  let tile = "none";
  return (
    <div
      style={{
        backgroundImage: `url(${none})`,
        width: 64,
        height: 64,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "auto auto",
        gridColumn: `${room.x} / ${room.x + 1}`,
        gridRow: `${room.y * -1} / ${(room.y + 1) * -1}`
      }}
    ></div>
  );
};

export default Room;
