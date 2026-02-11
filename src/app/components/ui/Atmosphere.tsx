import React from "react";
import { GovernanceMesh } from "./GovernanceMesh";

export function Atmosphere({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500">
            {/* Interactive Background Mesh */}
            <div className="dark:block hidden">
                <GovernanceMesh />
            </div>

            {/* 1. Global Architectural Grid (Static Backup) */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 3. Subtle Vignette for Control Room depth */}
            <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* Content Wrap */}
            <div className="relative z-10 font-[Inter,sans-serif]">
                {children}
            </div>

            {/* Surgical Scanline Effect (Ultra subtle) */}
            <div className="fixed inset-0 z-[101] pointer-events-none opacity-[0.01] pointer-events-none dark:block hidden"
                style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 4px, 3px 100%'
                }}
            />
        </div>
    );
}
