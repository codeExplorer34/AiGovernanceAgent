"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";
import { wrap } from "framer-motion"; // Framer motion actually has a wrap function too, or I can implement it
import { cn } from "../../lib/utils";

// If wrap is not in framer-motion, I'll define it simply:
const wrapValue = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ScrollVelocityRowProps {
    children: string;
    baseVelocity: number;
    direction?: 1 | -1;
    className?: string;
}

export function ScrollVelocityRow({
    children,
    baseVelocity = 100,
    direction = 1,
    className,
}: ScrollVelocityRowProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrapValue(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll based on
         * scroll speed and direction.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy * (direction === 1 ? 1 : -1));
    });

    /**
     * It's important to render the text twice to create a seamless loop
     */
    return (
        <div className="flex whitespace-nowrap flex-nowrap overflow-hidden">
            <motion.div
                className={cn("flex whitespace-nowrap flex-nowrap text-4xl uppercase tracking-tighter md:text-7xl", className)}
                style={{ x }}
            >
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

interface ScrollVelocityContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function ScrollVelocityContainer({
    children,
    className,
}: ScrollVelocityContainerProps) {
    return (
        <section className={cn("relative z-10 py-24 overflow-hidden", className)}>
            {children}
        </section>
    );
}

