"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
}

export function TypingText({ text, className = "", delay = 0, speed = 50 }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIdx = 0;
        const interval = setInterval(() => {
            if (currentIdx < text.length) {
                setDisplayedText(text.slice(0, currentIdx + 1));
                currentIdx++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-cyan-400 align-middle ml-1"
            />
        </span>
    );
}

