from sqlalchemy.orm import Session
from ..models import models
from ..schemas.base import DashboardMetrics

class GovernanceService:
    @staticmethod
    def get_dashboard_metrics(db: Session) -> DashboardMetrics:
        # Aggregating metrics from DB
        total_requests = db.query(models.AIEventModel).count()
        allowed_count = db.query(models.AIEventModel).filter(models.AIEventModel.decision == "Allowed").count()
        flagged_count = db.query(models.AIEventModel).filter(models.AIEventModel.decision == "Flagged").count()
        blocked_count = db.query(models.AIEventModel).filter(models.AIEventModel.decision == "Blocked").count()
        active_policies = db.query(models.PolicyModel).filter(models.PolicyModel.status == "Active").count()
        shadow_ai_incidents = db.query(models.ShadowAIDetectionModel).count()

        return {
            "total_requests": total_requests,
            "total_requests_change": 0.0,
            "allowed_count": allowed_count,
            "flagged_count": flagged_count,
            "blocked_count": blocked_count,
            "active_policies": active_policies,
            "active_policies_change": 0.0,
            "shadow_ai_incidents": shadow_ai_incidents,
            "shadow_ai_incidents_change": 0.0,
            "overall_risk": "Low" if blocked_count == 0 else "Medium",
            "governance_score": 100 if total_requests == 0 else int((allowed_count / total_requests) * 100)
        }

    @staticmethod
    def get_events(db: Session, skip: int = 0, limit: int = 100):
        return db.query(models.AIEventModel).offset(skip).limit(limit).all()

    @staticmethod
    def get_policies(db: Session):
        return db.query(models.PolicyModel).all()

    @staticmethod
    def get_shadow_ai(db: Session):
        return db.query(models.ShadowAIDetectionModel).all()
