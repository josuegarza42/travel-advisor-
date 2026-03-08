import requests
from .config import Config
from .risk_checker import CountryRiskChecker
from typing import Dict, Any
import json

class TravelAdvisor:
    """Clase para análisis inteligente de destinos usando Claude AI"""

    def __init__(self):
        # Usar AWS Bedrock gateway si está configurado, sino Anthropic directo
        self.use_bedrock = Config.AWS_ENDPOINT_URL_BEDROCK and Config.AWS_BEARER_TOKEN

        if self.use_bedrock:
            self.endpoint = f"{Config.AWS_ENDPOINT_URL_BEDROCK}/model/us.anthropic.claude-sonnet-4-6/invoke"
            self.bearer_token = Config.AWS_BEARER_TOKEN
        else:
            import anthropic
            self.client = anthropic.Anthropic(api_key=Config.ANTHROPIC_API_KEY)

        self.risk_checker = CountryRiskChecker()

    def analyze_destinations(self, travel_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Analiza todos los destinos propuestos y genera recomendación

        Args:
            travel_data: Diccionario con destinations, group_preferences, num_travelers

        Returns:
            Diccionario con recommended_destination, reasons, comparison
        """

        # Detectar modo de análisis
        analysis_mode = travel_data.get('analysis_mode', 'complete')

        if analysis_mode == 'practical':
            prompt = self._build_practical_prompt(travel_data)
            max_tokens = 1500  # Respuesta más corta
        else:
            prompt = self._build_analysis_prompt(travel_data)
            max_tokens = 4096  # Respuesta completa

        try:
            if self.use_bedrock:
                # Usar AWS Bedrock gateway
                headers = {
                    "Authorization": f"Bearer {self.bearer_token}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "messages": [
                        {
                            "role": "user",
                            "content": [{"type": "text", "text": prompt}]
                        }
                    ],
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": max_tokens
                }

                response = requests.post(self.endpoint, headers=headers, json=payload, timeout=120)
                response.raise_for_status()

                result = response.json()
                response_text = result['content'][0]['text']
            else:
                # Usar Anthropic directo
                message = self.client.messages.create(
                    model="claude-sonnet-4-20250514",
                    max_tokens=max_tokens,
                    messages=[
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ]
                )
                response_text = message.content[0].text

            # Intentar parsear como JSON si está estructurado
            return self._parse_ai_response(response_text)

        except Exception as e:
            return {
                "error": True,
                "message": f"Error al analizar con IA: {str(e)}"
            }

    def _build_practical_prompt(self, travel_data: Dict[str, Any]) -> str:
        """Construye el prompt simplificado para modo práctico (rápido)"""

        destinations = travel_data.get('destinations', [])
        preferences = travel_data.get('group_preferences', {})
        num_travelers = travel_data.get('num_travelers', 1)

        prompt = f"""Eres un asesor de viajes. Analiza RÁPIDAMENTE estos {len(destinations)} destinos y recomienda EL MEJOR para un grupo de {num_travelers} viajeros desde México.

DESTINOS:

"""

        for i, dest in enumerate(destinations, 1):
            prompt += f"""{i}. {dest.get('name')}, {dest.get('country')}
   - Propuesto por: {dest.get('proposed_by')}
   - Presupuesto: ${dest.get('budget_per_person'):.0f} USD por persona
   - Fechas: {dest.get('start_date')} a {dest.get('end_date')} ({dest.get('duration_days')} días)
   - Desde: {dest.get('departure_airport')}

"""

        max_budget_str = f"{preferences.get('max_budget_per_person'):.0f}"
        prompt += f"""
PREFERENCIAS:
- Presupuesto máximo: ${max_budget_str} USD por persona
- Prioridad: {preferences.get('priority')}
- Duración ideal: {preferences.get('min_trip_days')}-{preferences.get('max_trip_days')} días

RESPONDE EN FORMATO JSON:
{{
  "recommended_destination": "Nombre del destino ganador",
  "score": 85,
  "main_reasons": [
    "Razón 1: Por qué es el mejor (una frase)",
    "Razón 2: Ventaja clave (una frase)",
    "Razón 3: Por qué no los otros (una frase)"
  ],
  "quick_tip": "Un tip rápido de ahorro o mejor aerolínea"
}}

SÉ DIRECTO. Solo lo esencial. Sin análisis profundos."""

        return prompt

    def _build_analysis_prompt(self, travel_data: Dict[str, Any]) -> str:
        """Construye el prompt detallado para Claude"""

        destinations = travel_data.get('destinations', [])
        preferences = travel_data.get('group_preferences', {})
        num_travelers = travel_data.get('num_travelers', 1)

        # Detectar si trabajan durante el viaje
        works_during_trip = preferences.get('works_during_trip', False)

        # Obtener información de riesgos laborales si trabajan
        country_risks = {}
        if works_during_trip:
            for dest in destinations:
                country = dest.get('country', '')
                if country:
                    risk_assessment = self.risk_checker.get_work_safety_assessment(country)
                    country_risks[country] = risk_assessment

        prompt = f"""Eres un experto asesor de viajes especializado en viajes económicos desde México.
Analiza los siguientes destinos propuestos y recomienda el MEJOR destino para este grupo de {num_travelers} viajeros.

## DESTINOS PROPUESTOS:

"""

        for i, dest in enumerate(destinations, 1):
            wifi_labels = {
                'critical': '🔴 CRÍTICO (trabajo remoto)',
                'important': '🟡 Importante',
                'nice_to_have': '🟢 Deseable'
            }
            wifi_quality = wifi_labels.get(dest.get('wifi_quality', 'important'), 'Importante')

            country = dest.get('country', '')

            # Ratings de seguridad de ciudad
            safety_labels = {
                'safe': '✅ Segura',
                'moderate': '🟡 Moderadamente segura',
                'concern': '🟠 Preocupación de seguridad',
                'dangerous': '🔴 Peligrosa'
            }
            city_safety = safety_labels.get(dest.get('city_safety_rating', 'moderate'), '🟡 Moderadamente segura')

            prompt += f"""
### Destino {i}: {dest.get('name')}, {country}
- Propuesto por: {dest.get('proposed_by')}
- Presupuesto estimado: ${dest.get('budget_per_person'):.2f} USD por persona
- Fechas: {dest.get('start_date')} a {dest.get('end_date')} ({dest.get('duration_days')} días)
- Tipo de viaje: {', '.join(dest.get('travel_type', []))}
- Actividades: {', '.join(dest.get('activities', []))}
- Aeropuerto de salida: {dest.get('departure_airport')}
- Flexibilidad de fechas: {dest.get('date_flexibility')}
- Acepta escalas: {'Sí' if dest.get('accepts_layovers') else 'No (solo directo)'}
- Tipo de hospedaje: {dest.get('accommodation_type')}
- Calidad de WiFi necesaria: {wifi_quality}
- 🏠 Hostal tiene espacio de trabajo: {'✅ SÍ' if dest.get('hostel_has_workspace') else '❌ No'}
- 👥 Hostal tiene ambiente social: {'✅ SÍ' if dest.get('hostel_social_vibe') else '❌ No'}
- 🛡️ Seguridad de la ciudad/barrio: {city_safety}
- Requiere seguro de viaje: {'Sí' if dest.get('requires_travel_insurance') else 'No'}
- Requiere vacunas: {'Sí' if dest.get('requires_vaccines') else 'No'}
{f"- Eventos especiales: {dest.get('special_events')}" if dest.get('special_events') else ''}
{f"- Notas adicionales: {dest.get('notes')}" if dest.get('notes') else ''}
"""

            # Agregar información de riesgos laborales si trabajan durante el viaje
            if works_during_trip and country in country_risks:
                risk = country_risks[country]
                prompt += f"""
**🚨 EVALUACIÓN DE RIESGO LABORAL PARA {country.upper()}:**
- Nivel de riesgo: {risk['risk_level_name']} (Nivel {risk['risk_level']}/4)
- Seguro para trabajo remoto: {'✅ SÍ' if risk['is_safe'] else '❌ NO RECOMENDADO'}
{'- ⚠️ Restricciones de Seguridad Informática: SÍ' if risk.get('infosec_restrictions') else ''}
"""
                if risk['warnings']:
                    prompt += f"- Advertencias:\n"
                    for warning in risk['warnings']:
                        prompt += f"  * {warning}\n"
                if risk['recommendations']:
                    prompt += f"- Recomendaciones:\n"
                    for rec in risk['recommendations']:
                        prompt += f"  * {rec}\n"

        english_levels = {
            'none': 'Ninguno',
            'basic': 'Básico',
            'intermediate': 'Intermedio',
            'fluent': 'Fluido'
        }
        english_level = english_levels.get(preferences.get('english_level', 'basic'), 'Básico')

        max_budget_str = f"{preferences.get('max_budget_per_person'):.2f}"
        passport_str = "Sí" if preferences.get('has_valid_passport') else "No"
        visa_str = "Sí" if preferences.get('has_us_visa') else "No"

        prompt += f"""

## PREFERENCIAS DEL GRUPO:

- Presupuesto máximo por persona: {max_budget_str} USD
- Tipos de viaje preferidos: {', '.join(preferences.get('preferred_travel_types', []))}
- Actividades de interés: {', '.join(preferences.get('preferred_activities', []))}
- Actividades a EVITAR: {', '.join(preferences.get('avoid_activities', []))}
- Pasaporte vigente: {passport_str}
- Visa americana: {visa_str}
- Duración del viaje: {preferences.get('min_trip_days')}-{preferences.get('max_trip_days')} días
- Días de anticipación para reservar: {preferences.get('advance_booking_days')} días
- Prioridad: {preferences.get('priority')}

### 🏠 ESTILO DE VIAJE Y PREFERENCIAS:
"""

        if preferences.get('prefers_hostels'):
            prompt += "- 🛏️ SIEMPRE se quedan en HOSTALES: ✅ SÍ - Prioriza hostales económicos\n"
        else:
            prompt += "- 🛏️ SIEMPRE se quedan en HOSTALES: No\n"

        if preferences.get('values_social_atmosphere'):
            prompt += "- 👥 Valoran ambiente social: ✅ SÍ - Les gusta conocer gente nueva\n"
        else:
            prompt += "- 👥 Valoran ambiente social: No\n"

        if preferences.get('city_safety_important'):
            prompt += "- 🛡️ Seguridad de la ciudad es importante: ✅ SÍ - PRIORIDAD ALTA\n"
        else:
            prompt += "- 🛡️ Seguridad de la ciudad es importante: No es crítico\n"

        if works_during_trip:
            prompt += "\n### 🚨 REQUISITOS CRÍTICOS PARA TRABAJO REMOTO:\n"
        else:
            prompt += "\n### 📋 Información adicional:\n"

        wifi_str = "SÍ - OBLIGATORIO" if preferences.get('needs_reliable_wifi') else "No es prioritario"
        works_str = "✅ SÍ - EVALÚA RIESGOS LABORALES" if works_during_trip else "❌ No"
        insurance_str = "Sí" if preferences.get('has_travel_insurance') else "No"
        vaccines_str = "Sí" if preferences.get('has_required_vaccines') else "No"

        prompt += f"- ⚠️ NECESITA WiFi CONFIABLE: {wifi_str}\n"
        prompt += f"- Trabaja durante el viaje: {works_str}\n"
        prompt += f"- Nivel de inglés del grupo: {english_level}\n"
        prompt += f"- Ya tiene seguro de viaje: {insurance_str}\n"
        prompt += f"- Ya tiene vacunas requeridas: {vaccines_str}\n"

        if preferences.get('preferred_currency_rate'):
            prompt += f"- Moneda preferida: {preferences.get('preferred_currency_rate')}\n"

        # Scoring dinámico según si trabajan o no
        if works_during_trip:
            prompt += "\n## TU ANÁLISIS DEBE INCLUIR:\n\n"
            prompt += "1. **Destino Recomendado**: Indica cuál destino recomiendas (nombre y país)\n\n"
            prompt += "2. **Score de cada destino** (0-100 puntos) - MODO TRABAJO REMOTO:\n"
            prompt += "   - 💰 Precio y accesibilidad (20 puntos) - Hostales económicos son IDEALES\n"
            prompt += "   - ❤️ Alineación con preferencias del grupo (10 puntos)\n"
            prompt += "   - 📋 Viabilidad (documentos, logística) (10 puntos)\n"
            prompt += "   - ✨ Calidad de experiencia esperada (10 puntos)\n"
            prompt += "   - 🌤️ Temporada y clima (10 puntos)\n"
            prompt += "   - 🏠 Calidad del Hostal (trabajo + social) (10 puntos) ⭐ IMPORTANTE\n"
            prompt += "   - 🛡️ Seguridad de la Ciudad/Barrio (10 puntos) ⭐ IMPORTANTE\n"
            prompt += "   - 🔴 INFRAESTRUCTURA DIGITAL (WiFi hostal/ciudad) (10 puntos) ⭐ CRÍTICO\n"
            prompt += "   - 🚨 SEGURIDAD LABORAL (riesgo país trabajo remoto) (10 puntos) ⭐ CRÍTICO\n\n"
            prompt += "   **IMPORTANTE:**\n"
            prompt += "   - SIEMPRE prefieren HOSTALES (no hoteles ni Airbnb)\n"
            prompt += "   - Hostales deben tener WiFi confiable para trabajar\n"
            prompt += "   - Hostales con ambiente social suman puntos extra\n"
            prompt += "   - Seguridad del barrio/ciudad es CRUCIAL (caminar de noche, etc.)\n"
            prompt += "   - Países con nivel de riesgo 3-4 se penalizan SEVERAMENTE\n"
            prompt += "   - Restricciones de InfoSec restan puntos significativos\n"
        else:
            prompt += "\n## TU ANÁLISIS DEBE INCLUIR:\n\n"
            prompt += "1. **Destino Recomendado**: Indica cuál destino recomiendas (nombre y país)\n\n"
            prompt += "2. **Score de cada destino** (0-100 puntos) - MODO VACACIONES:\n"
            prompt += "   - 💰 Precio y accesibilidad (30 puntos) - Hostales económicos son IDEALES\n"
            prompt += "   - ❤️ Alineación con preferencias del grupo (20 puntos)\n"
            prompt += "   - 📋 Viabilidad (documentos, logística) (10 puntos)\n"
            prompt += "   - ✨ Calidad de experiencia esperada (15 puntos)\n"
            prompt += "   - 🌤️ Temporada y clima (10 puntos)\n"
            prompt += "   - 🏠 Calidad del Hostal (ambiente social) (5 puntos) - Importante conocer gente\n"
            prompt += "   - 🛡️ Seguridad de la Ciudad/Barrio (10 puntos) ⭐ IMPORTANTE\n\n"
            prompt += "   **NOTA:**\n"
            prompt += "   - SIEMPRE prefieren HOSTALES (no hoteles ni Airbnb)\n"
            prompt += "   - Hostales con buen ambiente social son perfectos\n"
            prompt += "   - Seguridad del barrio/ciudad es CRUCIAL\n"
            prompt += "   - WiFi no es crítico, pueden estar desconectados\n"
            prompt += "   - Enfócate en experiencia, diversión y conocer gente\n"

        prompt += "\n\n3. **Razones principales** (3-5 puntos) de por qué ese destino es el mejor\n\n"
        prompt += "4. **Comparación con otros destinos**: Explica por qué los otros NO son la mejor opción\n\n"
        prompt += "5. **Recomendaciones adicionales**:\n"
        prompt += "   - Mejor aerolínea económica desde México\n"
        prompt += "   - Mejor época para encontrar vuelos baratos\n"
        prompt += "   - Tips para reducir costos\n"
        prompt += "   - 🏠 HOSTALES RECOMENDADOS con WiFi y ambiente social (MUY IMPORTANTE)\n"

        if works_during_trip:
            prompt += "   - Espacios de coworking recomendados (IMPORTANTE)\n"
            prompt += "   - Proveedores de Internet confiables en el destino (IMPORTANTE)\n"
            prompt += "   - Evaluación de riesgos laborales del destino (CRÍTICO)\n"

        prompt += "   - 🛡️ Evaluación de SEGURIDAD del barrio/ciudad (zonas seguras, transporte nocturno)\n"
        prompt += "   - Costo de seguro de viaje (si no lo tienen)\n"
        prompt += "   - Vacunas necesarias y dónde conseguirlas\n"
        prompt += "   - Mejor momento para cambio de divisa\n"
        prompt += "   - Advertencias o consideraciones importantes\n\n"
        prompt += "## CONTEXTO IMPORTANTE:\n"
        prompt += "- Los viajeros buscan VUELOS BARATOS desde México\n"
        prompt += "- Priorizan VALOR sobre lujo\n"
        prompt += "- Son viajeros con experiencia que saben moverse económicamente\n"
        prompt += "- Volaris, Viva Aerobus e interjet son aerolíneas económicas comunes desde México\n"
        prompt += "- Considera conexiones económicas en ciudades como CDMX, Cancún, Monterrey\n\n"
        prompt += "### 🏠 PREFERENCIA CRÍTICA DE HOSPEDAJE:\n"
        prompt += "- 🛏️ SIEMPRE se quedan en HOSTALES (NO hoteles, NO Airbnb)\n"
        prompt += "- Buscan hostales económicos pero con buenas instalaciones\n"
        prompt += "- El hostal DEBE tener buen WiFi (para trabajar o mantenerse conectados)\n"
        prompt += "- 👥 VALORAN MUCHO el ambiente social - les gusta conocer otros viajeros\n"
        prompt += "- Prefieren hostales con áreas comunes, cocina compartida, eventos sociales\n"
        prompt += "- Hostales populares entre mochileros y viajeros jóvenes son ideales\n\n"
        prompt += "### 🛡️ SEGURIDAD URBANA ES PRIORIDAD:\n"
        prompt += "- La seguridad del barrio/zona donde se quedan es MUY IMPORTANTE\n"
        prompt += "- Necesitan poder caminar seguros de día y noche\n"
        prompt += "- Prefieren barrios turísticos o zonas bien conectadas\n"
        prompt += "- Valoran transporte público seguro o buenas opciones de movilidad\n"
        prompt += "- EVALÚA la seguridad específica de la ciudad/barrio, no solo del país\n"

        if works_during_trip:
            prompt += "\n### 🚨 TRABAJO REMOTO:\n"
            prompt += "- CRÍTICO: Trabajan REMOTAMENTE durante el viaje - WiFi del hostal es OBLIGATORIO\n"
            prompt += "- DEBE evaluar riesgos laborales usando la información de Zendesk Country Risk Ratings proporcionada\n"
            prompt += "- Países con nivel 3-4 de riesgo NO son recomendados para trabajo remoto\n"
            prompt += "- Restricciones de InfoSec son un problema serio (pueden necesitar dispositivo especial)\n"
            prompt += "- Buscan destinos 'digital nomad friendly' con excelente infraestructura\n"
            prompt += "- Hostales con espacios de trabajo o escritorios en habitaciones son un plus\n"
            prompt += "- Valoran cafés con WiFi, coworking spaces cercanos al hostal\n"
        else:
            prompt += "\n### ✅ MODO VACACIONES:\n"
            prompt += "- NO trabajan durante el viaje - WiFi no es prioridad crítica (pero ayuda)\n"
            prompt += "- Pueden elegir destinos más remotos o rústicos sin problema\n"
            prompt += "- Prioriza experiencias únicas, fiestas, conocer gente\n"
            prompt += "- El ambiente social del hostal es más importante que infraestructura digital\n"

        prompt += "\n\nResponde en formato JSON estructurado con esta estructura:\n"

        if works_during_trip:
            prompt += """{{
  "recommended_destination": "Nombre del destino",
  "scores": [
    {{"destination": "Nombre", "score": 85, "breakdown": {{"price": 20, "preferences": 10, "viability": 10, "experience": 10, "season": 10, "hostel_quality": 10, "city_safety": 10, "digital_infrastructure": 10, "work_safety": 10}}}}
  ],
  "main_reasons": ["razón 1", "razón 2", ...],
  "comparison": "Explicación comparativa de por qué no los otros...",
  "hostel_analysis": "Evaluación de HOSTALES con WiFi, espacios de trabajo y ambiente social",
  "city_safety_analysis": "Evaluación de SEGURIDAD del barrio/ciudad específica",
  "wifi_assessment": "Evaluación DETALLADA de WiFi en hostales y ciudad",
  "work_safety_summary": "Resumen de seguridad laboral y riesgos por país",
  "additional_recommendations": {{
    "airlines": ["Volaris", "Viva Aerobus"],
    "best_booking_time": "3-4 meses antes",
    "recommended_hostels": ["Hostal 1 con WiFi", "Hostal 2 ambiente social"],
    "safe_neighborhoods": ["Barrio 1", "Barrio 2"],
    "coworking_spaces": ["Espacio 1", "Espacio 2"],
    "wifi_providers": ["Proveedor local recomendado"],
    "work_risk_warnings": ["Advertencias específicas sobre trabajar en el destino"],
    "travel_insurance_cost": "Estimado de costo",
    "required_vaccines": ["Vacuna 1", "Vacuna 2"],
    "currency_exchange_tips": "Mejor momento y lugar para cambiar",
    "cost_saving_tips": ["tip 1", "tip 2"],
    "warnings": ["advertencia 1"]
  }}
}}"""
        else:
            prompt += """{{
  "recommended_destination": "Nombre del destino",
  "scores": [
    {{"destination": "Nombre", "score": 85, "breakdown": {{"price": 30, "preferences": 20, "viability": 10, "experience": 15, "season": 10, "hostel_quality": 5, "city_safety": 10}}}}
  ],
  "main_reasons": ["razón 1", "razón 2", ...],
  "comparison": "Explicación comparativa de por qué no los otros...",
  "hostel_analysis": "Evaluación de HOSTALES con ambiente social y fiesta",
  "city_safety_analysis": "Evaluación de SEGURIDAD del barrio/ciudad específica",
  "additional_recommendations": {{
    "airlines": ["Volaris", "Viva Aerobus"],
    "best_booking_time": "3-4 meses antes",
    "recommended_hostels": ["Hostal 1 ambiente social", "Hostal 2 fiesta"],
    "safe_neighborhoods": ["Barrio 1", "Barrio 2"],
    "travel_insurance_cost": "Estimado de costo",
    "required_vaccines": ["Vacuna 1", "Vacuna 2"],
    "currency_exchange_tips": "Mejor momento y lugar para cambiar",
    "cost_saving_tips": ["tip 1", "tip 2"],
    "warnings": ["advertencia 1"]
  }}
}}"""

        return prompt

    def _parse_ai_response(self, response_text: str) -> Dict[str, Any]:
        """Parsea la respuesta de Claude"""
        try:
            # Intentar extraer JSON de la respuesta
            start_idx = response_text.find('{')
            end_idx = response_text.rfind('}') + 1

            if start_idx != -1 and end_idx > start_idx:
                json_str = response_text[start_idx:end_idx]
                return json.loads(json_str)
            else:
                # Si no hay JSON, devolver texto plano
                return {
                    "raw_response": response_text,
                    "error": False
                }
        except json.JSONDecodeError:
            return {
                "raw_response": response_text,
                "error": False,
                "message": "Respuesta en formato texto"
            }

    def extract_trip_info(self, text: str) -> Dict[str, Any]:
        """
        Extrae información estructurada de texto libre usando IA

        Args:
            text: Descripción libre del viaje en lenguaje natural

        Returns:
            Diccionario con información extraída (destinos, preferencias, etc.)
        """

        prompt = f"""Eres un asistente experto en extraer información de viajes. Analiza el siguiente texto y extrae TODA la información relevante en formato JSON estructurado.

TEXTO DEL USUARIO:
{text}

INSTRUCCIONES:
1. Identifica TODOS los destinos mencionados (ciudades y países)
2. Extrae información del grupo (número de viajeros, presupuesto, fechas)
3. Identifica preferencias (actividades, estilo de viaje, prioridades)
4. Extrae cualquier detalle adicional relevante

FORMATO DE RESPUESTA (JSON estricto):
{{
    "num_travelers": número,
    "max_budget": número o null,
    "currency": "MXN" | "USD" | "COP",
    "destinations": [
        {{
            "country": "nombre del país",
            "city": "nombre de la ciudad",
            "proposed_by": "nombre o null"
        }}
    ],
    "dates": {{
        "start_date": "YYYY-MM-DD o null",
        "end_date": "YYYY-MM-DD o null",
        "duration_days": número o null,
        "flexibility": "fixed" | "±3days" | "±1week"
    }},
    "preferences": {{
        "priority": "price" | "balance" | "experience",
        "travel_types": ["playa", "ciudad", "naturaleza", "cultural", "aventura"],
        "activities": ["comida", "fiesta", "historia", "deportes", "relajacion", "compras"],
        "avoid_activities": ["alturas", "calor_extremo", "frio_extremo", "multitudes"],
        "prefers_hostels": boolean,
        "values_social": boolean,
        "city_safety_important": boolean,
        "needs_wifi": boolean,
        "works_during_trip": boolean,
        "english_level": "none" | "basic" | "intermediate" | "fluent",
        "departure_airport": "CDMX" | "GDL" | "MTY" | "CUN" | "TIJ" | "BJX"
    }},
    "notes": "cualquier información adicional relevante"
}}

REGLAS IMPORTANTES:
- Si NO mencionan algo, usa null o valores por defecto razonables
- Identifica TODOS los destinos aunque no estén explícitos
- Infiere información del contexto cuando sea posible
- Si mencionan "pesos", asume MXN como moneda
- Convierte fechas relativas a absolutas si es posible
- Responde SOLO con el JSON, sin texto adicional

JSON:"""

        try:
            if self.use_bedrock:
                # Usar AWS Bedrock gateway
                headers = {
                    "Authorization": f"Bearer {self.bearer_token}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "messages": [
                        {
                            "role": "user",
                            "content": [{"type": "text", "text": prompt}]
                        }
                    ],
                    "anthropic_version": "bedrock-2023-05-31",
                    "max_tokens": 2000
                }

                response = requests.post(self.endpoint, headers=headers, json=payload, timeout=60)
                response.raise_for_status()

                result = response.json()
                response_text = result['content'][0]['text']
            else:
                # Usar Anthropic directo
                message = self.client.messages.create(
                    model="claude-sonnet-4-20250514",
                    max_tokens=2000,
                    messages=[
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ]
                )
                response_text = message.content[0].text

            # Parsear JSON de la respuesta
            start_idx = response_text.find('{')
            end_idx = response_text.rfind('}') + 1

            if start_idx != -1 and end_idx > start_idx:
                json_str = response_text[start_idx:end_idx]
                extracted_data = json.loads(json_str)
                return extracted_data
            else:
                return {
                    "error": True,
                    "message": "No se pudo extraer JSON de la respuesta"
                }

        except Exception as e:
            return {
                "error": True,
                "message": f"Error al extraer información: {str(e)}"
            }
