import React, { useState, useEffect } from "react";

import { IPosition, Grid, Direction, Timer } from "../types";
import { SQUARE_SIDE, initialGrid, ARROWS_KEYS } from "../constants";
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

const handleArrowsKeysPress = (event: any) => {
  console.log("event.keyCode", ARROWS_KEYS[String(event.keyCode)]);
  // switch (event.keyCode) {
  //   case ARROWS_KEYS.upKey:
  //     return this.state.activePopover.hide();
  //     break;
  //   default:
  //     break;
  // }
};

const HooksSnake: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(initialGrid);
  const [position, setPosition] = useState<IPosition>({
    x: SQUARE_SIDE / 2 - 1,
    y: SQUARE_SIDE - 1
  });
  const [direction, setDirection] = useState<Direction>(Direction.Up);
  const [timer, setTimer] = useState<Timer>(0);

  useEffect(() => {
    // document.addEventListener('keypress', handleArrowsKeysPress);
    document.addEventListener("keydown", handleArrowsKeysPress);

    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => {
      document.removeEventListener("keydown", handleArrowsKeysPress);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const nextPostition = getNextPosition(position, direction);
    setPosition(nextPostition);
    /* TODO: create endGame function */
    /* TODO: check out of bound -> end game */
    /* TODO: add listeners for arrows  */
    /* TODO:  */
  }, [timer]);

  return (
    <div className="hooks-snake">
      <h3>Hooks Snake game</h3>
      <GridComponent grid={grid} position={position} />
    </div>
  );
};

export default HooksSnake;
