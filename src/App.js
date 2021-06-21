import "./App.css";
import React, { useReducer } from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookEffect from "./components/HookEffect";
import HookEffectTwo from "./components/HookEffectTwo";
import HookEffectMouse from "./components/HookEffectMouse";
import HookEffectCleanUp from "./components/HookEffectCleanUp";
import Counter from "./components/Counter";
import HookEffectCount from "./components/HookEffectCount";
import DataFatching from "./components/DataFatching";
import ComponentC from "./components/ComponentC";
import CounterWithReducer from "./components/CounterWithReducer";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import Component_1 from "./components/Component_1";
import Component_2 from "./components/Component_2";
import Component_3 from "./components/Component_3";
import DataFatching1 from "./components/DataFatching1";
import FatchingData2 from "./components/FatchingData2";
export const CountContext = React.createContext();
export const UserName = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "X":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> 
      <ClassCounterTwo />
      <HookEffect />
      <HookEffectTwo />
      <HookEffectMouse />
      <HookEffectCleanUp /> 
      <Counter />
      <HookEffectCount />
      <DataFatching /> 
      <UserName.Provider value={"akash"}>
        <ComponentC />
      </UserName.Provider>
      <CounterWithReducer /> 
      <CounterTwo /> 
      <CounterThree /> 
        Count - {count}
        <Component_1 />
        <Component_2 />
        <Component_3 />
      <DataFatching1 /> */}
      <FatchingData2 />
    </div>
    // </CountContext.Provider>
  );
}

export default App;
