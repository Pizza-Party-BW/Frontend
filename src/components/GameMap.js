import React, { useEffect } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { getMap } from "../actions";

const GameMap = () => {
  const [{ mapState }, dispatch] = useStateValue();

  useEffect(() => {
    getMap(dispatch);
  }, [dispatch]);

  return <div>This will be a map someday</div>;
};

export default GameMap;
