from app.db.session import engine, DATABASE_URL
print(f"DATABASE_URL: {DATABASE_URL}")
try:
    with engine.connect() as conn:
        print("Successfully connected to the database!")
except Exception as e:
    print(f"Failed to connect: {e}")
