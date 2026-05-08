import React from "react";
import { useSound } from "./SoundProvider";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export function SoundToggle() {
    const { isMuted, toggleMute } = useSound();

    return (
        <motion.button
            onClick={toggleMute}
            className="fixed bottom-8 right-8 z-50 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-4 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isMuted ? "Enable sound" : "Disable sound"}
        >
            {isMuted ? (
                <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            ) : (
                <Volume2 className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            )}
        </motion.button>
    );
}

