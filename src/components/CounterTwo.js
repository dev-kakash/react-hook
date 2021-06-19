import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "+":
      return {
        ...currentState,
        firstCount: currentState.firstCount + action.value,
      };
    case "-":
      return {
        ...currentState,
        firstCount: currentState.firstCount - action.value,
      };

    case "a":
      return {
        ...currentState,
        secondCount: currentState.secondCount + action.value,
      };
    case "b":
      return {
        ...currentState,
        secondCount: currentState.secondCount - action.value,
      };

    case "X":
      return initialState;

    default:
      return currentState;
  }
};

const CounterTwo = () => {
  const [count, dispath] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{count.firstCount}</p>
      <button onClick={() => dispath({ type: "+", value: 1 })}>+</button>
      <button onClick={() => dispath({ type: "-", value: 1 })}>-</button>
      <button onClick={() => dispath({ type: "X" })}>X</button>
      <button onClick={() => dispath({ type: "+", value: 5 })}>5+</button>
      <button onClick={() => dispath({ type: "-", value: 5 })}>5-</button>
      <hr />
      <p>{count.secondCount}</p>
      <button onClick={() => dispath({ type: "a", value: 1 })}>+</button>
      <button onClick={() => dispath({ type: "b", value: 1 })}>-</button>
      <button onClick={() => dispath({ type: "X" })}>X</button>
      <button onClick={() => dispath({ type: "a", value: 5 })}>5+</button>
      <button onClick={() => dispath({ type: "b", value: 5 })}>5-</button>
    </div>
  );
};

export default CounterTwo;
