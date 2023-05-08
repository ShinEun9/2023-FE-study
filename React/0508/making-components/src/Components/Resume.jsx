import React, { useState } from "react";

export default function (props) {
  const [like, setLike] = useState(0);
  const [like2, setLike2] = useState("like");
  const [txt, setTxt] = useState("hello");
  function clickLike() {
    setLike(like + 1);
  }

  function clickLike2() {
    if (like2 === "like") {
      setLike2("");
    } else {
      setLike2("like");
    }
  }

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <h1>{props.name} 자기소개서</h1>
      <h1>{props.hello}</h1>
      <h2>취미 : {props.hobby}</h2>
      <h2>좋아하는 음식 : {props.food}</h2>
      <h2>
        좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span>
      </h2>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>

      <br />
      <button onClick={clickLike2}>like</button>
      <span>{like2}</span>

      <br />
      <br />
      <input
        type="text"
        value={txt}
        onChange={(e) => {
          setTxt(e.target.value);
        }}
      />

      <br />
    </div>
  );
}
