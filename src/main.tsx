
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { SmoothScrollProvider } from "@/components/effects/SmoothScrollProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <SmoothScrollProvider>
    <App />
  </SmoothScrollProvider>
);
