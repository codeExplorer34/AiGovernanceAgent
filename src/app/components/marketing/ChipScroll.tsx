import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ChipScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [frameCount, setFrameCount] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Load all frames dynamically
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let index = 1; // EzGIF starts at 001, not 0
            let loadError = false;

            // Try loading frames until we hit 404
            while (!loadError && index <= 300) {
                try {
                    const img = new Image();
                    // Pad index to 3 digits: 001, 002, etc.
                    const paddedIndex = String(index).padStart(3, '0');
                    const imagePath = `/sequence/ezgif-62cbaf664bf84294-jpg/ezgif-frame-${paddedIndex}.jpg`;

                    await new Promise((resolve, reject) => {
                        img.onload = resolve;
                        img.onerror = reject;
                        img.src = imagePath;
                    });

                    loadedImages.push(img);
                    index++;
                } catch {
                    loadError = true;
                }
            }

            setImages(loadedImages);
            setFrameCount(loadedImages.length);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    // Render frame based on scroll position
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;


        const render = () => {
            const scrollProgress = scrollYProgress.get();
            const frameIndex = Math.min(
                Math.floor(scrollProgress * frameCount),
                frameCount - 1
            );

            const img = images[frameIndex];
            if (!img) return;

            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate scaling to fit image
            const scale = Math.min(
                canvas.width / img.width,
                canvas.height / img.height
            );

            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            // Clear and draw
            context.fillStyle = "#000000";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        const unsubscribe = scrollYProgress.on("change", render);
        render();

        // Handle resize
        const handleResize = () => render();
        window.addEventListener("resize", handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameCount, scrollYProgress]);

    // Text opacity based on scroll - More overlays for better storytelling
    const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const layer1Opacity = useTransform(scrollYProgress, [0.12, 0.2, 0.28], [0, 1, 0]);
    const layer2Opacity = useTransform(scrollYProgress, [0.3, 0.38, 0.46], [0, 1, 0]);
    const layer3Opacity = useTransform(scrollYProgress, [0.48, 0.56, 0.64], [0, 1, 0]);
    const layer4Opacity = useTransform(scrollYProgress, [0.66, 0.74, 0.82], [0, 1, 0]);
    const ctaOpacity = useTransform(scrollYProgress, [0.88, 0.95], [0, 1]);

    if (isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-black">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-gray-400 text-lg">Loading AEGIS Core...</p>
                    <p className="text-gray-500 text-sm mt-2">240 governance layers</p>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="relative bg-black"
            style={{ height: "500vh", touchAction: "pan-y" }}
        >
            {/* Sticky Canvas */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />

                {/* Gradient Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

                {/* Frame Counter - Debug */}
                <div className="absolute top-2 right-2 text-[9px] text-gray-700 font-mono pointer-events-none opacity-50">
                    {Math.floor(scrollYProgress.get() * frameCount)}/{frameCount}
                </div>

                {/* Text Overlays */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-8">
                    {/* Title - 0% */}
                    <motion.div
                        style={{ opacity: titleOpacity }}
                        className="absolute text-center"
                    >
                        <h1 className="text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}>
                            AEGIS
                        </h1>
                        <p className="text-3xl text-white/80 drop-shadow-lg" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                            Governance, Built Into the Core.
                        </p>
                    </motion.div>

                    {/* Layer 1 - Policy Enforcement - 15-25% */}
                    <motion.div
                        style={{ opacity: layer1Opacity }}
                        className="absolute left-8 md:left-20 top-1/4 text-left max-w-lg"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 mb-3 drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}>
                            Policy Before Execution
                        </h2>
                    </motion.div>

                    {/* Layer 2 - Shadow AI Detection - 35-45% */}
                    <motion.div
                        style={{ opacity: layer2Opacity }}
                        className="absolute right-8 md:right-20 top-1/3 text-right max-w-lg"
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-200 mb-3 drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}>
                            Shadow AI Detection
                        </h2>
                    </motion.div>

                    {/* Layer 3 - Audit Trail - 55-65% */}
                    <motion.div
                        style={{ opacity: layer3Opacity }}
                        className="absolute left-8 md:left-20 bottom-1/3 text-left max-w-lg"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 mb-3 drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}>
                            Every Decision Logged
                        </h2>
                    </motion.div>

                    {/* Layer 4 - Explainability - 75-85% */}
                    <motion.div
                        style={{ opacity: layer4Opacity }}
                        className="absolute right-8 md:right-20 bottom-1/4 text-right max-w-lg"
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-pink-200 mb-3 drop-shadow-2xl" style={{ fontFamily: "var(--font-display)" }}>
                            Instant Explainability
                        </h2>
                    </motion.div>

                    {/* CTA - 92% */}
                    <motion.div
                        style={{ opacity: ctaOpacity }}
                        className="absolute text-center pointer-events-auto"
                    >
                        <div className="bg-gradient-to-br from-purple-900/60 via-blue-900/60 to-purple-900/60 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 shadow-2xl shadow-purple-900/50">
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg" style={{ fontFamily: "var(--font-display)" }}>
                                Control AI at Enterprise Scale
                            </h2>
                            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
                                Join regulated organizations deploying transparent AI governance
                            </p>
                            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 rounded-full text-xl font-medium hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all inline-flex items-center gap-3">
                                Request Demo <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
