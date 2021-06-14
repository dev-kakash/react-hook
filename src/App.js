import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
    </div>
  );
}

export default App;
