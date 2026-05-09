import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load pages for performance
const LandingPage = lazy(() => import("./pages/LandingPage").then(m => ({ default: m.LandingPage })));
const DashboardPage = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const SandboxPage = lazy(() => import("./pages/SandboxPage").then(m => ({ default: m.SandboxPage })));
const RiskCalculatorPage = lazy(() => import("./pages/RiskCalculatorPage").then(m => ({ default: m.RiskCalculatorPage })));
const TrustCenterPage = lazy(() => import("./pages/TrustCenterPage").then(m => ({ default: m.TrustCenterPage })));
const StandardsPage = lazy(() => import("./pages/StandardsPage").then(m => ({ default: m.StandardsPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then(m => ({ default: m.PricingPage })));

import { Atmosphere } from "./components/ui/Atmosphere";
import { GovernanceLens } from "./components/ui/GovernanceLens";
import { SpeederLoader } from "./components/ui/SpeederLoader";
import { Analytics } from "@vercel/analytics/react";
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
          <Suspense fallback={<SpeederLoader />}>
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
          </Suspense>
        </Atmosphere>
      </GovernanceLens>
      <Analytics />
    </Router>
  );
}
