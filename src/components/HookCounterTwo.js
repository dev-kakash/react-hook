import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      Count:{count}
      <br></br>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount(initialValue)}>X</button>
    </div>
  );
};

export default HookCounterTwo;
