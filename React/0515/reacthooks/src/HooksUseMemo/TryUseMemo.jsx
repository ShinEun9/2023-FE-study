import { useState, useMemo } from "react";

function 부하() {
  console.log("계산중");
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  console.log("계산끝");
  return s;
}

function TryUseMemo() {
  //   let result = 부하();

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  let result = useMemo(부하, []);
  // 평소에는 memo 되어있는 걸 가져다쓰고 count2가 바뀌었을 때 부하함수를 실행시킴
  let result2 = useMemo(부하, [count2]);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUp2 = (e) => {
    setCount2(count2 + 1);
    console.log(count2);
  };

  console.log("랜더링!!");

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>

      <h1>계산 결과 : {result2}</h1>
      <div>{count2}</div>
      <button onClick={handleCountUp2}>UP!</button>
    </div>
  );
}
export default TryUseMemo;
