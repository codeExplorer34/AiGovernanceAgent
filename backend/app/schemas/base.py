from pydantic import BaseModel, ConfigDict
from typing import Optional, List
from datetime import datetime
from uuid import UUID
from enum import Enum

# Re-using enums from models.base_types if possible, otherwise keeping them here for schema validation
class DecisionType(str, Enum):
    ALLOWED = "Allowed"
    FLAGGED = "Flagged"
    BLOCKED = "Blocked"

class RiskLevel(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

class ShadowAIStatus(str, Enum):
    APPROVED = "Approved"
    UNAPPROVED = "Unapproved"
    UNDER_REVIEW = "Under Review"

# New Entity Schemas
class Organization(BaseModel):
    id: UUID
    name: str
    model_config = ConfigDict(from_attributes=True)

class Team(BaseModel):
    id: UUID
    org_id: UUID
    name: str
    model_config = ConfigDict(from_attributes=True)

class Application(BaseModel):
    id: UUID
    team_id: UUID
    name: str
    model_config = ConfigDict(from_attributes=True)

class AIModelRegistry(BaseModel):
    id: UUID
    provider: str
    name: str
    cost_per_1k_tokens: Optional[float] = None
    model_config = ConfigDict(from_attributes=True)

class AIEventBase(BaseModel):
    event_id: str
    timestamp: datetime
    
    # New IDs
    user_id: Optional[UUID] = None
    app_id: Optional[UUID] = None
    model_id: Optional[UUID] = None
    
    # Legacy strings (keeping for UI compatibility)
    team: str
    app: str
    model: str
    
    data_type: str
    decision: DecisionType
    risk_level: RiskLevel
    policy_triggered: Optional[str] = None
    regulation_mapping: Optional[str] = None
    explanation: Optional[str] = None
    user: Optional[str] = None

class AIEventCreate(AIEventBase):
    pass

class AIEvent(AIEventBase):
    model_config = ConfigDict(from_attributes=True)

class PolicyBase(BaseModel):
    policy_id: str
    name: str
    risk_level: RiskLevel
    status: str  # "Active" | "Disabled"
    regulation: str
    violation_count: int
    description: str

class PolicyCreate(PolicyBase):
    violation_count: Optional[int] = 0

class PolicyUpdate(BaseModel):
    name: Optional[str] = None
    risk_level: Optional[RiskLevel] = None
    status: Optional[str] = None
    regulation: Optional[str] = None
    description: Optional[str] = None

class Policy(PolicyBase):
    model_config = ConfigDict(from_attributes=True)

class ShadowAIDetectionBase(BaseModel):
    detection_id: str
    tool_name: str
    source_app_id: Optional[UUID] = None
    source_app: str  # Legacy field
    user: str
    risk_level: RiskLevel
    first_seen: datetime
    last_seen: datetime
    status: ShadowAIStatus
    is_new: bool
    request_count: int

class ShadowAIDetectionCreate(ShadowAIDetectionBase):
    pass

class ShadowAIDetection(ShadowAIDetectionBase):
    model_config = ConfigDict(from_attributes=True)

class UsageTrend(BaseModel):
    date: str
    allowed: int
    flagged: int
    blocked: int

class DashboardMetrics(BaseModel):
    total_requests: int
    total_requests_change: float
    allowed_count: int
    flagged_count: int
    blocked_count: int
    active_policies: int
    active_policies_change: float
    shadow_ai_incidents: int
    shadow_ai_incidents_change: float
    overall_risk: RiskLevel
    governance_score: int
    usage_trends: List[UsageTrend]
