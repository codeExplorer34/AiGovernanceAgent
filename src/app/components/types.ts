export type DecisionType = "Allowed" | "Flagged" | "Blocked";
export type RiskLevel = "Low" | "Medium" | "High";
export type ShadowAIStatus = "Approved" | "Unapproved" | "Under Review";

export interface AIEvent {
  event_id: string;
  timestamp: string;
  team: string;
  app: string;
  model: string;
  data_type: string;
  decision: DecisionType;
  risk_level: RiskLevel;
  policy_triggered?: string;
  regulation_mapping?: string;
  explanation?: string;
  user?: string;
}

export interface Policy {
  policy_id: string;
  name: string;
  risk_level: RiskLevel;
  status: "Active" | "Disabled";
  regulation: string;
  violation_count: number;
  description: string;
}

export interface ShadowAIDetection {
  detection_id: string;
  tool_name: string;
  source_app: string;
  user: string;
  risk_level: RiskLevel;
  first_seen: string;
  last_seen: string;
  status: ShadowAIStatus;
  is_new: boolean;
  request_count: number;
}

export interface DashboardMetrics {
  total_requests: number;
  total_requests_change: number;
  allowed_count: number;
  flagged_count: number;
  blocked_count: number;
  active_policies: number;
  active_policies_change: number;
  shadow_ai_incidents: number;
  shadow_ai_incidents_change: number;
  overall_risk: RiskLevel;
  governance_score: number;
}
