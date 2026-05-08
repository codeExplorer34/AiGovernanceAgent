import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SpeederLoader.css";

export const SpeederLoader: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Varying step for more "organic" feel
                const step = Math.random() * 8 + 2;
                return Math.min(prev + step, 100);
            });
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
                {/* Provided HTML Structure */}
                <div className="loader">
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className="base">
                        <span></span>
                        <div className="face"></div>
                    </div>
                </div>

                <div className="longfazers">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Technical Counter HUD */}
                <div className="absolute bottom-12 right-12 text-right">
                    <div className="flex items-center gap-4 justify-end">
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/60 font-bold mb-1">
                            Synchronizing Agent Intent
                        </div>
                    </div>
                    <div className="flex items-end justify-end gap-1">
                        <span className="font-mono text-6xl font-black text-white leading-none tracking-tighter">
                            {Math.floor(progress)}
                        </span>
                        <span className="font-mono text-xl font-bold text-cyan-400 pb-1">%</span>
                    </div>
                    <div className="w-64 h-[2px] bg-white/10 mt-4 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-cyan-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                </div>

                {/* Status Items on the left */}
                <div className="absolute top-12 left-12 space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">Calibration Protocol: Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${progress > 40 ? 'bg-cyan-400' : 'bg-white/10'}`} />
                        <span className={`font-mono text-[8px] uppercase tracking-widest ${progress > 40 ? 'text-white/80' : 'text-white/20'}`}>Neural Links: Established</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full ${progress > 80 ? 'bg-cyan-400' : 'bg-white/10'}`} />
                        <span className={`font-mono text-[8px] uppercase tracking-widest ${progress > 80 ? 'text-white/80' : 'text-white/20'}`}>SURO Gate: Ready</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

