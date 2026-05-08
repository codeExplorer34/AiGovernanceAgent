import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import { Badge } from "../components/marketing/Badge";
import {
    ShieldCheck,
    Lock,
    FileText,
    Globe,
    Zap,
    Server,
    Database,
    Key,
    Cpu,
    CheckCircle2,
    Search,
    Download,
    ArrowRight
} from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";

const SECURITY_PILLARS = [
    {
        title: "Encryption-at-Rest",
        desc: "All interaction logs and behavioral metadata are encrypted using AES-256 with customer-managed keys (CMK) available for Enterprise tiers.",
        icon: <Key className="w-6 h-6 text-cyan-400" />,
        specs: ["AES-256", "FIPS 140-2", "CMK Support"]
    },
    {
        title: "Zero-Training Guarantee",
        desc: "SURO never uses your interaction data to train our models or any third-party models. Your corporate intelligence remains yours exclusively.",
        icon: <Cpu className="w-6 h-6 text-purple-400" />,
        specs: ["No model training", "Prompt Isolation", "Data TTL"]
    },
    {
        title: "Sovereign Deployment",
        desc: "Deploy SURO in your own VPC (AWS/Azure) or keep data within specific geographic boundaries (EU/US/APAC) to satisfy data residency requirements.",
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        specs: ["Regional Pinning", "VPC Native", "Audit Logs"]
    },
    {
        title: "Continuous Compliance",
        desc: "Our engine maps every AI interaction to NIST AI RMF and EU AI Act requirements in real-time, providing an immutable audit trail for regulators.",
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
        specs: ["NIST Aligned", "EU AI Act ready", "SOC 2 Type II"]
    }
];

export function TrustCenterPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            <section className="relative pt-40 pb-20 px-8">
                <div className="absolute inset-0 z-0">
                    <DarkVeil hueShift={280} noiseIntensity={0.01} speed={0.3} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl mb-24">
                        <Badge icon={<ShieldCheck className="w-3 h-3" />} className="mb-6">
                            Trust & Security
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-light brand-heading mb-8">
                            Security at <br />
                            <span className="italic font-playfair text-white/30">Machine Speed</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light leading-relaxed font-playfair">
                            Enterprise-grade governance requires more than just rules. We build the infrastructure of trust that allows your organization to innovate with LLMs while maintaining total data sovereignty.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        {SECURITY_PILLARS.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-950/50 border border-white/5 rounded-[48px] p-10 backdrop-blur-3xl group hover:border-white/10 transition-all"
                            >
                                <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-bold brand-heading mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-10 font-light">
                                    {pillar.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.specs.map(spec => (
                                        <span key={spec} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-mono text-gray-500 uppercase tracking-widest border border-white/5">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications Row */}
                    <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 mb-32 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div>
                                <h3 className="text-3xl font-bold brand-heading mb-4">Certifications & Compliance</h3>
                                <p className="text-gray-400 text-sm max-w-xl font-light">
                                    We undergo rigorous third-party audits to ensure our systems meet and exceed global security standards. Our Trust Report is available for download to qualified enterprise partners.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-8 justify-center">
                                {["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR"].map(cert => (
                                    <div key={cert} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/60">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border-l border-white/10 hover:border-cyan-400 transition-colors group">
                            <FileText className="w-6 h-6 text-gray-600 mb-6 group-hover:text-cyan-400 transition-colors" />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Privacy Policy</h4>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6">How we handle and protect operational metadata.</p>
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 cursor-pointer">View Doc <ArrowRight className="w-3 h-3" /></span>
                        </div>
                        <div className="p-8 border-l border-white/10 hover:border-purple-400 transition-colors group">
                            <Server className="w-6 h-6 text-gray-600 mb-6 group-hover:text-purple-400 transition-colors" />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Infrastructure FAQ</h4>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6">Technical details on VPC and On-Prem deployments.</p>
                            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2 cursor-pointer">View Doc <ArrowRight className="w-3 h-3" /></span>
                        </div>
                        <div className="p-8 border-l border-white/10 hover:border-green-400 transition-colors group">
                            <Search className="w-6 h-6 text-gray-600 mb-6 group-hover:text-green-400 transition-colors" />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4">Security Whitepaper</h4>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6">In-depth look at our behavioral interception logic.</p>
                            <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest flex items-center gap-2 cursor-pointer">Download <Download className="w-3 h-3" /></span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

