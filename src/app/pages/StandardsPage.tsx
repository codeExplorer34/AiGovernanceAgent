import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import {
    Code,
    FileJson,
    Book,
    Layers,
    Terminal,
    Search,
    ChevronRight,
    Copy,
    Share2,
    Lock,
    ArrowRight
} from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";

const PROTOCOL_SPECS = [
    {
        title: "Policy YAML Schema",
        desc: "Define governance rules in a human-readable YAML format that compiles down to machine-intent filters.",
        code: `version: "2.1"
policies:
  - id: "block_pii_egress"
    intercept: "egress"
    layers: ["regex", "nlp_entity"]
    match: ["email", "ssn", "cc_number"]
    action: "redact"
    metadata: { route: "quarantine" }`
    },
    {
        title: "Risk Scoring Engine",
        desc: "JSON configuration for behavioral anomaly detection and threat level weighting.",
        code: `{
  "engine_type": "behavioral_v4",
  "thresholds": {
    "anomaly": 0.85,
    "pii_leak": 0.95
  },
  "score_weights": {
    "intent_alignment": 0.4,
    "data_sensitivity": 0.6
  }
}`
    }
];

export function StandardsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            <section className="relative pt-40 pb-20 px-8">
                <div className="absolute inset-0 z-0">
                    <DarkVeil hueShift={180} noiseIntensity={0.01} speed={0.4} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-24">
                        <Badge icon={<Code className="w-3 h-3" />} className="mb-6">
                            Technical Authority
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-light brand-heading mb-8">
                            The SURO <br />
                            <span className="italic font-playfair text-white/30">Protocol</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl font-playfair">
                            Standardizing the language of machine intent. Our open documentation defines how enterprises translate corporate policy into immutable governance code.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
                        {/* Sidebar: Navigation */}
                        <div className="lg:col-span-3 space-y-2">
                            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 mb-6">Documentation Root</h3>
                            {["Introduction", "Policy Schema", "Risk Scoring", "Intercept Logic", "Metadata Specs", "Deployment YAML"].map((item, i) => (
                                <div
                                    key={item}
                                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${i === 1 ? "bg-white/5 border-white/10 text-white" : "text-gray-500 border-transparent hover:text-white"
                                        }`}
                                >
                                    <span className="text-xs font-mono tracking-tighter uppercase">{item}</span>
                                    {i === 1 && <ChevronRight className="w-3 h-3 text-cyan-400" />}
                                </div>
                            ))}
                        </div>

                        {/* Main Content: Specs */}
                        <div className="lg:col-span-9 space-y-16">
                            {PROTOCOL_SPECS.map(spec => (
                                <div key={spec.title} className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold brand-heading uppercase tracking-tighter">{spec.title}</h3>
                                        <div className="flex gap-4">
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Copy className="w-4 h-4 text-gray-500" /></button>
                                            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors"><Share2 className="w-4 h-4 text-gray-500" /></button>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 font-light text-sm max-w-2xl leading-relaxed">
                                        {spec.desc}
                                    </p>
                                    <div className="bg-zinc-900 border border-white/5 rounded-[32px] p-8 font-mono text-sm leading-relaxed overflow-hidden relative shadow-2xl">
                                        <div className="absolute top-4 right-6 text-[10px] text-white/20 uppercase tracking-widest font-bold">ReadOnly_v2.1</div>
                                        <pre className="text-cyan-400/80">
                                            <code>{spec.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 relative group">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="p-4 bg-cyan-400/10 rounded-2xl">
                                        <Lock className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold brand-heading uppercase tracking-tighter">Governance Enforcement Logic</h4>
                                        <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mt-1">Abstracted Layer 4-7 Logic</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                                    The SURO protocol utilizes a multi-layered behavioral filter. Each packet is parsed for intent before being routed to its destination. Our open standard allows for custom governance modules to be injected into the stream with zero performance overhead.
                                </p>
                                <button className="text-[10px] font-mono text-white uppercase tracking-[0.3em] flex items-center gap-2 group-hover:text-cyan-400 transition-colors underline underline-offset-8">
                                    Request SDK Access <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

