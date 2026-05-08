import React, { useEffect, useRef } from "react";

/**
 * DataDust — Ambient canvas particle layer.
 *
 * 30 particles, 1px, opacity 0.08-0.12, near-imperceptible drift.
 * Feels like air in a lab. Not particles in space.
 */
export function DataDust() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Particle pool
        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
        }[] = [];

        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                alpha: 0.08 + Math.random() * 0.04, // 0.08–0.12
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 0.5, 0, Math.PI * 2);
                // Emerald/cyan tint
                ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
        />
    );
}

