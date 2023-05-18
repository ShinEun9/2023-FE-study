import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./TryUseInput";
// import App from "./TryUseMouseLocation";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
