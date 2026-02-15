import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/effects/Navbar";
import { Footer } from "@/components/effects/Footer";
import { Badge } from "@/components/effects/Badge";
import { ServiceCard } from "@/components/effects/ServiceCard";
import { FlipWords } from "@/components/effects/FlipWords";
import { ProductVideoSection } from "@/components/effects/ProductVideoSection";
import Aurora from "@/components/effects/Aurora";
import { Activity, Shield, Users, Sparkles, Eye, CheckCircle, AlertTriangle, Code, Clock, Globe, Download, TrendingDown, Zap, ArrowRight, ShieldCheck, FileSearch } from "lucide-react";
import CardSwap, { Card } from "@/components/effects/CardSwap";
import { AuditTrailSection } from "@/components/effects/AuditTrailSection";
import { ComparisonLens } from "@/components/effects/ComparisonLens";
import { ProcessJourney } from "@/components/effects/ProcessJourney";
import { ActiveGrid } from "@/components/effects/ActiveGrid";
import { TextDecrypt } from "@/components/effects/TextDecrypt";
import { KineticEnforcement } from "@/components/effects/KineticEnforcement";
import { LandingIntroGate } from "@/components/effects/LandingIntroGate";
import { HeroHeadline } from "@/components/effects/HeroHeadline";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const navigate = useNavigate();

    // Parallax effect for hero background
    React.useEffect(() => {
        const parallaxBg = document.querySelector('.hero-parallax-bg');
        if (!parallaxBg) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            (parallaxBg as HTMLElement).style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-black text-white font-[Inter,sans-serif] z-[1]">
            <LandingIntroGate />
            <Navbar />

            {/* Hero Section - Crystalline Governance */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Crystalline Background with Parallax */}
                <div
                    className="hero-parallax-bg absolute inset-0 z-0"
                    style={{ willChange: 'transform' }}
                >
                    <img
                        src="/images/hero-crystalline-governance.jpg"
                        alt="AEGIS Governance Core"
                        className="w-full h-full object-cover object-center scale-110"
                    />
                    {/* Overlay gradients for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                    {/* Subtle blue glow overlay to enhance the crystalline effect */}
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 py-40 w-full">
                    <div className="max-w-3xl">
                        {/* Badge with Glassmorphism */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/5 backdrop-blur-md border border-cyan-400/20 shadow-lg shadow-cyan-500/10">
                            <ShieldCheck className="w-4 h-4 text-cyan-400" />
                            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-cyan-300">
                                GOVERNANCE NEXUS // ACTIVE
                            </span>
                        </div>

                        {/* System Status */}
                        <span className="text-cyan-400/70 font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block">
                            CORE_PROTOCOL://CRYSTALLINE_ENFORCEMENT
                        </span>

                        {/* Main Headline with Letter Stagger */}
                        <h1 className="hero-headline text-6xl md:text-8xl font-black mb-12 leading-[1.1] tracking-tight overflow-visible">
                            <span className="block text-white font-playfair italic pr-8 pb-1 overflow-visible">Command Your</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 font-playfair italic pr-10 pb-4 overflow-visible">
                                AI Destiny
                            </span>
                        </h1>

                        {/* Subheadline with Better Contrast & Split Sentences */}
                        <div className="mb-10 max-w-2xl space-y-4">
                            <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed">
                                AEGIS transforms governance from static policy into a <span className="text-cyan-400 font-semibold">living enforcement architecture</span>.
                            </p>
                            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                                Crystalline precision. Deterministic control. Zero compromise.
                            </p>
                        </div>

                        {/* Technical Specs Bar with Enhanced Glow */}
                        <div className="flex items-center gap-6 mb-12 font-mono text-[10px] tracking-[0.3em] uppercase text-gray-500 flex-wrap">
                            <span className="flex items-center gap-2">
                                <span className="relative">
                                    <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                    <span className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500 blur-sm animate-pulse" />
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 block" />
                                </span>
                                LATENCY: 178ms
                            </span>
                            <span className="w-px h-4 bg-white/10" />
                            <span>ENFORCEMENT: REAL-TIME</span>
                            <span className="w-px h-4 bg-white/10" />
                            <span className="text-cyan-500/70">CORE: ARMED</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-8 flex-wrap">
                            <MagneticButton
                                onClick={() => navigate("/dashboard")}
                                strength={0.4}
                                className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-cyan-500/40 active:scale-95 animate-glow"
                            >
                                <span className="relative z-10">Access Governance Core</span>
                                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                            </MagneticButton>
                            <a
                                href="https://calendly.com/aegis-founders"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 backdrop-blur-md border border-cyan-400/30 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all font-mono hover:scale-[1.02] active:scale-95"
                            >
                                Request Integration
                            </a>
                        </div>

                        {/* Bottom Status Line */}
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <p className="font-mono text-[9px] text-gray-600 tracking-[0.3em] uppercase">
                                CRYSTALLINE ARCHITECTURE // ZERO CODE CHANGES // INSTITUTIONAL GRADE
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Video Section - Now an extension of the Hero */}
            <ProductVideoSection />

            {/* Kinetic Enforcement Loop — Capability Breadth */}
            <KineticEnforcement />

            {/* Scrollytelling Audit Trail */}
            < AuditTrailSection />

            {/* Interactive Governance Proof */}
            < ComparisonLens />

            {/* Visual Process Journey (Image-Based) */}
            < ProcessJourney />

            {/* Instant Explainability - Moved up for immediate proof */}

            {/* Instant Explainability - Moved up for immediate proof */}
            <section className="py-32 px-8 bg-gradient-to-b from-black via-blue-900/5 to-black">
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
            <section className="py-32 px-8">
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
            <section className="py-32 px-8 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge icon={<Sparkles className="w-4 h-4 text-purple-400" />} className="mb-6">
                                The AEGIS Advantage
                            </Badge>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white brand-heading leading-tight">
                                Static Policy is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-500">Dead</span>.
                            </h2>
                            <p className="text-gray-400 text-xl mb-10 leading-relaxed max-w-xl">
                                Traditional PDF-based policies fail the moment they're signed. AEGIS transforms your governance into a <span className="text-white font-medium">living, enforceable system</span> that adapts in real-time.
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

                        <div className="relative h-[600px] flex items-center justify-center lg:justify-end">
                            <CardSwap
                                width={420}
                                height={320}
                                cardDistance={30}
                                verticalDistance={60}
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

            {/* Core Capabilities */}
            <section className="py-32 px-8">
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
                            icon={<Activity className="w-6 h-6 text-white" />}
                            title="Real-Time Monitoring"
                            subtitle="Continuous AI Oversight"
                            description="Track every AI interaction across your organization."
                        />
                        <ServiceCard
                            icon={<Shield className="w-6 h-6 text-white" />}
                            title="Policy Engine"
                            subtitle="Deterministic Rules"
                            description="Convert organizational policies into real-time rules."
                        />
                        <ServiceCard
                            icon={<Users className="w-6 h-6 text-white" />}
                            title="Human-in-the-Loop"
                            subtitle="Expert Oversight"
                            description="Intelligent escalation for high-risk decisions."
                        />
                    </div>
                </div>
            </section>


            {/* CTA Section — Governance Convergence Point */}
            <section className="py-40 px-8 border-t border-white/5 relative overflow-hidden" id="contact">
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
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white brand-heading leading-tight">
                        See AEGIS in Action
                    </h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience how <span className="text-white font-semibold">real-time governance</span> transforms AI adoption from risky to trustworthy.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            to="/dashboard"
                            className="group bg-gradient-to-r from-purple-600 via-blue-600 to-blue-500 text-white px-10 py-5 rounded-full text-xl font-medium hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 transition-all flex items-center gap-2"
                        >
                            Explore Dashboard <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <span className="font-mono text-[9px] text-gray-600 tracking-[0.3em] uppercase mt-2">
                            ALL GOVERNANCE PATHS CONVERGE HERE
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}


