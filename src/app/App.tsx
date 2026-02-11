import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { AboutPage } from "./pages/AboutPage";
import { Atmosphere } from "./components/ui/Atmosphere";
import { InstitutionalCounter } from "./components/ui/InstitutionalCounter";
import "../styles/hero-animations.css";

export default function App() {
  return (
    <Router>
      <InstitutionalCounter />
      <Atmosphere>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Atmosphere>
    </Router>
  );
}