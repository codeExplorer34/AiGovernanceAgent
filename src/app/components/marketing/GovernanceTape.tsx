import React, { useEffect, useRef } from "react";
import { registerGsap } from "../../lib/gsap";

/**
 * GovernanceTape — Infinite horizontal scroll of governance keywords.
 *
 * Feels like a system layer quietly operating beneath the interface.
 * Barely perceptible motion; subconscious authority.
 */
export function GovernanceTape() {
    const trackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!trackRef.current) return;

        const { gsap } = registerGsap();

        const ctx = gsap.context(() => {
            gsap.to(trackRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 52, // Slowed by 30% for better readability
                repeat: -1,
            });
        }, trackRef);

        return () => ctx.revert();
    }, []);

    const content =
        "REAL-TIME POLICY ENFORCEMENT ◆ DECISION TRACEABILITY ◆ RISK INTERCEPTION ◆ MODEL OVERSIGHT ◆ COMPLIANCE LAYER ◆ DETERMINISTIC GOVERNANCE ◆ AUDIT INTEGRITY ◆ ";

    return (
        <div
            className="relative overflow-hidden bg-black"
            style={{ marginTop: "-1px" /* seamless join with thesis */ }}
        >
            {/* Gradient edge masks */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                }}
            />

            <div className="py-6" style={{ transform: "translateY(8px)" }}>
                <div
                    ref={trackRef}
                    className="flex whitespace-nowrap"
                    style={{
                        filter: "blur(0.5px)", // Adjusted blur
                        opacity: 0.25, // Adjusted opacity
                    }}
                >
                    {/* Duplicate content for seamless loop */}
                    <span className="font-mono text-[14px] tracking-[0.35em] uppercase text-white shrink-0">
                        {content}
                    </span>
                    <span className="font-mono text-[14px] tracking-[0.35em] uppercase text-white shrink-0">
                        {content}
                    </span>
                </div>
            </div>
        </div>
    );
}

