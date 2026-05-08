import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { Shield, Zap, Eye, CheckCircle, Sparkles } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../ui/ScrollStack";

interface ProcessStep {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
    label: string;
}

const steps: ProcessStep[] = [
    {
        title: "The Ingress",
        label: "RAW_DATA_ENTRY",
        description: "High-velocity data streams enter the perimeter. SURO immediately traps the packet at the gateway level for surgical inspection.",
        image: "/images/generated-image.png",
        icon: <Zap className="w-5 h-5 text-orange-400" />
    },
    {
        title: "Neural Analysis",
        label: "AI_AUDIT_SCAN",
        description: "SURO Neural Enforcers perform a deep-packet scan in under 180ms, identifying PII, sensitive credentials, and policy violations.",
        image: "/images/generated-image 2.png",
        icon: <Eye className="w-5 h-5 text-blue-400" />
    },
    {
        title: "Surgical Governance",
        label: "POLICY_ENFORCEMENT",
        description: "Automated masking engines strip sensitive nodes based on your deterministic governance code. Risk is neutralized before it leaves the network.",
        image: "/images/generated-image 3.png",
        icon: <Shield className="w-5 h-5 text-purple-400" />
    },
    {
        title: "Compliance Delivery",
        label: "SECURE_DEPLOYMENT",
        description: "Clean, auditable data is delivered to your models. A permanent, human-readable audit trail is generated for regulatory proof.",
        image: "/images/generated-image 4.png",
        icon: <CheckCircle className="w-5 h-5 text-emerald-400" />
    }
];

export const ProcessJourney: React.FC = () => {
    return (
        <section className="relative py-20 md:py-40 bg-black overflow-visible">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <Badge icon={<Sparkles className="w-4 h-4 text-purple-400" />}>The SURO Lifecycle</Badge>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-6 brand-heading">
                        Discover The Process <br /> <span className="text-white">Behind The Safety.</span>
                    </h2>
                </div>

                <div className="relative flex">
                    {/* Vertical Timeline Progress */}
                    <div className="hidden lg:flex flex-col items-center mr-12 py-10">
                        <div className="w-px h-full bg-white/10 relative">
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                                style={{ height: "100%" }}
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 4, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    <ScrollStack
                        itemDistance={100}
                        itemScale={0.05}
                        itemStackDistance={30}
                        stackPosition="20%"
                        scaleEndPosition="10%"
                        baseScale={0.85}
                        useWindowScroll={true}
                    >
                        {steps.map((step, index) => (
                            <ScrollStackItem key={index}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden group rounded-2xl">
                                    {/* Image Side */}
                                    <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                        {/* HUD Label */}
                                        <div className="absolute top-6 left-6">
                                            <div className="px-3 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white tracking-[0.3em] uppercase">
                                                PROCESS_NODE_v.1.2 // 0{index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white/[0.02] to-transparent">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 rounded bg-white/5 border border-white/10 text-white shadow-xl">
                                                {step.icon}
                                            </div>
                                            <span className="font-mono text-[10px] tracking-[0.4em] text-purple-500 uppercase font-bold">
                                                {step.label}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white tracking-tight leading-tight brand-heading">
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                                            {step.description}
                                        </p>

                                        <div className="pt-8 border-t border-white/5">
                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center gap-3 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                                                    <Zap className="w-3 h-3 animate-pulse" />
                                                    LATENCY: {'<'}180ms
                                                </div>
                                                <div className="flex items-center gap-3 px-3 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400">
                                                    <Shield className="w-3 h-3" />
                                                    SECURITY: MIL_SPEC
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
            </div>
        </section>
    );
};

