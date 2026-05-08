"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface HeroHeadlineProps {
  className?: string;
}

import { motion } from "framer-motion";
import { TextBreakdown } from "./TextBreakdown";

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ className }) => {
  return (
    <h1
      className={cn(
        "text-[50px] md:text-[80px] lg:text-[100px] font-bold leading-[1.0] tracking-tighter mb-8 brand-heading",
        className
      )}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <span className="hero-headline__row overflow-hidden block">
        <TextBreakdown
          text="The Control Plane"
          duration={0.8}
          staggerDelay={0.06}
        />
      </span>
      <span className="text-white/40 block overflow-hidden">
        <TextBreakdown
          text="for High-Stakes AI."
          duration={0.8}
          staggerDelay={0.04}
        />
      </span>
    </h1>
  );
};

export default HeroHeadline;



