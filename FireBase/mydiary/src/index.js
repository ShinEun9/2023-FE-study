import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { FormContextProvider } from "./context/FormContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </AuthContextProvider>
);
