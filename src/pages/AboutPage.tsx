import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/effects/Navbar";
import { Footer } from "@/components/effects/Footer";
import { Badge } from "@/components/effects/Badge";
import { Shield, Target, Eye, Users, BookOpen, Lock, ArrowRight, Download, AlertCircle, CheckCircle, Clock, TrendingUp, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { TextAnimate } from "@/components/effects/TextAnimate";
import { EncryptedText } from "@/components/effects/encrypted-text";
import { LogoLoop } from "@/components/effects/LogoLoop";

export function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero Section - Tightened Hierarchy */}
            <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.15),transparent_60%)] z-0" />

                <div className="relative z-10 max-w-4xl mx-auto px-8 text-center pt-20">
                    <Badge icon={<Shield className="w-4 h-4" />} className="mb-10 hero-meta bg-purple-500/5 border-purple-500/20">
                        <span className="font-mono text-[10px] tracking-widest uppercase">COORD_SYS://JOURNEY_LOG_2025</span>
                    </Badge>

                    <h1 className="hero-title mb-6 max-w-3xl mx-auto brand-heading leading-tight">
                        <TextAnimate animation="radarScan" as="span">Pioneering AI Governance</TextAnimate>
                        <TextAnimate animation="radarScan" duration={0.8} delay={0.2} as="span" className="hero-sub block mt-2 text-3xl opacity-80">
                            with Precision Transparency.
                        </TextAnimate>
                    </h1>

                    <p className="hero-body mx-auto mb-10 max-w-2xl">
                        AEGIS is your trusted agent for AI governance strategy. We specialize in transforming static policies into enforceable, real-time systems for regulated industries.
                    </p>

                    {/* CTAs */}
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <Link
                            to="/dashboard"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all inline-flex items-center gap-2"
                        >
                            Explore Dashboard <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="#"
                            className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all inline-flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" /> Download Governance Brief
                        </a>
                    </div>
                </div>
            </section>

            {/* The Problem Section - Increased Spacing */}
            <section className="py-40 px-8 bg-gradient-to-b from-black to-gray-900/20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <Badge icon={<AlertCircle className="w-4 h-4" />} className="mb-6">
                            The Problem
                        </Badge>
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" as="span" by="word">The AI Oversight</TextAnimate>
                            {" "}
                            <TextAnimate
                                animation="blurInUp"
                                as="span"
                                by="word"
                                className="text-white"
                            >
                                Gap
                            </TextAnimate>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 hover:border-purple-500/30 transition-all shadow-[inset_0_1px_10px_rgba(0,0,0,0.5)] border-t-white/10"
                        >
                            <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-white/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 brand-heading">
                                Lack of Visibility
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                No centralized view of how AI is being used across the organization. <span className="text-gray-200 font-semibold">Shadow AI runs unchecked</span>, exposing enterprises to unknown risks.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-6">
                                <Lock className="w-7 h-7 text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 brand-heading">
                                <Lock className="w-5 h-5 text-orange-400" /> Lack of Control
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Policies exist but are not enforceable in real-time. By the time violations are discovered, <span className="text-gray-200 font-semibold">data has already been exposed</span>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="w-14 h-14 rounded-xl bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center mb-6">
                                <BookOpen className="w-7 h-7 text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 brand-heading">
                                <BookOpen className="w-5 h-5 text-yellow-400" /> Lack of Explainability
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Technical logs are not regulator-friendly. When auditors ask "why?", teams <span className="text-gray-200 font-semibold">scramble to piece together explanations</span>.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What AEGIS Does - Card-Based Layout */}
            <section className="py-40 px-8 bg-gradient-to-b from-gray-900/20 via-purple-900/5 to-black">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8"
                    >
                        <Badge icon={<Shield className="w-4 h-4" />} className="mb-6">
                            Our Solution
                        </Badge>
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" by="word">What AEGIS Does</TextAnimate>
                        </h2>
                        <p className="text-lg text-purple-300 font-medium max-w-2xl mx-auto mb-16">
                            We transform AI governance from reactive compliance to <span className="text-purple-400 font-semibold">proactive risk prevention</span>.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 brand-heading">AI Governance Gateway</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Central enforcement layer through which all AI requests flow. Every interaction is evaluated against policy rules before data leaves your organization. <span className="text-gray-200 font-semibold">Real-time blocking of violations</span>, not after-the-fact discovery.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 brand-heading">Shadow AI Detection</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Proactively identifies unauthorized AI usage by analyzing network and API activity. Surface unapproved AI tools early and bring them under governance <span className="text-gray-200 font-semibold">before incidents occur</span>.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 brand-heading">Audit-Ready Narratives</h3>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-gray-200 font-semibold">Human-readable explanations</span> for every decision. When regulators ask "why was this blocked?", AEGIS provides clear, factual answers referencing specific policies and regulations—in under 30 seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How AEGIS Works - Detailed Flow */}
            <section className="relative py-40 px-8 bg-black overflow-hidden mt-32">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05),transparent_70%)] z-0" />

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <Badge icon={<Target className="w-4 h-4" />} className="mb-6">
                            How It Works
                        </Badge>
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" as="span" by="word">AI Governance in</TextAnimate>
                            {" "}
                            <TextAnimate
                                animation="blurInUp"
                                as="span"
                                by="word"
                                className="text-white"
                            >
                                Three Steps
                            </TextAnimate>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Every AI request flows through AEGIS before reaching external models. Here's how we transform governance from reactive to proactive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                                1
                            </div>
                            <h3 className="text-2xl font-bold mb-4 brand-heading">Intercept & Analyze</h3>
                            <p className="text-gray-400 leading-relaxed">
                                AEGIS sits between your users and AI models. Every request is intercepted and evaluated against your governance policies in real-time.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                                2
                            </div>
                            <h3 className="text-2xl font-bold mb-4 brand-heading">Enforce & Modify</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Violations are blocked instantly. Approved requests may be modified (PII removed, prompts sanitized) before reaching the AI model.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-purple-600 flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                                3
                            </div>
                            <h3 className="text-2xl font-bold mb-4 brand-heading">Log & Explain</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Every decision is logged with human-readable explanations. When auditors ask "why?", you have instant, factual answers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="py-40 px-8 bg-gradient-to-b from-black via-blue-900/5 to-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <Badge icon={<Clock className="w-4 h-4" />} className="mb-6">
                            Our Journey
                        </Badge>
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" as="span" by="word">Building the Future of</TextAnimate>
                            {" "}
                            <TextAnimate
                                animation="blurInUp"
                                as="span"
                                by="word"
                                className="text-white"
                            >
                                AI Governance
                            </TextAnimate>
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {/* 2023 */}
                        <div className="flex items-center gap-8">
                            <div className="w-32 flex-shrink-0 text-right">
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">2023</div>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-colors">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 brand-heading">
                                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                                    Founded by AI Governance Experts
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Recognized the critical need for real-time AI governance as enterprises rapidly adopted generative AI without proper controls.
                                </p>
                            </div>
                        </div>

                        {/* 2024 */}
                        <div className="flex items-center gap-8">
                            <div className="w-32 flex-shrink-0 text-right">
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">2024</div>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-emerald-500"></div>
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 brand-heading">
                                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                                    Enterprise Deployment
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Deployed at regulated organizations across banking, healthcare, and government sectors, governing millions of AI interactions safely.
                                </p>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div className="flex items-center gap-8">
                            <div className="w-32 flex-shrink-0 text-right">
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400">2025</div>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-emerald-500 to-purple-500"></div>
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 brand-heading">
                                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                                    Scaled to 15M+ Requests
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Processing millions of governance decisions monthly with 98.7% compliance scores and &lt;30-second regulator answer times.
                                </p>
                            </div>
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
                                AEGIS leverages cutting-edge AI, robust backend frameworks, and secure data layers to ensure your governance is unbreakable.
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

                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center mb-12">
                        AEGIS believes that AI governance should <span className="text-white font-semibold">empower humans, not replace them</span>. Our platform provides intelligent escalation for high-risk decisions while automating routine compliance checks.
                    </p>

                    {/* Compact Stat Band */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-2xl mx-auto">
                        <div className="text-center flex-1">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">100%</div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Decisions Explainable</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10"></div>
                        <div className="text-center flex-1">
                            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">&lt;30s</div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider">Regulator Answer Time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2024 Global AI Governance Impact Section */}
            <section className="py-40 px-8 bg-gradient-to-b from-black via-purple-950/10 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <Badge icon={<TrendingUp className="w-4 h-4" />} className="mb-6">
                            Scaling Global Confidence
                        </Badge>
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" as="span" by="word">The ROI of</TextAnimate>
                            {" "}
                            <TextAnimate
                                animation="blurInUp"
                                as="span"
                                by="word"
                                className="text-white"
                            >
                                Governance
                            </TextAnimate>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            By 2025, 90% of enterprises will have formal AI governance. AEGIS ensures your organization is in the top 10% of leaders, not the 90% of stragglers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { value: "90%", label: "Enterprise Adoption", source: "McKinsey 2024", desc: "Predicted AI governance adoption by 2025." },
                            { value: "65%", label: "Compliance Gap", source: "IAPP", desc: "Organizations currently lack real-time AI visibility." },
                            { value: "60%", label: "Higher Revenue", source: "BCG", desc: "Outperformance by AI leaders in regulated sectors." },
                            { value: "20bps", label: "Margin Growth", source: "Accenture", desc: "Efficiency gain from automated AI audits." }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-all group">
                                <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    <EncryptedText text={stat.value} duration={1500} />
                                </div>
                                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">{stat.label}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed mb-6">{stat.desc}</p>
                                <div className="text-[10px] text-gray-500 font-mono uppercase">Source: {stat.source}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-purple-900/10 border border-purple-500/20 rounded-[40px] p-12 relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold mb-6 brand-heading">Aligned with Global Standards</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    AEGIS isn't just a tool; it's a bridge to international compliance. Our architecture map directly to the **EU AI Act (High-Risk Systems)** and the **NIST AI RMF**, ensuring your local innovation meets global scrutiny.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-gray-300">
                                        NIST AI RMF 1.0
                                    </div>
                                    <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-gray-300">
                                        EU AI ACT READY
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                    <h4 className="text-purple-400 font-bold mb-2">Audit Ready</h4>
                                    <p className="text-xs text-gray-500">Human-readable narratives for complex AI decision trails.</p>
                                </div>
                                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                    <h4 className="text-blue-400 font-bold mb-2">Zero Trust</h4>
                                    <p className="text-xs text-gray-500">Gateway enforcement that blocks PII before it leaves.</p>
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
                            (standard) => (
                                <div
                                    key={standard}
                                    className="bg-white/10 border border-purple-500/30 rounded-full px-6 py-3 text-center hover:bg-purple-500/20 hover:border-purple-400/50 transition-all cursor-default backdrop-blur-sm"
                                >
                                    <p className="font-semibold text-base">{standard}</p>
                                </div>
                            )
                        )}
                    </div>

                    <p className="text-center text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        Pre-configured policies mapped to major regulatory frameworks. Deploy governance controls that align with your compliance requirements from day one.
                    </p>
                </div>
            </section>



            {/* CTA Section - Stronger Design */}
            <section className="py-40 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/40 rounded-3xl p-16 text-center backdrop-blur-sm">
                        <h2 className="display-text text-5xl md:text-6xl mb-6 brand-heading">
                            <TextAnimate animation="blurInUp" as="span" by="word">See AEGIS in Action</TextAnimate>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Experience how <span className="text-white font-semibold">real-time governance</span> transforms AI adoption from risky to trustworthy.
                        </p>
                        <Link
                            to="/dashboard"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full text-xl font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                        >
                            Explore Dashboard <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}


