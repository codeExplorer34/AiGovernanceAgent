"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useScrollState } from "./SmoothScrollProvider";

export function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const { y, direction } = useScrollState();

    useEffect(() => {
        if (y < 50) {
            setIsVisible(true);
            return;
        }

        if (direction === "up") {
            setIsVisible(true);
        } else if (direction === "down") {
            setIsVisible(false);
        }
    }, [y, direction]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-500 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
                    AEGIS
                </Link>

                {/* Right Side: Links + CTA */}
                <div className="flex items-center gap-10">
                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                            About
                        </Link>
                        <Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                            Dashboard
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/dashboard"
                        className="bg-purple-600/90 hover:bg-purple-500/90 text-white px-7 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_12px_rgba(139,92,246,0.3)] hover:scale-[1.02] border-t border-white/10"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
