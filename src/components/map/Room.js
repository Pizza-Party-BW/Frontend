import React from "react";
import nwse from "./assets/nwse.png";
import n from "./assets/n.png";
import ne from "./assets/ne.png";
import ns from "./assets/ns.png";
import nse from "./assets/nse.png";
import nw from "./assets/nw.png";
import nwe from "./assets/nwe.png";
import nws from "./assets/nws.png";
import s from "./assets/s.png";
import se from "./assets/se.png";
import w from "./assets/we.png";
import ws from "./assets/ws.png";
import wse from "./assets/wse.png";
import we from "./assets/we.png";
import e from "./assets/e.png";

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
        backgroundImage:
          (url === "e" && `url(${e})`) ||
          (url === "n" && `url(${n})`) ||
          (url === "ne" && `url(${ne})`) ||
          (url === "ns" && `url(${ns})`) ||
          (url === "nse" && `url(${nse})`) ||
          (url === "nw" && `url(${nw})`) ||
          (url === "nwe" && `url(${nwe})`) ||
          (url === "nws" && `url(${nws})`) ||
          (url === "nwse" && `url(${nwse})`) ||
          (url === "s" && `url(${s})`) ||
          (url === "se" && `url(${se})`) ||
          (url === "w" && `url(${w})`) ||
          (url === "w" && `url(${ws})`) ||
          (url === "wse" && `url(${wse})`) ||
          (url === "we" && `url(${we})`) ||
          (url === "ws" && `url(${ws})`),
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
