import React, { useState } from "react";
import "./count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetBtn = () => {
    setCount(0);
  };

  return (
    <div className="countBox">
      <button className="resetBtn" onClick={resetBtn}>
        reset
      </button>
      <div>
        <button onClick={addCount}>+</button>
        Count : {count}
        <button onClick={minusCount}>-</button>
      </div>
    </div>
  );
};

export default Count;
