import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounter from "./HookCounter";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
    </div>
  );
}

export default App;
