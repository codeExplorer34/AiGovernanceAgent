import React, { useRef, useEffect } from "react";

export function GovernanceMesh() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        resize();

        const gridGap = 40;
        const warpRadius = 250;
        const warpStrength = 1.2;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = "rgba(139, 92, 246, 0.08)"; // Subtle violet
            ctx.lineWidth = 1;

            for (let x = 0; x < canvas.width; x += gridGap) {
                ctx.beginPath();
                for (let y = 0; y < canvas.height; y += 10) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let offsetX = 0;
                    if (dist < warpRadius) {
                        const factor = (1 - dist / warpRadius) * warpStrength;
                        offsetX = dx * factor;
                    }

                    if (y === 0) ctx.moveTo(x + offsetX, y);
                    else ctx.lineTo(x + offsetX, y);
                }
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridGap) {
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 10) {
                    const dx = x - mouse.current.x;
                    const dy = y - mouse.current.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let offsetY = 0;
                    if (dist < warpRadius) {
                        const factor = (1 - dist / warpRadius) * warpStrength;
                        offsetY = dy * factor;
                    }

                    if (x === 0) ctx.moveTo(x, y + offsetY);
                    else ctx.lineTo(x, y + offsetY);
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40"
        />
    );
}
