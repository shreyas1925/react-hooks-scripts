import React, { useState, useEffect } from "react";

const ScreenResize = () => {
  const [size, setSize] = useState(window.screen.width);

  const actualwidth = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualwidth);
    return () => {
      window.removeEventListener("resize", actualwidth);
    };
  });
  return (
    <div lassName="mainy">
      <h1 className="heady">{size}</h1>
    </div>
  );
};

export default ScreenResize;
