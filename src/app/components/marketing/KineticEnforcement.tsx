import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./KineticEnforcement.css";

gsap.registerPlugin(ScrollTrigger);

const items = [
    { verb: "detect.", timestamp: "14:22:01", code: "SCAN_INIT" },
    { verb: "intercept.", timestamp: "14:22:01", code: "PKT_TRAP" },
    { verb: "analyze.", timestamp: "14:22:02", code: "NLP_DEEP" },
    { verb: "redact.", timestamp: "14:22:02", code: "PII_MASK" },
    { verb: "govern.", timestamp: "14:22:03", code: "POLICY_EXEC" },
    { verb: "audit.", timestamp: "14:22:03", code: "LOG_WRITE" },
    { verb: "enforce.", timestamp: "14:22:04", code: "GATE_LOCK" },
    { verb: "certify.", timestamp: "14:22:04", code: "HASH_SEAL" },
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
        <section ref={containerRef} className="kinetic-section bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-8 h-screen flex items-center">
                <div className="list-container w-full">
                    <p className="list-intro">With AEGIS, you can</p>

                    <ul className="kinetic-list relative" ref={listRef}>
                        {items.map((item, i) => (
                            <li
                                key={i}
                                className="kinetic-item absolute top-1/2 -translate-y-1/2 left-0 w-full"
                                style={{ "--i": i } as React.CSSProperties}
                            >
                                <span className="kinetic-item__verb">{item.verb}</span>
                                <span className="kinetic-item__meta">
                                    <span className="kinetic-item__timestamp">[{item.timestamp}]</span>
                                    <span className="kinetic-item__code">{item.code}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </section>
    );
}
