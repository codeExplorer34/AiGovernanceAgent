import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./KineticEnforcement.css";

gsap.registerPlugin(ScrollTrigger);

const items = [
    { verb: "detect.", timestamp: "14:22:01", code: "SCAN_INIT", color: "text-magenta-500", glow: "shadow-magenta-500/20" },
    { verb: "analyze.", timestamp: "14:22:02", code: "NLP_DEEP", color: "text-cyan-400", glow: "shadow-cyan-400/20" },
    { verb: "enforce.", timestamp: "14:22:04", code: "GATE_LOCK", color: "text-emerald-400", glow: "shadow-emerald-400/20" },
    { verb: "certify.", timestamp: "14:22:04", code: "HASH_SEAL", color: "text-amber-400", glow: "shadow-amber-400/20" },
];

export function KineticEnforcement() {
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!containerRef.current || !listRef.current) return;

        const listItems = listRef.current.querySelectorAll(".kinetic-item");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${items.length * 120}%`,
                    pin: true,
                    scrub: 1.2,
                }
            });

            listItems.forEach((item, i) => {
                // Intro: Fade in, move up, and expand letter spacing
                tl.fromTo(
                    item,
                    {
                        opacity: 0,
                        filter: "blur(12px)",
                        y: 40,
                        letterSpacing: "-0.05em"
                    },
                    {
                        opacity: 1,
                        filter: "blur(0px)",
                        y: 0,
                        letterSpacing: "0.02em",
                        duration: 1.2,
                        onStart: () => item.classList.add('active'),
                        onReverseComplete: () => item.classList.remove('active'),
                    },
                    i * 1.8
                );

                // Outro
                if (i < items.length - 1) {
                    tl.to(
                        item,
                        {
                            opacity: 0,
                            filter: "blur(12px)",
                            y: -40,
                            letterSpacing: "-0.05em",
                            duration: 1.2,
                            onStart: () => item.classList.remove('active'),
                            onReverseComplete: () => item.classList.add('active'),
                        },
                        (i * 1.8) + 1.4
                    );
                } else {
                    // Final word effect — subtle scale pulse
                    tl.to(item, {
                        scale: 1.02,
                        duration: 1,
                        yoyo: true,
                        repeat: 1
                    });
                }
            });
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section ref={containerRef} className="kinetic-section bg-black border-y border-white/5 overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                    src="/Videos/Light Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30 grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 h-screen flex items-center">
                <div className="list-container w-full">
                    <p className="list-intro">With SURO, you can</p>

                    <ul className="kinetic-list relative" ref={listRef}>
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className={`kinetic-item absolute top-1/2 -translate-y-1/2 left-0 w-full group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
                                style={{ "--i": i } as React.CSSProperties}
                            >
                                <span className={`kinetic-item__verb ${item.color} group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]`}>
                                    {item.verb}
                                </span>
                                <span className="kinetic-item__meta">
                                    <span className="kinetic-item__timestamp">[{item.timestamp}]</span>
                                    <span className="kinetic-item__code">{item.code}</span>
                                </span>
                                {/* Expanded Details on Hover */}
                                <div className="absolute top-full left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4 max-w-sm">
                                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
                                        SYSTEM_STATUS: {item.code}_ACTIVE // DATA_INTEGRITY_VERIFIED // {item.verb === "detect." ? "SCANNING PERIMETER NODES" : item.verb === "analyze." ? "DEEP PACKET INSPECTION" : item.verb === "enforce." ? "POLICY GATE TRIGGERED" : "SIGNING COMPLIANT ASSET"}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </section>
    );
}

