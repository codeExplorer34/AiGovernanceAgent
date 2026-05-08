import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function AnimatedMetrics() {
    const metrics = [
        { value: "Millions", label: "Designed to govern AI requests securely", delay: 0 },
        { value: "98%+", label: "Target Policy Compliance", delay: 0.2 },
        { value: "<30s", label: "Regulator Answer Time, by design", delay: 0.4 },
    ];

    return (
        <section className="py-16 px-8 bg-gradient-to-b from-black via-purple-900/10 to-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: metric.delay }}
                            className="text-center group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 mb-3 drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all">
                                    {metric.value}
                                </div>
                                <p className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                                    {metric.label}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Subtle bottom accent */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-12 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                />
            </div>
        </section>
    );
}

