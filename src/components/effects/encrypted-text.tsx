"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface EncryptedTextProps {
    text: string;
    characters?: string;
    duration?: number;
    speed?: number;
    className?: string;
}

export const EncryptedText = ({
    text,
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
    duration = 1000,
    speed = 50,
    className = "",
}: EncryptedTextProps) => {
    const [displayText, setDisplayText] = useState("");
    const containerRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let interval: any;
        let currentIteration = 0;
        const maxIterations = Math.floor(duration / speed);

        const animate = () => {
            if (currentIteration < maxIterations) {
                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            const progress = currentIteration / maxIterations;
                            const charProgress = (index + 1) / text.length;

                            if (progress > charProgress) {
                                return char;
                            }

                            if (char === " ") return " ";
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );
                currentIteration++;
            } else {
                setDisplayText(text);
                clearInterval(interval);
            }
        };

        interval = setInterval(animate, speed);
        return () => clearInterval(interval);
    }, [text, characters, duration, speed, isInView]);

    return (
        <span ref={containerRef} className={`inline-block font-mono ${className}`}>
            {displayText || text.split("").map(c => c === " " ? " " : characters[Math.floor(Math.random() * characters.length)]).join("")}
        </span>
    );
};
