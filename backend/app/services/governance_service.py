from sqlalchemy.orm import Session
from sqlalchemy import func
from datetime import datetime, timedelta
from ..models import models
from ..schemas.base import DashboardMetrics, PolicyCreate, PolicyUpdate

class GovernanceService:
    @staticmethod
    @staticmethod
    def get_dashboard_metrics(db: Session) -> DashboardMetrics:
        # Aggregating metrics from DB
        total_requests = db.query(models.AIEventModel).count()
        allowed_count = db.query(models.AIEventModel).filter(models.AIEventModel.decision == "Allowed").count()
        flagged_count = db.query(models.AIEventModel).filter(models.AIEventModel.decision == "Flagged").count()
        blocked_count = db.query(models.AIEventModel).filter(models.AIEventModel.decision == "Blocked").count()
        active_policies = db.query(models.PolicyModel).filter(models.PolicyModel.status == "Active").count()
        shadow_ai_incidents = db.query(models.ShadowAIDetectionModel).count()

        # Get Usage Trends (Last 7 Days)
        usage_trends = GovernanceService.get_usage_trends(db)

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
            "governance_score": 100 if total_requests == 0 else int((allowed_count / total_requests) * 100),
            "usage_trends": usage_trends
        }

    @staticmethod
    def get_usage_trends(db: Session, days: int = 7):
        end_date = datetime.utcnow()
        start_date = end_date - timedelta(days=days-1)
        
        # Group by date (truncated to day) and decision
        # We'll use a dictionary to store counts per day
        trend_map = {}
        for i in range(days):
            date_str = (start_date + timedelta(days=i)).strftime("%Y-%m-%d")
            trend_map[date_str] = {"allowed": 0, "flagged": 0, "blocked": 0}

        # Query events in range
        results = db.query(
            func.date(models.AIEventModel.timestamp).label("date"),
            models.AIEventModel.decision,
            func.count(models.AIEventModel.id)
        ).filter(
            models.AIEventModel.timestamp >= start_date
        ).group_by(
            func.date(models.AIEventModel.timestamp),
            models.AIEventModel.decision
        ).all()

        for date, decision, count in results:
            date_str = str(date)
            if date_str in trend_map:
                key = decision.lower()
                if key in trend_map[date_str]:
                    trend_map[date_str][key] = count

        # Convert to list of dicts for Pydantic
        return [
            {"date": d, **counts} for d, counts in sorted(trend_map.items())
        ]

    @staticmethod
    def get_events(db: Session, skip: int = 0, limit: int = 100):
        return db.query(models.AIEventModel).offset(skip).limit(limit).all()

    @staticmethod
    def get_policies(db: Session):
        return db.query(models.PolicyModel).all()

    @staticmethod
    def get_shadow_ai(db: Session):
        return db.query(models.ShadowAIDetectionModel).all()

    @staticmethod
    def create_policy(db: Session, policy_in: PolicyCreate):
        db_policy = models.PolicyModel(**policy_in.model_dump())
        db.add(db_policy)
        db.commit()
        db.refresh(db_policy)
        return db_policy

    @staticmethod
    def update_policy(db: Session, policy_id: str, policy_in: PolicyUpdate):
        db_policy = db.query(models.PolicyModel).filter(models.PolicyModel.policy_id == policy_id).first()
        if not db_policy:
            return None
        
        update_data = policy_in.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_policy, field, value)
            
        db.commit()
        db.refresh(db_policy)
        return db_policy

    @staticmethod
    def delete_policy(db: Session, policy_id: str):
        db_policy = db.query(models.PolicyModel).filter(models.PolicyModel.policy_id == policy_id).first()
        if not db_policy:
            return False
            
        db.delete(db_policy)
        db.commit()
        return True
