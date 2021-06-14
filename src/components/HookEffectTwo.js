import React, { useState, useEffect } from "react";

const HookEffectTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Updatingggggggggggggggggg");
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default HookEffectTwo;
