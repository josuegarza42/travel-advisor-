# 🚀 Guía Rápida: Activar Buscador de Vuelos (2 minutos)

## ¡Cambiamos a SerpApi! 🎉

Ya no necesitas Kiwi.com. Ahora usamos **SerpApi** que es **MUCHO más fácil**:

✅ Registro en **2 minutos** (vs 10-15 de Kiwi)
✅ **Sin aprobación** necesaria
✅ API key **inmediata**
✅ **100 búsquedas GRATIS** al mes
✅ **Sin tarjeta de crédito**
✅ Usa datos de **Google Flights** (muy confiables)

---

## 📝 Pasos (literalmente 2 minutos):

### 1️⃣ Regístrate en SerpApi
```
🔗 https://serpapi.com/users/sign_up

📧 Email
🔐 Contraseña
✅ Sign Up
```

### 2️⃣ Verifica tu email
```
📨 Revisa tu email
🔗 Haz clic en el link
✅ Serás redirigido al dashboard
```

### 3️⃣ Copia tu API Key
```
📍 En el dashboard, busca "API Key"
📋 Copia la key (es una cadena larga)
```

### 4️⃣ Pégala en el .env
```bash
# Abre este archivo:
backend/.env

# Busca esta línea:
SERPAPI_KEY=your_api_key_here

# Reemplaza con tu key:
SERPAPI_KEY=abc123def456...tu_key_aqui
```

### 5️⃣ Reinicia el backend
```bash
# En la terminal:
cd backend
source venv/bin/activate
python run.py
```

---

## ✅ ¡Listo! Pruébalo:

1. Abre: **http://localhost:5000/flight-search.html**
2. Llena el formulario:
   - Origen: `MEX`
   - Destino: `MDE`
   - Fecha: Cualquier fecha futura
3. Click en **"🔍 Buscar Vuelos"**

Deberías ver los 5 vuelos más baratos de Google Flights.

---

## 🆘 ¿Problemas?

### Error: "Invalid API key"
- ✅ Verifica que copiaste la key completa (sin espacios)
- ✅ Reinicia el backend después de editar .env

### Error: "No se encontraron vuelos"
- ✅ Usa códigos IATA válidos (MEX, MDE, BOG, CTG)
- ✅ Asegúrate que la fecha sea futura (mínimo 3 días)

### Backend no inicia
- ✅ Verifica que estés en el entorno virtual
- ✅ Checa que Flask esté instalado: `pip install flask requests`

---

## 📊 Dashboard de SerpApi

Puedes ver tus búsquedas y límites en:
🔗 **https://serpapi.com/dashboard**

---

## 💡 Tips

- 🎯 Tienes **100 búsquedas gratis** cada mes
- 🔄 El contador se reinicia automáticamente
- 📈 Si necesitas más, upgrade a $50/mes por 5,000 búsquedas
- 🌐 Los resultados son los mismos que ves en Google Flights

---

## 🎉 ¡Eso es todo!

Ahora tu Travel Advisor tiene un buscador de vuelos completo con datos reales de Google Flights.

**¿Dudas?** Lee el archivo `FLIGHT_SEARCH_SETUP.md` para más detalles.
