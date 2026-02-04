import { useState } from "react";
import { Sidebar } from "./sidebar";
import { TopBar } from "./top-bar";
import { DashboardView } from "./dashboard-view";
import { AIActivityView } from "./ai-activity-view";
import { PolicyEnforcementView } from "./policy-enforcement-view";
import { ShadowAIView } from "./shadow-ai-view";
import { AuditLogsView } from "./audit-logs-view";
import { SettingsView } from "./settings-view";
import { EventDetailPanel } from "./event-detail-panel";
import type { AIEvent } from "./types";

export function AEGISDashboard() {
  const [currentView, setCurrentView] = useState<string>("dashboard");
  const [selectedEvent, setSelectedEvent] = useState<AIEvent | null>(null);
  const [timeFilter, setTimeFilter] = useState<string>("7days");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView timeFilter={timeFilter} onEventClick={setSelectedEvent} />;
      case "ai-activity":
        return <AIActivityView searchQuery={searchQuery} timeFilter={timeFilter} onEventClick={setSelectedEvent} />;
      case "policy-enforcement":
        return <PolicyEnforcementView />;
      case "shadow-ai":
        return <ShadowAIView onEventClick={setSelectedEvent} />;
      case "audit-logs":
        return <AuditLogsView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardView timeFilter={timeFilter} onEventClick={setSelectedEvent} />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar 
          timeFilter={timeFilter} 
          onTimeFilterChange={setTimeFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <main className="flex-1 overflow-auto p-6">
          {renderView()}
        </main>
      </div>

      {selectedEvent && (
        <EventDetailPanel 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}
