import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import {
    Check,
    Shield,
    Cpu,
    Globe,
    Zap,
    ArrowRight,
    Terminal,
    Server,
    Gem,
    Workflow
} from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";

const TIERS = [
    {
        name: "Starter",
        price: "$499",
        period: "/month",
        desc: "For small teams auditing AI usage and establishing baseline governance.",
        features: [
            "Up to 50 Monthly Users",
            "Core Policy Engine",
            "Standard Interceptors",
            "PII Redaction (Basic)",
            "Web-based Dashboard",
            "Email Support"
        ],
        cta: "Start Free Trial",
        highlight: false,
        icon: <Zap className="w-5 h-5 text-cyan-400" />
    },
    {
        name: "Enterprise",
        price: "Contact Sales",
        period: "",
        desc: "The standard for high-growth companies requiring full infrastructure control.",
        features: [
            "Unlimited Monthly Users",
            "Custom Policy YAML Schema",
            "VPC Native Deployment",
            "SSO / SCIM Integration",
            "Air-gapped Metadata Engine",
            "24/7 Priority SLA",
            "Behavioral Anomaly Scoring"
        ],
        cta: "Request Demo",
        highlight: true,
        icon: <Shield className="w-5 h-5 text-white" />
    },
    {
        name: "Sovereign",
        price: "Contact Sales",
        period: "",
        desc: "For governments and highly regulated sectors needing extreme isolation.",
        features: [
            "On-Prem / Air-gapped Support",
            "Custom Regulatory Templates",
            "Dedicated Security Engineer",
            "White-box Protocol Access",
            "Regional Data Residency",
            "Deterministic Logic Verification"
        ],
        cta: "Contact Founders",
        highlight: false,
        icon: <Gem className="w-5 h-5 text-purple-400" />
    }
];

export function PricingPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            <section className="relative pt-40 pb-32 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <DarkVeil hueShift={280} noiseIntensity={0.01} speed={0.2} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <Badge icon={<Gem className="w-3 h-3" />} className="mb-6">
                            Scalable Governance
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-light brand-heading mb-8">
                            Simple <span className="italic font-playfair text-white/30">Architecture</span>, <br />
                            Enterprise <span className="italic font-playfair text-white/30">Scale</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto font-playfair">
                            Choose the level of enforcement that aligns with your organization's risk appetite and regulatory landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {TIERS.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative rounded-[48px] p-10 border transition-all h-full flex flex-col ${tier.highlight
                                        ? "bg-white/[0.05] border-cyan-400/50 shadow-[0_0_50px_rgba(34,211,238,0.1)] scale-105 z-10"
                                        : "bg-zinc-950 border-white/5 hover:border-white/10"
                                    }`}
                            >
                                {tier.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[9px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full">
                                        Most Deployed
                                    </div>
                                )}

                                <div className="mb-8 flex items-center justify-between">
                                    <div className={`p-4 rounded-2xl ${tier.highlight ? "bg-cyan-400 text-black" : "bg-white/5 text-white"}`}>
                                        {tier.icon}
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold brand-heading uppercase tracking-tighter">{tier.price}</div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{tier.period}</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold brand-heading mb-4 uppercase tracking-tighter">{tier.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light flex-1">
                                    {tier.desc}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {tier.features.map(feature => (
                                        <div key={feature} className="flex items-center gap-3 text-xs text-gray-500 group">
                                            <Check className={`w-4 h-4 ${tier.highlight ? "text-cyan-400" : "text-white/20"}`} />
                                            <span className="group-hover:text-white transition-colors uppercase tracking-widest text-[9px] font-bold">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => window.location.href = `mailto:suhaybshaik@outlook.com?subject=${tier.name} Inquiry`}
                                    className={`w-full py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-2 ${tier.highlight
                                            ? "bg-white text-black hover:bg-cyan-400"
                                            : "bg-white/5 text-white border border-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    {tier.cta} <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* FAQ Quick Callout */}
                    <div className="text-center">
                        <p className="text-gray-500 text-sm mb-6 font-playfair">
                            Need a custom deployment architecture?
                        </p>
                        <button
                            onClick={() => window.location.href = "mailto:suhaybshaik@outlook.com?subject=Custom Deployment Request"}
                            className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors underline underline-offset-8"
                        >
                            Discuss Requirements with Founders →
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

