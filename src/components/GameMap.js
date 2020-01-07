import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getLocation } from "../actions";

const GameMap = () => {
  const [{ locationState }, dispatch] = useStateValue();

  useEffect(() => {
    getLocation(dispatch);
  }, [dispatch]);

  return (
    <div>
      Location: {`${locationState.location.title}`} Description:{" "}
      {`${locationState.location.description}`}. This will be a map someday
    </div>
  );
};

export default GameMap;
