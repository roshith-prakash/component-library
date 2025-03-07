import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </HelmetProvider>
  </StrictMode>,
);
