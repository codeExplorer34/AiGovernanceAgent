import React from "react";
import { AEGISDashboard } from "../components/aegis-dashboard";
import { ThemeProvider } from "../components/theme-provider";

export function DashboardPage() {
    return (
        <ThemeProvider>
            <AEGISDashboard />
        </ThemeProvider>
    );
}
