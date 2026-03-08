#!/bin/bash

echo "🚀 Configurando Travel Advisor con Python 3.12"
echo "=============================================="
echo ""

# Verificar Python 3.12
if ! command -v python3.12 &> /dev/null; then
    echo "❌ Python 3.12 no está instalado"
    echo ""
    echo "Por favor instala Python 3.12 primero:"
    echo "1. Ve a: https://www.python.org/ftp/python/3.12.2/python-3.12.2-macos11.pkg"
    echo "2. Descarga e instala el .pkg"
    echo "3. Vuelve a ejecutar este script"
    echo ""
    exit 1
fi

echo "✅ Python 3.12 encontrado: $(python3.12 --version)"
echo ""

# Ir al directorio backend
cd "$(dirname "$0")/backend" || exit 1

# Crear entorno virtual
echo "📦 Creando entorno virtual..."
python3.12 -m venv venv

# Activar entorno
echo "🔧 Activando entorno virtual..."
source venv/bin/activate

# Verificar versión
echo "✅ Usando: $(python --version)"
echo ""

# Instalar dependencias
echo "📥 Instalando dependencias..."
pip install --upgrade pip -q
pip install -r requirements.txt -q

echo "✅ Dependencias instaladas"
echo ""

# Verificar .env
if [ ! -f ".env" ]; then
    echo "⚠️  Archivo .env no existe"
    echo ""
    read -p "Ingresa tu ANTHROPIC_API_KEY: " api_key
    echo "ANTHROPIC_API_KEY=$api_key" > .env
    echo "FLASK_ENV=development" >> .env
    echo "SECRET_KEY=dev-secret-key-$(date +%s)" >> .env
    echo "PORT=5000" >> .env
    echo "✅ Archivo .env creado"
else
    echo "✅ Archivo .env ya existe"
fi

echo ""
echo "=============================================="
echo "✅ ¡Configuración completada!"
echo "=============================================="
echo ""
echo "Para iniciar el sistema:"
echo ""
echo "  1. Backend:"
echo "     cd backend"
echo "     source venv/bin/activate"
echo "     python run.py"
echo ""
echo "  2. Frontend (en otra terminal):"
echo "     cd frontend"
echo "     python3 -m http.server 8080"
echo ""
echo "  3. Abre tu navegador en:"
echo "     http://localhost:8080"
echo ""
echo "O simplemente ejecuta:"
echo "  ./start.sh"
echo ""
