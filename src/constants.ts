import { IPosition } from "./types";

export const squareSide: number = 20;

export let grid: IPosition[] = [];
[...Array(squareSide).keys()].forEach(i =>
  [...Array(squareSide + 1).keys()].reduce((outer, j) =>
    grid.push({ x: i, y: j - 1 })
  )
);
