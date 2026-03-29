from flask import Blueprint, request, jsonify
from .ai_advisor import TravelAdvisor
from .flight_search import FlightSearcher

bp = Blueprint('main', __name__)
advisor = TravelAdvisor()
flight_searcher = FlightSearcher()

@bp.route('/api/health')
def health():
    return jsonify({"status": "healthy"})

@bp.route('/api/debug-config')
def debug_config():
    from .config import Config
    return jsonify({
        "has_groq_key": bool(Config.GROQ_API_KEY),
        "has_serpapi_key": bool(Config.SERPAPI_KEY),
        "flask_env": Config.FLASK_ENV,
    })

@bp.route('/api/analyze', methods=['POST'])
def analyze_destinations():
    """
    Endpoint principal para analizar destinos

    Expects JSON body:
    {
        "destinations": [...],
        "group_preferences": {...},
        "num_travelers": int
    }
    """
    try:
        data = request.get_json()

        # Validación básica
        if not data:
            return jsonify({"error": "No data provided"}), 400

        if 'destinations' not in data or len(data['destinations']) < 2:
            return jsonify({
                "error": "Se requieren al menos 2 destinos para comparar"
            }), 400

        if 'group_preferences' not in data:
            return jsonify({"error": "group_preferences es requerido"}), 400

        # Analizar con IA
        result = advisor.analyze_destinations(data)

        if result.get('error'):
            return jsonify(result), 500

        return jsonify({
            "success": True,
            "analysis": result
        })

    except Exception as e:
        return jsonify({
            "error": True,
            "message": str(e)
        }), 500

@bp.route('/api/validate-destination', methods=['POST'])
def validate_destination():
    """Valida que un destino tenga todos los campos requeridos"""
    try:
        destination = request.get_json()

        required_fields = [
            'name', 'country', 'proposed_by', 'budget_per_person',
            'start_date', 'end_date', 'duration_days', 'travel_type',
            'activities', 'departure_airport', 'date_flexibility',
            'accepts_layovers', 'accommodation_type'
        ]

        missing_fields = [field for field in required_fields if field not in destination]

        if missing_fields:
            return jsonify({
                "valid": False,
                "missing_fields": missing_fields
            }), 400

        return jsonify({"valid": True})

    except Exception as e:
        return jsonify({
            "error": True,
            "message": str(e)
        }), 500

@bp.route('/api/quick-fill', methods=['POST'])
def quick_fill():
    """
    Extrae información estructurada de texto libre usando IA

    Expects JSON body:
    {
        "text": "Descripción libre del viaje"
    }
    """
    try:
        data = request.get_json()

        if not data or 'text' not in data:
            return jsonify({"error": "Text is required"}), 400

        text = data['text'].strip()

        if not text:
            return jsonify({"error": "Text cannot be empty"}), 400

        # Extraer información con IA
        result = advisor.extract_trip_info(text)

        if result.get('error'):
            return jsonify(result), 500

        return jsonify({
            "success": True,
            "data": result
        })

    except Exception as e:
        return jsonify({
            "error": True,
            "message": str(e)
        }), 500

@bp.route('/api/search-flights', methods=['POST'])
def search_flights():
    """
    Busca vuelos usando Kiwi.com API

    Expects JSON body:
    {
        "origin": "MEX",
        "destination": "MDE",
        "date_from": "15/03/2026",
        "date_to": "15/03/2026",
        "return_from": "22/03/2026",
        "return_to": "22/03/2026",
        "adults": 4,
        "max_stopovers": 2,
        "currency": "MXN"
    }
    """
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Validar campos requeridos
        required_fields = ['origin', 'destination', 'date_from']
        missing_fields = [f for f in required_fields if f not in data]

        if missing_fields:
            return jsonify({
                "error": f"Missing required fields: {', '.join(missing_fields)}"
            }), 400

        # Extraer parámetros
        origin = data.get('origin')
        destination = data.get('destination')
        date_from = data.get('date_from')
        date_to = data.get('date_to')
        return_from = data.get('return_from')
        return_to = data.get('return_to')
        adults = data.get('adults', 1)
        max_stopovers = data.get('max_stopovers', 2)
        currency = data.get('currency', 'MXN')
        limit = data.get('limit', 5)

        # Buscar vuelos
        result = flight_searcher.search_flights(
            origin=origin,
            destination=destination,
            date_from=date_from,
            date_to=date_to,
            return_from=return_from,
            return_to=return_to,
            adults=adults,
            max_stopovers=max_stopovers,
            currency=currency,
            limit=limit
        )

        if not result.get('success'):
            return jsonify(result), 500

        return jsonify(result)

    except Exception as e:
        return jsonify({
            "success": False,
            "error": True,
            "message": str(e)
        }), 500

@bp.route('/api/airport-code/<city>', methods=['GET'])
def get_airport_code(city):
    """
    Obtiene el código IATA de aeropuerto para una ciudad

    Example: GET /api/airport-code/Medellin
    """
    try:
        code = flight_searcher.get_airport_code(city)

        if not code:
            return jsonify({
                "success": False,
                "error": f"No airport found for city: {city}"
            }), 404

        return jsonify({
            "success": True,
            "city": city,
            "airport_code": code
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500

@bp.route('/api/flight-booking-options', methods=['POST'])
def get_booking_options():
    """
    Obtiene las opciones de reserva para un vuelo específico usando el booking_token

    Expects JSON body:
    {
        "booking_token": "..."
    }
    """
    try:
        data = request.get_json()

        if not data or 'booking_token' not in data:
            return jsonify({"error": "booking_token is required"}), 400

        booking_token = data.get('booking_token')

        # Obtener opciones de reserva
        result = flight_searcher.get_booking_options(booking_token)

        if not result.get('success'):
            return jsonify(result), 500

        return jsonify(result)

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 500
