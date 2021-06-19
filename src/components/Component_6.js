import React, { useContext } from "react";
import { CountContext } from "../App";

const Component_6 = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>
        <p>Component_6</p>
        <button onClick={() => countContext.countDispatch("+")}>+</button>
        <button onClick={() => countContext.countDispatch("-")}>-</button>
        <button onClick={() => countContext.countDispatch("X")}>X</button>
      </div>
    </div>
  );
};

export default Component_6;
