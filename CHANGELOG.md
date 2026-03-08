# Changelog - Travel Advisor

## Version 2.0 - Trabajo Remoto con Análisis de Riesgos

### 🚨 Funcionalidades Principales

#### 1. **Scoring Dinámico**
- El sistema ahora ajusta automáticamente el peso de cada categoría según si trabajan o no durante el viaje
- **Modo Trabajo Remoto**: Prioriza WiFi (15pts) y Seguridad Laboral (15pts)
- **Modo Vacaciones**: Prioriza Precio (30pts) y Experiencia (20pts), sin evaluar WiFi crítico

#### 2. **Integración con Zendesk Country Risk Ratings**
- Carga automática del archivo Excel `[PUBLIC] Zendesk Country Risk Ratings.xlsx`
- Evalúa 4 niveles de riesgo para 242 países
- Detecta restricciones de seguridad informática (InfoSec)
- **Nivel 4**: VIAJE PROHIBIDO - 32 países
- **Nivel 3**: Alto Riesgo - 13 países
- **Nivel 2**: Riesgo Medio - 94 países
- **Nivel 1**: Bajo Riesgo - 103 países

#### 3. **Evaluación Inteligente de Riesgos Laborales**
- Solo se activa cuando `works_during_trip = true`
- Analiza cada destino propuesto contra la base de datos de riesgos
- Genera advertencias específicas por país:
  - Prohibiciones de viaje
  - Restricciones de InfoSec (necesidad de dispositivo especial)
  - Recomendaciones de seguridad
- Penaliza severamente destinos de alto riesgo en el scoring

#### 4. **UI/UX Mejorada**
- Nueva sección "Trabajo Remoto y Requisitos" claramente marcada
- Checkbox de WiFi con indicador visual 🔴 cuando es crítico
- Resultados muestran scoring dinámico (5 o 7 categorías según modo)
- Nueva tarjeta de "Seguridad Laboral" en resultados (solo en modo trabajo)
- Advertencias de riesgo destacadas con fondo rojo

### 📦 Cambios Técnicos

#### Backend
- **Nuevo módulo**: `app/risk_checker.py`
  - Clase `CountryRiskChecker` para consultar riesgos
  - Método `get_work_safety_assessment()` para evaluación completa
  - Normalización de nombres de países para búsqueda flexible

- **Actualizado**: `app/ai_advisor.py`
  - Prompt dinámico según modo de viaje
  - Integración con RiskChecker
  - Scoring adaptativo (5 vs 7 categorías)
  - Información de riesgos incluida en el prompt a Claude

- **Actualizado**: `requirements.txt`
  - Agregado: `pandas==2.2.0`
  - Agregado: `openpyxl==3.1.2`

#### Frontend
- **Actualizado**: `index.html`
  - Nueva sección de Trabajo Remoto
  - Nueva sección de Documentos y Salud
  - Campos adicionales: nivel de inglés, moneda preferida, seguros, vacunas

- **Actualizado**: `js/app.js`
  - Detección de modo trabajo remoto
  - Display dinámico de scoring (5 o 7 categorías)
  - Nueva tarjeta de seguridad laboral
  - Nueva tarjeta de advertencias de riesgo laboral

#### Datos
- **Incluido**: `[PUBLIC] Zendesk Country Risk Ratings.xlsx`
  - Base de datos oficial de riesgos por país
  - 4 hojas (niveles de riesgo)
  - Información de restricciones InfoSec

### 🎯 Cómo Funciona

1. **Usuario marca "Trabaja durante el viaje"**:
   - Sistema cambia a modo trabajo remoto
   - WiFi pasa a ser CRÍTICO (15 puntos)
   - Se agrega categoría de Seguridad Laboral (15 puntos)
   - Se reduce peso de experiencia/preferencias

2. **Sistema consulta riesgos**:
   - Por cada destino, consulta el país en Zendesk Risk Ratings
   - Obtiene nivel de riesgo (1-4)
   - Detecta si hay restricciones InfoSec
   - Genera advertencias y recomendaciones específicas

3. **Claude analiza con contexto completo**:
   - Recibe información de riesgo de cada país
   - Ajusta scoring según nivel de riesgo
   - Genera recomendaciones específicas para trabajo remoto
   - Advierte sobre países peligrosos o con restricciones

4. **Resultados personalizados**:
   - Muestra scoring con 7 categorías (incluye WiFi y Seguridad Laboral)
   - Destaca advertencias de riesgo laboral
   - Recomienda coworking spaces y proveedores de WiFi
   - Explica por qué ciertos destinos no son seguros para trabajo

### 🔄 Flujo de Usuario

```
Usuario completa formulario
    ↓
¿Trabaja durante el viaje?
    ↓
  SÍ → Modo Trabajo Remoto
    ↓
Sistema consulta riesgos laborales de cada país
    ↓
Scoring ajustado: 7 categorías
WiFi (15pts) + Seguridad Laboral (15pts)
    ↓
Claude analiza con información de riesgos
    ↓
Resultados muestran:
- Scoring completo
- Evaluación de seguridad laboral
- Advertencias específicas
- Recomendaciones de coworking
```

```
Usuario completa formulario
    ↓
¿Trabaja durante el viaje?
    ↓
  NO → Modo Vacaciones
    ↓
NO consulta riesgos laborales
    ↓
Scoring ajustado: 5 categorías
Precio (30pts) + Experiencia (20pts)
    ↓
Claude analiza enfocado en diversión
    ↓
Resultados muestran:
- Scoring simplificado
- Enfoque en experiencia
- WiFi no es crítico
```

### ⚠️ Notas Importantes

- El archivo Excel debe estar en la raíz del proyecto: `[PUBLIC] Zendesk Country Risk Ratings.xlsx`
- Si el archivo no existe, el sistema continúa sin evaluación de riesgos
- La búsqueda de países es flexible (maneja variaciones de nombres)
- Países con nivel 4 (PROHIBIDO) son fuertemente penalizados
- Restricciones InfoSec generan advertencias importantes

### 🧪 Para Probar

```bash
cd travel-advisor
./start.sh

# O prueba la API directamente
./test_api.sh
```

El `example_request.json` incluye 4 destinos con diferentes niveles de riesgo para probar la funcionalidad completa.
