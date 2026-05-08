import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { SmoothScrollProvider } from "./app/components/ui/SmoothScrollProvider";
import { SoundProvider } from "./app/components/ui/SoundProvider";
import React from "react"; // Added for React.StrictMode

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SoundProvider>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </SoundProvider>
  </React.StrictMode>
);

