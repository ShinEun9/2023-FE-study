import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count % 2) {
      alert("홀수입니다");
    } else {
      alert("짝수입니다");
    }
    return () => {
      alert("카운트가 바뀌었습니다"); // 상태 변경 후-> clean up 코드->useEffect절 내 코드 실행,
    };
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

export default Counter;
