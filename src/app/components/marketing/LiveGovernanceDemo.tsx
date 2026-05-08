import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, FileSearch, Download, Zap } from "lucide-react";

interface DetectedEntity {
    type: string;
    value: string;
    start: number;
    end: number;
}

const EXAMPLE_PROMPTS = [
    "Show me all customer emails from john.doe@gmail.com",
    "Extract credit card numbers from payment database",
    "List all SSN: 123-45-6789 from employee records",
    "Generate report with user passwords"
];

const PII_PATTERNS = [
    { regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, type: "Email Address" },
    { regex: /\b\d{3}-\d{2}-\d{4}\b/g, type: "SSN" },
    { regex: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g, type: "Credit Card" },
    { regex: /\b(password|passwd|pwd)\b/gi, type: "Credential Reference" }
];

export function LiveGovernanceDemo() {
    const [input, setInput] = useState("");
    const [isScanning, setIsScanning] = useState(false);
    const [detectedEntities, setDetectedEntities] = useState<DetectedEntity[]>([]);
    const [isBlocked, setIsBlocked] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (input.length > 0) {
            const entities: DetectedEntity[] = [];
            PII_PATTERNS.forEach(({ regex, type }) => {
                const matches = input.matchAll(regex);
                for (const match of matches) {
                    if (match.index !== undefined) {
                        entities.push({
                            type,
                            value: match[0],
                            start: match.index,
                            end: match.index + match[0].length
                        });
                    }
                }
            });
            setDetectedEntities(entities);
        } else {
            setDetectedEntities([]);
        }
    }, [input]);

    const handleScan = () => {
        setIsScanning(true);
        setShowResult(false);

        setTimeout(() => {
            setIsScanning(false);
            setShowResult(true);
            setIsBlocked(detectedEntities.length > 0);
        }, 1500);
    };

    const loadExample = (example: string) => {
        setInput(example);
        setShowResult(false);
    };

    const highlightText = () => {
        if (detectedEntities.length === 0) return input;

        let result = input;
        const sortedEntities = [...detectedEntities].sort((a, b) => b.start - a.start);

        sortedEntities.forEach(entity => {
            const before = result.substring(0, entity.start);
            const highlighted = result.substring(entity.start, entity.end);
            const after = result.substring(entity.end);
            result = before + `<mark class="bg-red-500/20 text-red-400 px-1 rounded">${highlighted}</mark>` + after;
        });

        return result;
    };

    return (
        <section className="py-32 px-8 bg-gradient-to-b from-black via-purple-900/5 to-black">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
                    >
                        <FileSearch className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">Interactive Demo</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        See Governance <span className="text-cyan-400">In Action</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Type a prompt below and watch SURO detect sensitive data in real-time.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-mono uppercase tracking-wider text-gray-500">Prompt Input</label>
                            <motion.div
                                className="flex items-center gap-2 bg-red-900/20 border border-red-500/30 px-4 py-2 rounded-lg"
                                animate={{ scale: detectedEntities.length > 0 ? [1, 1.05, 1] : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="text-2xl font-bold text-red-400 tabular-nums">
                                    {detectedEntities.length}
                                </span>
                                <span className="text-[10px] text-red-400/70 font-mono uppercase tracking-wider">
                                    Entities Detected
                                </span>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <textarea
                                ref={textareaRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter your AI prompt here..."
                                className="w-full h-48 bg-white/5 border border-white/10 rounded-xl p-4 text-white font-mono text-sm resize-none focus:outline-none focus:border-cyan-500/50 transition-colors"
                                style={{ caretColor: "#22d3ee" }}
                            />
                            {detectedEntities.length > 0 && (
                                <div
                                    className="absolute inset-0 pointer-events-none p-4 font-mono text-sm whitespace-pre-wrap break-words"
                                    dangerouslySetInnerHTML={{ __html: highlightText() }}
                                />
                            )}
                        </div>

                        {/* Quick Examples */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase tracking-wider text-gray-600">Quick Examples</label>
                            <div className="grid grid-cols-1 gap-2">
                                {EXAMPLE_PROMPTS.map((example, i) => (
                                    <button
                                        key={i}
                                        onClick={() => loadExample(example)}
                                        className="group text-left text-xs bg-gradient-to-r from-gray-900/80 to-gray-800/80 hover:from-cyan-900/20 hover:to-blue-900/20 border border-gray-700 hover:border-cyan-500/30 rounded-lg px-4 py-3 text-gray-300 hover:text-cyan-300 transition-all font-mono shadow-sm hover:shadow-cyan-500/10 relative overflow-hidden"
                                    >
                                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-cyan-500/60">&gt;</span> {example}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleScan}
                            disabled={input.length === 0 || isScanning}
                            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-bold py-4 rounded-full transition-all disabled:text-gray-500"
                        >
                            {isScanning ? "Scanning..." : "Run Governance Check"}
                        </button>
                    </div>

                    {/* Result Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-mono uppercase tracking-wider text-gray-500">Governance Result</label>
                        </div>

                        <AnimatePresence mode="wait">
                            {isScanning && (
                                <motion.div
                                    key="scanning"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-8 flex items-center justify-center min-h-[300px] relative overflow-hidden"
                                >
                                    {/* Scanning line effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent h-20"
                                        animate={{ y: [-80, 300] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    />
                                    <div className="text-center relative z-10">
                                        <div className="relative w-16 h-16 mx-auto mb-4">
                                            <motion.div
                                                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute inset-0 border-2 border-cyan-500 border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        </div>
                                        <p className="font-mono text-sm text-cyan-400 mb-2">Analyzing request...</p>
                                        <p className="font-mono text-xs text-cyan-600">Running policy checks</p>
                                    </div>
                                </motion.div>
                            )}

                            {!isScanning && showResult && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`${isBlocked ? 'bg-cyan-900/10 border-cyan-500/20' : 'bg-green-900/10 border-green-500/20'} border rounded-xl p-6 min-h-[300px] shadow-2xl transition-all`}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        {isBlocked ? (
                                            <div className="p-2 bg-cyan-400/20 rounded-lg">
                                                <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                                            </div>
                                        ) : (
                                            <CheckCircle className="w-6 h-6 text-green-400" />
                                        )}
                                        <div>
                                            <h3 className={`text-lg font-bold ${isBlocked ? 'text-cyan-400' : 'text-green-400'}`}>
                                                {isBlocked ? "Secure Intercept & Reroute" : "Direct Safe Route"}
                                            </h3>
                                            <p className="text-xs font-mono text-gray-500">
                                                {new Date().toLocaleTimeString()} UTC // SURO_ACTIVE
                                            </p>
                                        </div>
                                    </div>

                                    {isBlocked && (
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-sm font-bold text-white mb-2">Managed Entities</h4>
                                                <div className="space-y-2">
                                                    {detectedEntities.map((entity, i) => (
                                                        <div key={i} className="bg-black/30 rounded-lg p-3 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors group/entity">
                                                            <div className="flex items-center justify-between">
                                                                <span className="font-mono text-xs text-cyan-400/70 group-hover/entity:text-cyan-400 transition-colors">{entity.type}</span>
                                                                <span className="font-mono text-xs text-gray-500">{entity.value}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-white/10">
                                                <h4 className="text-sm font-bold text-white mb-2">Enablement Protocol Applied</h4>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    <strong className="text-cyan-400/80">Protocol E-401 (Secure Bridge)</strong> has successfully sanitized your input and authorized a reroute through your managed corporate LLM context. No productive flow was interrupted.
                                                </p>
                                            </div>

                                            <button className="w-full mt-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                                                <Download className="w-4 h-4" />
                                                <span className="text-sm font-medium">Download Audit Report</span>
                                            </button>
                                        </div>
                                    )}

                                    {!isBlocked && (
                                        <div className="text-center py-12">
                                            <p className="text-gray-400">
                                                No sensitive data detected. Request is safe to proceed.
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {!isScanning && !showResult && (
                                <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                                    <p className="text-gray-600 font-mono text-sm text-center">
                                        Enter a prompt and click "Run Governance Check"<br />to see SURO in action.
                                    </p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

