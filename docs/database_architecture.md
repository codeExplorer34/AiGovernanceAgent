# AEGIS Database Architecture: Production Specification

## 1. Application Logic & Data Flow

AEGIS acts as a **Governance Proxy/Firewall**.

1. **Intercept**: AI calls are intercepted at the network layer.
2. **Contextualize**: Requests are mapped to an `Organization` -> `Team` -> `Application`.
3. **Analyze**: The `Policy Engine` evaluates the prompt/response.
4. **Log & Stream**: Resulting `AI_Events` are logged with detailed metadata and streamed to the Dashboard.

## 2. Updated Database Schema (PostgreSQL)

### Table: organizations

| Column     | Type        | Constraints                   |
| :--------- | :---------- | :---------------------------- |
| id         | uuid        | PK, default gen_random_uuid() |
| name       | text        | UNIQUE, NOT NULL              |
| created_at | timestamptz | default now()                 |

### Table: teams

| Column      | Type | Constraints          |
| :---------- | :--- | :------------------- |
| id          | uuid | PK                   |
| org_id      | uuid | FK(organizations.id) |
| name        | text | NOT NULL             |
| description | text |                      |

### Table: users (Supabase Auth Link)

| Column  | Type | Constraints                  |
| :------ | :--- | :--------------------------- |
| id      | uuid | PK (links to auth.users.id)  |
| team_id | uuid | FK(teams.id)                 |
| role    | text | 'user', 'team_lead', 'admin' |

### Table: ai_models

| Column             | Type    | Constraints               |
| :----------------- | :------ | :------------------------ |
| id                 | uuid    | PK                        |
| provider           | text    | NOT NULL (e.g., 'openai') |
| name               | text    | NOT NULL (e.g., 'gpt-4')  |
| cost_per_1k_tokens | numeric |                           |

### Table: ai_events (Primary Event Store)

| Column            | Type            | Constraints                            |
| :---------------- | :-------------- | :------------------------------------- |
| id                | uuid            | PK                                     |
| timestamp         | timestamptz     | index                                  |
| user_id           | uuid            | FK(users.id), index                    |
| app_id            | uuid            | FK(applications.id), index             |
| model_id          | uuid            | FK(ai_models.id), index                |
| decision          | decision_type   | ENUM ('Allowed', 'Flagged', 'Blocked') |
| risk_level        | risk_level_type | ENUM ('Low', 'Medium', 'High')         |
| policy_id         | text            | FK(policies.policy_id)                 |
| prompt_tokens     | int             |                                        |
| completion_tokens | int             |                                        |

## 3. SQL Deliverable: Schema & RLS

```sql
-- 1. Custom Types
CREATE TYPE decision_type AS ENUM ('Allowed', 'Flagged', 'Blocked');
CREATE TYPE risk_level AS ENUM ('Low', 'Medium', 'High');

-- 2. Enable RLS
ALTER TABLE ai_events ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies
-- Users can see their own events
CREATE POLICY "Users can view own events"
ON ai_events FOR SELECT
USING (auth.uid() = user_id);

-- Team Leads can see team events
CREATE POLICY "Team leads can view team data"
ON ai_events FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'team_lead'
    AND users.team_id = (SELECT team_id FROM users WHERE id = ai_events.user_id)
  )
);

-- 4. Performance Indexes
CREATE INDEX idx_events_timestamp ON ai_events (timestamp DESC);
CREATE INDEX idx_events_decision ON ai_events (decision);
CREATE INDEX idx_events_risk ON ai_events (risk_level);
```

## 4. Required Code Changes

### Backend (SQLAlchemy)

- Update `AIEventModel` to use `ForeignKey` to the new lookup tables.
- Implement a `User` model that mirrors the Supabase Auth metadata.
- Adjust `seed.py` to create the lookup entities (Teams, Apps, Models) before events.

### Frontend (TypeScript)

- Update `AIEvent` interface to include the full object shapes (e.g., `team: Team` instead of `team: string`) or use `team_name` flattened in the API.
- Add "Admin/Policy" management views that allow CRUD on the new normalized tables.
