import React, { memo } from "react";

function SecondChild({ onClick }) {
  console.log("SecondChild rendering");

  return <div onClick={onClick}>SecondChild</div>;
}

export default memo(SecondChild);
