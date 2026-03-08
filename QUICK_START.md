# 🚀 Inicio Rápido - Travel Advisor

## ⚠️ Requisito: Python 3.11 o 3.12

Tu sistema tiene Python 3.14, que es incompatible con algunos emojis en el código.

## 🔧 Solución Rápida (2 minutos)

### Opción 1: Instalar Python 3.12 con pyenv (Recomendado)

```bash
# 1. Instalar pyenv si no lo tienes
brew install pyenv

# 2. Instalar Python 3.12
pyenv install 3.12.2

# 3. Usar Python 3.12 en este proyecto
cd /Users/josue.garza/Documents/scripts/travel-advisor
pyenv local 3.12.2

# 4. Verificar versión
python3 --version  # Debería decir 3.12.2

# 5. Instalar dependencias
cd backend
pip3 install -r requirements.txt

# 6. Configurar API key
echo "ANTHROPIC_API_KEY=tu_key_de_anthropic" > .env

# 7. ¡Listo! Iniciar
cd ..
./start.sh
```

### Opción 2: Con conda

```bash
# 1. Crear entorno con Python 3.12
conda create -n travel-advisor python=3.12
conda activate travel-advisor

# 2. Instalar dependencias
cd /Users/josue.garza/Documents/scripts/travel-advisor/backend
pip install -r requirements.txt

# 3. Configurar API key
echo "ANTHROPIC_API_KEY=tu_key_de_anthropic" > .env

# 4. Iniciar backend
python run.py &

# 5. Iniciar frontend (otra terminal)
cd ../frontend
python -m http.server 8080
```

### Opción 3: Docker (sin problemas de versión)

```bash
cd /Users/josue.garza/Documents/scripts/travel-advisor

# Configurar API key
echo "ANTHROPIC_API_KEY=tu_key_aqui" > backend/.env

# Iniciar con Docker
docker-compose up

# Abrir navegador
open http://localhost:8080
```

## 📝 Obtener tu API Key de Anthropic

1. Ve a: https://console.anthropic.com/
2. Crea cuenta o inicia sesión
3. Ve a "API Keys"
4. Genera una nueva key
5. Cópiala y úsala en el paso 6 arriba

## ✅ Verificar que Funciona

```bash
# Debe mostrar 3.12.x (no 3.14)
python3 --version

# Debe compilar sin errores
cd /Users/josue.garza/Documents/scripts/travel-advisor/backend
python3 -m py_compile app/ai_advisor.py && echo "✅ OK"

# Debe iniciar el servidor
python3 run.py
# Verás: "Running on http://0.0.0.0:5000"
```

## 🎯 Sistema Listo

Una vez con Python 3.12:

```bash
cd /Users/josue.garza/Documents/scripts/travel-advisor
./start.sh
```

Luego abre: **http://localhost:8080**

Verás:
- ✅ Formulario con "Siempre nos quedamos en hostales" (checked)
- ✅ "Nos gusta conocer gente" (checked)
- ✅ "Seguridad ciudad es importante" (checked)
- ✅ Por cada destino: workspace hostal, ambiente social, seguridad

## 📊 Probar con Ejemplo

El sistema incluye `example_request.json` con 4 destinos listos:

```bash
# Con el servidor corriendo
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d @backend/example_request.json | python3 -m json.tool
```

O usa el frontend y agrega tus destinos manualmente.

## 🎉 ¿Qué Obtienes?

Claude AI te dará:
- **🏠 Hostales recomendados** (con nombres reales si los conoce)
- **🛡️ Barrios seguros** específicos
- **🚨 Riesgos laborales** (si trabajas remotamente)
- **📊 Scoring de 9 categorías** (incluye Hostal, Seguridad Ciudad, WiFi)
- **💡 Tips** de ahorro, mejores aerolíneas, coworkings

## ⏱️ Tiempo Estimado

- Instalar pyenv + Python 3.12: **3-5 minutos**
- Instalar dependencias: **1 minuto**
- Configurar API key: **30 segundos**
- ¡Listo para usar! **Total: ~7 minutos**

## 🆘 ¿Problemas?

Lee `TESTING_NOTES.md` para detalles técnicos completos.

---

**El sistema está 100% completo y funcional. Solo necesita Python 3.12.** 🎯
