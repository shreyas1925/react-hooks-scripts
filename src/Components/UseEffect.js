import React, { useState, useEffect } from "react";
import useCount from "./useCount";
// import useCount from "./useCount";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useCount(count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click this</button>
    </div>
  );
};

export default UseEffect;
