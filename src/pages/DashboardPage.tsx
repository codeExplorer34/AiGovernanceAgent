import React from "react";
import { AEGISDashboard } from "@/components/dashboard/aegis-dashboard";
import { ThemeProvider } from "@/components/layout/theme-provider";

export function DashboardPage() {
    return (
        <ThemeProvider>
            <AEGISDashboard />
        </ThemeProvider>
    );
}
