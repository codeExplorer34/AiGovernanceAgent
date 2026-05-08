import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface TimelineRailProps {
    milestones: Array<{
        year: string;
        title: string;
        desc: string;
    }>;
}

export function TimelineRail({ milestones }: TimelineRailProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative max-w-5xl mx-auto px-8">
            {/* Central Backbone Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />

            {/* Animated Progress Rail */}
            <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
                style={{
                    scaleY: pathLength,
                    transformOrigin: "top",
                    background: "linear-gradient(to bottom, transparent, #22d3ee, transparent)"
                }}
            />

            <div className="space-y-32">
                {milestones.map((milestone, i) => (
                    <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}
                    >
                        {/* Milestone Card */}
                        <div className="flex-1 w-full">
                            <div className={`p-10 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl group hover:border-cyan-500/30 transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="text-6xl font-playfair italic font-bold text-white/5 mb-6 group-hover:text-cyan-400/10 transition-colors tracking-tighter">
                                    {milestone.year}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-[0.2em] brand-heading">
                                    {milestone.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base max-w-md mx-auto md:mx-0">
                                    {milestone.desc}
                                </p>
                            </div>
                        </div>

                        {/* Central Point Overlay with Pulse */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                            <motion.div
                                className="w-4 h-4 rounded-full bg-black border-2 border-cyan-400/50 relative z-10"
                                animate={{
                                    borderColor: ["rgba(34, 211, 238, 0.2)", "rgba(34, 211, 238, 0.8)", "rgba(34, 211, 238, 0.2)"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <div className="absolute w-12 h-12 rounded-full bg-cyan-500/10 blur-xl animate-pulse" />
                        </div>

                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

