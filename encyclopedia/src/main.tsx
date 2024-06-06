import React from "react";
import ReactDOM from "react-dom/client";


import "./styles.css";
import { ZeldaApp } from "./ZeldaApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
      <ZeldaApp />
  // </React.StrictMode>
);
