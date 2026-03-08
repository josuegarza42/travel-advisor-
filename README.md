# 🌎 Travel Advisor

Aplicación web inteligente que usa Claude AI para ayudarte a elegir el mejor destino de viaje basado en múltiples propuestas y preferencias del grupo.

## 🎯 Características

- **Análisis inteligente con IA**: Usa Claude para analizar y comparar destinos
- **✈️ Buscador de Vuelos**: Encuentra los 5 vuelos más baratos usando Google Flights (SerpApi)
  - Filtros por escalas (directos, 1 escala, cualquiera)
  - Soporte para vuelos redondos
  - Múltiples aeropuertos por ciudad
  - Conversión a MXN, USD, COP
- **💱 Conversor de Divisas**: Tasas de cambio en tiempo real
- **🔴 Optimizado para Trabajo Remoto**: Evalúa infraestructura digital, WiFi confiable y espacios de coworking
- **🚨 Evaluación de Riesgos Laborales**: Integra datos de Zendesk Country Risk Ratings para evaluar seguridad al trabajar desde cada destino
- **Scoring Dinámico**: Ajusta automáticamente los criterios de evaluación según si trabajan o no durante el viaje
- **Diseño para viajeros económicos**: Enfocado en vuelos baratos desde México
- **Interfaz moderna**: Frontend responsive estilo Airbnb con soporte multiidioma (ES/EN/PT)
- **Listo para producción**: Preparado para Railway.app

## 📋 Variables que considera

### Por cada destino:
- **Básicas**:
  - Ciudad/País
  - Presupuesto por persona
  - Fechas (con flexibilidad configurable: fijas, ±3 días, ±1 semana)
  - Duración del viaje (días)
  - Aeropuerto de salida (CDMX, GDL, MTY, CUN, TIJ, BJX)
  - Tolerancia a escalas

- **Experiencia**:
  - Tipo de viaje (playa, ciudad, naturaleza, cultural, aventura)
  - Actividades principales
  - Tipo de hospedaje (hostal, hotel económico, Airbnb, hotel medio)
  - Eventos especiales (festivales, conciertos, temporadas altas)

- **🔴 Trabajo Remoto** (CRÍTICO):
  - Calidad de WiFi necesaria (crítico/importante/deseable)
  - Disponibilidad de espacios de coworking
  - Infraestructura digital del destino

- **Documentos y Salud**:
  - Requiere seguro de viaje
  - Requiere vacunas
  - Notas adicionales

### Preferencias del grupo:
- **Presupuesto y Logística**:
  - Presupuesto máximo por persona
  - Duración min/max del viaje
  - Días de anticipación para reservar
  - Prioridad (precio/balance/experiencia)

- **Experiencia de Viaje**:
  - Tipos de viaje preferidos
  - Actividades de interés
  - Actividades a EVITAR

- **🔴 Trabajo Remoto** (MUY IMPORTANTE):
  - Necesita WiFi confiable (sí/no) - **PESO ALTO EN ANÁLISIS**
  - Trabaja durante el viaje (sí/no)
  - Nivel de inglés del grupo (ninguno/básico/intermedio/fluido)

- **Documentos y Finanzas**:
  - Pasaporte vigente (sí/no)
  - Visa americana (sí/no) - para conexiones en USA
  - Ya tiene seguro de viaje (sí/no)
  - Ya tiene vacunas requeridas (sí/no)
  - Moneda preferida / Mejor tasa de cambio (USD/EUR/MXN/mejor tasa)

### Análisis de la IA:

El sistema usa un **scoring ponderado DINÁMICO de 0-100 puntos** que se ajusta según si trabajan durante el viaje:

#### **Modo Trabajo Remoto** (si alguien trabaja durante el viaje):
- **💰 Precio y accesibilidad** (25 puntos): Costo de vuelos, hospedaje, comida
- **❤️ Alineación con preferencias** (15 puntos): Qué tan bien coincide con gustos del grupo
- **📋 Viabilidad** (10 puntos): Documentos, logística, facilidad de acceso
- **✨ Experiencia esperada** (10 puntos): Calidad del destino, actividades disponibles
- **🌤️ Temporada y clima** (10 puntos): Mejor época para visitar
- **🔴 Infraestructura Digital** (15 puntos): **WiFi confiable, coworking spaces, conectividad** - PESO ALTO
- **🚨 Seguridad Laboral** (15 puntos): **Riesgo país según Zendesk Country Risk Ratings** - PESO ALTO

#### **Modo Vacaciones** (nadie trabaja durante el viaje):
- **💰 Precio y accesibilidad** (30 puntos): Mayor peso en precio
- **❤️ Alineación con preferencias** (25 puntos): Mayor peso en experiencia
- **📋 Viabilidad** (15 puntos): Documentos, logística
- **✨ Experiencia esperada** (20 puntos): Mayor peso en diversión
- **🌤️ Temporada y clima** (10 puntos): Mejor época

**WiFi no es crítico en modo vacaciones**, permitiendo destinos más remotos o rústicos.

#### Análisis de Riesgos Laborales (cuando trabajan):

El sistema consulta **Zendesk Country Risk Ratings** con 4 niveles:
- **Nivel 4 - VIAJE PROHIBIDO**: 32 países donde NO se debe trabajar remotamente
- **Nivel 3 - Alto Riesgo**: 13 países no recomendados para trabajo remoto
- **Nivel 2 - Riesgo Medio**: 94 países con precauciones necesarias
- **Nivel 1 - Bajo Riesgo**: 103 países seguros para trabajo remoto

También detecta **restricciones de seguridad informática** (InfoSec) que requieren dispositivos especiales.

Además analiza:
- Precios de vuelos desde México (aerolíneas económicas)
- Costo de vida en destino
- Consenso del grupo
- Seguridad del destino
- **Evaluación detallada de conectividad para trabajo remoto** (si aplica)
- Espacios de coworking recomendados (si aplica)
- Proveedores de Internet locales (si aplica)
- **Advertencias específicas de riesgos laborales** (si aplica)
- Costos de seguro de viaje
- Vacunas necesarias
- Mejor momento para cambio de divisa

## 🚀 Instalación Local

### Requisitos previos
- Python 3.11+
- Node.js (opcional, para servir el frontend)
- Cuenta de Anthropic con API Key

### 1. Clonar el repositorio

```bash
cd travel-advisor
```

### 2. Configurar el Backend

```bash
cd backend

# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Edita .env y agrega tu ANTHROPIC_API_KEY
```

### 3. Obtener tu API Key de Anthropic

1. Ve a [console.anthropic.com](https://console.anthropic.com/)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" y genera una nueva key
4. Copia la key y agrégala en tu archivo `.env`:

```bash
ANTHROPIC_API_KEY=sk-ant-api03-xxx
```

### 4. Ejecutar el Backend

```bash
python run.py
```

El backend estará corriendo en `http://localhost:5000`

### 5. Ejecutar el Frontend

Opción 1: Abrir directamente el archivo HTML
```bash
open frontend/index.html  # En Mac
# o simplemente abre el archivo en tu navegador
```

Opción 2: Usar un servidor HTTP simple
```bash
cd frontend
python3 -m http.server 8080
# Abre http://localhost:8080 en tu navegador
```

## 🐳 Deployment con Docker

### Desarrollo

```bash
# Configurar variables de entorno
cp backend/.env.example backend/.env
# Edita backend/.env con tu API key

# Levantar los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f
```

Accede a:
- Frontend: http://localhost:8080
- Backend API: http://localhost:5000

### Producción

Para producción, considera:

1. **Usar variables de entorno del sistema**:
```bash
export ANTHROPIC_API_KEY=tu_api_key
docker-compose up -d
```

2. **Plataformas de deployment**:
   - **Railway**: Perfecto para el backend Flask
   - **Vercel/Netlify**: Para el frontend estático
   - **Render**: Full stack con Docker
   - **DigitalOcean App Platform**: Docker-compose directo
   - **AWS ECS/Fargate**: Para mayor escala

### Deployment en Railway (Recomendado):

#### Paso 1: Preparar el repositorio
```bash
# Si no has inicializado git
git init
git add .
git commit -m "Initial commit"

# Crear repositorio en GitHub y hacer push
git remote add origin https://github.com/tu-usuario/travel-advisor.git
git branch -M main
git push -u origin main
```

#### Paso 2: Desplegar en Railway
1. Ve a [railway.app](https://railway.app) y regístrate con GitHub
2. Click en "New Project"
3. Selecciona "Deploy from GitHub repo"
4. Elige tu repositorio `travel-advisor`
5. Railway detectará automáticamente el `Procfile` y desplegará

#### Paso 3: Configurar Variables de Entorno
En Railway, ve a tu proyecto → Variables → Add Variable:
```
SERPAPI_KEY=tu_serpapi_key_aqui
FLASK_ENV=production
PORT=5000
```

#### Paso 4: Obtener API Keys

**SerpApi (para búsqueda de vuelos):**
1. Regístrate en [serpapi.com](https://serpapi.com)
2. Plan gratuito: 100 búsquedas/mes
3. Copia tu API key desde el dashboard

**Anthropic (para análisis de destinos):**
1. Ve a [console.anthropic.com](https://console.anthropic.com/)
2. Genera una nueva API key
3. Agrégala como variable de entorno: `ANTHROPIC_API_KEY=sk-ant-...`

#### Paso 5: ¡Listo!
Railway te dará una URL pública como: `https://tu-app.railway.app`

## 📁 Estructura del Proyecto

```
travel-advisor/
├── backend/
│   ├── app/
│   │   ├── __init__.py       # App factory
│   │   ├── config.py         # Configuración
│   │   ├── models.py         # Modelos de datos
│   │   ├── routes.py         # API endpoints
│   │   └── ai_advisor.py     # Lógica de IA
│   ├── requirements.txt
│   ├── .env.example
│   └── run.py               # Entry point
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── tests/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .gitignore
└── README.md
```

## 🔧 API Endpoints

### `GET /`
Info de la API

### `GET /api/health`
Health check

### `POST /api/analyze`
Analiza destinos y retorna recomendación

**Request body:**
```json
{
  "destinations": [...],
  "group_preferences": {...},
  "num_travelers": 4
}
```

**Response:**
```json
{
  "success": true,
  "analysis": {
    "recommended_destination": "Playa del Carmen, México",
    "scores": [...],
    "main_reasons": [...],
    "comparison": "...",
    "additional_recommendations": {...}
  }
}
```

### `POST /api/validate-destination`
Valida un destino antes de enviar

## 🎨 Personalización

### Cambiar el modelo de Claude

En `backend/app/ai_advisor.py`, línea 26:
```python
model="claude-sonnet-4-20250514"  # Cambiar por opus-4 para más poder
```

### Agregar más aeropuertos

En `frontend/index.html`, busca el select de aeropuertos y agrega opciones.

### Modificar el prompt de análisis

Edita el método `_build_analysis_prompt` en `backend/app/ai_advisor.py`.

## 🧪 Testing

```bash
# Instalar dependencias de testing
pip install pytest pytest-flask

# Correr tests
pytest tests/
```

## 🐛 Troubleshooting

### Error: "ANTHROPIC_API_KEY not found"
- Verifica que tu archivo `.env` existe en `backend/`
- Asegúrate que la variable está definida correctamente
- Si usas Docker, pasa la variable con `-e` o en docker-compose.yml

### Error: "CORS policy blocked"
- Verifica que el backend esté corriendo
- Revisa que CORS esté habilitado en `backend/app/__init__.py`

### Frontend no se conecta al backend
- Verifica la URL en `frontend/js/app.js`, línea 2
- Asegúrate que el backend esté en el puerto correcto

## 📝 Próximas mejoras

- [ ] Integración con API de vuelos (Skyscanner, Kayak)
- [ ] Base de datos para guardar análisis previos
- [ ] Sistema de autenticación para grupos
- [ ] Compartir resultados por link
- [ ] Modo comparación visual con gráficas
- [ ] Notificaciones cuando bajan precios de vuelos
- [ ] App móvil con React Native

## 🤝 Contribuir

Pull requests son bienvenidos! Para cambios grandes, abre un issue primero.

## 📄 Licencia

MIT

## 💬 Soporte

Si tienes problemas o preguntas, abre un issue en GitHub.

---

Hecho con ❤️ y Claude AI
