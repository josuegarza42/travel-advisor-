# 🐍 Instalar Python 3.12 - Guía Paso a Paso

## Método 1: Descarga Directa (Más Simple - 5 minutos)

### Paso 1: Descargar Python 3.12

1. Abre tu navegador y ve a: https://www.python.org/downloads/
2. Descarga **Python 3.12.2** (el instalador .pkg para macOS)
3. O descarga directo: https://www.python.org/ftp/python/3.12.2/python-3.12.2-macos11.pkg

### Paso 2: Instalar

1. Haz doble clic en el archivo `.pkg` descargado
2. Sigue las instrucciones del instalador (Next, Next, Install)
3. Ingresa tu contraseña cuando te la pida

### Paso 3: Verificar Instalación

Abre Terminal y ejecuta:

```bash
python3.12 --version
```

Debería mostrar: `Python 3.12.2`

### Paso 4: Configurar el Proyecto

```bash
cd /Users/josue.garza/Documents/scripts/travel-advisor/backend

# Crear entorno virtual con Python 3.12
python3.12 -m venv venv

# Activar entorno
source venv/bin/activate

# Verificar que estás usando 3.12
python --version  # Debe decir 3.12.2

# Instalar dependencias
pip install -r requirements.txt

# Configurar API key (reemplaza con tu key real)
echo "ANTHROPIC_API_KEY=sk-ant-api03-XXXXXXXX" > .env
echo "FLASK_ENV=development" >> .env
echo "SECRET_KEY=dev-secret-key" >> .env

# Iniciar el backend
python run.py
```

Deberás ver:
```
* Running on http://0.0.0.0:5000
```

### Paso 5: Iniciar Frontend (En otra terminal)

```bash
cd /Users/josue.garza/Documents/scripts/travel-advisor/frontend
python3 -m http.server 8080
```

### Paso 6: Abrir en el Navegador

Abre: http://localhost:8080

---

## Método 2: Con Homebrew (Requiere permisos admin)

Si tienes permisos de administrador, puedes instalar Homebrew primero:

```bash
# Instalar Homebrew (te pedirá contraseña)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar pyenv
brew install pyenv

# Instalar Python 3.12
pyenv install 3.12.2

# Configurar para este proyecto
cd /Users/josue.garza/Documents/scripts/travel-advisor
pyenv local 3.12.2

# Verificar
python3 --version

# Continuar con Paso 4 arriba
```

---

## Método 3: Docker (Si tienes Docker Desktop)

```bash
# Instalar Docker Desktop primero desde:
# https://www.docker.com/products/docker-desktop/

# Luego:
cd /Users/josue.garza/Documents/scripts/travel-advisor

# Configurar API key
echo "ANTHROPIC_API_KEY=sk-ant-api03-XXXXXXXX" > backend/.env

# Iniciar con Docker
docker-compose up

# Abrir navegador
open http://localhost:8080
```

---

## 🔑 Obtener tu API Key de Anthropic

1. Ve a: https://console.anthropic.com/
2. Crea cuenta o inicia sesión (puedes usar Google)
3. Click en "API Keys" en el menú izquierdo
4. Click en "Create Key"
5. Copia la key (empieza con `sk-ant-api03-...`)
6. Úsala en el comando de configuración arriba

---

## ✅ Verificar que Todo Funciona

Una vez que tengas el backend corriendo:

```bash
# En otra terminal, probar la API
curl http://localhost:5000/api/health
```

Deberías ver:
```json
{"status":"healthy"}
```

Si ves eso, ¡todo está funcionando! 🎉

Luego abre el frontend en: http://localhost:8080

---

## 🆘 Problemas Comunes

### "ModuleNotFoundError: No module named 'flask'"

```bash
# Asegúrate de estar en el entorno virtual
source venv/bin/activate
# Reinstala
pip install -r requirements.txt
```

### "No module named 'anthropic'"

```bash
pip install anthropic
```

### Puerto 5000 ya está en uso

```bash
# Cambiar puerto en backend/.env
echo "PORT=5001" >> .env
# Luego actualiza frontend/js/app.js línea 2 a:
# const API_URL = 'http://localhost:5001';
```

### Backend se cierra inmediatamente

```bash
# Verificar que .env tiene la API key correcta
cat backend/.env
# Debe mostrar: ANTHROPIC_API_KEY=sk-ant-api03-...
```

---

## 🚀 Ya Está Listo!

Después de estos pasos tendrás:
- ✅ Python 3.12 funcionando
- ✅ Backend corriendo en puerto 5000
- ✅ Frontend corriendo en puerto 8080
- ✅ Sistema completo operativo

**Tiempo total: 5-10 minutos**
