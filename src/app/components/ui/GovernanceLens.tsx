import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GovernanceLensProps {
    children: React.ReactNode;
}

export function GovernanceLens({ children }: GovernanceLensProps) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="relative">
            {children}
            <motion.div
                ref={cursorRef}
                className="fixed pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: springX,
                    top: springY,
                    x: "-50%",
                    y: "-50%"
                }}
            >
                <div className="w-8 h-8 border border-cyan-400/60 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}

