import { Shield, LayoutDashboard, Activity, FileText, Eye, ScrollText, Settings, X, ChevronLeft, Home } from "lucide-react";
import { cn } from "@/components/core/utils";
import { Link } from "react-router-dom";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "ai-activity", label: "AI Activity", icon: Activity },
  { id: "policy-enforcement", label: "Policy Enforcement", icon: FileText },
  { id: "shadow-ai", label: "Shadow AI", icon: Eye },
  { id: "audit-logs", label: "Audit Logs", icon: ScrollText },
  { id: "settings", label: "Settings", icon: Settings }
];

export function Sidebar({ currentView, onNavigate, isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <aside className={cn(
      "bg-card border-r border-border flex flex-col transition-all duration-300",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div className={cn(
          "transition-all duration-300",
          isCollapsed ? "opacity-0 invisible w-0" : "opacity-100 visible w-auto"
        )}>
          <h1 className="font-bold text-xl tracking-tighter text-foreground">AEGIS</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Governance Control</p>
        </div>
        <button
          onClick={onToggleCollapse}
          className={cn(
            "p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground shrink-0",
            isCollapsed && "mx-auto"
          )}
          title={isCollapsed ? "Show Dashboard" : "Hide Dashboard"}
        >
          {isCollapsed ? <ChevronLeft className="w-5 h-5 rotate-180" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
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
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                isCollapsed && "justify-center px-0"
              )}
              title={isCollapsed ? item.label : ""}
            >
              <Icon className="w-4 h-4 shrink-0 transition-transform duration-300" />
              <span className={cn(
                "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden whitespace-nowrap",
                isCollapsed ? "max-w-0 opacity-0 invisible" : "max-w-[150px] opacity-100 visible"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-4">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all",
            isCollapsed && "justify-center"
          )}
        >
          <Home className="w-4 h-4 shrink-0" />
          <span className={cn(
            "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden whitespace-nowrap font-medium",
            isCollapsed ? "max-w-0 opacity-0 invisible" : "max-w-[150px] opacity-100 visible ml-3"
          )}>
            Return to Home
          </span>
        </Link>
        <div className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden whitespace-nowrap px-3",
          isCollapsed ? "max-w-0 opacity-0 invisible h-0" : "max-w-full opacity-100 h-auto"
        )}>
          <div className="text-[10px] text-muted-foreground">
            <div>Version 2.1.0</div>
            <div className="mt-1">© 2026 AEGIS AI</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
