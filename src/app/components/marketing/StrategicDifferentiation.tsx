import React from "react";
import { motion } from "framer-motion";
import { ShieldStreamIcon, ScanEyeIcon, BoltNodesIcon, HexLockIcon } from "../ui/CustomIcons";
import { Badge } from "./Badge";

const differentiators = [
    {
        title: "We Audit the Vault",
        subtitle: "Infrastructure vs Oversight",
        desc: "Cloud providers offer secret vaults. SURO monitors identity sprawl, detects JIT violations, and flags dormant NHIs across all environments.",
        icon: <ScanEyeIcon className="w-6 h-6 text-cyan-400" />,
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        accent: "text-cyan-500/60"
    },
    {
        title: "Beyond the Firewall",
        subtitle: "Meta-Security Layer",
        desc: "You have an AI gateway? We evaluate its effectiveness, detect bypass attempts, and correlate tool misuse patterns that gateways ignore.",
        icon: <HexLockIcon className="w-6 h-6 text-purple-400" />,
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        accent: "text-purple-500/60"
    },
    {
        title: "Intent Drift Detection",
        subtitle: "The Strategic Moat",
        desc: "Secure agents can still fail strategically. We score behavior against original business intent, catching misalignment before it causes damage.",
        icon: <BoltNodesIcon className="w-6 h-6 text-blue-400" />,
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        accent: "text-blue-500/60"
    },
    {
        title: "Cross-Agent Visibility",
        subtitle: "The Governance Brain",
        desc: "Hyperscalers see their own slice. SURO builds the entire agent ecosystem risk graph across all clouds, toolchains, and models.",
        icon: <BoltNodesIcon className="w-6 h-6 text-emerald-400" />,
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        accent: "text-emerald-500/60"
    }
];

export function StrategicDifferentiation() {
    return (
        <section className="py-40 px-8 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '60px 60px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
                    <div className="lg:col-span-12 text-center">
                        <Badge icon={<ShieldStreamIcon className="w-3 h-3" />} className="mb-12">
                            The Strategic Moat
                        </Badge>
                        <h2 className="text-5xl md:text-8xl font-light brand-heading leading-tight mb-8">
                            Zero Trust Secures. <br />
                            <span className="italic font-playfair text-white/30">SURO Governs.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Infrastructure providers build the roads. SURO provides the traffic control,
                            insurance, and investigation layer. Secure infrastructure increases
                            demand for intelligent oversight.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 bg-white/[0.02] border border-white/10 rounded-[40px] md:rounded-[48px] hover:bg-white/[0.04] transition-all flex flex-col justify-between h-auto md:h-[400px]"
                        >
                            <div>
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <span className={`text-[10px] font-mono uppercase tracking-widest ${item.accent} mb-3 block`}>
                                    {item.subtitle}
                                </span>
                                <h3 className="text-3xl font-bold brand-heading text-white mb-6">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-light text-base max-w-sm">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Protocol_Aligned // 2026_Standard</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

