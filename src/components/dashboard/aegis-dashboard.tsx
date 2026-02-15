import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { DashboardView } from "./dashboard-view";
import { AIActivityView } from "./ai-activity-view";
import { PolicyEnforcementView } from "./policy-enforcement-view";
import { ShadowAIView } from "./shadow-ai-view";
import { AuditLogsView } from "./audit-logs-view";
import { SettingsView } from "./settings-view";
import { EventDetailPanel } from "./event-detail-panel";
import { PolicyFormPanel } from "./policy-form-panel";
import type { AIEvent, Policy } from "@/types";
import { createPolicy, updatePolicy } from "@/api";

export function AEGISDashboard() {
  const [currentView, setCurrentView] = useState<string>("dashboard");
  const [selectedEvent, setSelectedEvent] = useState<AIEvent | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [isPolicyPanelOpen, setIsPolicyPanelOpen] = useState(false);
  const [timeFilter, setTimeFilter] = useState<string>("7days");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [policiesRefreshKey, setPoliciesRefreshKey] = useState(0);

  const handleCreatePolicy = () => {
    setSelectedPolicy(null);
    setIsPolicyPanelOpen(true);
  };

  const handleEditPolicy = (policy: Policy) => {
    setSelectedPolicy(policy);
    setIsPolicyPanelOpen(true);
  };

  const handleSavePolicy = async (policy: Partial<Policy>) => {
    try {
      if (selectedPolicy) {
        await updatePolicy(selectedPolicy.policy_id, policy);
      } else {
        await createPolicy(policy as Policy);
      }
      setPoliciesRefreshKey(prev => prev + 1);
      setIsPolicyPanelOpen(false);
    } catch (err) {
      console.error("Save failed", err);
      throw err;
    }
  };

  const handleDeletePolicy = async (id: string) => {
    try {
      const { deletePolicy } = await import("@/api");
      await deletePolicy(id);
      setPoliciesRefreshKey(prev => prev + 1);
      setIsPolicyPanelOpen(false);
    } catch (err) {
      console.error("Delete failed", err);
      throw err;
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <DashboardView 
            timeFilter={timeFilter} 
            onEventClick={setSelectedEvent} 
            refreshKey={policiesRefreshKey}
          />
        );
      case "ai-activity":
        return <AIActivityView searchQuery={searchQuery} timeFilter={timeFilter} onEventClick={setSelectedEvent} />;
      case "policy-enforcement":
        return (
          <PolicyEnforcementView 
            onCreateNew={handleCreatePolicy} 
            onEditPolicy={handleEditPolicy} 
            refreshKey={policiesRefreshKey}
          />
        );
      case "shadow-ai":
        return <ShadowAIView onEventClick={setSelectedEvent} />;
      case "audit-logs":
        return <AuditLogsView />;
      case "settings":
        return <SettingsView />;
      default:
        return (
          <DashboardView 
            timeFilter={timeFilter} 
            onEventClick={setSelectedEvent} 
            refreshKey={policiesRefreshKey}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden relative">
      <Sidebar
        currentView={currentView}
        onNavigate={setCurrentView}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {renderView()}
          </div>
        </main>
      </div>

      {selectedEvent && (
        <EventDetailPanel
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {isPolicyPanelOpen && (
        <PolicyFormPanel
          policy={selectedPolicy}
          onClose={() => setIsPolicyPanelOpen(false)}
          onSave={handleSavePolicy}
          onDelete={handleDeletePolicy}
        />
      )}
    </div>
  );
}
