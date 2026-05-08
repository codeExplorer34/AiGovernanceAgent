import React, { useEffect, useRef } from "react";
import { registerGsap } from "../../lib/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * ScrollRevealThesis — Institutional scroll-scrubbed word reveal.
 *
 * Each word transitions from ghost to solid as the user scrolls,
 * conveying mechanical authority. No rotation, no theatrics.
 */
export function ScrollRevealThesis() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion || !sectionRef.current || !textRef.current) return;

        const { gsap } = registerGsap();

        // Split text into word spans
        const raw = textRef.current.textContent || "";
        const words = raw.trim().split(/\s+/);
        textRef.current.innerHTML = words
            .map(
                (w) =>
                    `<span class="sr-thesis__word" style="display:inline-block;opacity:0.1;filter:blur(4px);transform:translateY(12px) translateZ(-40px)">${w}</span>`
            )
            .join('<span style="display:inline-block;width:0.35em"></span>');

        const wordEls = textRef.current.querySelectorAll(".sr-thesis__word");

        const ctx = gsap.context(() => {
            gsap.to(wordEls, {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                z: 0,
                ease: "none",
                stagger: 0.06,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 40%",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [prefersReducedMotion]);

    return (
        <section
            ref={sectionRef}
            className="relative py-40 px-8 bg-black overflow-hidden"
            style={{ perspective: "1200px" }}
        >
            {/* Subtle centred radial glow behind text */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(16,185,129,0.03) 0%, transparent 100%)",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <p
                    ref={textRef}
                    className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.3] tracking-[-0.01em]"
                    style={{
                        color: "#e5e5e5",
                        fontFamily: "'Playfair Display', serif",
                        transformStyle: "preserve-3d",
                    }}
                >
                    A system fails when it is forgotten. SURO ensures it never does.
                </p>
            </div>
        </section>
    );
}

