import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Shield, Eye, Lock, Zap } from "lucide-react";

const steps = [
    {
        icon: <Zap className="w-5 h-5" />,
        label: "INGRESS",
        title: "Prompt Interception",
        desc: "The second a prompt is sent, SURO traps the packet at the gateway level.",
        color: "text-blue-400",
        borderColor: "border-blue-500/20",
        bgColor: "bg-blue-500/5"
    },
    {
        icon: <Eye className="w-5 h-5" />,
        label: "SCANNING",
        title: "PII & Risk Analysis",
        desc: "Over 50+ entity types are scanned in real-time. Sensitive data is flagged instantly.",
        color: "text-purple-400",
        borderColor: "border-purple-500/20",
        bgColor: "bg-purple-500/5"
    },
    {
        icon: <Shield className="w-5 h-5" />,
        label: "ENFORCEMENT",
        title: "Policy Masking",
        desc: "Dynamic redaction applies. The model only sees what you want it to see. Every field is surgically governed by your deterministic policy engine.",
        color: "text-emerald-400",
        borderColor: "border-emerald-500/20",
        bgColor: "bg-emerald-500/5",
        expanded: true // This step gets extra visual weight
    },
    {
        icon: <Lock className="w-5 h-5" />,
        label: "COMPLIANCE",
        title: "Immutable Audit",
        desc: "Every original and modified state is hashed and stored in your private audit trail.",
        color: "text-cyan-400",
        borderColor: "border-cyan-500/20",
        bgColor: "bg-cyan-500/5"
    }
];

export function AuditTrailSection() {
    const containerRef = useRef(null);
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
        <section ref={containerRef} className="relative py-16 md:py-32 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    The Journey of a Protected Packet
                </h2>
                <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                    Continuous Governance Loop
                </p>
            </div>

            <div className="max-w-5xl mx-auto relative px-12">
                {/* Central Rail — The Governance Spine */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />

                {/* Progress Rail */}
                <motion.div
                    className="absolute left-1/2 top-0 w-[1px] bg-gradient-to-b from-purple-500 to-blue-500 origin-top -translate-x-1/2"
                    style={{ height: "100%", scaleY: pathLength }}
                />

                {/* Data Packet Flow — dots moving down the spine */}
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400/60"
                        style={{
                            top: `${i * 20}%`,
                        }}
                        animate={{
                            top: ["0%", "100%"],
                            opacity: [0, 0.6, 0.6, 0],
                        }}
                        transition={{
                            duration: 6,
                            delay: i * 1.2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}

                <div className="space-y-12 md:space-y-32">
                    {steps.map((step, i) => (
                        <div key={i} className={`flex flex-col md:flex-row md:items-center gap-8 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="flex-1"
                            >
                                <div className={`p-8 ${(step as any).expanded ? 'p-10' : 'p-8'} rounded-xl bg-black/40 border ${step.borderColor} backdrop-blur-xl shadow-[inset_0_1px_10px_rgba(0,0,0,0.5)] border-t-white/20`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`${step.color} p-2 ${step.bgColor} rounded-lg border border-white/10 shadow-inner`}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-mono text-gray-500 tracking-widest leading-none mb-1">{step.label}</div>
                                            <h3 className="text-lg font-medium text-white">{step.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

                                    {/* HUD footer: protocol tag */}
                                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3 font-mono text-[8px] text-gray-600 uppercase tracking-widest">
                                        <span className="flex items-center gap-1.5">
                                            <span className={`w-1 h-1 rounded-full ${step.label === "ENFORCEMENT" ? "bg-emerald-500" : "bg-purple-500"
                                                } animate-pulse`} />
                                            STAGE_{String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="w-px h-2.5 bg-white/10" />
                                        <span>LATENCY: {`<`}180ms</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Node on Rail */}
                            <div className="relative z-20 flex-shrink-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 flex items-center justify-center">
                                <motion.div
                                    className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'}`}
                                    whileInView={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                />
                            </div>

                            {/* Spacer for other side */}
                            <div className="flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

