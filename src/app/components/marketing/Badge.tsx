import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export function Badge({ children, icon, className }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 backdrop-blur-sm",
                className
            )}
        >
            {icon && <span className="text-purple-400">{icon}</span>}
            <span className="text-sm font-medium text-purple-200">{children}</span>
        </div>
    );
}
