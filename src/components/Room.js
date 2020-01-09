import React from "react";

const Room = ({ room }) => {
  let url = "";

  if (room.n_to) {
    url += "n";
  }
  if (room.w_to) {
    url += "w";
  }
  if (room.s_to) {
    url += "s";
  }
  if (room.e_to) {
    url += "e";
  }

  return (
    <div
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/Pizza-Party-BW/Frontend/development/src/components/map/assets/${url}.png")`,
        width: 64,
        height: 64,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        margin: "auto auto",
        gridColumn: `${room.x + 1} / ${room.x + 2}`,
        gridRow: `${(room.y + 1) * -1} / ${(room.y + 2) * -1}`
      }}
    ></div>
  );
};

export default Room;
