/**
 * SURO AI Governance Platform - Mock Data
 * 
 * This file contains mock data structures and sample data for the SURO dashboard.
 * 
 * BACKEND INTEGRATION GUIDE:
 * 
 * 1. API Endpoints Expected:
 *    - GET /api/metrics - Returns DashboardMetrics
 *    - GET /api/events?filter={filter}&timeRange={range} - Returns AIEvent[]
 *    - GET /api/policies - Returns Policy[]
 *    - GET /api/shadow-ai - Returns ShadowAIDetection[]
 *    - GET /api/usage-trends?timeRange={range} - Returns usage trend data
 * 
 * 2. Real-time Updates:
 *    - Consider implementing WebSocket connections for real-time event updates
 *    - Event IDs follow pattern: evt_{year}_{sequential_number}
 * 
 * 3. Data States to Implement:
 *    - Loading state: Show skeleton loaders
 *    - Empty state: "No data available" messages
 *    - Error state: Error boundary with retry functionality
 * 
 * 4. Filters & Pagination:
 *    - All list endpoints should support pagination (page, limit)
 *    - Filter by: decision type, risk level, date range, team, model
 *    - Sort by: timestamp, risk level, decision
 */

import type { AIEvent, Policy, ShadowAIDetection, DashboardMetrics } from "./types";

export const mockMetrics: DashboardMetrics = {
  total_requests: 24567,
  total_requests_change: 12.5,
  allowed_count: 18234,
  flagged_count: 4128,
  blocked_count: 2205,
  active_policies: 42,
  active_policies_change: 5.2,
  shadow_ai_incidents: 18,
  shadow_ai_incidents_change: -23.4,
  overall_risk: "Medium",
  governance_score: 78
};

export const mockEvents: AIEvent[] = [
  {
    event_id: "evt_2026_001",
    timestamp: "2026-02-04T14:32:18Z",
    team: "Customer Success",
    app: "CRM Integration",
    model: "GPT-4",
    data_type: "Customer PII",
    decision: "Blocked",
    risk_level: "High",
    policy_triggered: "P-102",
    regulation_mapping: "GDPR Article 25",
    explanation: "This request was blocked because customer PII was detected and the model used is not approved under Policy P-102 (GDPR Data Handling). The request attempted to process personally identifiable information including email addresses and phone numbers through an external LLM without proper data protection safeguards.",
    user: "sarah.chen@company.com"
  },
  {
    event_id: "evt_2026_002",
    timestamp: "2026-02-04T14:28:45Z",
    team: "Marketing",
    app: "Content Generator",
    model: "Claude 3",
    data_type: "Public Marketing Copy",
    decision: "Allowed",
    risk_level: "Low",
    policy_triggered: "P-205",
    regulation_mapping: "Internal Content Policy",
    explanation: "Request was allowed as it processes only public marketing content with approved AI model Claude 3 under Policy P-205.",
    user: "james.wilson@company.com"
  },
  {
    event_id: "evt_2026_003",
    timestamp: "2026-02-04T14:15:22Z",
    team: "Finance",
    app: "Invoice Processor",
    model: "External LLM",
    data_type: "Financial Records",
    decision: "Flagged",
    risk_level: "High",
    policy_triggered: "P-301",
    regulation_mapping: "SOX Compliance",
    explanation: "This request was flagged for manual review because it attempts to process financial records using an unapproved external LLM. Policy P-301 requires all financial data processing to use certified, audited AI models. Compliance review is required before proceeding.",
    user: "michael.roberts@company.com"
  },
  {
    event_id: "evt_2026_004",
    timestamp: "2026-02-04T13:58:11Z",
    team: "Product",
    app: "User Feedback Analyzer",
    model: "Internal Model v2.1",
    data_type: "Product Feedback",
    decision: "Allowed",
    risk_level: "Low",
    policy_triggered: "P-110",
    regulation_mapping: "Internal AI Usage Policy",
    explanation: "Request approved under Policy P-110 for internal model processing of non-sensitive product feedback data.",
    user: "emma.davis@company.com"
  },
  {
    event_id: "evt_2026_005",
    timestamp: "2026-02-04T13:42:33Z",
    team: "HR",
    app: "Resume Screener",
    model: "GPT-4",
    data_type: "Candidate PII",
    decision: "Blocked",
    risk_level: "High",
    policy_triggered: "P-102",
    regulation_mapping: "GDPR Article 22, Equal Employment Opportunity",
    explanation: "Blocked due to processing of candidate personally identifiable information through external AI without proper consent mechanisms and bias auditing as required by Policy P-102 and employment regulations.",
    user: "david.nguyen@company.com"
  },
  {
    event_id: "evt_2026_006",
    timestamp: "2026-02-04T13:21:07Z",
    team: "Engineering",
    app: "Code Assistant",
    model: "GitHub Copilot",
    data_type: "Source Code",
    decision: "Flagged",
    risk_level: "Medium",
    policy_triggered: "P-405",
    regulation_mapping: "IP Protection Policy",
    explanation: "Flagged for review as proprietary source code is being processed by external AI. Policy P-405 requires legal review for any code containing trade secrets sent to third-party AI services.",
    user: "alex.kim@company.com"
  },
  {
    event_id: "evt_2026_007",
    timestamp: "2026-02-04T12:55:19Z",
    team: "Legal",
    app: "Contract Analyzer",
    model: "Internal Legal LLM",
    data_type: "Legal Documents",
    decision: "Allowed",
    risk_level: "Low",
    policy_triggered: "P-501",
    regulation_mapping: "Attorney-Client Privilege",
    explanation: "Approved under Policy P-501 using certified internal legal AI model with appropriate privilege protections and audit logging.",
    user: "sophia.martinez@company.com"
  },
  {
    event_id: "evt_2026_008",
    timestamp: "2026-02-04T12:33:42Z",
    team: "Sales",
    app: "Proposal Generator",
    model: "Unauthorized ChatGPT",
    data_type: "Client Information",
    decision: "Blocked",
    risk_level: "High",
    policy_triggered: "P-999",
    regulation_mapping: "Shadow AI Detection",
    explanation: "Blocked as unauthorized AI tool (ChatGPT) was detected processing client information. This is a Shadow AI incident under Policy P-999. All AI tools must be approved before use with company or client data.",
    user: "ryan.taylor@company.com"
  }
];

export const mockPolicies: Policy[] = [
  {
    policy_id: "P-102",
    name: "GDPR Data Handling",
    risk_level: "High",
    status: "Active",
    regulation: "GDPR Article 25, Article 32",
    violation_count: 143,
    description: "Ensures all AI processing of EU citizen PII complies with GDPR requirements including data minimization, purpose limitation, and appropriate technical safeguards."
  },
  {
    policy_id: "P-110",
    name: "Internal AI Usage Policy",
    risk_level: "Low",
    status: "Active",
    regulation: "Internal Policy",
    violation_count: 12,
    description: "Governs use of approved internal AI models for non-sensitive business operations."
  },
  {
    policy_id: "P-205",
    name: "Marketing Content Generation",
    risk_level: "Low",
    status: "Active",
    regulation: "FTC Advertising Guidelines",
    violation_count: 8,
    description: "Controls AI-generated marketing content to ensure compliance with advertising regulations and brand guidelines."
  },
  {
    policy_id: "P-301",
    name: "Financial Data Processing",
    risk_level: "High",
    status: "Active",
    regulation: "SOX, GLBA",
    violation_count: 67,
    description: "Mandates certified, audited AI models for processing financial records and ensures SOX compliance."
  },
  {
    policy_id: "P-405",
    name: "Intellectual Property Protection",
    risk_level: "Medium",
    status: "Active",
    regulation: "Trade Secret Law, Patent Law",
    violation_count: 34,
    description: "Prevents exposure of proprietary code, algorithms, and trade secrets to external AI services."
  },
  {
    policy_id: "P-501",
    name: "Legal Privilege Protection",
    risk_level: "High",
    status: "Active",
    regulation: "Attorney-Client Privilege",
    violation_count: 3,
    description: "Ensures AI processing of legal documents maintains attorney-client privilege and confidentiality."
  },
  {
    policy_id: "P-601",
    name: "Healthcare Data AI Processing",
    risk_level: "High",
    status: "Active",
    regulation: "HIPAA",
    violation_count: 89,
    description: "Governs AI use with protected health information ensuring HIPAA compliance."
  },
  {
    policy_id: "P-999",
    name: "Shadow AI Detection & Prevention",
    risk_level: "High",
    status: "Active",
    regulation: "Enterprise AI Governance",
    violation_count: 156,
    description: "Detects and prevents use of unauthorized AI tools that bypass governance controls."
  }
];

export const mockShadowAI: ShadowAIDetection[] = [
  {
    detection_id: "sha_001",
    tool_name: "ChatGPT (Unauthorized)",
    source_app: "Browser Extension",
    user: "ryan.taylor@company.com",
    risk_level: "High",
    first_seen: "2026-02-01T09:15:00Z",
    last_seen: "2026-02-04T12:33:42Z",
    status: "Unapproved",
    is_new: true,
    request_count: 47
  },
  {
    detection_id: "sha_002",
    tool_name: "Midjourney",
    source_app: "Design Team Slack",
    user: "multiple.users@company.com",
    risk_level: "Medium",
    first_seen: "2026-01-28T14:22:00Z",
    last_seen: "2026-02-04T11:18:30Z",
    status: "Under Review",
    is_new: false,
    request_count: 234
  },
  {
    detection_id: "sha_003",
    tool_name: "Jasper.ai",
    source_app: "Marketing Desktop",
    user: "marketing.team@company.com",
    risk_level: "Medium",
    first_seen: "2026-01-15T08:45:00Z",
    last_seen: "2026-02-04T10:05:12Z",
    status: "Approved",
    is_new: false,
    request_count: 1823
  },
  {
    detection_id: "sha_004",
    tool_name: "Perplexity AI",
    source_app: "Research Browser",
    user: "research.dept@company.com",
    risk_level: "Low",
    first_seen: "2026-02-03T16:30:00Z",
    last_seen: "2026-02-04T09:45:22Z",
    status: "Under Review",
    is_new: true,
    request_count: 12
  },
  {
    detection_id: "sha_005",
    tool_name: "Anthropic Claude (Direct API)",
    source_app: "Engineering Scripts",
    user: "dev.team@company.com",
    risk_level: "High",
    first_seen: "2026-01-20T11:00:00Z",
    last_seen: "2026-02-04T08:22:15Z",
    status: "Unapproved",
    is_new: false,
    request_count: 567
  }
];

export const mockUsageTrends = [
  { date: "Jan 29", allowed: 2450, flagged: 420, blocked: 280 },
  { date: "Jan 30", allowed: 2680, flagged: 390, blocked: 310 },
  { date: "Jan 31", allowed: 2520, flagged: 450, blocked: 295 },
  { date: "Feb 1", allowed: 2890, flagged: 480, blocked: 325 },
  { date: "Feb 2", allowed: 2750, flagged: 510, blocked: 340 },
  { date: "Feb 3", allowed: 3020, flagged: 495, blocked: 315 },
  { date: "Feb 4", allowed: 2924, flagged: 533, blocked: 360 }
];
