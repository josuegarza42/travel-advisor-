import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')
    ANTHROPIC_API_KEY = os.getenv('ANTHROPIC_API_KEY')
    GROQ_API_KEY = os.getenv('GROQ_API_KEY')
    SERPAPI_KEY = os.getenv('SERPAPI_KEY')
    FLASK_ENV = os.getenv('FLASK_ENV', 'development')
    PORT = int(os.getenv('PORT', 5000))

    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///travel_advisor.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
