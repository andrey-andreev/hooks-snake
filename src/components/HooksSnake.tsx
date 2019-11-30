import React, { useState, useEffect } from "react";

import { IPosition, Direction } from "../types";
import { squareSide, initialGrid } from "../constants";
import Grid from "./Grid";
import "./HooksSnake.css";

const getNextPosition = (
  position: IPosition,
  direction: Direction
): IPosition => {
  switch (direction) {
    case Direction.Up:
      return { x: position.x, y: position.y - 1 };
    case Direction.Down:
      return { x: position.x, y: position.y + 1 };
    case Direction.Left:
      return { x: position.x - 1, y: position.y };
    case Direction.Right:
      return { x: position.x + 1, y: position.y };
  }
};

const HooksSnake: React.FC = () => {
  const [grid, setGrid] = useState<IPosition[]>(initialGrid);
  const [position, setPosition] = useState<IPosition>({
    x: squareSide - 1,
    y: squareSide / 2 - 1
  });
  const [direction, setDirection] = useState<Direction>(Direction.Up);

  useEffect(() => {
    //check if nextPostition
    // move
    // -
    // die
    // - end of grid
    // - byte my self
    // -
    // -
    // const interval = setInterval(() => {
    //   const nextPosition = getNextPosition(position, direction);
    //   console.log("This will run every second!");
    // }, 500);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="hooks-snake">
      <h3>Hooks Snake game</h3>
      <Grid grid={grid} position={position} />
    </div>
  );
};

export default HooksSnake;
