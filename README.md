# 🛡️ AEGIS: Enterprise AI Governance Dashboard

AEGIS is a production-grade AI Governance platform designed to monitor, audit, and secure enterprise AI deployments. It provides real-time visibility into AI activity, policy enforcement, and "Shadow AI" detection, ensuring compliance with global regulations (GDPR, EU AI Act, etc.).

![AEGIS Dashboard Preview](https://via.placeholder.com/1200x600?text=AEGIS+AI+Governance+Dashboard+Preview)

## ✨ Core Features

- **Real-Time AI Activity Monitor**: Visualizes AI requests, token usage, and decisions across the organization.
- **Automated Policy Enforcement**: Implements guardrails to block unauthorized data types or model usage.
- **Shadow AI Detection**: Identifies unapproved AI tool usage by individual users or teams.
- **Audit Logs & Compliance**: Tamper-proof logs for regulatory reporting and internal audits.
- **Enterprise-Ready Architecture**: Built with FastAPI, React, and Supabase for scalability and reliability.

## 🚀 Quick Start (Docker)

The fastest way to get AEGIS running locally is using Docker Compose.

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/AiGovernanceAgent.git
    cd AiGovernanceAgent
    ```

2.  **Configure Environment**:
    Open `backend/.env` and set your `DATABASE_URL` (Supabase recommended).

3.  **Launch Stack**:

    ```bash
    docker compose up --build
    ```

4.  **Seed Initial Data**:

    ```bash
    docker compose exec backend python scripts/seed.py
    ```

5.  **Explore**:
    - **Frontend**: [http://localhost](http://localhost)
    - **API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

## 🛠️ Tech Stack

- **Frontend**: React (TSX), Vite, Tailwind CSS, Recharts, Framer Motion, Radix UI.
- **Backend**: Python, FastAPI, SQLAlchemy (PostgreSQL/Supabase), WebSockets.
- **Infrastructure**: Docker, Nginx.

## 📁 Project Structure

```text
├── backend/            # FastAPI Application
│   ├── app/            # Core API Logic
│   ├── migrations/     # DB Migrations (Supabase/Postgres)
│   └── scripts/        # Seeding and Maintenance
├── src/                # React Frontend
│   ├── components/
│   │   ├── core/       # Shared UI Components
│   │   ├── dashboard/  # View-specific Components
│   │   └── effects/    # Specialized Animations
├── docs/               # Technical Documentation
└── docker-compose.yml  # Local Orchestration
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.
