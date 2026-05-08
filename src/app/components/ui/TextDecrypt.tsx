"use client";

import React, { useState, useEffect, useCallback } from "react";

interface TextDecryptProps {
    text: string;
    revealDuration?: number;
    delay?: number;
    className?: string;
    as?: React.ElementType;
}

const CHARS = "{}[]/!@#$%^&*()_+<>?:|~";

export const TextDecrypt: React.FC<TextDecryptProps> = ({
    text,
    revealDuration = 800,
    delay = 0,
    className = "",
    as: Component = "span"
}) => {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    const decrypt = useCallback(() => {
        let startTime: number | null = null;
        const duration = revealDuration;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const revealedCount = Math.floor(text.length * percentage);

            let result = "";
            for (let i = 0; i < text.length; i++) {
                if (i < revealedCount) {
                    result += text[i];
                } else {
                    result += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            setDisplayText(result);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsComplete(true);
            }
        };

        requestAnimationFrame(animate);
    }, [text, revealDuration]);

    useEffect(() => {
        const timeout = setTimeout(decrypt, delay);
        return () => clearTimeout(timeout);
    }, [decrypt, delay]);

    return (
        <Component className={`${className} font-mono`}>
            {displayText}
        </Component>
    );
};

