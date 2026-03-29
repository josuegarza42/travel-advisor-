# ✈️ TripwiseAI

**Intelligent travel web app** — Compare destinations with AI, find cheap flights, convert currencies, explore the map, and manage Volaris V+ availability.

🌐 **[tripwiseai.up.railway.app](https://tripwiseai.up.railway.app/)**

---

## ✨ Features

| Module | Description |
|--------|-------------|
| ✈️ **Flights** | Find the cheapest flights with filters for stops, dates, and departure airport |
| 🔍 **Compare destinations** | Analyze up to 4 destinations with AI (Groq + Llama 3.3 70B) and get a personalized recommendation |
| 💱 **Currency converter** | Bilateral converter with real-time rates + simultaneous comparison of multiple currencies |
| 🗺️ **Map** | Explore points of interest near any city with OpenTripMap + MapLibre GL |
| 🎫 **V+** | Check daily flight availability for the Volaris V+ annual pass (upload PDF) |

### Additional highlights
- **7 languages**: Spanish, English, Portuguese, French, German, Chinese, Japanese
- **Responsive design**: Optimized for mobile and desktop, with a bottom navigation bar on mobile
- **Currency selector**: MXN, USD, COP — prices adapted to your preferred currency
- **Dynamic weighted scoring**: AI adjusts evaluation criteria depending on whether you're traveling for vacation or remote work

---

## 🛠️ Tech stack

**Backend**
- [Flask](https://flask.palletsprojects.com/) — Python REST API
- [Groq AI](https://groq.com/) + Llama 3.3 70B — Intelligent destination analysis
- [Kiwi.com Tequila API](https://tequila.kiwi.com/) — Flight search
- [PyPDF2](https://pypdf2.readthedocs.io/) — PDF parser for V+ availability
- [Gunicorn](https://gunicorn.org/) — WSGI server for production

**Frontend**
- Vanilla JS + HTML5 + CSS3 (no frameworks)
- [MapLibre GL JS](https://maplibre.org/) — Interactive maps
- [OpenFreeMap](https://openfreemap.org/) — Free map tiles
- [OpenTripMap API](https://opentripmap.io/) — Points of interest by city
- [ExchangeRate-API](https://www.exchangerate-api.com/) — Real-time exchange rates

**Infrastructure**
- [Railway.app](https://railway.app/) — Hosting and auto-deploy from GitHub
- [Nixpacks](https://nixpacks.com/) — Automatic build (Python 3.12)

---

## 📁 Project structure

```
travel-advisor/
├── backend/
│   ├── app/
│   │   ├── __init__.py        # App factory + CORS
│   │   ├── config.py          # Environment variables
│   │   ├── routes.py          # API endpoints
│   │   ├── ai_advisor.py      # Destination analysis with Groq
│   │   ├── flight_search.py   # Flight search (Kiwi.com)
│   │   ├── vplus_parser.py    # V+ Volaris PDF parser
│   │   ├── risk_checker.py    # Country risk evaluation
│   │   └── models.py          # Data models
│   ├── requirements.txt
│   ├── .env.example
│   ├── wsgi.py
│   └── run.py
├── frontend/
│   ├── index.html             # Flight search
│   ├── compare.html           # Destination comparison
│   ├── currency-converter.html
│   ├── map.html
│   ├── vplus.html
│   ├── css/
│   │   ├── styles.css
│   │   └── vplus.css
│   ├── js/
│   │   ├── i18n.js            # Translation system (7 languages)
│   │   ├── config.js          # Client config
│   │   ├── app.js             # Main flights logic
│   │   ├── compare.js         # Comparison logic
│   │   ├── converter.js       # Currency converter
│   │   ├── opentripmap.js     # Map integration
│   │   ├── currency-data.js   # Currency catalog
│   │   └── nav.js             # Mobile bottom navigation
│   └── libs/                  # MapLibre GL (local)
├── Procfile                   # gunicorn for Railway
├── nixpacks.toml              # Python 3.12
└── docker-compose.yml
```

---

## 🔌 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/analyze` | Analyze and compare destinations with AI |
| `POST` | `/api/quick-fill` | Auto-fill destination data |
| `POST` | `/api/search-flights` | Search cheap flights (Kiwi.com) |
| `GET` | `/api/airport-code/<city>` | Get IATA code for a city |
| `POST` | `/api/flight-booking-options` | Booking options for a flight |
| `POST` | `/api/validate-destination` | Validate a destination before analysis |
| `GET` | `/api/vplus` | V+ availability from PDF on server |
| `POST` | `/api/vplus/upload` | V+ availability from user-uploaded PDF |
| `GET` | `/api/debug-config` | Configuration status (dev) |

---

## 🚀 Local setup

### Requirements
- Python 3.12+
- API keys (see section below)

### 1. Clone the repository

```bash
git clone https://github.com/tu-usuario/travel-advisor.git
cd travel-advisor
```

### 2. Set up the backend

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env with your API keys
```

### 3. Run

```bash
# Backend (from /backend)
python run.py
# → http://localhost:5000

# Frontend (from /frontend)
python3 -m http.server 8080
# → http://localhost:8080
```

---

## 🔑 Environment variables

```env
# Groq AI — Destination analysis with Llama 3.3 70B
# https://console.groq.com/
GROQ_API_KEY=gsk_...

# Kiwi.com Tequila — Flight search
# https://tequila.kiwi.com/
KIWI_API_KEY=...

# SerpAPI — Alternative flight search
# https://serpapi.com/
SERPAPI_KEY=...

FLASK_ENV=development
SECRET_KEY=change_this_in_production
PORT=5000
```

> **Note:** Only `GROQ_API_KEY` is strictly required for destination analysis. The rest are optional depending on which features you want to use.

---

## ☁️ Deploy on Railway

The project is already configured for Railway with auto-deploy from the `main` branch.

1. Fork this repository
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
3. Select your fork
4. Under **Variables**, add your API keys
5. Railway will automatically deploy using `Procfile` and `nixpacks.toml`

---

## 🐳 Docker (local development)

```bash
cp backend/.env.example backend/.env
# Edit backend/.env with your keys

docker-compose up -d

# Frontend: http://localhost:8080
# Backend:  http://localhost:5000
```

---

## 🌍 Language support

The i18n system covers all pages and components:

| Code | Language |
|------|----------|
| `es` | Español (default) |
| `en` | English |
| `pt` | Português |
| `fr` | Français |
| `de` | Deutsch |
| `zh` | 中文 |
| `ja` | 日本語 |

The language preference is saved in `localStorage` and persists across sessions.

---

## 📄 License

MIT

---

Built with ❤️ — [TripwiseAI](https://tripwiseai.up.railway.app/)
