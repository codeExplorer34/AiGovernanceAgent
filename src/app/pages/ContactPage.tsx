import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import { Mail, Calendar, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";

export function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="relative pt-40 pb-32 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <DarkVeil hueShift={280} noiseIntensity={0.02} speed={0.3} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <Badge icon={<ShieldCheck className="w-3 h-3" />} className="mb-8">
                        Secure Channel
                    </Badge>
                    <h1 className="text-5xl md:text-8xl font-light brand-heading mb-8">
                        Initialize <span className="italic font-playfair text-white/30">Governance</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-16 font-playfair">
                        Connect with our founding team to discuss deploying SURO across your enterprise infrastructure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                        {/* Option 1: Sales Inquiry */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-3xl group hover:border-cyan-400/30 transition-all"
                        >
                            <Calendar className="w-10 h-10 text-cyan-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 brand-heading uppercase tracking-tighter">Book Enterprise Demo</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Schedule a technical deep-dive with our engineers into policy enforcement, behavioral scoring, and zero-latency interception.
                            </p>
                            <button
                                onClick={() => window.location.href = "mailto:suhaybshaik@outlook.com?subject=Demo Request"}
                                className="w-full bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                            >
                                Schedule Session <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>

                        {/* Option 2: Direct Contact */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-zinc-950 border border-white/5 p-10 rounded-[40px] backdrop-blur-3xl group hover:border-purple-500/30 transition-all"
                        >
                            <MessageSquare className="w-10 h-10 text-purple-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 brand-heading uppercase tracking-tighter">Talk to Founders</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Direct channel for strategic partnerships, regulatory discussions, or specific architectural requirements.
                            </p>
                            <button
                                onClick={() => window.location.href = "mailto:suhaybshaik@outlook.com?subject=Founder Inquiry"}
                                className="w-full bg-transparent border border-white/10 text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message <Mail className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>

                    <div className="mt-32 pt-12 border-t border-white/5">
                        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale items-center">
                            <span className="font-mono text-[9px] uppercase tracking-[0.5em]">ISO_27001_READY</span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.5em]">SOC2_COMPLIANT</span>
                            <span className="font-mono text-[9px] uppercase tracking-[0.5em]">GDPR_ENFORCED</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

