import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({children}) => {
  return (
    <Rnd
    dragHandleClassName="drag-handle"
    default={{
      width:"40vw",
      height:"70vh",
      x:300,
      y:200
    }}
    >
      <div className="window">
        <div className="nav drag-handle">
          <div className="dotes">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>kartikeyjaina - zsh</p>
          </div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
