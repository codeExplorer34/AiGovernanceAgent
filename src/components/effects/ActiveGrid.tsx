"use client";

import React, { useEffect, useRef } from "react";

/**
 * ActiveGrid — Governance-metaphor canvas.
 *
 * Instead of generic mouse-reactive dots, this renders "traffic corridors":
 * slightly brighter streams of dots that flow in governed vertical patterns,
 * creating the illusion of controlled data channels. Mouse proximity creates a
 * subtle proximity glow rather than physically pushing dots.
 *
 * A 1500 ms calm fade-in keeps the hero text dominant on first load.
 * The crosshair is dimmed to read as instrumentation, not a focal point.
 */
export const ActiveGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let mouseX = -9999;
        let mouseY = -9999;
        let raf = 0;

        const spacing = 40;
        const cols: number[] = [];
        const rows: number[] = [];

        // Corridor columns — every ~4th column is a "data lane"
        const corridorSet = new Set<number>();

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            cols.length = 0;
            rows.length = 0;
            corridorSet.clear();

            for (let x = 0; x < width; x += spacing) cols.push(x);
            for (let y = 0; y < height; y += spacing) rows.push(y);

            // Mark every 4th column as a corridor
            cols.forEach((_, i) => {
                if (i % 4 === 0) corridorSet.add(i);
            });
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Fade-in state: opacity ramps from 0 → 1 over 1500ms
        const loadStart = performance.now();
        const CALM_MS = 1500;

        // Packet flow offset (scrolls downward over time)
        let flowOffset = 0;

        const animate = (now: number) => {
            ctx.clearRect(0, 0, width, height);

            // Calm load-in: canvas opacity ramp
            const elapsed = now - loadStart;
            const globalAlpha = Math.min(elapsed / CALM_MS, 1);

            flowOffset = (now * 0.02) % spacing;

            for (let ci = 0; ci < cols.length; ci++) {
                const x = cols[ci];
                const isCorridor = corridorSet.has(ci);

                for (let ri = 0; ri < rows.length; ri++) {
                    const baseY = rows[ri];
                    // Corridors get a subtle downward flow offset
                    const y = isCorridor
                        ? ((baseY + flowOffset) % height)
                        : baseY;

                    // Proximity glow (soft, no physical push)
                    const dx = mouseX - x;
                    const dy = mouseY - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 180;

                    let alpha: number;
                    let r = 255, g = 255, b = 255;

                    if (isCorridor) {
                        // Corridor dots: brighter, purple-tinted
                        alpha = 0.08;
                        r = 168; g = 130; b = 247; // purple-ish
                        if (dist < maxDist) {
                            const force = (maxDist - dist) / maxDist;
                            alpha += force * 0.18;
                        }
                    } else {
                        // Regular grid dots
                        alpha = 0.03;
                        if (dist < maxDist) {
                            const force = (maxDist - dist) / maxDist;
                            alpha += force * 0.12;
                            // Tint toward purple on proximity
                            r = 255 - Math.floor(87 * force);
                            g = 255 - Math.floor(170 * force);
                            b = 255;
                        }
                    }

                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * globalAlpha})`;
                    ctx.beginPath();
                    ctx.arc(x, y, isCorridor ? 1.2 : 0.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            raf = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", init);
        window.addEventListener("mousemove", onMouseMove);

        init();
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", init);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden surface-grid">
            <canvas ref={canvasRef} className="w-full h-full opacity-40" />

            {/* HUD Crosshair — dimmed to read as subtle instrumentation */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.015]" />
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.015]" />
            </div>
        </div>
    );
};
