import React, { useState, useEffect } from "react";

const HookEffectMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const printMouse = (e) => {
    console.log("Mouse Event......");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", printMouse);
  }, []);
  return (
    <div>
      Hooks X- {x} Y- {y}
    </div>
  );
};

export default HookEffectMouse;
