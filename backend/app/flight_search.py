import requests
from .config import Config
from typing import Dict, Any, List
from datetime import datetime

class FlightSearcher:
    """Buscador de vuelos usando SerpApi (Google Flights)"""

    def __init__(self):
        self.api_key = Config.SERPAPI_KEY
        self.base_url = "https://serpapi.com/search"

    def search_flights(
        self,
        origin: str,
        destination: str,
        date_from: str,
        date_to: str = None,
        return_from: str = None,
        return_to: str = None,
        adults: int = 1,
        max_stopovers: int = 2,
        currency: str = "MXN",
        limit: int = 5
    ) -> Dict[str, Any]:
        """
        Busca los mejores vuelos usando Google Flights via SerpApi

        Args:
            origin: Código IATA del aeropuerto de origen (ej: "MEX")
            destination: Código IATA del destino (ej: "MDE")
            date_from: Fecha de salida formato DD/MM/YYYY
            date_to: No usado en SerpApi (solo fecha exacta)
            return_from: Fecha de regreso
            return_to: No usado en SerpApi
            adults: Número de pasajeros adultos
            max_stopovers: Máximo número de escalas (0 = solo directos)
            currency: Moneda de los precios
            limit: Número máximo de resultados

        Returns:
            Diccionario con lista de vuelos encontrados
        """

        try:
            # Convertir fecha de DD/MM/YYYY a YYYY-MM-DD
            outbound_date = self._convert_date_format(date_from)

            # Construir parámetros base
            params = {
                "engine": "google_flights",
                "departure_id": origin,
                "arrival_id": destination,
                "outbound_date": outbound_date,
                "adults": adults,
                "currency": currency,
                "hl": "es",
                "api_key": self.api_key
            }

            # Agregar más resultados para poder ordenar mejor
            # No usar limit aquí, ordenaremos después

            # Agregar fecha de regreso si existe (vuelo redondo)
            if return_from:
                return_date = self._convert_date_format(return_from)
                params["return_date"] = return_date
                params["type"] = "1"  # Round trip
            else:
                params["type"] = "2"  # One way

            # Filtro de escalas
            if max_stopovers == 0:
                params["stops"] = "0"  # Solo directos
            elif max_stopovers == 1:
                params["stops"] = "1"  # Máximo 1 escala

            # Hacer request a SerpApi
            response = requests.get(
                self.base_url,
                params=params,
                timeout=30
            )

            response.raise_for_status()
            data = response.json()

            # Verificar si hay error
            if "error" in data:
                return {
                    "success": False,
                    "error": data.get("error", "Error desconocido"),
                    "flights": []
                }

            # Extraer vuelos y ordenar por precio
            raw_flights = data.get("best_flights", []) + data.get("other_flights", [])

            if not raw_flights:
                return {
                    "success": True,
                    "flights": [],
                    "total_found": 0,
                    "currency": currency,
                    "search_params": {
                        "origin": origin,
                        "destination": destination,
                        "date_from": date_from,
                        "adults": adults,
                        "max_stopovers": max_stopovers
                    }
                }

            # Filtrar por número de escalas si se especificó
            if max_stopovers is not None:
                filtered_flights = []
                for flight in raw_flights:
                    flights_data = flight.get("flights", [])
                    if flights_data:
                        # Calcular número de escalas (número de segmentos - 1)
                        stopovers = len(flights_data) - 1
                        # Solo incluir vuelos que cumplan el criterio
                        if stopovers <= max_stopovers:
                            filtered_flights.append(flight)
                raw_flights = filtered_flights

            # Si después del filtro no hay vuelos, retornar vacío
            if not raw_flights:
                return {
                    "success": True,
                    "flights": [],
                    "total_found": 0,
                    "currency": currency,
                    "search_params": {
                        "origin": origin,
                        "destination": destination,
                        "date_from": date_from,
                        "adults": adults,
                        "max_stopovers": max_stopovers
                    }
                }

            # Ordenar por precio y limitar resultados
            raw_flights.sort(key=lambda x: x.get("price", float('inf')))
            raw_flights = raw_flights[:limit]

            # Formatear vuelos
            flights = self._format_flights(raw_flights, currency, origin, destination, return_from)

            return {
                "success": True,
                "flights": flights,
                "total_found": len(flights),
                "currency": currency,
                "search_params": {
                    "origin": origin,
                    "destination": destination,
                    "date_from": date_from,
                    "date_to": date_to,
                    "return_from": return_from,
                    "adults": adults,
                    "max_stopovers": max_stopovers
                }
            }

        except requests.exceptions.RequestException as e:
            return {
                "success": False,
                "error": f"Error al buscar vuelos: {str(e)}",
                "flights": []
            }
        except Exception as e:
            return {
                "success": False,
                "error": f"Error inesperado: {str(e)}",
                "flights": []
            }

    def _format_flights(self, raw_flights: List[Dict], currency: str, origin: str, destination: str, return_date: str = None) -> List[Dict]:
        """Formatea los vuelos de Google Flights a formato estándar"""

        formatted_flights = []

        for idx, flight in enumerate(raw_flights):
            try:
                # Extraer información del primer segmento (ida)
                flights_data = flight.get("flights", [])
                if not flights_data:
                    continue

                first_flight = flights_data[0]
                last_flight = flights_data[-1]

                # Información de salida
                departure_airport = first_flight.get("departure_airport", {})
                arrival_airport = last_flight.get("arrival_airport", {})

                # Calcular escalas
                stopovers = len(flights_data) - 1
                is_direct = stopovers == 0

                # Ciudades de escala
                stopover_cities = []
                if stopovers > 0:
                    for i in range(len(flights_data) - 1):
                        city = flights_data[i].get("arrival_airport", {}).get("name", "")
                        if city:
                            stopover_cities.append(city)

                # Aerolíneas
                airlines = []
                for f in flights_data:
                    airline = f.get("airline")
                    if airline and airline not in airlines:
                        airlines.append(airline)

                # Duración total
                total_duration = flight.get("total_duration", 0)

                # Google Flights no proporciona deep links directos a través de la API
                # Solo podemos construir URLs de búsqueda
                dep_date = self._format_date_for_url(first_flight.get("departure_airport", {}).get("time", ""))

                # Obtener aerolíneas y número de vuelo si están disponibles
                flight_number = ""
                if flights_data and len(flights_data) > 0:
                    airline = flights_data[0].get("airline", "")
                    flight_num = flights_data[0].get("flight_number", "")
                    if airline and flight_num:
                        flight_number = f"{airline}{flight_num}"

                if return_date:
                    ret_date = self._convert_date_format(return_date)
                    # URL de búsqueda con fechas específicas
                    booking_link = (
                        f"https://www.google.com/travel/flights?"
                        f"q=Flights%20{origin}%20to%20{destination}%20{dep_date}%20to%20{ret_date}"
                        f"&curr={currency}"
                    )
                else:
                    booking_link = (
                        f"https://www.google.com/travel/flights?"
                        f"q=Flights%20to%20{destination}%20from%20{origin}%20on%20{dep_date}"
                        f"&curr={currency}"
                    )

                formatted_flight = {
                    "id": f"flight_{idx}",
                    "price": flight.get("price", 0),
                    "currency": currency,
                    "deep_link": booking_link,
                    "booking_token": flight.get("booking_token", ""),

                    # Información de salida
                    "departure": {
                        "date": self._format_datetime(first_flight.get("departure_airport", {}).get("time")),
                        "time": self._extract_time(first_flight.get("departure_airport", {}).get("time")),
                        "airport": departure_airport.get("id", ""),
                        "city": departure_airport.get("name", "")
                    },

                    # Información de llegada
                    "arrival": {
                        "date": self._format_datetime(last_flight.get("arrival_airport", {}).get("time")),
                        "time": self._extract_time(last_flight.get("arrival_airport", {}).get("time")),
                        "airport": arrival_airport.get("id", ""),
                        "city": arrival_airport.get("name", "")
                    },

                    # Duración
                    "duration": {
                        "departure_hours": total_duration // 60,
                        "departure_minutes": total_duration % 60,
                        "return_hours": 0,
                        "return_minutes": 0,
                        "total_text": self._format_duration_minutes(total_duration)
                    },

                    # Escalas
                    "stopovers": stopovers,
                    "is_direct": is_direct,
                    "stopover_cities": stopover_cities,

                    # Aerolíneas
                    "airlines": airlines,

                    # Disponibilidad
                    "availability": {
                        "seats": None
                    },

                    # Vuelo de regreso (si existe)
                    "has_return": False,
                    "return_departure": None,
                    "return_arrival": None
                }

                formatted_flights.append(formatted_flight)

            except Exception as e:
                print(f"Error formateando vuelo: {e}")
                continue

        return formatted_flights

    def _convert_date_format(self, date_str: str) -> str:
        """Convierte DD/MM/YYYY a YYYY-MM-DD"""
        try:
            day, month, year = date_str.split('/')
            return f"{year}-{month}-{day}"
        except:
            return date_str

    def _format_datetime(self, dt_string: str) -> str:
        """Formatea fecha-hora a formato legible"""
        try:
            if not dt_string:
                return ""
            # Google Flights format: "2026-03-15 08:30"
            dt = datetime.strptime(dt_string, "%Y-%m-%d %H:%M")
            return dt.strftime("%Y-%m-%d %H:%M")
        except:
            return dt_string

    def _extract_time(self, dt_string: str) -> str:
        """Extrae solo la hora"""
        try:
            if not dt_string:
                return ""
            dt = datetime.strptime(dt_string, "%Y-%m-%d %H:%M")
            return dt.strftime("%H:%M")
        except:
            return ""

    def _format_duration_minutes(self, minutes: int) -> str:
        """Convierte minutos a formato legible"""
        if not minutes:
            return "0h 0m"

        hours = minutes // 60
        mins = minutes % 60

        return f"{hours}h {mins}m"

    def _format_date_for_url(self, dt_string: str) -> str:
        """Formatea fecha para URL de Google Flights (YYYY-MM-DD)"""
        try:
            if not dt_string:
                return ""
            dt = datetime.strptime(dt_string, "%Y-%m-%d %H:%M")
            return dt.strftime("%Y-%m-%d")
        except:
            return ""

    def get_booking_options(self, booking_token: str) -> Dict[str, Any]:
        """
        Obtiene las opciones de reserva para un vuelo específico usando el booking_token

        Args:
            booking_token: Token de reserva del vuelo

        Returns:
            Diccionario con las opciones de reserva incluyendo deep links
        """
        try:
            params = {
                "engine": "google_flights",
                "booking_token": booking_token,
                "api_key": self.api_key
            }

            response = requests.get(
                self.base_url,
                params=params,
                timeout=30
            )

            response.raise_for_status()
            data = response.json()

            if "error" in data:
                return {
                    "success": False,
                    "error": data.get("error", "Error desconocido")
                }

            # Extraer opciones de reserva
            booking_options = data.get("booking_options", [])

            return {
                "success": True,
                "booking_options": booking_options,
                "raw_data": data
            }

        except requests.exceptions.RequestException as e:
            return {
                "success": False,
                "error": f"Error al obtener opciones de reserva: {str(e)}"
            }
        except Exception as e:
            return {
                "success": False,
                "error": f"Error inesperado: {str(e)}"
            }

    def get_airport_code(self, city_name: str) -> str:
        """
        Busca el código IATA usando SerpApi

        Args:
            city_name: Nombre de la ciudad

        Returns:
            Código IATA del aeropuerto principal
        """
        # Mapeo manual de ciudades comunes
        city_airports = {
            "medellin": "MDE",
            "medellín": "MDE",
            "bogota": "BOG",
            "bogotá": "BOG",
            "cartagena": "CTG",
            "cali": "CLO",
            "mexico": "MEX",
            "ciudad de mexico": "MEX",
            "guadalajara": "GDL",
            "monterrey": "MTY",
            "cancun": "CUN",
            "cancún": "CUN",
            "lima": "LIM",
            "cusco": "CUZ",
            "buenos aires": "EZE",
            "santiago": "SCL",
            "sao paulo": "GRU",
            "río de janeiro": "GIG",
            "rio de janeiro": "GIG"
        }

        city_lower = city_name.lower().strip()
        return city_airports.get(city_lower, "")
