import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookEffect from "./components/HookEffect";
import HookEffectTwo from "./components/HookEffectTwo";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}
      <ClassCounterTwo />
      <HookEffect />
      <HookEffectTwo />
    </div>
  );
}

export default App;
