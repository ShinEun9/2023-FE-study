import React from "react";
import useMouseLocation from "../Hooks/useMouseLocation";

export default function TestBox() {
  const location = useMouseLocation();

  return (
    <>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: location.y >= 500 ? "blue" : "pink",
        }}
      >
        TestBox
      </div>
      x축 위치: {location.x}, y축 위치: {location.y}
    </>
  );
}
