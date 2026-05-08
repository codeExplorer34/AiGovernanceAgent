import React, { createContext, useContext, useState, useEffect, useRef } from "react";

interface SoundContextType {
    isMuted: boolean;
    toggleMute: () => void;
    playSound: (soundType: SoundType) => void;
}

export type SoundType = "hover" | "click" | "scroll" | "milestone" | "activate";

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Simple sound synthesis using Web Audio API
class SoundEngine {
    private audioContext: AudioContext | null = null;
    private gainNode: GainNode | null = null;

    constructor() {
        if (typeof window !== 'undefined') {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            this.gainNode = this.audioContext.createGain();
            this.gainNode.gain.value = 0.2; // Max 20% volume
            this.gainNode.connect(this.audioContext.destination);
        }
    }

    playTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
        if (!this.audioContext || !this.gainNode) return;

        const oscillator = this.audioContext.createOscillator();
        const envelope = this.audioContext.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;

        envelope.gain.setValueAtTime(0, this.audioContext.currentTime);
        envelope.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 0.01);
        envelope.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.connect(envelope);
        envelope.connect(this.gainNode);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playHover() {
        this.playTone(800, 0.05, 'sine');
    }

    playClick() {
        this.playTone(600, 0.1, 'triangle');
        setTimeout(() => this.playTone(900, 0.05, 'triangle'), 50);
    }

    playScroll() {
        this.playTone(400, 0.03, 'sine');
    }

    playMilestone() {
        this.playTone(800, 0.1, 'sine');
        setTimeout(() => this.playTone(1200, 0.15, 'sine'), 100);
    }

    playActivate() {
        this.playTone(600, 0.15, 'triangle');
        setTimeout(() => this.playTone(800, 0.1, 'sine'), 80);
        setTimeout(() => this.playTone(1000, 0.2, 'sine'), 150);
    }
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const [isMuted, setIsMuted] = useState(true); // Start muted
    const engineRef = useRef<SoundEngine | null>(null);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsMuted(true);
            return;
        }

        engineRef.current = new SoundEngine();
    }, []);

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    const playSound = (soundType: SoundType) => {
        if (isMuted || !engineRef.current) return;

        switch (soundType) {
            case 'hover':
                engineRef.current.playHover();
                break;
            case 'click':
                engineRef.current.playClick();
                break;
            case 'scroll':
                engineRef.current.playScroll();
                break;
            case 'milestone':
                engineRef.current.playMilestone();
                break;
            case 'activate':
                engineRef.current.playActivate();
                break;
        }
    };

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, playSound }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (!context) {
        throw new Error('useSound must be used within SoundProvider');
    }
    return context;
}

