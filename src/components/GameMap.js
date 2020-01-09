import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getMap } from "../actions";

const GameMap = () => {
  const [{ mapState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

  console.log("mapState", mapState);
  const rooms = mapState.map;
  console.log(rooms);

  return (
    <div>
      {/* {rooms.map(room => (
        <div>Room</div>
      ))} */}
      This will be a map someday
    </div>
  );
};

export default GameMap;
