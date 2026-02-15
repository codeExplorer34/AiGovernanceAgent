import sys
import os
import uuid
from datetime import datetime, timedelta

# Add the project root to sys.path to allow running from any directory
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.db.session import SessionLocal, engine, DATABASE_URL
from app.models.models import (
    AIEventModel, PolicyModel, ShadowAIDetectionModel, Base,
    OrganizationModel, TeamModel, ApplicationModel, AIModelModel
)

def seed_db():
    print(f"Seeding database with URL: {DATABASE_URL}")
    Base.metadata.create_all(bind=engine)
    print("MetaData.create_all called")
    db = SessionLocal()
    
    # Optional: Clear existing data to allow re-seeding without integrity errors
    print("Clearing existing data...")
    db.query(AIEventModel).delete()
    db.query(ShadowAIDetectionModel).delete()
    db.query(PolicyModel).delete()
    db.query(ApplicationModel).delete()
    db.query(TeamModel).delete()
    db.query(AIModelModel).delete()
    db.query(OrganizationModel).delete()
    db.commit()

    # 1. Create Organization
    org = OrganizationModel(name="AEGIS Corp")
    db.add(org)
    db.flush()

    # 2. Create Teams
    teams = {
        "CS": TeamModel(name="Customer Success", org_id=org.id),
        "ENG": TeamModel(name="Engineering", org_id=org.id),
        "MKT": TeamModel(name="Marketing", org_id=org.id)
    }
    db.add_all(teams.values())
    db.flush()

    # 3. Create Applications
    apps = {
        "CRM": ApplicationModel(name="CRM Integration", team_id=teams["CS"].id),
        "SLACK": ApplicationModel(name="Internal Slack Bot", team_id=teams["ENG"].id),
        "GEN_AI": ApplicationModel(name="Marketing GenAI Tool", team_id=teams["MKT"].id)
    }
    db.add_all(apps.values())
    db.flush()

    # 4. Create Models
    models_registry = {
        "GPT4": AIModelModel(provider="OpenAI", name="GPT-4", cost_per_1k_tokens=0.03),
        "CLAUDE3": AIModelModel(provider="Anthropic", name="Claude 3 Opus", cost_per_1k_tokens=0.015)
    }
    db.add_all(models_registry.values())
    db.flush()

    # 5. Mock Policies
    policies = [
        PolicyModel(
            policy_id="P-102",
            name="GDPR Data Handling",
            risk_level="High",
            status="Active",
            regulation="GDPR Article 25, Article 32",
            violation_count=143,
            description="Ensures all AI processing of EU citizen PII complies with GDPR requirements."
        ),
        PolicyModel(
            policy_id="P-110",
            name="Internal AI Usage Policy",
            risk_level="Low",
            status="Active",
            regulation="Internal Policy",
            violation_count=12,
            description="Governs use of approved internal AI models."
        )
    ]
    db.add_all(policies)

    # 6. Mock Events (Temporal for Trends)
    decisions = ["Allowed", "Flagged", "Blocked"]
    risk_levels = ["Low", "Medium", "High"]
    
    events = []
    base_time = datetime.utcnow()
    
    for day_offset in range(7):
        timestamp = base_time - timedelta(days=day_offset)
        # Generate varied request counts per day for better visualization
        num_events = 15 - day_offset 
        for i in range(num_events):
            decision = decisions[i % 3]
            # Bias toward allowed
            if i % 5 != 0: decision = "Allowed"
            
            events.append(AIEventModel(
                event_id=f"evt_2026_{day_offset}_{i}",
                timestamp=timestamp,
                app_id=apps["CRM"].id,
                model_id=models_registry["GPT4"].id,
                team="Customer Success",
                app="CRM Integration",
                model="GPT-4",
                data_type="Generic Data",
                decision=decision,
                risk_level=risk_levels[i % 3],
                policy_triggered="P-102" if decision != "Allowed" else None,
                explanation="Verified against governance standards.",
                user="system@aegis.ai"
            ))
    
    db.add_all(events)
    print(f"Generated {len(events)} temporal events for trend testing")

    # 7. Mock Shadow AI
    shadow_ai = [
        ShadowAIDetectionModel(
            detection_id="det_001",
            tool_name="Personal ChatGPT",
            source_app_id=apps["SLACK"].id,
            source_app="Internal Slack Bot", # Legacy
            user="dev.coder@company.com",
            risk_level="Medium",
            first_seen=datetime.utcnow() - timedelta(days=7),
            last_seen=datetime.utcnow(),
            status="Under Review",
            is_new=True,
            request_count=45
        )
    ]
    db.add_all(shadow_ai)

    db.commit()
    db.close()
    print("Database seeded successfully with normalized entities")

if __name__ == "__main__":
    seed_db()
