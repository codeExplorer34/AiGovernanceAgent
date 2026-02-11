
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { SmoothScrollProvider } from "./app/components/ui/SmoothScrollProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <SmoothScrollProvider>
    <App />
  </SmoothScrollProvider>
);
