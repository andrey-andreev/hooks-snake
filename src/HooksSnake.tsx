import React, { useState } from "react";
import Grid from "./components/Grid";
import "./HooksSnake.css";

const squareSide: number = 20;
let gridList: number[][] = [];
[...Array(squareSide).keys()].forEach(i =>
  [...Array(squareSide).keys()].reduce((outer, j) => gridList.push([i, j]))
);

const HooksSnake: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div>
      <h3>Hooks Snake game</h3>
      <Grid grid={gridList} />
    </div>
  );
};

export default HooksSnake;
