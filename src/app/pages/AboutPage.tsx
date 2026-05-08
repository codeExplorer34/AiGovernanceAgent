import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import { Shield, Target, Eye, Users, BookOpen, Lock, ArrowRight, Download, AlertCircle, CheckCircle, Clock, TrendingUp, Code, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { TextAnimate } from "../components/ui/TextAnimate";
import { EncryptedText } from "../components/ui/encrypted-text";
import { LogoLoop } from "../components/ui/LogoLoop";
import DarkVeil from "../components/ui/DarkVeil";
import { ShieldStreamIcon, ScanEyeIcon, HexLockIcon, BoltNodesIcon, AuditDocIcon, TeamShieldIcon, MonitorPulseIcon } from "../components/ui/CustomIcons";
import Orb from "../components/ui/Orb";
import { TimelineRail } from "../components/ui/TimelineRail";
import { useRef } from "react";

export function AboutPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* ═══════════════ EDITORIAL HERO: THE MANIFEST ═══════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <DarkVeil
                        hueShift={240} // Deeper blue/purple shift
                        noiseIntensity={0.03}
                        scanlineIntensity={0.15}
                        speed={0.2} // Slower, more institutional
                        scanlineFrequency={3}
                        warpAmount={0.03}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                    {/* 3D Orb - Kinetic Core */}
                    <motion.div
                        className="absolute top-1/2 right-12 -translate-y-1/2 opacity-30 w-[600px] h-[600px]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        <Orb hue={180} backgroundColor="#000000" />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        {/* Main Manifesto Content */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <Badge icon={<ShieldStreamIcon className="w-3 h-3" />} className="mb-12 hero-meta bg-white/5 border-white/10 py-1 px-4">
                                    <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-gray-400">INSTITUTIONAL_CHARTER // V2.05</span>
                                </Badge>

                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-10 brand-heading tracking-tight leading-[0.95] text-white">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 0.4, y: 0 }}
                                        transition={{ delay: 0.2, duration: 1 }}
                                        className="block font-playfair italic text-3xl md:text-4xl lg:text-5xl mb-4"
                                    >
                                        The SURO Manifest
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                                        animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                                        transition={{ delay: 0.4, duration: 1.2, ease: "circOut" }}
                                        className="inline-block"
                                    >
                                        <TextAnimate animation="radarScan" as="span" className="font-playfair">Pioneering</TextAnimate>
                                    </motion.span>
                                    <br />
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.8 }}
                                        transition={{ delay: 0.8, duration: 1 }}
                                        className="font-playfair text-white"
                                    >
                                        AI
                                    </motion.span>
                                    <motion.span
                                        initial={{ opacity: 0, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        transition={{ delay: 1, duration: 1 }}
                                    >
                                        <TextAnimate animation="radarScan" delay={1.2} as="span" className="font-playfair text-cyan-400">Governance</TextAnimate>
                                    </motion.span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
                                    SURO was founded to solve the enterprise AI governance crisis before it becomes a regulatory catastrophe. We build the <span className="text-cyan-400 font-semibold">control layer</span> that stands between your AI tools and your liability.
                                </p>

                                <div className="flex items-center gap-6">
                                    <Link
                                        to="/dashboard"
                                        className="bg-cyan-400 text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-cyan-300 transition-all flex items-center gap-3 group shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                    >
                                        Book Enterprise Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <button
                                        onClick={() => window.location.href = "mailto:suhaybshaik@outlook.com?subject=Whitepaper Request"}
                                        className="text-white/60 hover:text-cyan-400 transition-colors flex items-center gap-3 group px-4 py-2 border border-white/5 hover:border-cyan-400/30 rounded-lg bg-white/5 backdrop-blur-sm"
                                    >
                                        <Download className="w-4 h-4 text-cyan-400" />
                                        <span className="text-[10px] font-mono uppercase tracking-widest transition-colors font-bold">Request Whitepaper (.PDF)</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Protocol Sidebar: Metadata */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="border-l border-white/10 pl-8 space-y-12"
                            >
                                <div className="space-y-2 group">
                                    <span className="block text-[8px] font-mono uppercase tracking-[0.4em] text-cyan-400/60 transition-colors group-hover:text-cyan-400">Node Status</span>
                                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-cyan-400/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all">
                                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]">
                                            <motion.div
                                                className="w-full h-full rounded-full bg-cyan-400"
                                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                        <span className="text-sm font-mono text-white tracking-widest uppercase font-bold">Global Equilibrium</span>
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <span className="block text-[8px] font-mono uppercase tracking-[0.4em] text-gray-500 transition-colors group-hover:text-cyan-400">Governance Type</span>
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md group-hover:border-cyan-400/30 transition-all">
                                        <span className="block text-sm font-mono text-white tracking-widest uppercase font-bold">Deterministic // Immutable</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="block text-[8px] font-mono uppercase tracking-[0.4em] text-gray-500">Latency Compliance</span>
                                    <span className="block text-xs font-mono text-white tracking-widest uppercase">&lt; 180ms Execution</span>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                        <span className="block text-[7px] font-mono uppercase tracking-[0.3em] text-gray-400 mb-3">Core Coordinates</span>
                                        <div className="text-[10px] font-mono text-cyan-400/40 leading-tight">
                                            0x3F_D492_A91<br />
                                            LAT: 51.5074° N<br />
                                            LON: 0.1278° W
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE PROBLEM: THE INTELLIGENCE GAP ═══════════════ */}
            <section className="py-40 px-8 bg-black relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
                        <div className="lg:col-span-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px w-12 bg-red-500/50" />
                                    <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-red-500">Systemic Weakness</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 brand-heading leading-none">
                                    The Intelligence <br />
                                    <span className="text-white/20 italic font-playfair">Deficit</span>
                                </h2>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                        {/* Shadow AI - Large Bento Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-2xl border border-white/10 rounded-[40px] p-12 flex flex-col justify-between group hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.1)] transition-all pointer-events-auto overflow-hidden relative shadow-2xl"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <motion.div
                                    className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <ScanEyeIcon className="w-10 h-10 text-red-500" />
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border-2 border-red-500/40"
                                        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                                <h3 className="text-4xl font-bold mb-6 brand-heading leading-tight tracking-tight">Behavioral <br />Blindspot</h3>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                                    Traditional security tools check credentials and network traffic. But when AI agents
                                    make authorized API calls that violate strategic intent? Zero Trust is powerless.
                                    SURO monitors the <span className="text-red-400 font-bold uppercase tracking-tighter">why</span> behind every action.
                                </p>
                            </div>
                            <div className="relative z-10 flex items-center gap-4 text-[11px] font-mono text-gray-500 tracking-[.3em] uppercase mt-12 border-t border-white/5 pt-8">
                                <span className="font-bold text-white/60">Risk Level: <span className="text-red-500">Critical</span></span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]">
                                        <motion.div
                                            className="w-full h-full rounded-full bg-red-500"
                                            animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    </div>
                                    <span className="text-red-500 font-bold">Live Leakage</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Regulatory Drift - Tall Bento Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="row-span-2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 flex flex-col justify-between group hover:border-purple-500/40 hover:bg-white/[0.06] transition-all relative overflow-hidden"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-8 shadow-xl">
                                    <BookOpen className="w-7 h-7 text-purple-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 brand-heading leading-tight">Regulatory <br />Drift</h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    Static policies can't keep pace with generative evolution. When models drift, compliance breaks—leaving organizations exposed to retroactive litigation and EU AI Act penalties.
                                </p>
                            </div>
                            <div className="space-y-4 pt-10">
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "66%" }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-[.3em] font-bold">Mismatch Detected</span>
                                    <span className="text-[10px] font-mono text-white tracking-widest">66%</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Behavioral Anomaly - Small Bento Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-[40px] p-8 flex items-center gap-6 hover:bg-white/[0.05] transition-all"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex-shrink-0 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-orange-400" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold brand-heading mb-1">Behavioral Anomaly</h4>
                                <p className="text-xs text-gray-500">Real-time scoring of agent actions against intent.</p>
                            </div>
                        </motion.div>

                        {/* Cross-Model Oversight - Small Bento Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[40px] p-8 flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex-shrink-0 flex items-center justify-center">
                                <Globe className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold brand-heading mb-1">Ecosystem Vision</h4>
                                <p className="text-xs text-gray-500">Cross-cloud oversight of NHI identity sprawl.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE SOLUTION: ARCHITECTURAL CORE ═══════════════ */}
            <section className="py-40 px-8 relative overflow-hidden bg-black">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        {/* Left Side: Editorial Content */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <Badge icon={<ShieldStreamIcon className="w-3 h-3" />} className="mb-8 bg-cyan-500/5 border-cyan-500/20">
                                    <span className="font-mono text-[9px] tracking-widest uppercase">Protocol_Objective</span>
                                </Badge>

                                <h2 className="text-5xl md:text-7xl font-light mb-8 brand-heading leading-tight">
                                    Architectural <br />
                                    <span className="italic font-playfair text-cyan-400">Integrity</span>
                                </h2>

                                <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                                    Infrastructure secures the gate; SURO governs the behavior.
                                    We provide the <span className="text-cyan-400 font-semibold">unified governance brain</span> that
                                    monitors intent alignment, detects behavioral drift, and ensures
                                    compliance across every autonomous agent in your ecosystem.
                                </p>

                                <ul className="space-y-8 mt-12">
                                    {[
                                        { title: "Behavioral Oversight", desc: "Intent scoring for autonomous agent actions.", icon: <Shield className="w-5 h-5 text-cyan-400" /> },
                                        { title: "Meta-Security Layer", desc: "Oversight of security vaults and firewalls.", icon: <Lock className="w-5 h-5 text-cyan-400" /> },
                                        { title: "Audit Persistence", desc: "Cross-ecosystem compliance data lake.", icon: <CheckCircle className="w-5 h-5 text-cyan-400" /> }
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex gap-6 group cursor-pointer p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="p-3 rounded-lg bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors flex-shrink-0 h-fit">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Right Side: Visual Components */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1 */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-3xl group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-8 shadow-2xl shadow-cyan-500/20">
                                        <ShieldStreamIcon className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 brand-heading">Governance Gateway</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        The primary layer of defense. Every packet is analyzed for PII, malicious intent, and policy violations in under 180ms.
                                    </p>
                                </motion.div>

                                {/* Card 2 */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="md:mt-12 bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-3xl"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-8 shadow-2xl shadow-red-500/20">
                                        <ScanEyeIcon className="w-7 h-7 text-red-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 brand-heading">Proactive Detection</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        Algorithmic identification of unauthorized API calls. We surface the "Shadow AI" that traditional firewalls ignore.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ HOW IT WORKS: THE PROTOCOL ═══════════════ */}
            <section className="py-40 px-8 bg-black relative">
                <div className="max-w-7xl mx-auto border border-white/10 rounded-[48px] p-12 lg:p-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <Badge icon={<Target className="w-3 h-3" />} className="mb-8">
                                <span className="font-mono text-[9px] tracking-widest uppercase">Operational_Flow</span>
                            </Badge>
                            <h2 className="text-5xl md:text-6xl font-light mb-10 brand-heading leading-tight">
                                Autonomous <br />
                                <span className="text-white/30 italic">Execution</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                                The transition from policy to production must be instant.
                                SURO maps governance logic directly to API request cycles,
                                ensuring no model call goes unverified.
                            </p>
                            <button
                                onClick={() => navigate("/standards")}
                                className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors group mb-12"
                            >
                                Technical Protocol Specs <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="space-y-12">
                            {[
                                { num: "01", title: "Intercept", desc: "Real-time capture of all AI traffic." },
                                { num: "02", title: "Enforce", desc: "Instant policy check and sanitization." },
                                { num: "03", title: "Explain", desc: "Log everything with human reasoning." }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex items-start gap-8"
                                >
                                    <span className="text-4xl font-playfair italic text-white/10">{step.num}</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 brand-heading tracking-widest uppercase">{step.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE PROTOCOL SEQUENCE: HORIZONTAL JOURNEY ═══════════════ */}
            <section className="py-40 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 mb-16">
                    <Badge icon={<Clock className="w-3 h-3" />} className="mb-8">
                        <span className="font-mono text-[9px] tracking-widest uppercase">Protocol_Evolution</span>
                    </Badge>
                    <div className="flex items-end justify-between">
                        <h2 className="text-5xl md:text-8xl font-light brand-heading leading-tight">
                            Journey of <br />
                            <span className="italic font-playfair text-white/20">Intelligence</span>
                        </h2>
                        <p className="hidden md:block text-xs font-mono text-white/30 uppercase tracking-widest pb-4">
                            scroll to explore →
                        </p>
                    </div>
                </div>

                {/* Horizontal Scroll Rail */}
                <div className="relative">
                    {/* Edge fades */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                    <div className="overflow-x-auto pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className="flex gap-0 pl-[max(2rem,calc(50vw-600px))] pr-[max(2rem,calc(50vw-600px))] w-max">
                            {[
                                { year: "2023", title: "Inception & Charter", desc: "Formation of the SURO Governance Core. Defining the first deterministic governance protocols for enterprise AI.", accent: "#22d3ee", num: "01" },
                                { year: "2024", title: "Enterprise Pilot", desc: "First Pilot with Tier-1 Financial Institution (NDA-protected). Processing 5M governance requests with zero-failure compliance.", accent: "#10b981", num: "02" },
                                { year: "2025", title: "Protocol V2", desc: "Scaling to 15M monthly requests across Fortune 500 footprint. Integration of human-readable audit narratives.", accent: "#8b5cf6", num: "03" },
                                { year: "2026", title: "Behavioral Standard", desc: "Establishing the global standard for intent alignment. SURO becomes the primary oversight layer for autonomous agents.", accent: "#f59e0b", num: "04" }
                            ].map((milestone, i, arr) => (
                                <div key={i} className="flex items-stretch">
                                    {/* Card */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        whileHover={{ borderColor: `${milestone.accent}80`, backgroundColor: "rgba(255,255,255,0.06)", scale: 1.02 }}
                                        className="group relative w-80 flex-shrink-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-10 flex flex-col justify-between transition-all duration-500 cursor-default"
                                        style={{ '--accent': milestone.accent } as React.CSSProperties}
                                    >
                                        {/* Top accent line on hover */}
                                        <motion.div
                                            className="absolute top-0 left-8 right-8 h-px"
                                            style={{ background: `linear-gradient(to right, transparent, ${milestone.accent}, transparent)` }}
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />

                                        <div>
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="text-sm font-mono uppercase tracking-[0.3em] font-bold" style={{ color: milestone.accent, textShadow: `0 0 10px ${milestone.accent}40` }}>{milestone.year}</span>
                                                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{milestone.num}</span>
                                            </div>
                                            <h3 className="text-2xl font-light brand-heading mb-6 leading-tight text-white">{milestone.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors">{milestone.desc}</p>
                                        </div>

                                        {/* Bottom indicator */}
                                        <div className="mt-10 flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full transition-all duration-500" style={{ backgroundColor: milestone.accent, boxShadow: `0 0 10px ${milestone.accent}` }} />
                                            <div className="flex-1 h-px bg-white/5" />
                                        </div>
                                    </motion.div>

                                    {/* Connector line between cards */}
                                    {i < arr.length - 1 && (
                                        <div className="flex items-center w-12 flex-shrink-0">
                                            <div className="w-full h-px bg-gradient-to-r from-white/10 to-white/5" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack - Subtly Integrated */}
            <section className="py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/3">
                            <Badge icon={<Code className="w-4 h-4" />} className="mb-4">
                                Tech Stack
                            </Badge>
                            <h2 className="text-3xl font-bold mb-4 brand-heading">
                                Powered by <span className="text-white">Industry Giants</span>
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                SURO leverages cutting-edge AI, robust backend frameworks, and secure data layers to ensure your governance is unbreakable.
                            </p>
                        </div>

                        <div className="md:w-2/3 w-full h-32 relative">
                            <LogoLoop
                                logos={[
                                    {
                                        title: "OpenAI",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M22.28 9.82a6 6 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.28 2.17 6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 6.07 6.07 0 0 0 10.28-2.17 6 6 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.97V11.6a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.1 3.86L12.59 8.38l2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.39-.68zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Python",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "FastAPI",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "LangChain",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.47l7 3.5v7.86l-7-3.5V9.47zm16 0v7.86l-7 3.5v-7.86l7-3.5z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "PostgreSQL",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M23.56 14.72c-.02-.01-.04-.01-.06-.03-.62-.26-1.31-.33-2.04-.29-.7.04-1.43.19-2.13.4-.13.04-.26.09-.4.14a1.76 1.76 0 0 0-.18.06c-.08.03-.16.04-.25.04-.05 0-.1.01-.16-.02a.5.5 0 0 1-.12-.01c-.23 0-.45.01-.67.02-.87.06-1.71.23-2.52.5-.8.26-1.56.63-2.27 1.08-.46.3-.9.63-1.3 1.01-.27.25-.53.51-.79.77a.53.53 0 0 1-.38.16.81.81 0 0 1-.62-.27c-.3-.33-.54-.72-.7-1.17-.17-.48-.26-.98-.27-1.49-.02-.7.11-1.39.37-2.05.26-.66.64-1.26 1.13-1.78a6.1 6.1 0 0 1 2.19-1.6c.84-.41 1.75-.66 2.69-.77.94-.1 1.9-.04 2.84.18.93.22 1.83.59 2.66 1.1.16.1.33.2.49.3a.53.53 0 0 0 .56-.02c.18-.13.37-.25.56-.37a6.3 6.3 0 0 1 2.51-1.15c.88-.27 1.79-.42 2.71-.45.91-.03 1.83.07 2.71.27.45.1.88.25 1.3.42.32.13.56-.1.69-.24.12-.22.21-.45.3-.7.08-.24.14-.49.18-.74a6.23 6.23 0 0 0 .03-1.5 5.89 5.89 0 0 0-.31-1.44c-.16-.45-.37-.89-.65-1.29-.27-.41-.6-.77-.98-1.09-.38-.32-.8-.59-1.25-.8a6.55 6.55 0 0 0-1.47-.46c-.5-.09-1.02-.14-1.53-.14-.51 0-1.01.05-1.52.16a7.8 7.8 0 0 0-1.44.47c-.47.2-.9.46-1.31.76-.4.3-.76.65-1.08 1.03-.33.39-.6.82-.83 1.26-.23.44-.4.92-.5 1.42-.11.5-.14 1-.11 1.5a6.45 6.45 0 0 0 .26 1.46c.14.47.34.92.59 1.34s.54.81.88 1.16c.34.35.73.65 1.14.9a5.95 5.95 0 0 0 1.4.65c.48.15.99.24 1.49.27.51.03 1.02 0 1.52-.1a6.3 6.3 0 0 0 1.45-.48 5.75 5.75 0 0 0 1.28-.82c.39-.32.74-.69 1.04-1.1a6.5 6.5 0 0 0 .72-1.29c.18-.48.3-.98.36-1.5.05-.51.04-1.03-.04-1.54a6.55 6.55 0 0 0-.34-1.47 6.93 6.93 0 0 0-.64-1.33c-.27-.4-.58-.78-.92-1.14-.35-.37-.73-.68-1.15-.93a7.78 7.78 0 0 0-1.34-.65 8.16 8.16 0 0 0-1.48-.36 8.54 8.54 0 0 0-1.54-.08c-.52.03-1.03.11-1.53.24a8.44 8.44 0 0 0-1.46.52 8.12 8.12 0 0 0-1.32.76c-.41.29-.79.62-1.14.98-.34.36-.65.76-.91 1.18-.26.42-.47.87-.64 1.34a7.92 7.92 0 0 0-.32 1.41c-.05.47-.05.95 0 1.42.06.47.16.93.32 1.37.16.44.37.86.62 1.25.25.39.55.74.88 1.06.33.31.7.59 1.1.81s.82.4 1.26.51c.43.12.89.18 1.35.19.46.01.91-.03 1.37-.12.45-.09.9-.22 1.32-.4.43-.18.83-.4 1.22-.65a6.67 6.67 0 0 0 1.05-.87c.32-.31.6-.66.84-1.03.24-.37.44-.76.6-1.16.16-.4.26-.82.32-1.25.06-.43.07-.87.03-1.3a5.84 5.84 0 0 0-.24-1.28 5.63 5.63 0 0 0-.51-1.19 5.45 5.45 0 0 0-.76-1.04 5.27 5.27 0 0 0-.97-.84 5.12 5.12 0 0 0-1.14-.56 5.01 5.01 0 0 0-1.27-.25 4.92 4.92 0 0 0-1.32.06c-.42.08-.84.21-1.25.39a4.75 4.75 0 0 0-1.1.66 4.67 4.67 0 0 0-.88.9c-.25.33-.46.68-.61 1.07-.16.39-.27.8-.33 1.18-.06.4-.06.8.02 1.2.07.39.2.77.39 1.14.19.36.43.7.72 1 .29.3.62.55 1 .76s.78.36 1.2.46c.42.1.86.13 1.3.11.44-.02.88-.1 1.3-.23.42-.13.82-.32 1.2-.56a4.18 4.18 0 0 0 .96-.82c.26-.31.48-.65.65-1.03.17-.38.29-.77.36-1.17.07-.4.06-.8-.03-1.2a3.6 3.6 0 0 0-.39-1.13c-.2-.33-.44-.65-.7-.94a3.44 3.44 0 0 0-.96-.64 3.36 3.36 0 0 0-1.1-.28 3.28 3.28 0 0 0-1.14.09l-1.02.47a3.14 3.14 0 0 0-.79.76c-.23.33-.41.66-.49.96-.08.31-.13.67-.16 1.05.01.35.09.7.23 1.02.14.33.33.62.58.88.25.26.54.48.88.65.34.17.71.29 1.11.35.4.07.81.08 1.23.03.42-.04.84-.14 1.25-.28.41-.14.8-.33 1.17-.56a4.05 4.05 0 0 0 .96-.82 3.8 3.8 0 0 0 .65-1.03c.17-.38.29-.77.36-1.17.07-.4.06-.8-.03-1.2a3.6 3.6 0 0 0-.39-1.13c-.2-.33-.44-.65-.7-.94s-.6-.48-.95-.64a3.36 3.36 0 0 0-1.1-.28 3.28 3.28 0 0 0-1.14.09 3.21 3.21 0 0 0-1.02.47 3.14 3.14 0 0 0-.8.76 3.07 3.07 0 0 0-.48.96 2.9 2.9 0 0 0-.17 1.05c.02.35.1.7.23 1.02.14.33.34.62.58.88.25.26.55.48.89.65.33.17.71.29 1.1.35z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "GitHub",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "TypeScript",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26c-.245-.07-.49-.123-.73-.158a4.924 4.924 0 0 0-.705-.052c-.628 0-1.085.12-1.37.36-.285.24-.427.639-.427 1.199 0 .26.043.496.131.708.087.212.244.403.469.574.226.17.533.33.921.482.388.152.864.304 1.425.457.604.166 1.132.355 1.586.566.453.21.823.473 1.11.787.287.314.493.693.619 1.137.125.444.188.963.188 1.557 0 .674-.12 1.258-.36 1.753a3.809 3.809 0 0 1-1.032 1.342c-.448.388-1.01.688-1.687.9-.678.213-1.464.32-2.359.32-.718 0-1.36-.05-1.928-.15a7.89 7.89 0 0 1-1.608-.431v-2.527c.435.194.909.37 1.425.527.514.156 1.107.234 1.777.234.368 0 .702-.026 1.003-.078.3-.053.551-.137.753-.255.202-.118.353-.275.455-.471.102-.196.153-.437.153-.724 0-.254-.044-.477-.131-.669a1.64 1.64 0 0 0-.39-.533 3.015 3.015 0 0 0-.722-.441c-.31-.141-.741-.287-1.29-.44-.582-.162-1.083-.344-1.503-.547-.42-.203-.76-.452-1.02-.747-.26-.295-.444-.64-.554-1.037a4.277 4.277 0 0 1-.165-1.199c0-.585.111-1.103.334-1.553.221-.45.545-.828.971-1.133.428-.304.943-.532 1.547-.682.605-.15 1.298-.225 2.079-.225zm-9.352.1c.138 0 .25.112.25.25v2.037c0 .138-.112.25-.25.25H6.942v10.382c0 .138-.112.25-.25.25H4.113a.25.25 0 0 1-.25-.25V12.387H1.634a.25.25 0 0 1-.25-.25V10.1c0-.138.112-.25.25-.25h7.502z" fill="currentColor" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "React",
                                        node: (
                                            <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity">
                                                <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                                                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
                                                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
                                                    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
                                                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                                                </g>
                                            </svg>
                                        )
                                    }
                                ]}
                                speed={40}
                                logoHeight={24}
                                gap={60}
                                fadeOut
                                fadeOutColor="#050505"
                                className="text-gray-500"
                                ariaLabel="Technology Stack"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <Badge icon={<Users className="w-4 h-4" />} className="mb-4">
                            Our Philosophy
                        </Badge>
                        <h2 className="display-text text-4xl md:text-5xl mb-4 brand-heading">
                            Human-in-the-Loop <span className="hero-sub">by Design</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 text-center">
                            <div className="text-4xl font-bold text-cyan-400 mb-2 font-playfair italic">100%</div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Explainable Decisions</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 text-center">
                            <div className="text-4xl font-bold text-purple-400 mb-2 font-playfair italic">&lt;30s</div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Escalation SLA</p>
                        </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center font-light">
                        SURO was founded to solve the enterprise AI governance crisis. We build the control layer that stands between your AI tools and your liability, providing intelligent escalation for high-risk decisions while automating routine compliance checks.
                    </p>
                </div>
            </section>

            {/* ═══════════════ THE LEADERSHIP: FOUNDING TEAM ═══════════════ */}
            <section className="py-24 px-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/3">
                            <Badge icon={<Users className="w-4 h-4" />} className="mb-6">
                                Leadership
                            </Badge>
                            <h2 className="text-5xl font-light brand-heading leading-tight mb-8">
                                Built by <span className="italic font-playfair text-white/30">Experts</span>
                            </h2>
                            <p className="text-lg text-gray-400 font-light leading-relaxed">
                                Our founding team brings together deep expertise in AI safety, distributed systems, and enterprise risk management. We are committed to building the transparent foundation required for the next era of automation.
                            </p>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            {[
                                {
                                    name: "Suhayb Muzammil Shaik",
                                    role: "Founder & CEO",
                                    bio: "Visionary leader focused on aligning machine intent with human values. Previously Lead Architect in mission-critical autonomous systems at Scale AI.",
                                    linkedin: "https://www.linkedin.com/in/suhayb-muzammil-shaik-13985231a/"
                                },
                                {
                                    name: "Rohan Rao",
                                    role: "Founder & CTO",
                                    bio: "Specialist in distributed governance and high-performance interceptors. Leading the technical evolution of the SURO Core.",
                                    linkedin: "https://www.linkedin.com/in/rohanrao2/"
                                }
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="bg-white/5 border border-white/10 rounded-[32px] p-8 group hover:border-cyan-400/30 transition-all"
                                >
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 mb-6 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform overflow-hidden">
                                        <div className="text-2xl font-bold text-white/40">{member.name[0]}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold brand-heading mb-1">{member.name}</h3>
                                    <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 font-bold">{member.role}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                                    <a href={member.linkedin} className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-tighter">
                                        LinkedIn <ArrowRight className="w-3 h-3" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ THE ROI: INSTITUTIONAL IMPACT REPORT ═══════════════ */}
            <section className="py-40 px-8 bg-black relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                        <div className="lg:col-span-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Badge icon={<TrendingUp className="w-3 h-3" />} className="mb-8">
                                    <span className="font-mono text-[9px] tracking-widest uppercase">External_Assessment</span>
                                </Badge>
                                <h2 className="text-5xl md:text-8xl font-light brand-heading leading-[0.9]">
                                    A New Standard <br />
                                    <span className="italic font-playfair text-white/20">of Confidence</span>
                                </h2>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
                        {[
                            { value: "73%", label: "Visibility Gap", source: "Gartner, 2024", desc: "Enterprises lacking real-time AI usage visibility." },
                            { value: "3.2x", label: "ROI Multiplier", source: "Forrester Alpha", desc: "Return on automated regulatory interception." },
                            { value: "95%", label: "Leak Reduction", source: "Internal Pilot", desc: "Reduction in PII exfiltration via LLM prompts." },
                            { value: "<200ms", label: "Latency Compliance", source: "SURO Core", desc: "Real-time governance enforcement threshold." }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-[32px] p-8 hover:bg-white/[0.05] hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all group cursor-default"
                            >
                                <div className="text-4xl font-bold text-white mb-4 font-playfair italic group-hover:text-cyan-400 transition-colors">
                                    <EncryptedText text={stat.value} duration={1500} />
                                </div>
                                <h4 className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest mb-4 group-hover:text-cyan-400 transition-colors font-bold">{stat.label}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors">{stat.desc}</p>
                                <div className="text-[8px] text-white/20 font-mono uppercase tracking-widest group-hover:text-white/40 transition-colors font-bold">Ref: {stat.source}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center mb-24">
                        <motion.button
                            onClick={() => navigate("/calculator")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] transition-all"
                        >
                            <span>Calculate Your Enterprise Risk</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <p className="mt-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            Estimated time: 2 minutes // No sign-up required
                        </p>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 rounded-[48px] p-8 lg:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h3 className="text-4xl font-bold mb-8 brand-heading uppercase tracking-tighter italic">Global Standardization</h3>
                                <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                                    Our architecture is pre-aligned with international directives.
                                    SURO provides a direct translation layer for the **EU AI Act**
                                    and the **NIST AI Risk Management Framework**, ensuring
                                    territorial compliance is an automated byproduct of operation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-mono font-bold text-gray-300 uppercase tracking-widest">
                                        NIST_RMF_V1.1
                                    </div>
                                    <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-mono font-bold text-gray-300 uppercase tracking-widest">
                                        EU_AI_ACT_CERT
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-8 bg-black/40 rounded-3xl border border-white/5 backdrop-blur-md">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Immutable Audit</h4>
                                    <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">Full lineage tracking for every generative interaction.</p>
                                </div>
                                <div className="p-8 bg-black/40 rounded-3xl border border-white/5 backdrop-blur-md lg:mt-6">
                                    <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">PII Intercept</h4>
                                    <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest">Deterministic blocking of classification data sets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regulatory Alignment - Chip Style */}
            <section className="py-40 px-8 bg-gradient-to-b from-black to-gray-900/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge icon={<Lock className="w-4 h-4" />} className="mb-6">
                            Compliance
                        </Badge>
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" as="span" by="word">Built for Regulated</TextAnimate>
                            {" "}
                            <TextAnimate
                                animation="blurInUp"
                                as="span"
                                by="word"
                                className="text-white"
                            >
                                Industries
                            </TextAnimate>
                        </h2>
                    </div>

                    {/* Compliance Chips */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        {["GDPR", "SOX", "HIPAA", "NIST AI RMF", "EU AI Act", "PCI DSS", "ISO 27001", "CCPA"].map(
                            (standard, i) => (
                                <motion.div
                                    key={standard}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-center hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all cursor-default backdrop-blur-md"
                                >
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors font-bold">{standard}</p>
                                </motion.div>
                            )
                        )}
                    </div>

                    <p className="text-center text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        Pre-configured policies mapped to major regulatory frameworks. Deploy governance controls that align with your compliance requirements from day one.
                    </p>
                </div>
            </section>

            {/* ═══════════════ CORPORATE OVERVIEW ═══════════════ */}
            <section className="py-24 px-8 border-t border-white/5 bg-zinc-950/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Partners & Investors</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Backed by leading venture capital firms focused on the future of secure AI infrastructure.
                            </p>
                            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors underline underline-offset-4">Investor Portal →</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Press & Media</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                For inquiries regarding SURO Core developments and AI governance regulatory insights.
                            </p>
                            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors underline underline-offset-4">Media Kit (v2.1) →</span>
                        </div>
                        <div>
                            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Careers</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Join a team of engineers and policy experts building the unified control layer for machine intent.
                            </p>
                            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest cursor-pointer hover:text-white transition-colors underline underline-offset-4">4 Open Positions →</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA Section - Cinematic Design with Control Room Image */}
            <section className="relative overflow-hidden">
                {/* Full-bleed cinematic background */}
                <div className="absolute inset-0">
                    <img
                        src="/images/Cinematic Lighting Setup.png"
                        alt="SURO Command Center"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlays for text legibility */}
                    <div className="absolute inset-0 bg-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                    {/* Subtle cyan vignette at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
                </div>

                <div className="relative z-10 py-48 px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-cyan-400/60 mb-8">
                                COMMAND_PROTOCOL // ACTIVE
                            </p>
                            <h2 className="text-5xl md:text-7xl font-light brand-heading mb-8 leading-tight">
                                <TextAnimate animation="blurInUp" as="span" by="word">See SURO in Action</TextAnimate>
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                Experience how{" "}
                                <span className="text-cyan-400 font-semibold">real-time AI governance</span>{" "}
                                transforms autonomous systems from risky to trustworthy. See policy enforcement,
                                behavioral scoring, and intent alignment in action.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_60px_rgba(34,211,238,0.5)] hover:shadow-[0_0_80px_rgba(34,211,238,0.7)] transition-all duration-300 group"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                Book Enterprise Demo{" "}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}



