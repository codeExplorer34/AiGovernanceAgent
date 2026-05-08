import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ColorTransition {
    sectionId: string;
    backgroundColor: string;
    accentColor: string;
}

const colorSchemes: ColorTransition[] = [
    { sectionId: "hero", backgroundColor: "#000000", accentColor: "#22d3ee" }, // Cyan - Introduction
    { sectionId: "problem", backgroundColor: "#0a0000", accentColor: "#f87171" }, // Red - Problem
    { sectionId: "solution", backgroundColor: "#000a0a", accentColor: "#22d3ee" }, // Cyan - Solution
    { sectionId: "proof", backgroundColor: "#000000", accentColor: "#34d399" }, // Emerald - Proof/Demo
    { sectionId: "action", backgroundColor: "#000000", accentColor: "#22d3ee" } // Cyan - CTA
];

export function useColorTransitions() {
    useEffect(() => {
        colorSchemes.forEach((scheme, index) => {
            const section = document.getElementById(scheme.sectionId);
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    gsap.to("body", {
                        backgroundColor: scheme.backgroundColor,
                        duration: 1.5,
                        ease: "power2.inOut"
                    });
                },
                onEnterBack: () => {
                    gsap.to("body", {
                        backgroundColor: scheme.backgroundColor,
                        duration: 1.5,
                        ease: "power2.inOut"
                    });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
}

export function useSceneTransitions() {
    useEffect(() => {
        const sections = document.querySelectorAll('[data-scene]');

        sections.forEach((section) => {
            const scene = section.getAttribute('data-scene');

            // Fade in scene content as it enters viewport
            gsap.fromTo(
                section.querySelectorAll('[data-scene-element]'),
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Add parallax effect to scene backgrounds
            const background = section.querySelector('[data-scene-bg]');
            if (background) {
                gsap.to(background, {
                    y: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
}

