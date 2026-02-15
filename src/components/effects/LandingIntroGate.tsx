import React, { useEffect, useRef, useState } from "react";
import { registerGsap } from "../../lib/gsap";
import { emit } from "../../lib/eventBus";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import "./LandingIntroGate.css";

export const LandingIntroGate: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isActive) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    if (prefersReducedMotion) {
      // Skip heavy animation but still briefly show the gate for continuity.
      const timeout = window.setTimeout(() => {
        emit("introComplete", null);
        setIsActive(false);
        root.style.overflow = previousOverflow;
      }, 300);
      return () => window.clearTimeout(timeout);
    }

    const { gsap } = registerGsap();

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          emit("introComplete", null);
          setIsActive(false);
          root.style.overflow = previousOverflow;
        },
      });

      tl.set(".landing-intro", { opacity: 1 });

      tl.fromTo(
        ".landing-intro__border--top",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8 },
        0
      )
        .fromTo(
          [".landing-intro__border--left", ".landing-intro__border--right"],
          { scaleY: 0 },
          { scaleY: 1, duration: 0.8 },
          0.1
        )
        .fromTo(
          ".landing-intro__logo-mark",
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.9 },
          0.2
        )
        .fromTo(
          ".landing-intro__label",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.4
        )
        .fromTo(
          ".landing-intro__meta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.5
        )
        .to(
          ".landing-intro",
          {
            opacity: 0,
            duration: 0.6,
          },
          1.8
        );
    }, containerRef);

    return () => {
      root.style.overflow = previousOverflow;
      ctx.revert();
    };
  }, [isActive, prefersReducedMotion]);

  if (!isActive) return null;

  return (
    <div ref={containerRef} className="landing-intro">
      <div className="landing-intro__border landing-intro__border--top" />
      <div className="landing-intro__border landing-intro__border--left" />
      <div className="landing-intro__border landing-intro__border--right" />

      <div className="landing-intro__content">
        <div className="landing-intro__logo">
          <div className="landing-intro__logo-mark">
            <span className="landing-intro__logo-ring" />
            <span className="landing-intro__logo-core" />
          </div>
          <span className="landing-intro__label">AEGIS CONTROL PLANE</span>
        </div>

        <div className="landing-intro__meta">
          <span className="landing-intro__meta-item">
            BOOTSTRAPPING // GOVERNANCE MESH
          </span>
          <span className="landing-intro__meta-item">
            ENFORCEMENT_STATUS://ARMED
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingIntroGate;

