import React, { useState } from "react";
import HookEffectMouse from "./HookEffectMouse";

const HookEffectCleanUp = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Remove</button>
      {display && <HookEffectMouse />}
    </div>
  );
};

export default HookEffectCleanUp;
