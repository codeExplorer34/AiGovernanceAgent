"use client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollState } from "../ui/SmoothScrollProvider";
import { useSound } from "../ui/SoundProvider";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/sandbox", label: "Sandbox" },
    { to: "/calculator", label: "Calculator" },
    { to: "/dashboard", label: "Dashboard" },
];

export function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { y, direction } = useScrollState();
    const location = useLocation();

    // Hide/show on scroll
    useEffect(() => {
        if (y < 50) { setIsVisible(true); return; }
        if (direction === "up") setIsVisible(true);
        else if (direction === "down") setIsVisible(false);
    }, [y, direction]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const { playSound } = useSound();

    return (
        <>
            <nav
                onMouseEnter={() => playSound("hover")}
                className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-500 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        SURO
                    </Link>

                    {/* Right Side: Desktop Links + CTA */}
                    <div className="flex items-center gap-6 md:gap-10">
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button — desktop only */}
                        <Link
                            to="/dashboard"
                            className="hidden md:block bg-purple-600/90 hover:bg-purple-500/90 text-white px-7 py-2.5 rounded-lg text-xs font-medium transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_12px_rgba(139,92,246,0.3)] hover:scale-[1.02] border-t border-white/10"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Get Started
                        </Link>

                        {/* Mobile Hamburger Button */}
                        <button
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors active:scale-95"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 top-20 bg-black/97 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-0 md:hidden"
                    >
                        {/* Nav Links */}
                        <nav className="flex flex-col items-center w-full px-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="w-full"
                                >
                                    <Link
                                        to={link.to}
                                        className="block text-center text-3xl font-light text-white/70 hover:text-white active:text-cyan-400 transition-colors py-5 border-b border-white/5 w-full"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.06 }}
                            className="mt-10 px-8 w-full"
                        >
                            <Link
                                to="/dashboard"
                                className="block text-center bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white w-full py-4 rounded-2xl text-base font-semibold transition-all"
                            >
                                Get Started →
                            </Link>
                            <Link
                                to="/contact"
                                className="block text-center text-white/40 w-full py-4 text-sm mt-2"
                            >
                                Book Enterprise Demo
                            </Link>
                        </motion.div>

                        {/* Footer info */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-10 font-mono text-[9px] text-gray-600 uppercase tracking-widest"
                        >
                            SURO AI Governance — 2026
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
