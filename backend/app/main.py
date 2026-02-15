from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from .api.endpoints import router as api_router
from .core.websocket_manager import manager
import os

app = FastAPI(
    title="AEGIS AI Governance API",
    description="Production-ready API for enterprise AI governance",
    version="1.0.0"
)

# Configure CORS
origins = [
    "http://localhost:5173",  # Vite default
    "http://localhost:3000",  # Alternative local port
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")

@app.websocket("/ws/events")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Handle incoming messages if needed
            await websocket.send_text(f"Message received: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)

@app.get("/")
async def root():
    return {"message": "Welcome to AEGIS AI Governance API", "status": "active"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
