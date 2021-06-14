import React, { useState, useEffect } from "react";

const HookEffectCount = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default HookEffectCount;
