import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface InfiniteDataStreamProps {
    className?: string;
    columnCount?: number;
    speed?: number;
}

export function InfiniteDataStream({
    className = "",
    columnCount = 12,
    speed = 1
}: InfiniteDataStreamProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const charSize = 10;
        const chars = "0123456789ABCDEF";

        // Setup columns
        const setup = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const columns = Math.ceil(canvas.width / (canvas.width / columnCount));
            const drops: number[] = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -100;
            }
            return { columns, drops };
        };

        let { columns, drops } = setup();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(6, 182, 212, 0.05)"; // cyan-400 equivalent with low opacity
            ctx.font = `${charSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                const x = i * (canvas.width / columnCount);
                const y = drops[i] * charSize;

                ctx.fillText(text, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += speed;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            const result = setup();
            columns = result.columns;
            drops = result.drops;
        };

        window.addEventListener("resize", handleResize);
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [columnCount, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-0 ${className}`}
        />
    );
}

