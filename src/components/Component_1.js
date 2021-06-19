import React, { useContext } from "react";
import { CountContext } from "../App";

const Component_1 = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>
        <p>Component_1</p>
        <button onClick={() => countContext.countDispatch("+")}>+</button>
        <button onClick={() => countContext.countDispatch("-")}>-</button>
        <button onClick={() => countContext.countDispatch("X")}>X</button>
      </div>
    </div>
  );
};

export default Component_1;
