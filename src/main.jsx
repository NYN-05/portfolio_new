import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme";
import "lenis/dist/lenis.css";
import "./index.css";

if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Offline support is progressive — no-op when it fails.
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
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
    </ThemeProvider>
  </React.StrictMode>
);