"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Cpu } from "lucide-react";

export const InstitutionalCounter: React.FC = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [statusIndex, setStatusIndex] = useState(0);

    const statuses = [
        "BOOTING_AEGIS_KERNEL_v2.1",
        "ESTABLISHING_TLS_HANDSHAKE",
        "DECRYPTING_POLICY_LEDGER",
        "SYNCING_CROSS_DOMAIN_NODES",
        "VERIFYING_GOVERNANCE_CLEARANCE",
        "READY_FOR_ENFORCEMENT"
    ];

    useEffect(() => {
        // Fast counter animation
        const counterInterval = setInterval(() => {
            setCount(prev => {
                if (prev >= 100) {
                    clearInterval(counterInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        // Status rotation
        const statusInterval = setInterval(() => {
            setStatusIndex(prev => (prev < statuses.length - 1 ? prev + 1 : prev));
        }, 400);

        // Dismiss after 3 seconds
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3200);

        return () => {
            clearInterval(counterInterval);
            clearInterval(statusInterval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Scanning Radial Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]"
                    />

                    <div className="relative flex flex-col items-center">
                        {/* Main Numeric Display */}
                        <div className="relative mb-24">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-[180px] md:text-[240px] font-bold text-white tracking-tighter leading-none"
                                style={{ fontFamily: "monospace" }}
                            >
                                {count.toString().padStart(3, '0')}
                            </motion.div>

                            {/* Scanning Line through the numbers */}
                            <motion.div
                                animate={{ top: ["-10%", "110%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[2px] bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10"
                            />
                        </div>

                        {/* Status Readout */}
                        <div className="w-80 space-y-4">
                            <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase font-bold flex items-center gap-2">
                                    <Cpu className="w-3 h-3" /> System_Status
                                </span>
                                <span className="text-[10px] font-mono text-gray-500">{count}%</span>
                            </div>

                            <div className="h-6 overflow-hidden relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={statusIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        className="text-[11px] font-mono text-white tracking-widest uppercase"
                                    >
                                        {statuses[statusIndex]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Progress Bar (Hardware Style) */}
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${count}%` }}
                                    className="h-full bg-gradient-to-r from-purple-500 to-emerald-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                />
                            </div>
                        </div>

                        {/* Branding Footer */}
                        <div className="absolute bottom-[-150px] flex flex-col items-center gap-4">
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center rotate-45 group">
                                <Shield className="w-5 h-5 text-gray-500 -rotate-45" />
                            </div>
                            <span className="text-[9px] font-mono text-gray-600 tracking-[0.5em] uppercase">
                                AEGIS_SECURITY_CLEARANCE_REQUIRED
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
