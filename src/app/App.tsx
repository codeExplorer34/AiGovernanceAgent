import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LandingPage } from "./pages/LandingPage";
import { DashboardPage } from "./pages/DashboardPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { SandboxPage } from "./pages/SandboxPage";
import { RiskCalculatorPage } from "./pages/RiskCalculatorPage";
import { TrustCenterPage } from "./pages/TrustCenterPage";
import { StandardsPage } from "./pages/StandardsPage";
import { PricingPage } from "./pages/PricingPage";
import { Atmosphere } from "./components/ui/Atmosphere";
import { GovernanceLens } from "./components/ui/GovernanceLens";
import { SpeederLoader } from "./components/ui/SpeederLoader";
import "../styles/hero-animations.css";

export default function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("SURO_booted");

    if (hasBooted) {
      setIsBooting(false);
      return;
    }

    // Simulated boot ritual duration
    const timer = setTimeout(() => {
      setIsBooting(false);
      sessionStorage.setItem("SURO_booted", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isBooting && (
          <motion.div
            key="loader"
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              scale: 1.1,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 z-[10000]"
          >
            <SpeederLoader />
          </motion.div>
        )}
      </AnimatePresence>

      <GovernanceLens>
        <Atmosphere>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sandbox" element={<SandboxPage />} />
            <Route path="/calculator" element={<RiskCalculatorPage />} />
            <Route path="/trust" element={<TrustCenterPage />} />
            <Route path="/standards" element={<StandardsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </Atmosphere>
      </GovernanceLens>
    </Router>
  );
}
