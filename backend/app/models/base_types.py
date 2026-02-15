from enum import Enum

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
