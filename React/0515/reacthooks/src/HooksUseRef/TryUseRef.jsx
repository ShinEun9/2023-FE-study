import React, { useState, useRef } from "react";

function Counter() {
  let num = 0; // 변수는 화면이 새로 그려질때마다 (setState등을 할 때마다) 0이 된다.
  const [num2, setNum2] = useState(0);
  const num3 = useRef(0); // 값을 기억하지만 리렌더링 하지는 않는다

  return (
    <>
      <button
        onClick={() => {
          num += 1;
          console.log(num);
        }}
      >
        버튼 (변수)
      </button>
      <div>{num}</div>

      <button onClick={() => setNum2(num2 + 1)}>버튼 state</button>
      <div>{num2}</div>

      <button
        onClick={() => {
          num3.current += 1;
          console.log(num3.current);
        }}
      >
        버튼3 useRef
      </button>
      <div>{num3.current}</div>
    </>
  );
}

export default Counter;
