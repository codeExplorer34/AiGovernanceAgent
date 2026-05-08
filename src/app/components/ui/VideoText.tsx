"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VideoTextProps {
    src: string;
    children: string;
    className?: string;
}

export function VideoText({ src, children, className = "" }: VideoTextProps) {
    return (
        <div className={`relative isolate select-none ${className}`}>
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: "none" }}
            />
            <div
                className="relative bg-black text-white mix-blend-multiply flex items-center justify-center w-full h-full font-bold uppercase tracking-tighter"
                style={{
                    fontSize: "clamp(4rem, 15vw, 12rem)",
                    lineHeight: "0.8",
                    fontFamily: "'Playfair Display', serif"
                }}
            >
                {children}
            </div>
        </div>
    );
}

