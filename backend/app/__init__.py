from flask import Flask, send_from_directory
from flask_cors import CORS
from .config import Config
import os

def create_app():
    # Get frontend directory path
    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    frontend_dir = os.path.join(os.path.dirname(backend_dir), 'frontend')

    app = Flask(__name__, static_folder=frontend_dir, static_url_path='')
    app.config.from_object(Config)

    # Enable CORS
    CORS(app)

    # Serve frontend files
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve_frontend(path):
        if path and os.path.exists(os.path.join(frontend_dir, path)):
            return send_from_directory(frontend_dir, path)
        elif path.startswith('api/'):
            # Let API routes handle this
            return None
        elif not path:
            return send_from_directory(frontend_dir, 'index.html')
        else:
            return send_from_directory(frontend_dir, 'index.html')

    # Register routes
    from .routes import bp
    app.register_blueprint(bp)

    return app
