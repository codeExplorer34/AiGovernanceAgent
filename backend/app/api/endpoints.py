from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..db.session import get_db
from ..schemas.base import AIEvent, DashboardMetrics, Policy, ShadowAIDetection, PolicyCreate, PolicyUpdate
from ..services.governance_service import GovernanceService

router = APIRouter()

@router.get("/metrics", response_model=DashboardMetrics)
def get_metrics(db: Session = Depends(get_db)):
    return GovernanceService.get_dashboard_metrics(db)

@router.get("/events", response_model=List[AIEvent])
def get_events(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return GovernanceService.get_events(db, skip=skip, limit=limit)

@router.get("/policies", response_model=List[Policy])
def get_policies(db: Session = Depends(get_db)):
    return GovernanceService.get_policies(db)

@router.get("/shadow-ai", response_model=List[ShadowAIDetection])
def get_shadow_ai(db: Session = Depends(get_db)):
    return GovernanceService.get_shadow_ai(db)

@router.post("/policies", response_model=Policy)
def create_policy(policy_in: PolicyCreate, db: Session = Depends(get_db)):
    return GovernanceService.create_policy(db, policy_in)

@router.patch("/policies/{policy_id}", response_model=Policy)
def update_policy(policy_id: str, policy_in: PolicyUpdate, db: Session = Depends(get_db)):
    policy = GovernanceService.update_policy(db, policy_id, policy_in)
    if not policy:
        raise HTTPException(status_code=404, detail="Policy not found")
    return policy

@router.delete("/policies/{policy_id}")
def delete_policy(policy_id: str, db: Session = Depends(get_db)):
    success = GovernanceService.delete_policy(db, policy_id)
    if not success:
        raise HTTPException(status_code=404, detail="Policy not found")
    return {"message": "Policy deleted successfully"}
