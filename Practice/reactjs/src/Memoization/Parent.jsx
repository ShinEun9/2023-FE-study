import React, { useCallback, useState } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";

export default function Parent() {
  const [valueForFirstChild, setValueForFirstChild] = useState(null);

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  setTimeout(() => {
    setValueForFirstChild("changedValue");
  }, 3000);
  return (
    <>
      <FirstChild value={valueForFirstChild} />
      <SecondChild onClick={handleClick} />
    </>
  );
}
