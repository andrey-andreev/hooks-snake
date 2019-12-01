import React, { useState, useEffect } from "react";

import { IPosition, Grid, Direction, Timer } from "../types";
import { squareSide, initialGrid } from "../constants";
import GridComponent from "./Grid";
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
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const [position, setPosition] = useState<IPosition>({
    x: squareSide / 2 - 1,
    y: squareSide - 1
  });
  const [direction, setDirection] = useState<Direction>(Direction.Up);
  const [timer, setTimer] = useState<Timer>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const nextPostition = getNextPosition(position, direction);
    setPosition(nextPostition);
  }, [timer]);

  return (
    <div className="hooks-snake">
      <h3>Hooks Snake game</h3>
      <GridComponent grid={grid} position={position} />
    </div>
  );
};

export default HooksSnake;
