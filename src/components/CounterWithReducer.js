import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "+":
      return currentState + 1;
    case "-":
      return currentState - 1;

    case "X":
      return initialState;

    default:
      return currentState;
  }
};

const CounterWithReducer = () => {
  const [count, dispath] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispath("+")}>+</button>
      <button onClick={() => dispath("-")}>-</button>
      <button onClick={() => dispath("X")}>X</button>
    </div>
  );
};

export default CounterWithReducer;
