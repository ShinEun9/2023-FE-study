import React, { useState, useRef } from "react";

const TryUseRefDom = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const inputCheck = (e) => {
    e.preventDefault();
    // console.log(document.querySelectorAll("input"));
    // setEmailValue(document.querySelectorAll("input")[0].value);
    // setPwValue(document.querySelectorAll("input")[1].value);

    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  const inputCheck2 = (e) => {
    e.preventDefault();
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인 버튼(set)
      </button>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck2}>
        로그인
      </button>

      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>

      <span>
        입력한 이메일 useRef: {emailInput.current && emailInput.current.value}
      </span>
      <span>
        입력한 비밀번호 useRef: {emailInput.current && pwInput.current.value}
      </span>
    </form>
  );
};

export default TryUseRefDom;
