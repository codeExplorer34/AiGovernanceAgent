import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, AlertTriangle } from "lucide-react";

export function ComparisonLens() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPos(Math.max(0, Math.min(100, position)));
    };

    const rawData = [
        { key: "user_email", value: "sarah.connor@gmail.com", risk: "PHI/PII LEAK" },
        { key: "prompt", value: "Analyze my credit card statement 4242-4242-4242-4242", risk: "FINANCIAL DATA" },
        { key: "auth_token", value: "sk_live_51Ny7X...", risk: "SECRET EXPOSURE" },
        { key: "patient_id", value: "NHS-992-112-X", risk: "HEALTH RECORD" }
    ];

    return (
        <section className="relative py-16 md:py-32 px-4 md:px-8 overflow-hidden bg-black">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <span className="text-purple-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4 block">Interactive Proof</span>
                <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    The Governance Lens
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    <span className="md:hidden">Drag the slider</span>
                    <span className="hidden md:inline">Drag the slider</span>
                    {" "}to see how SURO physically transforms raw, high-risk data into governed intelligence in real-time.
                </p>
            </div>

            <div
                ref={containerRef}
                className="max-w-6xl mx-auto relative aspect-[4/3] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl select-none cursor-col-resize touch-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
            >
                {/* 1. Behind Overlay (Raw / Red Alert) */}
                <div className="absolute inset-0 bg-[#0a0505] grid lg:grid-cols-2 p-12 gap-8 items-center">
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-center gap-3 text-red-500 mb-8">
                            <AlertTriangle className="w-5 h-5" />
                            <span className="text-xs font-bold font-mono tracking-[0.4em] uppercase">RISK_DETECTION_ACTIVE</span>
                        </div>
                        {rawData.map((item, i) => (
                            <div key={i} className="p-4 rounded-lg bg-red-500/5 border border-red-500/20 font-mono text-sm transition-all hover:bg-red-500/10">
                                <span className="text-gray-600 mr-2">"{item.key}":</span>
                                <span className="text-red-400">"{item.value}"</span>
                                <div className="text-[10px] text-red-500/60 mt-1 font-bold tracking-tighter">BREACH_TYPE: {item.risk}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Top Overlay (Governed / Emerald) */}
                <div
                    className="absolute inset-0 z-10 bg-[#050a05] grid lg:grid-cols-2 p-12 gap-8 items-center pointer-events-none"
                    style={{
                        clipPath: `inset(0 0 0 ${sliderPos}%)`,
                        transition: 'clip-path 0.05s linear'
                    }}
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-emerald-500 mb-8">
                            <Shield className="w-5 h-5" />
                            <span className="text-xs font-bold font-mono tracking-[0.4em] uppercase">SURO_ENFORCEMENT_LOCK</span>
                        </div>
                        {rawData.map((item, i) => (
                            <div key={i} className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 font-mono text-sm shadow-[inset_0_1px_10px_rgba(16,185,129,0.05)]">
                                <span className="text-gray-400 mr-2">"{item.key}":</span>
                                <span className="text-emerald-400 font-bold">"[SURGICAL_REDACTION]"</span>
                                <div className="text-[10px] text-emerald-500/60 mt-1 font-bold">STATUS: COMPLIANT_SHA256_HASHED</div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <motion.div
                            animate={{ opacity: [0.15, 0.3, 0.15] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                        >
                            <Shield className="w-64 h-64 text-emerald-500/10" />
                        </motion.div>
                    </div>
                </div>

                {/* 3. The Forensic Precision Handle */}
                <div
                    className="absolute top-0 bottom-0 w-[1px] bg-white/30 z-20 pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                >
                    {/* Thin precision frame with data labels */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative w-10 h-10 rounded-full bg-black/90 border border-white/30 flex items-center justify-center">
                            <div className="flex gap-1 translate-x-[0.5px]">
                                <div className="w-[1px] h-3 bg-white/50" />
                                <div className="w-[1px] h-3 bg-white/50" />
                            </div>
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-6 -translate-x-full pr-3 font-mono text-[8px] text-red-400/70 tracking-[0.2em] uppercase whitespace-nowrap">
                        PRE-POLICY
                    </div>
                    <div className="absolute top-6 pl-3 font-mono text-[8px] text-emerald-400/70 tracking-[0.2em] uppercase whitespace-nowrap">
                        POST-POLICY
                    </div>
                </div>

                {/* Grid Pattern UI — same 40px as governance spine */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />
            </div>
        </section>
    );
}

