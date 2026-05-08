import React from "react";
import { SURODashboard } from "../components/suro-dashboard";
import { ThemeProvider } from "../components/theme-provider";

export function DashboardPage() {
    return (
        <ThemeProvider>
            <SURODashboard />
        </ThemeProvider>
    );
}

