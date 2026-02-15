-- AEGIS AI Governance: Production SQL Migration
-- Run this in your Supabase SQL Editor

-- 1. Create Lookup Tables (Handled by SQLAlchemy, but good for reference)
-- CREATE TABLE IF NOT EXISTS organizations (id uuid PRIMARY KEY, name text UNIQUE);
-- CREATE TABLE IF NOT EXISTS teams (id uuid PRIMARY KEY, org_id uuid REFERENCES organizations(id), name text);
-- CREATE TABLE IF NOT EXISTS applications (id uuid PRIMARY KEY, team_id uuid REFERENCES teams(id), name text);
-- CREATE TABLE IF NOT EXISTS ai_model_registry (id uuid PRIMARY KEY, provider text, name text, cost_per_1k_tokens numeric);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE ai_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE shadow_ai ENABLE ROW LEVEL SECURITY;

-- 3. Define RLS Policies

-- Public/Read-Only for demo (Restrict these in actual prod with auth.uid())
CREATE POLICY "Enable read access for all users" ON ai_events FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON policies FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON shadow_ai FOR SELECT USING (true);

-- Proposed Staff Architect Policies (uncomment to enforce real security)
/*
CREATE POLICY "Users can only see their own events" 
ON ai_events FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage policies" 
ON policies FOR ALL 
TO authenticated 
USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'));
*/

-- 4. Create Aggregation Indexes
CREATE INDEX IF NOT EXISTS idx_ai_events_timestamp ON ai_events (timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_ai_events_decision ON ai_events (decision);
CREATE INDEX IF NOT EXISTS idx_ai_events_risk_level ON ai_events (risk_level);
