import React from "react";
import { IPosition } from "../types";
import "./Grid.css";

interface IGrid {
  grid: IPosition[];
  position: IPosition;
}

const Grid: React.FC<IGrid> = ({ grid, position }) => {
  return (
    <div className="grid">
      {grid.map(cell => {
        const id = `${cell.x}-${cell.y}`;
        const isActive = cell.x === position.x && cell.y === position.y;
        return <Cell key={id} className={id} active={isActive} />;
      })}
    </div>
  );
};

interface ICell {
  active?: boolean;
  className?: string;
}

const Cell: React.FC<ICell> = ({ active, className }) => {
  return <div className={`cell ${className} ${active ? "active" : ""}`} />;
};

export default Grid;
