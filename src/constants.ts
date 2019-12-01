import { Grid } from "./types";

export const squareSide: number = 20;

export let initialGrid: Grid = [];
[...Array(squareSide).keys()].forEach(i =>
  [...Array(squareSide + 1).keys()].reduce((outer, j) =>
    initialGrid.push({ y: i, x: j - 1 })
  )
);
