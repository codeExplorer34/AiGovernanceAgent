"use client";

import React, { useState, useEffect } from "react";

const LOG_TYPES = ["[GOV]", "[SYS]", "[SEC]", "[AUDIT]", "[PKT]"];
const TARGETS = ["GDPR", "PHI/PII", "ISO27001", "SOC2", "HIPAA"];
const ACTIONS = ["MASKED", "HASHED", "ENCRYPTED", "STRIPPED", "VALIDATED"];

export const FooterTicker: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const generateLog = () => {
            const type = LOG_TYPES[Math.floor(Math.random() * LOG_TYPES.length)];
            const target = TARGETS[Math.floor(Math.random() * TARGETS.length)];
            const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
            const hash = Math.random().toString(16).substring(2, 10).toUpperCase();
            const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, minimumFractionDigits: 2, maximumFractionDigits: 2 } as any);

            return `[${timestamp}] ${type} PKT_${hash} ${action} // RULESET_${target}`;
        };

        // Initial logs
        setLogs([generateLog(), generateLog(), generateLog()]);

        const interval = setInterval(() => {
            setLogs(prev => [generateLog(), ...prev.slice(0, 5)]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 overflow-hidden font-mono text-[9px] text-gray-500 flex items-center gap-6">
            <div className="flex-shrink-0 text-gray-700 font-bold">LEDGER_AUTO_STREAM://LIVE</div>
            <div className="flex gap-8 whitespace-nowrap animate-marquee">
                {logs.map((log, i) => (
                    <span
                        key={i}
                        className={`${log.includes("[GOV]") ? "text-purple-400" :
                            log.includes("[SEC]") ? "text-emerald-400" :
                                log.includes("[SYS]") ? "text-blue-400" :
                                    "text-gray-500"
                            }`}
                    >
                        {log}
                    </span>
                ))}
            </div>
        </div>
    );
};

