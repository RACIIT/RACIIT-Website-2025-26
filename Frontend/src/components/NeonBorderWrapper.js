import React from "react";
import "./NeonBorderWrapper.css";

const NeonBorderWrapper = ({ children }) => {
  return (
    <div className="neon-wrapper">
      <b className="neon-inner-bg"></b>
      <div className="neon-content">{children}</div>
    </div>
  );
};

export default NeonBorderWrapper;
