from sqlalchemy import Column, String, Integer, DateTime, Enum, Boolean, Text, ForeignKey, Numeric
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
import uuid
from .base_types import DecisionType, RiskLevel, ShadowAIStatus

Base = declarative_base()

class OrganizationModel(Base):
    __tablename__ = "organizations"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, unique=True, nullable=False)
    teams = relationship("TeamModel", back_populates="organization")

class TeamModel(Base):
    __tablename__ = "teams"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    org_id = Column(UUID(as_uuid=True), ForeignKey("organizations.id"))
    name = Column(String, nullable=False)
    organization = relationship("OrganizationModel", back_populates="teams")
    applications = relationship("ApplicationModel", back_populates="team")

class ApplicationModel(Base):
    __tablename__ = "applications"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    team_id = Column(UUID(as_uuid=True), ForeignKey("teams.id"))
    name = Column(String, nullable=False)
    team = relationship("TeamModel", back_populates="applications")

class AIModelModel(Base):
    __tablename__ = "ai_models"
    __tablename__ = "ai_model_registry" # Renamed to avoid confusion with the word 'Model'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    provider = Column(String, nullable=False)
    name = Column(String, nullable=False)
    cost_per_1k_tokens = Column(Numeric, nullable=True)

class AIEventModel(Base):
    __tablename__ = "ai_events"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(String, unique=True, index=True)
    timestamp = Column(DateTime)
    
    # Relationships
    user_id = Column(UUID(as_uuid=True), nullable=True) # Linked to Supabase Auth
    app_id = Column(UUID(as_uuid=True), ForeignKey("applications.id"), nullable=True)
    model_id = Column(UUID(as_uuid=True), ForeignKey("ai_model_registry.id"), nullable=True)
    
    # Legacy/Fallback fields for backward compatibility during migration
    team = Column(String)
    app = Column(String)
    model = Column(String)
    
    data_type = Column(String)
    decision = Column(String)
    risk_level = Column(String)
    policy_triggered = Column(String, nullable=True)
    regulation_mapping = Column(String, nullable=True)
    explanation = Column(Text, nullable=True)
    user = Column(String, nullable=True)

class PolicyModel(Base):
    __tablename__ = "policies"

    policy_id = Column(String, primary_key=True, index=True)
    name = Column(String)
    risk_level = Column(String)
    status = Column(String)
    regulation = Column(String)
    violation_count = Column(Integer, default=0)
    description = Column(Text)

class ShadowAIDetectionModel(Base):
    __tablename__ = "shadow_ai"

    id = Column(Integer, primary_key=True, index=True)
    detection_id = Column(String, unique=True, index=True)
    tool_name = Column(String)
    source_app_id = Column(UUID(as_uuid=True), ForeignKey("applications.id"), nullable=True)
    source_app = Column(String) # Legacy field
    user = Column(String)
    risk_level = Column(String)
    first_seen = Column(DateTime)
    last_seen = Column(DateTime)
    status = Column(String)
    is_new = Column(Boolean, default=True)
    request_count = Column(Integer, default=0)
