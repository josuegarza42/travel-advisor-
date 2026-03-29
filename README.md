# ✈️ TripwiseAI

**Aplicación web de viajes inteligente** — Compara destinos con IA, busca vuelos baratos, convierte divisas, explora el mapa y gestiona disponibilidad V+ de Volaris.

🌐 **[tripwiseai.up.railway.app](https://tripwiseai.up.railway.app/)**

---

## ✨ Características principales

| Módulo | Descripción |
|--------|-------------|
| ✈️ **Vuelos** | Busca los vuelos más baratos con filtros por escalas, fechas y aeropuerto de salida |
| 🔍 **Comparar destinos** | Analiza hasta 4 destinos con IA (Groq + Llama 3.3 70B) y obtén una recomendación personalizada |
| 💱 **Divisas** | Conversor bilateral con tasas en tiempo real + comparación simultánea de múltiples monedas |
| 🗺️ **Mapa** | Explora puntos de interés cerca de cualquier ciudad con OpenTripMap + MapLibre GL |
| 🎫 **V+** | Consulta la disponibilidad diaria de vuelos del pase anual V+ de Volaris (carga PDF) |

### Otras características
- **7 idiomas**: Español, English, Português, Français, Deutsch, 中文, 日本語
- **Diseño responsive**: Optimizado para móvil y escritorio, con barra de navegación inferior en móvil
- **Selector de moneda**: MXN, USD, COP — precios adaptados a tu moneda preferida
- **Scoring ponderado dinámico**: La IA ajusta los criterios según si viajas por vacaciones o trabajo remoto

---

## 🛠️ Tech stack

**Backend**
- [Flask](https://flask.palletsprojects.com/) — API REST en Python
- [Groq AI](https://groq.com/) + Llama 3.3 70B — Análisis inteligente de destinos
- [Kiwi.com Tequila API](https://tequila.kiwi.com/) — Búsqueda de vuelos
- [PyPDF2](https://pypdf2.readthedocs.io/) — Parser de PDF para disponibilidad V+
- [Gunicorn](https://gunicorn.org/) — Servidor WSGI para producción

**Frontend**
- Vanilla JS + HTML5 + CSS3 (sin frameworks)
- [MapLibre GL JS](https://maplibre.org/) — Mapas interactivos
- [OpenFreeMap](https://openfreemap.org/) — Tiles de mapa gratuitos
- [OpenTripMap API](https://opentripmap.io/) — Puntos de interés por ciudad
- [ExchangeRate-API](https://www.exchangerate-api.com/) — Tasas de cambio en tiempo real

**Infraestructura**
- [Railway.app](https://railway.app/) — Hosting y auto-deploy desde GitHub
- [Nixpacks](https://nixpacks.com/) — Build automático (Python 3.12)

---

## 📁 Estructura del proyecto

```
travel-advisor/
├── backend/
│   ├── app/
│   │   ├── __init__.py        # App factory + CORS
│   │   ├── config.py          # Variables de entorno
│   │   ├── routes.py          # API endpoints
│   │   ├── ai_advisor.py      # Análisis de destinos con Groq
│   │   ├── flight_search.py   # Búsqueda de vuelos (Kiwi.com)
│   │   ├── vplus_parser.py    # Parser PDF V+ Volaris
│   │   ├── risk_checker.py    # Evaluación de riesgo país
│   │   └── models.py          # Modelos de datos
│   ├── requirements.txt
│   ├── .env.example
│   ├── wsgi.py
│   └── run.py
├── frontend/
│   ├── index.html             # Búsqueda de vuelos
│   ├── compare.html           # Comparador de destinos
│   ├── currency-converter.html
│   ├── map.html
│   ├── vplus.html
│   ├── css/
│   │   ├── styles.css
│   │   └── vplus.css
│   ├── js/
│   │   ├── i18n.js            # Sistema de traducción (7 idiomas)
│   │   ├── config.js          # Config del cliente
│   │   ├── app.js             # Lógica principal de vuelos
│   │   ├── compare.js         # Lógica de comparación
│   │   ├── converter.js       # Conversor de divisas
│   │   ├── opentripmap.js     # Integración de mapa
│   │   ├── currency-data.js   # Catálogo de monedas
│   │   └── nav.js             # Barra de navegación móvil
│   └── libs/                  # MapLibre GL (local)
├── Procfile                   # gunicorn para Railway
├── nixpacks.toml              # Python 3.12
└── docker-compose.yml
```

---

## 🔌 API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/analyze` | Analiza y compara destinos con IA |
| `POST` | `/api/quick-fill` | Rellena automáticamente datos de un destino |
| `POST` | `/api/search-flights` | Busca vuelos baratos (Kiwi.com) |
| `GET` | `/api/airport-code/<city>` | Obtiene código IATA de una ciudad |
| `POST` | `/api/flight-booking-options` | Opciones de reserva para un vuelo |
| `POST` | `/api/validate-destination` | Valida un destino antes de analizar |
| `GET` | `/api/vplus` | Disponibilidad V+ desde PDF en servidor |
| `POST` | `/api/vplus/upload` | Disponibilidad V+ desde PDF subido por el usuario |
| `GET` | `/api/debug-config` | Estado de configuración (dev) |

---

## 🚀 Instalación local

### Requisitos
- Python 3.12+
- API Keys (ver sección abajo)

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/travel-advisor.git
cd travel-advisor
```

### 2. Configurar el backend

```bash
cd backend

# Crear entorno virtual
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus API keys
```

### 3. Ejecutar

```bash
# Backend (desde /backend)
python run.py
# → http://localhost:5000

# Frontend (desde /frontend)
python3 -m http.server 8080
# → http://localhost:8080
```

---

## 🔑 Variables de entorno

```env
# Groq AI — Análisis de destinos con Llama 3.3 70B
# https://console.groq.com/
GROQ_API_KEY=gsk_...

# Kiwi.com Tequila — Búsqueda de vuelos
# https://tequila.kiwi.com/
KIWI_API_KEY=...

# SerpAPI — Búsqueda alternativa de vuelos
# https://serpapi.com/
SERPAPI_KEY=...

FLASK_ENV=development
SECRET_KEY=cambia_esto_en_produccion
PORT=5000
```

> **Nota:** Solo `GROQ_API_KEY` es estrictamente necesaria para el análisis de destinos. Las demás son opcionales según las funciones que quieras usar.

---

## ☁️ Deploy en Railway

El proyecto ya está configurado para Railway con auto-deploy desde la rama `main`.

1. Fork este repositorio
2. Ve a [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
3. Selecciona tu fork
4. En **Variables**, agrega tus API keys
5. Railway desplegará automáticamente con `Procfile` y `nixpacks.toml`

---

## 🐳 Docker (desarrollo local)

```bash
cp backend/.env.example backend/.env
# Editar backend/.env con tus keys

docker-compose up -d

# Frontend: http://localhost:8080
# Backend:  http://localhost:5000
```

---

## 🌍 Soporte de idiomas

El sistema i18n cubre todas las páginas y componentes:

| Código | Idioma |
|--------|--------|
| `es` | Español (default) |
| `en` | English |
| `pt` | Português |
| `fr` | Français |
| `de` | Deutsch |
| `zh` | 中文 |
| `ja` | 日本語 |

La preferencia se guarda en `localStorage` y persiste entre sesiones.

---

## 📄 Licencia

MIT

---

Hecho con ❤️ — [TripwiseAI](https://tripwiseai.up.railway.app/)
