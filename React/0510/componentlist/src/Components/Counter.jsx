import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handlePlusBtnClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  const handleMinusBtnClick = () => {
    setCount(count - 1);
  };
  return (
    <div>
      Counter: {count}
      <button onClick={handlePlusBtnClick}>+3</button>
      <button onClick={handleMinusBtnClick}>-3</button>
    </div>
  );
}
