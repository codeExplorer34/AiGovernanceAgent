import React from "react";
import { Link } from "react-router-dom";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";
import { FooterTicker } from "./FooterTicker";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-bold text-lg">AEGIS</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            AI Governance Agent for Safe, Compliant AI Adoption
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 brand-heading">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 brand-heading">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:support@aegis.ai" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="mailto:founders@aegis.ai" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact Founders
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe Form */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 brand-heading">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Get the latest on AI governance, regulatory shifts, and risk mitigation strategies.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-600"
                            />
                            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
                    <p className="text-gray-400 text-sm">
                        © 2025 AEGIS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>

                {/* Mission Control Live Ledger */}
                <div className="bg-black border border-white/10 rounded-lg p-3 flex items-center gap-4 group shadow-[inset_0_1px_10px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                        <span className="text-[9px] font-bold font-mono text-red-500 uppercase tracking-widest">Live_Enforcement</span>
                    </div>

                    <FooterTicker />

                    <div className="hidden lg:block text-[9px] font-mono text-gray-700 uppercase tracking-widest">
                        System_Status: Sovereign_Active
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Add marquee style to tailwind if needed or handle via CSS
