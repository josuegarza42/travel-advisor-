import pandas as pd
import os
from typing import Dict, Optional

class CountryRiskChecker:
    """Verifica riesgos laborales por país según Zendesk Country Risk Ratings"""

    def __init__(self):
        self.risk_data = {}
        self.excel_path = os.path.join(
            os.path.dirname(os.path.dirname(__file__)),
            '[PUBLIC] Zendesk Country Risk Ratings.xlsx'
        )
        self._load_risk_data()

    def _load_risk_data(self):
        """Carga los datos de riesgo del archivo Excel"""
        try:
            xl_file = pd.ExcelFile(self.excel_path)

            # Mapeo de niveles de riesgo
            risk_levels = {
                'Level 4 TRAVEL PROHIBITED': 4,
                'Level 3 High Risk': 3,
                'Level 2 Medium Risk': 2,
                'Level 1 Low Risk': 1
            }

            for sheet_name in xl_file.sheet_names:
                df = pd.read_excel(self.excel_path, sheet_name=sheet_name)

                for _, row in df.iterrows():
                    country = row['Country'].strip() if pd.notna(row['Country']) else None
                    if not country:
                        continue

                    # Normalizar nombre del país para búsqueda
                    country_normalized = self._normalize_country_name(country)

                    self.risk_data[country_normalized] = {
                        'country': country,
                        'risk_level': risk_levels[sheet_name],
                        'risk_level_name': sheet_name,
                        'infosec_restrictions': row['InfoSec Restrictions'] == 'YES' if pd.notna(row['InfoSec Restrictions']) else False,
                        'admin_note': row['Admin Note'] if pd.notna(row['Admin Note']) else None
                    }

        except Exception as e:
            print(f"Warning: No se pudo cargar archivo de riesgos: {e}")
            # Si falla, continuar sin datos de riesgo

    def _normalize_country_name(self, country: str) -> str:
        """Normaliza el nombre del país para búsqueda flexible"""
        # Convertir a minúsculas y quitar acentos comunes
        normalized = country.lower().strip()
        # Mapeo de nombres alternativos
        aliases = {
            'mexico': 'méxico',
            'méxico': 'méxico',
            'colombia': 'colombia',
            'united states': 'united states of america',
            'usa': 'united states of america',
            'us': 'united states of america',
            'españa': 'spain',
            'uk': 'united kingdom',
        }
        return aliases.get(normalized, normalized)

    def get_country_risk(self, country: str) -> Optional[Dict]:
        """
        Obtiene información de riesgo para un país

        Returns:
            Dict con risk_level (1-4), risk_level_name, infosec_restrictions, admin_note
            None si no se encuentra el país
        """
        normalized = self._normalize_country_name(country)

        # Buscar exacto
        if normalized in self.risk_data:
            return self.risk_data[normalized]

        # Buscar parcial (para casos como "Korea, South" vs "South Korea")
        for key, value in self.risk_data.items():
            if normalized in key or key in normalized:
                return value

        return None

    def get_work_safety_assessment(self, country: str) -> Dict:
        """
        Evalúa la seguridad para trabajo remoto en un país

        Returns:
            Dict con is_safe, risk_level, warnings, recommendations
        """
        risk_info = self.get_country_risk(country)

        if not risk_info:
            return {
                'is_safe': True,
                'risk_level': 0,
                'risk_level_name': 'Unknown',
                'warnings': [f"No hay información de riesgo para {country}. Verifica fuentes adicionales."],
                'recommendations': []
            }

        risk_level = risk_info['risk_level']
        warnings = []
        recommendations = []
        is_safe = True

        # Nivel 4: PROHIBIDO
        if risk_level == 4:
            is_safe = False
            warnings.append(f"🔴 VIAJE PROHIBIDO a {country} según políticas de Zendesk")
            warnings.append("Este destino NO es recomendado para trabajo remoto")
            recommendations.append("Considera otros destinos más seguros")

        # Nivel 3: Alto riesgo
        elif risk_level == 3:
            is_safe = False
            warnings.append(f"🟠 {country} tiene clasificación de ALTO RIESGO")
            warnings.append("No recomendado para trabajo remoto")
            recommendations.append("Si es esencial viajar, contacta a tu empresa primero")

        # Nivel 2: Riesgo medio
        elif risk_level == 2:
            warnings.append(f"🟡 {country} tiene clasificación de RIESGO MEDIO")
            recommendations.append("Toma precauciones adicionales")
            recommendations.append("Informa a tu empleador sobre el viaje")

        # Nivel 1: Bajo riesgo
        elif risk_level == 1:
            recommendations.append(f"✅ {country} tiene clasificación de BAJO RIESGO para trabajo")

        # Restricciones de InfoSec
        if risk_info['infosec_restrictions']:
            warnings.append("⚠️ Este país tiene RESTRICCIONES DE SEGURIDAD INFORMÁTICA")
            recommendations.append("Es posible que necesites dispositivo especial para trabajar")
            recommendations.append("NO uses tu laptop de trabajo personal sin autorización")

        # Notas administrativas
        if risk_info['admin_note']:
            warnings.append(f"Nota importante: {risk_info['admin_note']}")

        return {
            'is_safe': is_safe,
            'risk_level': risk_level,
            'risk_level_name': risk_info['risk_level_name'],
            'warnings': warnings,
            'recommendations': recommendations,
            'infosec_restrictions': risk_info['infosec_restrictions']
        }
