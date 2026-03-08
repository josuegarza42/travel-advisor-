from dataclasses import dataclass
from typing import List, Optional

@dataclass
class Destination:
    """Modelo para un destino propuesto"""
    name: str
    country: str
    proposed_by: str
    budget_per_person: float
    start_date: str
    end_date: str
    duration_days: int
    travel_type: List[str]  # playa, ciudad, naturaleza, cultural, aventura
    activities: List[str]
    departure_airport: str  # CDMX, GDL, MTY, etc.
    date_flexibility: str  # fixed, ±3days, ±1week
    accepts_layovers: bool
    accommodation_type: str  # hostal, hotel_economico, airbnb (default: hostal)
    wifi_quality: str  # critical, important, nice_to_have
    hostel_has_workspace: bool  # Si el hostal tiene espacios para trabajar
    hostel_social_vibe: bool  # Si el hostal tiene buen ambiente social
    city_safety_rating: str  # safe, moderate, concern, dangerous
    requires_travel_insurance: bool
    requires_vaccines: bool
    special_events: Optional[str] = None  # festivales, conciertos, etc.
    notes: Optional[str] = None

@dataclass
class GroupPreferences:
    """Preferencias del grupo de viajeros"""
    max_budget_per_person: float
    preferred_travel_types: List[str]
    preferred_activities: List[str]
    avoid_activities: List[str]
    has_valid_passport: bool
    has_us_visa: bool  # Para conexiones en USA
    max_trip_days: int
    min_trip_days: int
    advance_booking_days: int  # Días de anticipación
    priority: str  # price, experience, balance
    needs_reliable_wifi: bool  # CRÍTICO para trabajo remoto
    works_during_trip: bool  # Si trabajan durante el viaje
    prefers_hostels: bool  # Siempre prefieren hostales
    values_social_atmosphere: bool  # Les gusta conocer gente
    city_safety_important: bool  # Seguridad de la ciudad es prioridad
    preferred_currency_rate: Optional[str] = None  # USD, EUR, mejor tasa
    english_level: str  # none, basic, intermediate, fluent
    has_travel_insurance: bool
    has_required_vaccines: bool

@dataclass
class TravelRequest:
    """Request completo para análisis de IA"""
    destinations: List[Destination]
    group_preferences: GroupPreferences
    num_travelers: int
    analysis_mode: str = 'complete'  # 'practical' o 'complete'
