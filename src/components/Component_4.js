import React, { useContext } from "react";
import { CountContext } from "../App";

const Component_4 = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>
        <p>Component_4</p>
        <button onClick={() => countContext.countDispatch("+")}>+</button>
        <button onClick={() => countContext.countDispatch("-")}>-</button>
        <button onClick={() => countContext.countDispatch("X")}>X</button>
      </div>
    </div>
  );
};

export default Component_4;
