import "./App.css";
import React from "react";
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
export const UserName = React.createContext();
function App() {
  return (
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
      <DataFatching /> */}
      <UserName.Provider value={"akash"}>
        <ComponentC />
      </UserName.Provider>
    </div>
  );
}

export default App;
