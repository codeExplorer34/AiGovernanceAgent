from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..db.session import get_db
from ..schemas.base import AIEvent, DashboardMetrics, Policy, ShadowAIDetection
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
