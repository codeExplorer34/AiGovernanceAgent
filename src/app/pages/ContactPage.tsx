import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import { Mail, Linkedin, Github, ArrowRight, Code2, Lightbulb } from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";

export function ContactPage() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("suhaybshaik@outlook.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="relative pt-36 md:pt-48 pb-24 md:pb-40 px-4 md:px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <DarkVeil hueShift={280} noiseIntensity={0.02} speed={0.3} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge icon={<Lightbulb className="w-3 h-3" />} className="mb-8">
                            Open to Collaborate
                        </Badge>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light brand-heading mb-6 leading-tight">
                            Let's{" "}
                            <span className="italic font-playfair text-white/30">Build</span>
                            {" "}Together
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-4 font-playfair leading-relaxed">
                            I'm Suhayb — a builder focused on AI governance, safety, and
                            infrastructure. SURO is my exploration of what{" "}
                            <span className="text-white">responsible AI adoption</span> looks
                            like in practice.
                        </p>
                        <p className="text-base text-gray-500 font-light max-w-xl mx-auto mb-16 font-playfair leading-relaxed">
                            If you're working on something in this space, researching AI
                            governance, or just want to talk — reach out. I read every message.
                        </p>
                    </motion.div>

                    {/* Contact Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">

                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/in/suhayb-muzammil-shaik-13985231a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-3xl group hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all block"
                        >
                            <Linkedin className="w-8 h-8 text-cyan-400 mb-5" />
                            <h3 className="text-lg font-bold mb-2 brand-heading uppercase tracking-tighter">
                                LinkedIn
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                The best place to connect. See what I'm working on and building.
                            </p>
                            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                Connect <ArrowRight className="w-3 h-3" />
                            </span>
                        </motion.a>

                        {/* Email */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-zinc-950 border border-white/5 p-8 rounded-[32px] backdrop-blur-3xl group hover:border-purple-500/30 transition-all cursor-pointer"
                            onClick={copyEmail}
                        >
                            <Mail className="w-8 h-8 text-purple-400 mb-5" />
                            <h3 className="text-lg font-bold mb-2 brand-heading uppercase tracking-tighter">
                                Email
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Prefer email? Drop me a line directly. I respond within 24 hours.
                            </p>
                            <span className="text-purple-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                                {copied ? (
                                    <span className="text-emerald-400">Copied ✓</span>
                                ) : (
                                    <>suhaybshaik@outlook.com</>
                                )}
                            </span>
                        </motion.div>

                        {/* GitHub */}
                        <motion.a
                            href="https://github.com/codeExplorer34"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-3xl group hover:border-white/30 transition-all block"
                        >
                            <Code2 className="w-8 h-8 text-white/60 mb-5" />
                            <h3 className="text-lg font-bold mb-2 brand-heading uppercase tracking-tighter">
                                GitHub
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Explore the source code behind SURO and my other projects.
                            </p>
                            <span className="text-white/40 text-xs font-mono uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 group-hover:text-white/70 transition-all">
                                View Source <ArrowRight className="w-3 h-3" />
                            </span>
                        </motion.a>
                    </div>

                    {/* What I'm looking for */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20 pt-12 border-t border-white/5 max-w-2xl mx-auto text-left"
                    >
                        <p className="font-mono text-[9px] text-gray-600 uppercase tracking-[0.4em] mb-6 text-center">
                            What I'm interested in
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                "AI Safety & Governance roles",
                                "Full-stack engineering positions",
                                "Research collaborations",
                                "Open source contributions",
                                "Hackathons & competitions",
                                "Interesting problems to solve",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-gray-300"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
