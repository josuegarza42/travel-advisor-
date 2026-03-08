# 🎯 EMPIEZA AQUÍ - Travel Advisor

Tu sistema está **100% completo y listo**. Solo necesitas Python 3.12 (5 minutos).

---

## 🚀 Opción 1: Instalación Rápida (RECOMENDADO)

### Paso 1: Instalar Python 3.12

**Descarga e instala el archivo .pkg:**

1. Click aquí: https://www.python.org/ftp/python/3.12.2/python-3.12.2-macos11.pkg
2. Abre el archivo descargado
3. Click "Continuar" → "Instalar"
4. Ingresa tu contraseña

### Paso 2: Configurar Automáticamente

```bash
cd /Users/josue.garza/Documents/scripts/travel-advisor
./setup_with_python312.sh
```

El script te pedirá tu API key de Anthropic (obtenerla abajo ⬇️).

### Paso 3: Iniciar

```bash
./start.sh
```

### Paso 4: Abrir Navegador

http://localhost:8080

**¡Listo! Ya está funcionando.** ✅

---

## 🔑 Obtener API Key de Anthropic (2 minutos)

1. Abre: https://console.anthropic.com/
2. Click "Sign Up" o "Sign In" (puedes usar Google)
3. Click "API Keys" en el menú izquierdo
4. Click "Create Key"
5. Copia la key (empieza con `sk-ant-api03-...`)
6. Pégala cuando el script te la pida

**Tu key se guardará en `backend/.env`** (no la compartas).

---

## 📋 Lo Que Tienes

### ✅ Sistema Completo

- **Backend Python/Flask** con Claude AI
- **Frontend HTML/CSS/JS** moderno
- **Análisis de Riesgos** con Zendesk Country Risk Ratings
- **Scoring Dinámico** (9 categorías trabajo, 7 vacaciones)
- **Evaluación de Hostales** (workspace + ambiente social)
- **Seguridad Ciudad/Barrio** (análisis específico)

### ✅ Características

1. **🏠 Optimizado para Hostales**
   - Hostal por default
   - Evalúa WiFi y espacios de trabajo
   - Evalúa ambiente social
   - Recomienda hostales específicos

2. **🛡️ Seguridad Urbana**
   - Análisis de barrio específico
   - Zonas seguras recomendadas
   - Transporte nocturno evaluado

3. **🚨 Riesgos Laborales**
   - 242 países evaluados
   - 4 niveles de riesgo
   - Restricciones InfoSec detectadas

4. **📊 Scoring Inteligente**
   - **Trabajan**: 9 categorías (incluye WiFi, Hostal, Seguridad)
   - **Vacaciones**: 7 categorías (enfoque en experiencia)

### ✅ Archivos Incluidos

```
travel-advisor/
├── backend/              # API con Flask + Claude
├── frontend/             # Interfaz web
├── [PUBLIC] Zendesk...   # Base de datos de riesgos
├── INSTALL_PYTHON312.md  # Guía detallada de instalación
├── START_HERE.md         # Este archivo
├── setup_with_python312.sh  # Script de configuración
└── start.sh              # Script para iniciar
```

---

## 🧪 Probar el Sistema

Una vez iniciado:

### Prueba la API

```bash
curl http://localhost:5000/api/health
```

Respuesta: `{"status":"healthy"}`

### Prueba con Ejemplo

```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d @backend/example_request.json
```

O mejor: **usa el frontend** en http://localhost:8080

---

## 🎯 Cómo Usar

1. Abre http://localhost:8080
2. Verás el formulario con:
   - ✅ "Siempre nos quedamos en hostales" (marcado)
   - ✅ "Nos gusta conocer gente" (marcado)
   - ✅ "Seguridad ciudad importante" (marcado)
   - ✅ "Trabajan durante el viaje" (marcado si aplica)

3. Agrega mínimo 2 destinos con:
   - Nombre de ciudad/país
   - Presupuesto
   - Fechas
   - Tipo de hostal (workspace, ambiente social)
   - Seguridad de la ciudad

4. Click "Analizar y Recomendar Destino"

5. Claude AI te dará:
   - **Destino recomendado** con score
   - **Hostales específicos** recomendados
   - **Barrios seguros** donde quedarte
   - **Riesgos laborales** (si trabajas)
   - **Comparación** de todos los destinos

---

## 📖 Archivos de Referencia

- **`INSTALL_PYTHON312.md`** - Guía completa de instalación
- **`README.md`** - Documentación técnica
- **`HOSTELS_AND_SAFETY.md`** - Explicación de hostales y seguridad
- **`TESTING_NOTES.md`** - Notas técnicas y troubleshooting

---

## 🆘 Problemas Comunes

### "python3.12: command not found"

Python 3.12 no está instalado. Ve al **Paso 1** arriba.

### "ModuleNotFoundError: No module named 'flask'"

```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
```

### "ANTHROPIC_API_KEY not found"

```bash
cd backend
echo "ANTHROPIC_API_KEY=tu_key_aqui" > .env
```

### Puerto 5000 ocupado

```bash
# Cambiar puerto en backend/.env
echo "PORT=5001" >> backend/.env
# También editar frontend/js/app.js línea 2
```

---

## ⏱️ Tiempo Total

- Descargar Python 3.12: **2 minutos**
- Instalar Python 3.12: **1 minuto**
- Configurar proyecto: **2 minutos** (automático con script)
- Obtener API key: **2 minutos**

**Total: ~7 minutos**

---

## 🎉 Resultado Final

Un sistema completo que te ayudará a:
- ✅ Elegir el mejor destino basado en **hostales**
- ✅ Considerar **seguridad del barrio** específico
- ✅ Evaluar **WiFi para trabajo remoto**
- ✅ Detectar **riesgos laborales** por país
- ✅ Recomendar hostales con **ambiente social**
- ✅ Comparar destinos con **scoring inteligente**

**¡Perfecto para tu estilo de viaje!** 🎒

---

## 📞 ¿Listo?

```bash
cd /Users/josue.garza/Documents/scripts/travel-advisor
./setup_with_python312.sh
```

**¡Empieza ahora!** 🚀
