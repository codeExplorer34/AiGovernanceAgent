# AEGIS AI Governance Dashboard - Overview

## 🎯 Executive Summary

A production-ready enterprise AI governance dashboard designed for regulated industries. Every screen is designed to **answer a regulator's "why" in under 30 seconds**.

## ✨ Key Features Implemented

### 1. **Light & Dark Mode**
- Fully implemented with toggle in top-right
- Persisted to localStorage
- Enterprise-grade contrast ratios for compliance dashboards

### 2. **Executive Overview (Dashboard)**
- 6 KPI cards with % change indicators:
  - Total AI Requests (24,567)
  - Allowed/Flagged/Blocked breakdown
  - Active Policies (42)
  - Shadow AI Incidents (18)
- **AI Governance Score**: 78% circular gauge
- **Overall Risk Level**: Medium with detailed breakdown
- **Usage Trends**: Dual charts (bar + line) showing AI requests over time

### 3. **AI Activity View**
- Filterable table with all AI governance events
- Columns: Timestamp, Team/App, Model, Data Type, Decision, Risk Level
- Search functionality
- Filter by Decision (Allowed/Flagged/Blocked)
- Filter by Risk Level (Low/Medium/High)
- Click any row to open detail panel

### 4. **Audit Narrative Panel** (The Differentiator)
- Slides in from right when event is clicked
- **Human-readable explanation** in calm, regulator-friendly language
- Shows:
  - Full audit narrative
  - Triggered policy
  - Regulation mapping
  - Risk assessment
  - All event metadata
- Example: "This request was blocked because customer PII was detected and the model used is not approved under Policy P-102 (GDPR Data Handling)..."

### 5. **Policy Enforcement View**
- List of all governance policies
- Mapped to regulations (GDPR, SOX, HIPAA, etc.)
- Violation counts with visual indicators
- Toggle Active/Disabled status
- Policy summary cards

### 6. **Shadow AI Detection**
- Alert banner for new detections
- Table showing unauthorized AI tools
- Source app, user, risk level, request counts
- Status: Approved/Unapproved/Under Review
- Action buttons: Approve/Block/Review

### 7. **Audit Logs**
- Complete audit trail
- Export functionality
- Compliance reporting (GDPR, SOX, HIPAA)
- Retention settings

### 8. **Settings**
- Organization configuration
- Notification settings
- Integration setup (SIEM, Slack, API)
- Data retention policies

## 🎨 Design System

### Colors
- **Green** (#22c55e): Allowed/Safe/Low Risk
- **Amber** (#f59e0b): Flagged/Review/Medium Risk
- **Red** (#ef4444): Blocked/High Risk
- **Blue** (#2563eb): Primary actions, AEGIS branding

### Components
- Clean cards with subtle shadows
- Rounded corners (--radius: 0.625rem)
- Clear typography hierarchy
- Hover states on interactive elements
- Smooth transitions

## 📊 Data Structures

All data structures are typed in `/src/app/components/types.ts`:

```typescript
interface AIEvent {
  event_id: string;
  timestamp: string;
  team: string;
  app: string;
  model: string;
  data_type: string;
  decision: "Allowed" | "Flagged" | "Blocked";
  risk_level: "Low" | "Medium" | "High";
  policy_triggered?: string;
  regulation_mapping?: string;
  explanation?: string;
}
```

## 🔌 Backend Integration Ready

### API Endpoints Expected
- `GET /api/metrics` - Dashboard metrics
- `GET /api/events` - AI governance events (filterable, paginated)
- `GET /api/policies` - Policy list
- `GET /api/shadow-ai` - Shadow AI detections
- `GET /api/usage-trends` - Time-series data

### States Handled
- ✅ Loading states (ready for skeleton loaders)
- ✅ Empty states (no data messages)
- ✅ Error states (ready for error boundaries)

### Mock Data
Located in `/src/app/components/mock-data.ts` with comprehensive examples including:
- 8 realistic AI governance events
- 8 enterprise policies mapped to real regulations
- 5 shadow AI detections
- 7 days of usage trend data

## 📁 Component Structure

```
/src/app/components/
├── aegis-dashboard.tsx          # Main container
├── theme-provider.tsx           # Dark/light mode
├── sidebar.tsx                  # Left navigation
├── top-bar.tsx                  # Search, filters, user menu
├── dashboard-view.tsx           # Executive overview
├── ai-activity-view.tsx         # Events table
├── event-detail-panel.tsx       # Audit narrative panel
├── policy-enforcement-view.tsx  # Policies
├── shadow-ai-view.tsx           # Shadow AI detection
├── audit-logs-view.tsx          # Audit trail
├── settings-view.tsx            # Configuration
├── governance-score-gauge.tsx   # Circular gauge component
├── types.ts                     # TypeScript types
└── mock-data.ts                 # Sample data + API docs
```

## 🎯 Target Audience

Designed for:
- **Bank CISOs**
- **Compliance Officers**
- **Regulators**
- **Enterprise Risk Managers**

## 🚀 Production-Ready Features

1. ✅ Responsive design
2. ✅ Dark mode with persistence
3. ✅ TypeScript for type safety
4. ✅ Comprehensive mock data
5. ✅ Real-time filtering & sorting
6. ✅ Accessibility (ARIA labels ready)
7. ✅ Clear data structures for backend
8. ✅ Regulation mapping (GDPR, SOX, HIPAA)
9. ✅ Audit narrative explanations
10. ✅ Enterprise color system

## 💡 Demo Talking Point

> "Every screen here is designed to answer a regulator's 'why' in under 30 seconds."

This is the key differentiator. When a regulator or auditor asks "Why was this AI request blocked?", the audit narrative panel provides a complete, human-readable explanation with:
- What happened
- Which policy was triggered
- What regulation it maps to
- Why the decision was made
- All relevant metadata

## 🔍 Sample Event Explanation

```
"This request was blocked because customer PII was detected and the 
model used is not approved under Policy P-102 (GDPR Data Handling). 
The request attempted to process personally identifiable information 
including email addresses and phone numbers through an external LLM 
without proper data protection safeguards."
```

**Regulation Mapped**: GDPR Article 25
**Risk Level**: High
**Policy**: P-102 (GDPR Data Handling)

## 📈 Next Steps (Suggestions)

1. **Connect to Real Backend**
   - Replace mock data with API calls
   - Add loading skeletons
   - Implement error boundaries

2. **Real-time Updates**
   - WebSocket for live events
   - Notification badges
   - Toast notifications for critical events

3. **Advanced Features**
   - Export audit reports (PDF/CSV)
   - Advanced filtering & search
   - Custom policy builder
   - Role-based access control

4. **Analytics**
   - Trend predictions
   - Anomaly detection
   - Risk scoring algorithms
   - Compliance dashboards by regulation

---

**Built with**: React, TypeScript, Tailwind CSS v4, Recharts, Radix UI
**Design Philosophy**: Clean, trustworthy, explainable, executive-friendly
