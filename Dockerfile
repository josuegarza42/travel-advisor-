FROM python:3.11-slim

WORKDIR /app

# Install dependencies from root requirements.txt (has all packages)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend and frontend code
COPY backend/ ./backend/
COPY frontend/ ./frontend/

# Expose port
EXPOSE 5000

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "2", "--timeout", "120", "backend.wsgi:app"]
