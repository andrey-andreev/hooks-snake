import React, { useState, useEffect } from "react";

import { IPosition, Direction } from "../types";
import { squareSide, grid } from "../constants";
import Grid from "./Grid";
import "./HooksSnake.css";

const HooksSnake: React.FC = () => {
  const [position, setPosition] = useState<IPosition>({
    x: squareSide - 1,
    y: squareSide / 2 - 1
  });
  const [direction, setDirection] = useState<Direction>(Direction.Up);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hooks-snake">
      <h3>Hooks Snake game</h3>
      <Grid grid={grid} position={position} />
    </div>
  );
};

export default HooksSnake;
