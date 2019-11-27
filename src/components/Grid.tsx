import React from "react";
import "./Grid.css";

interface IGrid {
  grid: number[][];
}

const Grid: React.FC<IGrid> = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map(cell => {
        const id = `${cell[0]}-${cell[1]}`;
        return <Cell key={id} className={id} />;
      })}
    </div>
  );
};

const Cell: React.FC<{ className: string }> = ({ className }) => {
  return <div className={`cell ${className}`} />;
};

export default Grid;
