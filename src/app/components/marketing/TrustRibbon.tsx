import React from "react";
import { motion } from "framer-motion";
import { LogoLoop } from "../ui/LogoLoop";
import { Badge } from "./Badge";
import { ShieldCheck } from "lucide-react";

export const TrustRibbon = () => {
    return (
        <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col items-center mb-12">
                    <Badge icon={<ShieldCheck className="w-3 h-3" />} className="mb-4">
                        Supported AI Infrastructure & Model Partners
                    </Badge>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.5em]">
                        Standardizing Intent Across the Enterprise
                    </p>
                </div>

                <div className="opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <LogoLoop
                        logos={[
                            { title: "Vercel", node: <LogoPlaceholder name="Vercel" /> },
                            { title: "AWS", node: <LogoPlaceholder name="AWS" /> },
                            { title: "OpenAI", node: <LogoPlaceholder name="OpenAI" /> },
                            { title: "Google Cloud", node: <LogoPlaceholder name="Google" /> },
                            { title: "Microsoft", node: <LogoPlaceholder name="Microsoft" /> },
                            { title: "Anthropic", node: <LogoPlaceholder name="Anthropic" /> },
                            { title: "Databricks", node: <LogoPlaceholder name="Databricks" /> },
                            { title: "Snowflake", node: <LogoPlaceholder name="Snowflake" /> }
                        ]}
                        speed={30}
                        gap={80}
                        logoHeight={20}
                        fadeOut
                        fadeOutColor="#000000"
                        className="text-gray-400"
                    />
                </div>
            </div>
        </section>
    );
};

const LogoPlaceholder = ({ name }: { name: string }) => {
    const logos: Record<string, React.ReactNode> = {
        "OpenAI": (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M22.28 9.82a6 6 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.28 2.17 6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 6.07 6.07 0 0 0 10.28-2.17 6 6 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.97V11.6a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.1 3.86L12.59 8.38l2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.39-.68zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.39.68z" />
            </svg>
        ),
        "AWS": (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M11.63 11.53c.18-.5 1.4-4.8 1.4-4.8l1.44 4.8zM23.1 19.6c-.63 0-.81-.2-.81-.45V17c-.4 1.34-1.4 1.8-2.67 1.8-1.74 0-3.35-.91-3.35-3.3 0-2.31 1.74-3.8 4.6-3.8 1.13 0 1.42.04 1.42.04v-.27c0-.85-.45-1.53-1.63-1.53a4 4 0 0 0-2.58.91l-.64-1.04a5.32 5.32 0 0 1 3.42-1.22c2.18 0 3.22 1.13 3.22 3.3v4.61s0 .91.56 1l-.54 1.31zm-1.88-5.74s-1 0-1.81.04c-1.23.08-1.5.73-1.5 1.59 0 .81.6 1.45 1.63 1.45.69 0 1.28-.42 1.63-1.04l.05-.18zM12.92 3.6h2.2l3.4 10.15h-1.95l-3-8.87h-1.42l-3.23 8.87H6.96L12.92 3.6zm-8.8 16c-3.25-2.22-.44-5 1-2.9 1.08 1.6 4.3 2.1 6.1.5l1.08.7.43.3c-2 .2-6 .5-8.62-1.5zM2.87 18.8c-.5.3-.8.4-.5.6s2.4-.2 2.8-.3c0 0-.3-.3-1-.3h-1.3z" />
            </svg>
        ),
        "Vercel": (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
            </svg>
        ),
        "Microsoft": (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M0 0h11.4v11.4H0V0zm12.6 0H24v11.4h-11.4V0zM0 12.6h11.4V24H0V12.6zm12.6 0H24V24h-11.4V12.6z" />
            </svg>
        ),
        "Anthropic": (
            <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-current rounded-full" />
                <span className="text-[9px] font-bold tracking-tighter uppercase font-mono">Anthropic</span>
            </div>
        )
    };

    return (
        <div className="flex items-center gap-2 group/logo flex-shrink-0">
            <div className="text-gray-400 group-hover/logo:text-white transition-colors duration-500">
                {logos[name] || <div className="w-5 h-5 bg-white/10 rounded-sm flex items-center justify-center text-[7px] font-bold">{name[0]}</div>}
            </div>
            <span className="text-[10px] font-bold tracking-tighter uppercase font-mono text-gray-400 group-hover/logo:text-white transition-colors duration-500">{name}</span>
        </div>
    );
};

