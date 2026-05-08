import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    onClick,
    strength = 0.3
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const magneticRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            // Calculate distance from center
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const maxDistance = 60; // Reduced activation radius

            if (distance < maxDistance) {
                // Apply magnetic effect
                magneticRef.current = {
                    x: distanceX * strength,
                    y: distanceY * strength
                };

                gsap.to(button, {
                    x: magneticRef.current.x,
                    y: magneticRef.current.y,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return (
        <button
            ref={buttonRef}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

