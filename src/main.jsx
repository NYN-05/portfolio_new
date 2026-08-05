import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import App from "./App";
import "lenis/dist/lenis.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        autoRaf: true,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactLenis>
  </React.StrictMode>
);