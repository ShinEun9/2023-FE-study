import React, { useState } from "react";
import MenuList from "./Components/MenuList/MenuList";
import DisplayMood from "./Components/DisplayMood/DisplayMood";

function App() {
  const [currentMood, setCurrentMood] = useState("좋아요!");
  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
