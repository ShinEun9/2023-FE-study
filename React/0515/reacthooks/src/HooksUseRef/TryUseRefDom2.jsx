import React, { useState, useRef } from "react";

const TryUseRefDom2 = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값

  const inputCheck = (e) => {
    e.preventDefault();
    if (emailValue === "") {
      alert("이메일을 입력해주세요");
      e.target[0].focus();
      return;
    }
    alert("로그인 완료");
  };

  const handleChange = (e) => {
    setEmailValue(e.target.value);
  };

  return (
    <form onSubmit={inputCheck}>
      <label>
        이메일 :{" "}
        <input type="email" value={emailValue} onChange={handleChange} />
      </label>
      <button type="submit" style={{ width: "100px" }}>
        로그인
      </button>
      <br />
      <span>입력한 이메일 : {emailValue}</span>
    </form>
  );
};

export default TryUseRefDom2;
