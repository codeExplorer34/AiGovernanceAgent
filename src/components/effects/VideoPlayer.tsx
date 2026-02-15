import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    poster?: string;
    autoPlay?: boolean;
    className?: string;
}

export function VideoPlayer({ src, poster, autoPlay = false, className = "" }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(err => {
                console.log("Autoplay prevented:", err);
            });
        }
    }, [autoPlay]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.div
            className={`relative rounded-xl overflow-hidden ${className}`}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Surgical Glassmorphism border */}
            <div
                className="absolute inset-0 rounded-xl pointer-events-none z-20"
                style={{
                    border: isHovered
                        ? "1px solid rgba(139, 92, 246, 0.4)"
                        : "1px solid rgba(139, 92, 246, 0.2)",
                    transition: "border 0.3s ease"
                }}
            />

            {/* Inset Shadow to kill card vibe */}
            <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_2px_20px_rgba(0,0,0,0.8)]" />

            {/* Video element */}
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
                autoPlay={autoPlay}
            />

            {/* Mute/Unmute button on hover */}
            {isHovered && (
                <motion.button
                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-colors z-30"
                    onClick={toggleMute}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                    )}
                </motion.button>
            )}
        </motion.div>
    );
}
