export interface IPosition {
  x: number;
  y: number;
}

export type Grid = IPosition[];

export enum Direction {
  Up,
  Down,
  Left,
  Right
}

export type Timer = number;
