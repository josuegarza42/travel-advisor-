#!/bin/bash

echo "🌎 Travel Advisor - Inicio Rápido"
echo "================================="
echo ""

# Check if .env exists
if [ ! -f "backend/.env" ]; then
    echo "⚠️  No se encontró el archivo .env"
    echo "📝 Copiando .env.example a .env..."
    cp backend/.env.example backend/.env
    echo ""
    echo "⚡ IMPORTANTE: Edita backend/.env y agrega tu ANTHROPIC_API_KEY"
    echo "   Obtén tu API key en: https://console.anthropic.com/"
    echo ""
    read -p "Presiona ENTER cuando hayas configurado tu API key..."
fi

# Check if venv exists
if [ ! -d "backend/venv" ]; then
    echo "📦 Creando entorno virtual..."
    cd backend
    python3 -m venv venv
    cd ..
fi

# Activate venv and install dependencies
echo "📦 Instalando dependencias..."
cd backend
source venv/bin/activate
pip install -q -r requirements.txt

# Start backend
echo ""
echo "🚀 Iniciando backend en http://localhost:5000"
python run.py &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start frontend
echo "🎨 Iniciando frontend en http://localhost:8080"
cd frontend
python3 -m http.server 8080 &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ ¡Aplicación lista!"
echo ""
echo "   Frontend: http://localhost:8080"
echo "   Backend:  http://localhost:5000"
echo ""
echo "📝 Presiona Ctrl+C para detener los servidores"
echo ""

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
