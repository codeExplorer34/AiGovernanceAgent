import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { VideoPlayer } from "../ui/VideoPlayer";
import { Badge } from "./Badge";
import { Eye } from "lucide-react";
import { registerGsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export function ProductVideoSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion || !sectionRef.current) return;

        const { gsap } = registerGsap();

        const ctx = gsap.context(() => {
            const el = sectionRef.current!;
            const state = { progress: 0 };

            gsap.to(state, {
                progress: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                onUpdate: () => {
                    el.style.setProperty(
                        "--scroll-progress",
                        state.progress.toFixed(3)
                    );
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [prefersReducedMotion]);
    const features = [
        { title: "PII INTERCEPTION", desc: "Instantly detect and mask sensitive data before it reaches the model." },
        { title: "GATEWAY CONTROL", desc: "Centralized policy enforcement across your entire AI stack." },
        { title: "IMMUTABLE AUDITS", desc: "Every prompt, completion, and decision recorded for compliance." }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-8 bg-black overflow-hidden product-video-section"
        >
            {/* Subtle Hero Transition Glow */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            {/* Governance Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] bg-purple-600/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
                    {/* Left: Intel */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge className="mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20">
                                CONTROL PLANE
                            </Badge>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Guardian Layer</span> for
                                <br />Enterprise AI
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                AEGIS sits between your users and your models, ensuring every interaction is governed, audited, and secured in real-time.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse mt-1.5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-1">{f.title}</div>
                                        <div className="text-gray-300 text-sm group-hover:text-white transition-colors">{f.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Live View — AEGIS Console Chrome */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group product-video-scene"
                    >
                        {/* Console Frame */}
                        <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-purple-900/10">
                            {/* Console Title Bar */}
                            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <span className="font-mono text-[9px] text-gray-500 tracking-[0.2em] uppercase ml-2">AEGIS CONSOLE // PROTOCOL_ID: AEGIS-001</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="font-mono text-[8px] text-emerald-500/60 tracking-widest">LIVE</span>
                                </div>
                            </div>

                            {/* Video Content */}
                            <div className="relative">
                                {/* Gradient Mask Overlay for edges */}
                                <div className="absolute inset-0 rounded-b-xl z-20 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" />

                                <VideoPlayer
                                    src="/Videos/Dashboard Video Aegis.mp4"
                                    autoPlay={true}
                                    className="aspect-video w-full"
                                />
                            </div>

                            {/* Console Footer */}
                            <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-white/[0.02]">
                                <div className="flex items-center gap-4 font-mono text-[8px] text-gray-600 uppercase tracking-[0.2em]">
                                    <span>POLICY_SET: ENTERPRISE_v3</span>
                                    <span className="w-px h-3 bg-white/10" />
                                    <span>ENTITIES_SCANNED: 50+</span>
                                </div>
                                <div className="flex items-center gap-4 font-mono text-[8px] text-gray-600 uppercase tracking-[0.2em]">
                                    <span>AES-256 ENCRYPTED</span>
                                    <span className="w-px h-3 bg-white/10" />
                                    <span className="text-emerald-500/50">SYNC: ACTIVE</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
