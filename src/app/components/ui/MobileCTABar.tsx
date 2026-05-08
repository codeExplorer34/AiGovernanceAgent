import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * MobileCTABar — A sticky bottom bar that appears on mobile after the user
 * scrolls past the hero section (500px). Hidden on desktop (md:hidden).
 */
export function MobileCTABar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
                >
                    {/* Gradient fade above the bar */}
                    <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                    <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center gap-3">
                        <Link
                            to="/contact"
                            className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 active:scale-[0.98] text-white py-3.5 rounded-xl text-sm font-semibold transition-all"
                        >
                            Book Enterprise Demo <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/dashboard"
                            className="px-4 py-3.5 rounded-xl border border-white/15 text-white/70 text-sm font-medium active:bg-white/10 transition-all whitespace-nowrap"
                        >
                            Dashboard
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
