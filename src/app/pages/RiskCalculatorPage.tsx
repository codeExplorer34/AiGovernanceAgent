import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import {
    TrendingUp,
    AlertCircle,
    ShieldCheck,
    DollarSign,
    Users,
    Building2,
    Activity,
    ArrowRight,
    PieChart,
    BarChart3,
    FileText
} from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";

const INDUSTRIES = [
    { name: "Financial Services", riskFactor: 2.8, baseFine: 1200000 },
    { name: "Healthcare", riskFactor: 3.2, baseFine: 1500000 },
    { name: "Tech & SaaS", riskFactor: 1.5, baseFine: 450000 },
    { name: "Manufacturing", riskFactor: 1.1, baseFine: 250000 },
    { name: "Governments", riskFactor: 2.5, baseFine: 800000 },
];

export function RiskCalculatorPage() {
    const [employees, setEmployees] = useState(500);
    const [industryIndex, setIndustryIndex] = useState(2);
    const [aiAdoption, setAiAdoption] = useState(40); // Percentage

    const [results, setResults] = useState({
        totalRisk: 0,
        leakProbability: 0,
        SUROSaving: 0,
        liabilityScore: 0
    });

    useEffect(() => {
        const ind = INDUSTRIES[industryIndex];
        const prob = (employees * (aiAdoption / 100) * 0.005).toFixed(2); // Mock probability logic
        const risk = Math.round(ind.baseFine * ind.riskFactor * (employees / 100) * (aiAdoption / 100));
        const saving = Math.round(risk * 0.94); // SURO reduces 94% of risk
        const score = Math.min(100, Math.round((risk / 5000000) * 100));

        setResults({
            totalRisk: risk,
            leakProbability: Number(prob),
            SUROSaving: saving,
            liabilityScore: score
        });
    }, [employees, industryIndex, aiAdoption]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="relative pt-40 pb-32 px-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <DarkVeil hueShift={120} noiseIntensity={0.01} speed={0.2} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <Badge icon={<PieChart className="w-3 h-3" />} className="mb-6">
                            Executive ROI Utility
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-light brand-heading mb-8">
                            Quantify Your <br />
                            <span className="italic font-playfair text-white/30 text-4xl md:text-7xl">AI Exposure</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto font-playfair">
                            Calculate the potential financial liability of unmanaged LLM usage and see how SURO standardizes your risk posture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* INPUTS PANEL */}
                        <div className="bg-zinc-950/80 border border-white/5 rounded-[48px] p-10 backdrop-blur-3xl shadow-2xl">
                            <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-400/60 mb-12 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Operational Parameters
                            </h3>

                            <div className="space-y-12">
                                {/* Industry Select */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-gray-500">
                                        <span>Focus Industry</span>
                                        <Building2 className="w-3 h-3" />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {INDUSTRIES.map((ind, i) => (
                                            <button
                                                key={ind.name}
                                                onClick={() => setIndustryIndex(i)}
                                                className={`py-3 px-4 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all border ${industryIndex === i
                                                        ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                                        : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                                                    }`}
                                            >
                                                {ind.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Employee Count Slider */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Total Workforce (AI Users)</span>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-3 h-3 text-cyan-400" />
                                            <span className="text-lg font-mono text-white">{employees}</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="100"
                                        max="10000"
                                        step="100"
                                        value={employees}
                                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                    />
                                </div>

                                {/* AI Adoption Slider */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">LLM Adoption Rate</span>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-3 h-3 text-cyan-400" />
                                            <span className="text-lg font-mono text-white">{aiAdoption}%</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="5"
                                        value={aiAdoption}
                                        onChange={(e) => setAiAdoption(parseInt(e.target.value))}
                                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RESULTS PANEL */}
                        <div className="space-y-8">
                            {/* Big Number Card */}
                            <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 backdrop-blur-3xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />

                                <span className="block text-[10px] font-mono text-red-400 uppercase tracking-[0.4em] mb-4">Estimated Liability Exposure</span>
                                <h2 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 brand-heading">
                                    {formatCurrency(results.totalRisk)}
                                    <span className="text-sm font-mono text-gray-500 block mt-2 tracking-widest uppercase">Per Annum (Projected)</span>
                                </h2>

                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                    <div>
                                        <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">Leak Probability</span>
                                        <span className="text-xl font-mono text-white">{results.leakProbability}%</span>
                                    </div>
                                    <div>
                                        <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">Risk Intensity Score</span>
                                        <span className="text-xl font-mono text-red-500">{results.liabilityScore}/100</span>
                                    </div>
                                </div>
                            </div>

                            {/* SURO Impact Card */}
                            <div className="bg-cyan-400 text-black rounded-[40px] p-10 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                                <div className="flex items-center justify-between mb-8">
                                    <Badge icon={<ShieldCheck className="w-3 h-3" />} className="bg-black/10 border-black/10 text-black">
                                        SURO Protection Layer
                                    </Badge>
                                    <DollarSign className="w-5 h-5 opacity-40" />
                                </div>
                                <h3 className="text-2xl font-bold brand-heading uppercase tracking-tighter mb-4">
                                    Mitigated Exposure
                                </h3>
                                <p className="text-sm font-medium mb-10 opacity-70">
                                    By standardizing policy enforcement and intercepting unmanaged traffic, SURO covers up to 94% of your identified AI liability.
                                </p>
                                <div className="bg-black text-white p-6 rounded-3xl flex items-center justify-between">
                                    <div>
                                        <span className="block text-[8px] font-mono uppercase tracking-widest opacity-50 mb-1">Potential Savings</span>
                                        <span className="text-2xl font-bold font-mono">{formatCurrency(results.SUROSaving)}</span>
                                    </div>
                                    <button
                                        onClick={() => window.location.href = "mailto:suhaybshaik@outlook.com?subject=ROI Report Request"}
                                        className="bg-white text-black p-3 rounded-xl hover:scale-105 transition-all"
                                    >
                                        <FileText className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => window.location.href = `mailto:suhaybshaik@outlook.com?subject=Enterprise ROI Analysis&body=Workforce: ${employees}, AI Adoption: ${aiAdoption}%, Projected Exposure: ${formatCurrency(results.totalRisk)}`}
                                className="w-full flex items-center justify-center gap-3 text-white/50 hover:text-white transition-colors group py-4 border border-white/5 hover:border-white/10 rounded-full bg-white/2"
                            >
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Request Full Audit Report</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

