import React from "react";

interface CustomIconProps {
    className?: string;
}

// Shield with data streams (for governance/protection)
export function ShieldStreamIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12h6M9 15h6M9 9h6" strokeLinecap="round" opacity="0.5" />
        </svg>
    );
}

// Eye with scanning lines (for monitoring)
export function ScanEyeIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z" strokeLinecap="round" />
            <circle cx="12" cy="12.5" r="3" strokeLinecap="round" />
            <path d="M6 12.5h12" strokeLinecap="round" opacity="0.3" />
        </svg>
    );
}

// Lock with hexagon (for security)
export function HexLockIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L20 7v10l-8 5-8-5V7l8-5z" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="9" y="11" width="6" height="6" rx="1" strokeLinecap="round" />
            <path d="M10 11V9a2 2 0 0 1 4 0v2" strokeLinecap="round" />
        </svg>
    );
}

// Lightning bolt with nodes (for real-time/speed)
export function BoltNodesIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="7" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
            <circle cx="17" cy="16" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
    );
}

// Document with checkmark (for audit/compliance)
export function AuditDocIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Users with shield (for team governance)
export function TeamShieldIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 11v3c0 2-1 3-3 3" strokeLinecap="round" opacity="0.6" />
            <path d="M20 8l-1.5 1.5L17 8l1.5-1.5L20 8z" strokeLinecap="round" opacity="0.6" />
        </svg>
    );
}

// Activity monitor (for real-time monitoring)
export function MonitorPulseIcon({ className = "w-6 h-6" }: CustomIconProps) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 10h2l2-3 2 6 2-3h2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 21h8" strokeLinecap="round" />
        </svg>
    );
}

