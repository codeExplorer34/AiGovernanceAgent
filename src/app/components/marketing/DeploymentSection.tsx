import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { Users, Shield, Cpu, ArrowRight, Lock } from "lucide-react";

export const DeploymentSection = () => {
    return (
        <section className="py-32 px-8 bg-zinc-950/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <Badge icon={<Cpu className="w-4 h-4" />} className="mb-6">
                        Architecture
                    </Badge>
                    <h2 className="text-5xl md:text-7xl font-light brand-heading leading-tight mb-8">
                        The Zero-Latency <br />
                        <span className="italic font-playfair text-white/30">Governance Layer</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                        SURO deploys as a dedicated interceptor between your internal workforce and external intelligence models. Deterministic policy enforcement starts here.
                    </p>
                </div>

                {/* Architecture Diagram */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                    {/* User Group */}
                    <div className="flex flex-col items-center group">
                        <div className="w-32 h-32 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/30 transition-colors">
                            <Users className="w-10 h-10 text-gray-400" />
                        </div>
                        <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Internal Workforce</h4>
                        <p className="text-gray-500 text-[9px] uppercase tracking-widest">Client / IDE / API</p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="lg:flex-1 h-px bg-white/5 relative mx-12 hidden lg:block">
                        <motion.div
                            className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-cyan-400 blur-[2px]"
                            animate={{ x: ["0%", "1000%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/10 lg:hidden" />

                    {/* SURO Core */}
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-400/20 blur-[40px] rounded-full scale-150 animate-pulse" />
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-48 h-48 rounded-[40px] bg-black border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.3)] flex flex-col items-center justify-center relative z-10 p-6 text-center"
                        >
                            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                            <h3 className="text-white font-bold brand-heading text-lg mb-1 leading-none uppercase tracking-tighter italic">SURO Core</h3>
                            <p className="text-cyan-400/60 font-mono text-[8px] uppercase tracking-widest font-bold">Policy Interceptor</p>
                        </motion.div>

                        {/* Sub-labels for SURO */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center space-y-2">
                            <div className="text-[8px] font-mono whitespace-nowrap text-white/40 uppercase tracking-[0.3em]">
                                PI_DETECTION // BEHAVIOR_SCORE
                            </div>
                            <div className="text-[8px] font-mono whitespace-nowrap text-white/40 uppercase tracking-[0.3em]">
                                INTENT_ALIGNMENT // AUDIT_LOG
                            </div>
                        </div>
                    </div>

                    {/* Arrow 2 */}
                    <div className="lg:flex-1 h-px bg-white/5 relative mx-12 hidden lg:block">
                        <motion.div
                            className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-emerald-400 blur-[2px]"
                            animate={{ x: ["0%", "1000%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                        />
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/10 lg:hidden" />

                    {/* Models */}
                    <div className="flex flex-col items-center group">
                        <div className="w-32 h-32 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-400/30 transition-colors">
                            <Lock className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-center">Secure Models</h4>
                        <p className="text-gray-500 text-[9px] uppercase tracking-widest text-center">OpenAI / AWS / Private LLM</p>
                    </div>
                </div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
                    {[
                        { title: "Proxy Interception", desc: "Native integration at the network layer. No bypass possible." },
                        { title: "Behavioral Guardrails", desc: "Moving beyond keywords to semantic intent monitoring." },
                        { title: "Immutable Lineage", desc: "Every interaction hashed and stored for regulatory audit." }
                    ].map((feature, i) => (
                        <div key={i} className="space-y-4">
                            <div className="w-8 h-px bg-cyan-400" />
                            <h4 className="text-white font-bold uppercase tracking-widest text-xs">{feature.title}</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

