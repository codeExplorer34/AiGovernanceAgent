import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import { ServiceCard } from "../components/marketing/ServiceCard";
import { FlipWords } from "../components/ui/FlipWords";
import { ProductVideoSection } from "../components/marketing/ProductVideoSection";
import Aurora from "../components/ui/Aurora";
import { ShieldStreamIcon, ScanEyeIcon, HexLockIcon, BoltNodesIcon, AuditDocIcon, TeamShieldIcon, MonitorPulseIcon } from "../components/ui/CustomIcons";
import { Activity, Shield, Users, Sparkles, Eye, CheckCircle, AlertTriangle, Code, Clock, Globe, Download, TrendingDown, Zap, ArrowRight, ShieldCheck, FileSearch, PieChart } from "lucide-react";
import CardSwap, { Card } from "../components/ui/CardSwap";
import { AuditTrailSection } from "../components/marketing/AuditTrailSection";
import { ComparisonLens } from "../components/marketing/ComparisonLens";
import { StrategicDifferentiation } from "../components/marketing/StrategicDifferentiation";
import { ProcessJourney } from "../components/marketing/ProcessJourney";
import { ActiveGrid } from "../components/ui/ActiveGrid";
import { TextDecrypt } from "../components/ui/TextDecrypt";

import { HeroHeadline } from "../components/ui/HeroHeadline";
import { MagneticButton } from "../components/ui/MagneticButton";
import { ScrollRevealThesis } from "../components/marketing/ScrollRevealThesis";
import { GovernanceTape } from "../components/marketing/GovernanceTape";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../components/ui/scroll-based-velocity";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { InfiniteDataStream } from "../components/ui/InfiniteDataStream";
import { TextBreakdown } from "../components/ui/TextBreakdown";
import { LiveGovernanceDemo } from "../components/marketing/LiveGovernanceDemo";
import { ChapterProgress } from "../components/ui/ChapterProgress";
import { SoundToggle } from "../components/ui/SoundToggle";
import { useColorTransitions, useSceneTransitions } from "../hooks/useNarrativeTransitions";
import { TypingText } from "../components/ui/TypingText";
import { useSound } from "../components/ui/SoundProvider";
import { TrustRibbon } from "../components/marketing/TrustRibbon";
import { DeploymentSection } from "../components/marketing/DeploymentSection";
import { useIsMobile } from "../hooks/useMediaQuery";
import { MobileCTABar } from "../components/ui/MobileCTABar";


export function LandingPage() {
    const navigate = useNavigate();
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const isMobile = useIsMobile();


    // ── Mouse Parallax Logic ──
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const moveX = useTransform(springX, [0, 1], [-10, 10]);
    const moveY = useTransform(springY, [0, 1], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    // ── Narrative Transitions ──
    useColorTransitions();
    useSceneTransitions();

    return (
        <div
            className="relative min-h-screen bg-black text-white font-['Playfair_Display',serif] z-[1]"
            onMouseMove={handleMouseMove}
        >
            <InfiniteDataStream className="opacity-100" columnCount={isMobile ? 4 : 12} speed={isMobile ? 1 : 1.5} />
            <ChapterProgress />
            <Navbar />

            {/* ═══════════════ CINEMATIC HERO ═══════════════ */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                id="hero"
                data-scene="introduction"
                className="relative min-h-screen flex items-center overflow-hidden"
            >
                {/* LAYER 0: Background — Video on desktop, gradient on mobile */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none transform-gpu" style={{ willChange: "transform" }}>
                    {!isMobile ? (
                        <video
                            ref={videoRef}
                            src="/Videos/Cinematic Timelapse.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.8]"
                            style={{ transform: "translateZ(0)" }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-black via-purple-950/30 to-black" />
                    )}
                </div>

                {/* LAYER 1: Balanced Overlays (Vignette + Global Fade) */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Balanced vignette for centered content */}
                    <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />

                    {/* Deep bottom and top fades for focus */}
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/20 to-transparent" />
                </div>

                {/* LAYER 2: Content Wrapper (Centered) */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col items-center text-center pt-28 md:pt-32 pb-16 md:pb-20">
                    <div className="max-w-4xl" data-scene-element>
                        {/* Status Token */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="relative inline-flex items-center gap-3 px-4 py-2 mb-10 rounded-full bg-white/5 backdrop-blur-xl border border-cyan-400/30 mx-auto shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        >
                            {/* Animated pulse ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-cyan-400/50"
                                animate={{
                                    scale: [1, 1.03, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <div className="relative flex h-2 w-12 overflow-hidden">
                                <span className="absolute inset-0 bg-cyan-500/10 rounded-full"></span>
                                <motion.span
                                    className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                    animate={{
                                        x: ['-100%', '1200%']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </div>
                            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-cyan-200/80">
                                Unified Governance Intelligence // Online
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight text-white/95 leading-[1.05] font-playfair mb-4">
                                <span className="block mb-1">Govern Every</span>
                                <span className="block italic">AI Interaction</span>
                                <span className="block text-2xl sm:text-4xl md:text-5xl mt-2 text-white/40">Across Your Enterprise</span>
                            </h1>

                            <div className="flex items-center gap-4 text-xs font-mono text-cyan-400/60 uppercase tracking-[0.4em] bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                <TypingText text="Executing Policy Gate // Online // <200ms Latency" speed={40} />
                            </div>

                            <p className="text-gray-300 text-base md:text-2xl font-light leading-relaxed mb-8 md:mb-10 max-w-4xl mx-auto font-playfair px-2">
                                Block PII leaks, enforce policy, and deliver audit-ready governance in under <span className="text-cyan-400 font-semibold font-mono">200ms</span>. <br className="hidden md:block" />
                                <span className="text-white/60 italic font-medium">Stop shadow AI before it reaches external models.</span>
                            </p>
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap w-full sm:w-auto"
                        >
                            {isMobile ? (
                                <button
                                    onClick={() => navigate("/contact")}
                                    className="w-full max-w-xs border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all active:scale-95 active:bg-cyan-400/10"
                                >
                                    Book Enterprise Demo
                                </button>
                            ) : (
                                <MagneticButton
                                    onClick={() => navigate("/contact")}
                                    strength={0.2}
                                    className="group relative border border-cyan-400 text-cyan-400 px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                                >
                                    <span className="relative z-10 transition-colors uppercase">Book Enterprise Demo</span>
                                    <div className="absolute inset-0 bg-cyan-400/20 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-0" />
                                </MagneticButton>
                            )}

                            <button
                                onClick={() => navigate("/sandbox")}
                                className="group flex items-center gap-3 text-white/60 hover:text-white active:text-cyan-400 transition-colors py-4 px-2"
                            >
                                <span className="text-[11px] font-mono uppercase tracking-[0.3em]">Try the Sandbox</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ═══════════════ GOVERNANCE TAPE ═══════════════ */}
            <GovernanceTape />

            {/* ═══════════════ TRUST RIBBON ═══════════════ */}
            <TrustRibbon />

            {/* ═══════════════ PRODUCT VIDEO SECTION ═══════════════ */}
            <ProductVideoSection />

            {/* Subtle Post-Dashboard Video Background Section */}
            <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 z-0">
                    {!isMobile ? (
                        <video
                            src="/Videos/Video 2.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-20"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-b from-black via-cyan-950/10 to-black" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-4 md:px-8">
                    <p className="hidden md:block font-mono text-[10px] tracking-[0.5em] uppercase text-cyan-400/60 mb-6">
                        <TypingText text="PERSISTENT_GOVERNANCE_PROTOCOL // ACTIVE" delay={1} speed={60} />
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight text-white/90 font-playfair">
                        Always Watching. Always Enforcing. <br />
                        <span className="block mt-2 text-cyan-400">Total Operational</span>
                        <span className="block text-cyan-400">Integrity.</span>
                    </h3>
                </div>
            </section>

            {/* Kinetic Enforcement Loop — Capability Breadth */}


            {/* ═══════════════ DEPLOYMENT ARCHITECTURE ═══════════════ */}
            <DeploymentSection />

            {/* Scrollytelling Audit Trail */}
            < AuditTrailSection />

            {/* Live Governance Demo - Interactive Proof */}
            <LiveGovernanceDemo />

            {/* Interactive Governance Proof */}
            <StrategicDifferentiation />
            <ComparisonLens />

            {/* Visual Process Journey (Image-Based) */}
            < ProcessJourney />

            {/* Instant Explainability - Moved up for immediate proof */}

            {/* Instant Explainability - Moved up for immediate proof */}
            <section className="py-16 md:py-32 px-4 md:px-8 bg-gradient-to-b from-black via-blue-900/5 to-black">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16"
                    >
                        <Badge icon={<CheckCircle className="w-4 h-4" />} className="mb-6">
                            Instant Explainability
                        </Badge>
                        <h2 className="text-5xl font-bold mb-6 brand-heading">
                            "Why was this blocked?"
                            <span className="text-white block">Answered in 30 Seconds.</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-red-900/10 border border-red-500/30 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <span className="text-red-400 font-semibold">Blocked Request</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-2 font-mono">2025-02-07 11:23:14 UTC</p>
                            <p className="text-gray-300 mb-2"><strong>Team:</strong> Marketing</p>
                            <p className="text-gray-300 mb-2"><strong>Model:</strong> GPT-4</p>
                            <p className="text-gray-300"><strong>Data Type:</strong> Customer PII</p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h4 className="text-lg font-bold mb-4 text-white">Audit Narrative</h4>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                "This request was <strong className="text-red-400">blocked</strong> because customer PII was detected and the model used is not approved under <strong className="text-purple-400">Policy P-102 (GDPR Data Handling)</strong>."
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-xs text-gray-500 mb-1"><strong>Regulation:</strong> GDPR Article 25</p>
                                <p className="text-xs text-gray-500"><strong>Risk Level:</strong> <span className="text-red-400">High</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Use Cases */}
            <section className="py-16 md:py-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="text-center mb-16"
                    >
                        <Badge icon={<Zap className="w-4 h-4" />} className="mb-6">
                            Top Use Cases
                        </Badge>
                        <h2 className="text-5xl font-bold mb-6 brand-heading">
                            Built for Real-World
                            <span className="text-white block">Governance Challenges</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
                        >
                            <AlertTriangle className="w-10 h-10 text-red-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 brand-heading">Prevent PII Exfiltration</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Block sensitive customer data from reaching external LLMs. Detect names, addresses, and financials in real-time.
                            </p>
                            <div className="flex items-center gap-2 text-emerald-400 font-medium">
                                <TrendingDown className="w-5 h-5" />
                                <span>Target: 95% reduction in data leaks</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
                        >
                            <Globe className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 brand-heading">Enforce Data Residency</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Ensure EU data stays in EU, US data in US. Route requests automatically to stay compliant with local laws.
                            </p>
                            <div className="flex items-center gap-2 text-emerald-400 font-medium">
                                <CheckCircle className="w-5 h-5" />
                                <span>Ensuring 100% territorial compliance</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
                        >
                            <Eye className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 brand-heading">Detect Shadow AI</h3>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Discover unauthorized use of ChatGPT or Copilot across your network within 24 hours.
                            </p>
                            <div className="mb-6 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                                <p className="text-[10px] uppercase tracking-wider text-purple-400 font-bold mb-1">Jargon Buster</p>
                                <p className="text-xs text-gray-300">Shadow AI = Employees using unapproved AI tools with sensitive company data.</p>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400 font-medium">
                                <Clock className="w-5 h-5" />
                                <span>Full visibility in &lt;24 hours</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
                        >
                            <Download className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-3 brand-heading">Generate Audit Reports</h3>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Export compliance-ready reports for regulators. Includes human-readable explanations of every AI block.
                            </p>
                            <div className="mb-6 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-1">Jargon Buster</p>
                                <p className="text-xs text-gray-300">Gateway Enforcement = Automated policy checks that scan data BEFORE it leaves your network.</p>
                            </div>
                            <div className="flex items-center gap-2 text-emerald-400 font-medium">
                                <TrendingDown className="w-5 h-5" />
                                <span>Cut manual review time by 80%</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Governance Intelligence - CardSwap Integration */}
            <section className="py-16 md:py-32 px-4 md:px-8 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge icon={<Sparkles className="w-4 h-4 text-purple-400" />} className="mb-6">
                                The SURO Advantage
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white brand-heading leading-tight">
                                Static Policy is <span className="text-red-400">Dead</span>.
                            </h2>
                            <p className="text-gray-400 text-xl mb-10 leading-relaxed max-w-xl">
                                Traditional PDF-based policies fail the moment they're signed. SURO transforms your governance into a <span className="text-white font-medium">living, enforceable system</span> that adapts in real-time.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <ShieldCheck className="w-5 h-5 text-blue-400" />, title: "Deterministic Enforcement", desc: "Policies are executed as code, not suggestions." },
                                    { icon: <Activity className="w-5 h-5 text-green-400" />, title: "Continuous Oversight", desc: "Every AI request is audited in under 200ms." },
                                    { icon: <FileSearch className="w-5 h-5 text-purple-400" />, title: "Regulator Friendly", desc: "Human-readable narratives for complex AI decisions." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[380px] sm:h-[500px] md:h-[600px] flex items-center justify-center lg:justify-end">
                            <CardSwap
                                width={isMobile ? 300 : 420}
                                height={isMobile ? 240 : 320}
                                cardDistance={isMobile ? 20 : 30}
                                verticalDistance={isMobile ? 40 : 60}
                                delay={4000}
                                pauseOnHover={true}
                                skewAmount={2}
                                easing="smooth"
                            >
                                <Card>
                                    <div className="flex gap-4 items-center mb-6">
                                        <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                                            <AlertTriangle className="w-6 h-6 text-red-400" />
                                        </div>
                                        <h3 className="m-0 text-xl font-bold text-white font-playfair">Shadow AI Detection</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        Proactively identify unauthorized AI usage outside approved workflows. Analyze network patterns and API activity to surface unapproved AI tools before data leaks occur.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
                                        <span>Status: Monitoring</span>
                                        <span className="text-red-400">High Risk</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="flex gap-4 items-center mb-6">
                                        <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h3 className="m-0 text-xl font-bold text-white font-playfair">Governance Gateway</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        The central enforcement layer for all AI requests. Identify sensitive data (PII), verify model approvals, and validate against enterprise policies in real-time.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
                                        <span>Latency: &lt;180ms</span>
                                        <span className="text-blue-400">Armed</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="flex gap-4 items-center mb-6">
                                        <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                                            <FileSearch className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <h3 className="m-0 text-xl font-bold text-white font-playfair">Audit Narratives</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        Explain why a request was blocked or flagged in human-readable language. Map decisions to GDPR, HIPAA, and industry-specific regulatory frameworks.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
                                        <span>Context: Explainable</span>
                                        <span className="text-purple-400">Audit Ready</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="flex gap-4 items-center mb-6">
                                        <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                                            <Zap className="w-6 h-6 text-green-400" />
                                        </div>
                                        <h3 className="m-0 text-xl font-bold text-white font-playfair">Living Policies</h3>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        Static PDFs → Dynamic Code. Convert complex compliance requirements into deterministic executable rules that scale with your innovation speed.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
                                        <span>Type: Deterministic</span>
                                        <span className="text-green-400">Active</span>
                                    </div>
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll Based Velocity Section — High-Speed Governance Trace */}
            <ScrollVelocityContainer className="bg-black/40 border-y border-white/5">
                <ScrollVelocityRow baseVelocity={2} direction={1} className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-white block font-playfair font-medium">
                    GDPR EU_AI_ACT NIST_RMF HIPAA SOC2 ISO27001 PCI_DSS
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={2} direction={-1} className="text-blue-300/40 mt-4 block font-playfair font-medium">
                    DETERMINISTIC IMMUTABLE REAL_TIME ENFORCEMENT INFINITE_TRACEABILITY ZERO_TRUST
                </ScrollVelocityRow>
            </ScrollVelocityContainer>

            {/* Core Capabilities */}
            <section className="py-16 md:py-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-20"
                    >
                        <Badge icon={<Shield className="w-4 h-4" />} className="mb-6">
                            Core Capabilities
                        </Badge>
                        <h2 className="text-5xl font-bold mb-6 brand-heading">
                            Your AI Governance{" "}
                            <span className="text-white">Control Plane</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<MonitorPulseIcon className="w-8 h-8 text-white" />}
                            title="Real-Time Monitoring"
                            subtitle="Continuous AI Oversight"
                            description="Track every AI interaction across your organization."
                        />
                        <ServiceCard
                            icon={<ShieldStreamIcon className="w-8 h-8 text-white" />}
                            title="Policy Engine"
                            subtitle="Deterministic Rules"
                            description="Convert organizational policies into real-time rules."
                        />
                        <ServiceCard
                            icon={<TeamShieldIcon className="w-8 h-8 text-white" />}
                            title="Human-in-the-Loop"
                            subtitle="Expert Oversight"
                            description="Intelligent escalation for high-risk decisions."
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════ ROI RISK SECTION ═══════════════ */}
            <section className="py-16 md:py-32 px-4 md:px-8 border-t border-white/5 bg-zinc-950/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="md:w-2/3">
                        <Badge icon={<PieChart className="w-3 h-3" />} className="mb-6">
                            Risk Assessment
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-light brand-heading mb-6">
                            Calculate Your <span className="italic font-playfair text-white/30">AI Liability</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl font-light leading-relaxed">
                            Unmanaged AI usage creates hidden financial exposure. Use our quantitative Risk Calculator to identify potential leak liabilities and compliance gaps within minutes.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex flex-col items-center gap-4">
                        <button
                            onClick={() => navigate("/calculator")}
                            className="w-full bg-white text-black py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            Open Risk Calculator <ArrowRight className="w-4 h-4" />
                        </button>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">No Registration Required</span>
                    </div>
                </div>
            </section>

            {/* CTA Section — Governance Convergence Point */}
            <section className="py-20 md:py-40 px-4 md:px-8 border-t border-white/5 relative overflow-hidden" id="contact">
                {/* Governance grid echo from hero */}
                <div className="absolute inset-0 z-0 opacity-[0.015]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600/8 blur-[120px] rounded-full z-0" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Badge className="mb-8">
                        Ready to Deploy?
                    </Badge>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-8 text-white brand-heading leading-tight">
                        See SURO in Action
                    </h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience how <span className="text-white font-semibold">real-time governance</span> transforms AI adoption from risky to trustworthy.
                    </p>
                    <div className="flex flex-col items-center gap-4 w-full">
                        <Link
                            to="/contact"
                            className="group bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-medium hover:bg-cyan-400 hover:text-black active:scale-95 transition-all flex items-center gap-2 shadow-2xl hover:shadow-cyan-500/20 w-full max-w-xs md:w-auto justify-center"
                        >
                            Book Enterprise Demo <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <span className="font-mono text-[9px] text-gray-600 tracking-[0.3em] uppercase mt-2">
                            ALL GOVERNANCE PATHS CONVERGE HERE
                        </span>
                    </div>
                </div>
            </section>

            <MobileCTABar />
            <SoundToggle />
            <Footer />
        </div >
    );
}



