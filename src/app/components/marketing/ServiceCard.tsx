import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    className?: string;
}

export function ServiceCard({ icon, title, subtitle, description, className = "" }: ServiceCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden cursor-none shadow-[inset_0_1px_10px_rgba(0,0,0,0.5)] border-t-white/20 hover:shadow-[inset_0_1px_10px_rgba(0,0,0,0.5),0_8px_32px_rgba(16,185,129,0.08)]"
        >
            {/* Dynamic Shine Layer */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"
                style={{
                    translateX: useTransform(mouseXSpring, [-0.5, 0.5], ["-50%", "50%"]),
                    translateY: useTransform(mouseYSpring, [-0.5, 0.5], ["-50%", "50%"]),
                }}
            />

            <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                    {icon}
                </div>
                <div className="mb-2">
                    <span className="text-purple-400 text-[10px] font-bold font-mono tracking-[0.3em] uppercase">{subtitle}</span>
                    <h3 className="text-2xl font-bold mt-1 text-white">{title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                    {description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5">
                    <button className="text-white text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2">
                        System Specs <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

