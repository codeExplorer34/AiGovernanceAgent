import { Shield, LayoutDashboard, Activity, FileText, Eye, ScrollText, Settings } from "lucide-react";
import { cn } from "./ui/utils";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "ai-activity", label: "AI Activity", icon: Activity },
  { id: "policy-enforcement", label: "Policy Enforcement", icon: FileText },
  { id: "shadow-ai", label: "Shadow AI", icon: Eye },
  { id: "audit-logs", label: "Audit Logs", icon: ScrollText },
  { id: "settings", label: "Settings", icon: Settings }
];

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">AEGIS</h1>
            <p className="text-xs text-muted-foreground">AI Governance</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <div>Version 2.1.0</div>
          <div className="mt-1">© 2026 AEGIS</div>
        </div>
      </div>
    </aside>
  );
}
