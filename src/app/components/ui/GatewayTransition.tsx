"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

interface GatewayTransitionProps {
    isActive: boolean;
    onComplete: () => void;
}

export const GatewayTransition: React.FC<GatewayTransitionProps> = ({ isActive, onComplete }) => {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onAnimationComplete={() => {
                        if (isActive) {
                            setTimeout(onComplete, 1500);
                        }
                    }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Encryption Pulse */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20"
                        />
                    </div>

                    <div className="relative text-center">
                        {/* The "Packet" Heartbeat */}
                        <motion.div
                            initial={{ scale: 0, rotate: 45 }}
                            animate={{ scale: 1, rotate: 405 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="w-24 h-24 border-2 border-emerald-500 relative mx-auto mb-12 flex items-center justify-center"
                        >
                            <Shield className="w-10 h-10 text-emerald-500" />

                            {/* Scanning rings */}
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-0 border border-emerald-500/50 rounded-full"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="space-y-4"
                        >
                            <h2 className="text-white font-mono text-xs tracking-[0.8em] font-bold uppercase">
                                INIT_HANDSHAKE_PROTOCOL
                            </h2>
                            <div className="flex items-center justify-center gap-2">
                                <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ left: "-100%" }}
                                        animate={{ left: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                                    />
                                </div>
                                <span className="text-[10px] font-mono text-emerald-500/80 uppercase">Securing...</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ delay: 1, duration: 0.5, repeat: 1 }}
                            className="mt-12 text-[9px] font-mono text-gray-700 tracking-widest uppercase"
                        >
                            ESTABLISHING_SOVEREIGN_CONTROL_PLANE
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

