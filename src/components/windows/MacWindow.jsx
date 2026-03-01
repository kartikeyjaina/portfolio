import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
const MacWindow = ({
  children,
  width = "40vw",
  height = "80vh",
  windowName,
  setWindowsState,
  windowsState,
}) => {
  return (
    <Rnd
      dragHandleClassName="drag-handle"
      default={{
        width: width,
        height: height,
        x: 300,
        y: 200,
      }}
    >
      <div className="window">
        <div className="nav drag-handle">
          <div className="dotes">
            <div
              onClick={() =>
                setWindowsState((state) => ({ ...state, [windowName]: false }))
              }
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="title">
            <p>kartikeyjaina - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
