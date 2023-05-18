import { useState, useEffect } from "react";

function useMouseLocation(initVal) {
  const [mouseLocation, setMouseLocation] = useState(initVal || { x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const { x, y } = event;
      setMouseLocation({ x, y });
    });
  }, []);

  return mouseLocation;
}

export default useMouseLocation;
