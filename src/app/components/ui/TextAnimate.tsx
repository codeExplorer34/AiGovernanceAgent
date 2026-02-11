"use client";

import { motion, Variants, useInView } from "motion/react";
import { useMemo, useRef } from "react";
import { cn } from "../../lib/utils";

type AnimationType =
    | "blurIn"
    | "blurInUp"
    | "blurInDown"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "fadeIn"
    | "radarScan";

interface TextAnimateProps {
    /**
     * The text to animate.
     */
    children: string;
    /**
     * The element to render the text as.
     * @default "p"
     */
    as?: React.ElementType;
    /**
     * The class name to apply to the element.
     */
    className?: string;
    /**
     * The animation type to use.
     * @default "blurIn"
     */
    animation?: AnimationType;
    /**
     * The duration of the animation.
     * @default 0.3
     */
    duration?: number;
    /**
     * The delay between each segment (word or character).
     * @default 0.02
     */
    delay?: number;
    /**
     * Whether to animate by "word" or "character".
     * @default "character"
     */
    by?: "word" | "character";
    /**
     * Whether to animate only once when it enters the viewport.
     * @default true
     */
    once?: boolean;
}

const defaultAnimations: Record<AnimationType, Variants> = {
    blurIn: {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    },
    blurInUp: {
        hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
        visible: { filter: "blur(0px)", opacity: 1, y: 0 },
    },
    blurInDown: {
        hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
        visible: { filter: "blur(0px)", opacity: 1, y: 0 },
    },
    slideUp: {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
    slideDown: {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    },
    slideLeft: {
        hidden: { x: 20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
    slideRight: {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    radarScan: {
        hidden: { clipPath: "inset(0% 0% 100% 0%)", opacity: 0, y: 5 },
        visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
    },
};

export function TextAnimate({
    children,
    as: Component = "p",
    className,
    animation = "blurIn",
    duration = 0.3,
    delay = 0.02,
    by = "character",
    once = true,
}: TextAnimateProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0 });

    const segments = useMemo(() => {
        if (by === "word") return children.split(/(\s+)/);
        return children.split("");
    }, [children, by]);

    return (
        <Component ref={ref} className={cn("inline-block", className)}>
            {segments.map((segment, i) => (
                <motion.span
                    key={`${segment}-${i}`}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={defaultAnimations[animation]}
                    transition={{
                        duration,
                        delay: i * delay,
                    }}
                    style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        color: "inherit",
                        willChange: "transform, opacity, filter"
                    }}
                >
                    {segment}
                </motion.span>
            ))}
        </Component>
    );
}
