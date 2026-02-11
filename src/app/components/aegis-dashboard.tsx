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
<<<<<<< HEAD
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
=======
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca

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
<<<<<<< HEAD
      <Sidebar
        currentView={currentView}
        onNavigate={setCurrentView}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          timeFilter={timeFilter}
=======
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar 
          timeFilter={timeFilter} 
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca
          onTimeFilterChange={setTimeFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
<<<<<<< HEAD

        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {renderView()}
          </div>
=======
        
        <main className="flex-1 overflow-auto p-6">
          {renderView()}
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca
        </main>
      </div>

      {selectedEvent && (
<<<<<<< HEAD
        <EventDetailPanel
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
=======
        <EventDetailPanel 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
>>>>>>> 57f4e505e36fdaf9a12cd1c15c7823a25daf6aca
        />
      )}
    </div>
  );
}
