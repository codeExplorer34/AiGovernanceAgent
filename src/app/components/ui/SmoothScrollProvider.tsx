import React, { createContext, useContext, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useRaf } from "../../hooks/useRaf";

type ScrollState = {
  y: number;
  progress: number;
  direction: "up" | "down" | null;
};

const ScrollContext = createContext<ScrollState | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [state, setState] = useState<ScrollState>({
    y: 0,
    progress: 0,
    direction: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      const doc = document.documentElement;
      const max =
        (doc.scrollHeight || 0) -
        (window.innerHeight || doc.clientHeight || 0);
      const progress = max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0;

      setState((prev) => ({
        y,
        progress,
        direction: y === prev.y ? prev.direction : y > prev.y ? "down" : "up",
      }));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When reduced motion is enabled, we still keep the scroll state updated but
  // avoid any additional per-frame work.
  useRaf(
    () => {
      // Intentionally empty: reserved for future Lenis/GSAP wiring.
    },
    !prefersReducedMotion
  );

  return (
    <ScrollContext.Provider value={state}>{children}</ScrollContext.Provider>
  );
}

export function useScrollState() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollState must be used within SmoothScrollProvider");
  }
  return ctx;
}

