import { X, Clock, Users, Bot, Database, Shield, FileText, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import type { AIEvent, DecisionType, RiskLevel } from "./types";
import { format } from "date-fns";

interface EventDetailPanelProps {
  event: AIEvent;
  onClose: () => void;
}

export function EventDetailPanel({ event, onClose }: EventDetailPanelProps) {
  const getDecisionColor = (decision: DecisionType) => {
    switch (decision) {
      case "Allowed": return "text-green-600";
      case "Flagged": return "text-amber-600";
      case "Blocked": return "text-red-600";
    }
  };

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case "Low": return "text-green-600";
      case "Medium": return "text-amber-600";
      case "High": return "text-red-600";
    }
  };

  const getDecisionBadge = (decision: DecisionType) => {
    const variants = {
      Allowed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Flagged: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      Blocked: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[decision]}>{decision}</Badge>;
  };

  const getRiskBadge = (risk: RiskLevel) => {
    const variants = {
      Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Medium: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return <Badge className={variants[risk]}>{risk}</Badge>;
  };

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-card border-l border-border shadow-2xl overflow-y-auto z-50 animate-in slide-in-from-right duration-300">
      <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
        <h3 className="font-semibold">Event Details</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Audit Narrative - The Key Differentiator */}
        <div className="bg-muted/50 rounded-lg p-4 border border-border">
          <div className="flex items-start gap-3">
            <AlertCircle className={`w-5 h-5 mt-0.5 ${getDecisionColor(event.decision)}`} />
            <div>
              <h4 className="font-semibold mb-2">Audit Narrative</h4>
              <p className="text-sm leading-relaxed">
                {event.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Event Information */}
        <div>
          <h4 className="font-semibold mb-4">Event Information</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">Timestamp</div>
                <div className="text-sm">{format(new Date(event.timestamp), "PPpp")}</div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">Team & Application</div>
                <div className="text-sm font-medium">{event.team}</div>
                <div className="text-sm text-muted-foreground">{event.app}</div>
                {event.user && (
                  <div className="text-xs text-muted-foreground mt-1">User: {event.user}</div>
                )}
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Bot className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">AI Model</div>
                <div className="text-sm">{event.model}</div>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Database className="w-4 h-4 text-muted-foreground mt-1" />
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">Data Type</div>
                <div className="text-sm">{event.data_type}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decision & Risk */}
        <div>
          <h4 className="font-semibold mb-4">Decision & Risk Assessment</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Decision</span>
              {getDecisionBadge(event.decision)}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Risk Level</span>
              {getRiskBadge(event.risk_level)}
            </div>
          </div>
        </div>

        {/* Policy & Compliance */}
        {event.policy_triggered && (
          <div>
            <h4 className="font-semibold mb-4">Policy & Compliance</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-muted-foreground mt-1" />
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">Triggered Policy</div>
                  <div className="text-sm font-medium">{event.policy_triggered}</div>
                </div>
              </div>

              {event.regulation_mapping && (
                <>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <FileText className="w-4 h-4 text-muted-foreground mt-1" />
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground">Regulation Mapping</div>
                      <div className="text-sm">{event.regulation_mapping}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Event ID */}
        <div className="pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground">Event ID</div>
          <div className="text-xs font-mono bg-muted px-2 py-1 rounded mt-1">{event.event_id}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Export Report</Button>
          <Button variant="outline" className="flex-1">View Policy</Button>
        </div>
      </div>
    </div>
  );
}
