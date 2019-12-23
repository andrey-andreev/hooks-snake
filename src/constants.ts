import { Grid } from "./types";
import { Direction } from "./types";
import { directive } from "@babel/types";

export const SQUARE_SIDE: number = 20;

export let initialGrid: Grid = [];
[...Array(SQUARE_SIDE).keys()].forEach(i =>
  [...Array(SQUARE_SIDE + 1).keys()].reduce((outer, j) =>
    initialGrid.push({ y: i, x: j - 1 })
  )
);

export const ARROWS_KEYS = {
  "37": Direction.Left,
  "38": Direction.Up,
  "39": Direction.Right,
  "40": Direction.Down
};
