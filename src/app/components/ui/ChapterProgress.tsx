import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Chapter {
    id: string;
    title: string;
    color: string;
}

const chapters: Chapter[] = [
    { id: "hero", title: "The Problem", color: "#ef4444" },
    { id: "solution", title: "The Solution", color: "#22d3ee" },
    { id: "proof", title: "The Proof", color: "#10b981" },
    { id: "call", title: "Take Action", color: "#ffffff" }
];

export function ChapterProgress() {
    const [activeChapter, setActiveChapter] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate which chapter based on scroll position
            const progress = scrollPosition / documentHeight;
            const chapterIndex = Math.min(
                Math.floor(progress * chapters.length),
                chapters.length - 1
            );

            setActiveChapter(chapterIndex);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div className="flex flex-col gap-8">
                {chapters.map((chapter, index) => (
                    <div key={chapter.id} className="relative flex items-center gap-4">
                        {/* Chapter indicator */}
                        <motion.div
                            className="w-2 h-2 rounded-full border transition-all"
                            style={{
                                borderColor: activeChapter >= index ? chapter.color : "rgba(255,255,255,0.2)",
                                backgroundColor: activeChapter === index ? chapter.color : "transparent"
                            }}
                            animate={{
                                scale: activeChapter === index ? 1.5 : 1
                            }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Chapter label (appears on hover) */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            className="absolute right-6 bg-black/90 backdrop-blur-xl border border-white/10 px-3 py-1 rounded-full pointer-events-none whitespace-nowrap"
                        >
                            <span
                                className="text-[10px] font-mono uppercase tracking-wider"
                                style={{ color: chapter.color }}
                            >
                                {chapter.title}
                            </span>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

