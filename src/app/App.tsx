import { AEGISDashboard } from "./components/aegis-dashboard";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <AEGISDashboard />
    </ThemeProvider>
  );
}