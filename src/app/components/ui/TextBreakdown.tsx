import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TextBreakdownProps {
    text: string;
    className?: string;
    duration?: number;
    staggerDelay?: number;
}

export function TextBreakdown({
    text,
    className = "",
    duration = 0.05,
    staggerDelay = 0.03
}: TextBreakdownProps) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    // Split text into characters, preserving spaces
    const characters = text.split('');

    return (
        <div ref={ref} className={`inline-block ${className}`}>
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{
                        opacity: 0,
                        filter: "blur(12px)",
                        transform: "translateY(20px) scale(0.8)"
                    }}
                    animate={hasAnimated ? {
                        opacity: char === ' ' ? 1 : 1,
                        filter: "blur(0px)",
                        transform: "translateY(0px) scale(1)"
                    } : {}}
                    transition={{
                        duration,
                        delay: i * staggerDelay,
                        ease: [0.16, 1, 0.3, 1] // Custom easing for premium feel
                    }}
                    className="inline-block"
                    style={{
                        willChange: "transform, opacity, filter"
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
}

