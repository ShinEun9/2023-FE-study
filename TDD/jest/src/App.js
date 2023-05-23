import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  // const newColor = useMemo(() => {
  //   return buttonColor === "red" ? "blue" : "red";
  // }, [buttonColor]);
  const newColor = buttonColor === "red" ? "blue" : "red";
  return (
    <button
      onClick={() => setButtonColor(newColor)}
      style={{ backgroundColor: buttonColor }}
    >
      change to {newColor}!
    </button>
  );
}

export default App;
