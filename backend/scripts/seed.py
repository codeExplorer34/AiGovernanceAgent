from app.db.session import SessionLocal, engine, DATABASE_URL
from app.models.models import (
    AIEventModel, PolicyModel, ShadowAIDetectionModel, Base,
    OrganizationModel, TeamModel, ApplicationModel, AIModelModel
)
from datetime import datetime, timedelta
import uuid

def seed_db():
    print(f"Seeding database with URL: {DATABASE_URL}")
    Base.metadata.create_all(bind=engine)
    print("MetaData.create_all called")
    db = SessionLocal()
    
    # Check if organizations already exist
    try:
        if db.query(OrganizationModel).first():
            print("Database already seeded")
            return
    except Exception as e:
        print(f"Error checking for existing data: {e}")

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

    # 6. Mock Events
    events = [
        AIEventModel(
            event_id="evt_2026_001",
            timestamp=datetime.utcnow(),
            app_id=apps["CRM"].id,
            model_id=models_registry["GPT4"].id,
            team="Customer Success", # Legacy
            app="CRM Integration", # Legacy
            model="GPT-4", # Legacy
            data_type="Customer PII",
            decision="Blocked",
            risk_level="High",
            policy_triggered="P-102",
            regulation_mapping="GDPR Article 25",
            explanation="This request was blocked because customer PII was detected.",
            user="sarah.chen@company.com"
        )
    ]
    db.add_all(events)

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
