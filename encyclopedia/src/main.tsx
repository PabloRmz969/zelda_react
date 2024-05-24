import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { ZeldaApp } from "./ZeldaApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ZeldaApp />
    </BrowserRouter>
  </React.StrictMode>
);
