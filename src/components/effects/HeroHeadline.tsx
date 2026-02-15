"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface HeroHeadlineProps {
  className?: string;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ className }) => {
  return (
    <h1
      className={cn(
        "text-[50px] md:text-[80px] lg:text-[100px] font-bold leading-[1.0] tracking-tighter mb-8 brand-heading",
        className
      )}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <span className="hero-headline__row">
        The Control Plane
      </span>
      <br />
      <span className="text-white/40">
        for High-Stakes AI.
      </span>
    </h1>
  );
};

export default HeroHeadline;


