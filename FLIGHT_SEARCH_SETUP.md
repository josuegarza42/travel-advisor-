# 🔧 Configuración del Buscador de Vuelos

El buscador de vuelos utiliza **SerpApi** para buscar vuelos en **Google Flights** en tiempo real.

## 📋 Requisitos

Para que el buscador de vuelos funcione, necesitas obtener una API key **GRATUITA** de SerpApi (100 búsquedas/mes sin tarjeta de crédito).

## 🔑 Obtener tu API Key (2 minutos)

### Paso 1: Crear cuenta
1. Ve a: **https://serpapi.com/users/sign_up**
2. Completa el formulario:
   - Email
   - Contraseña
   - Nombre (opcional)
3. Haz clic en **"Sign Up"**

### Paso 2: Verificar email
1. Revisa tu email
2. Haz clic en el link de verificación
3. Serás redirigido al dashboard

### Paso 3: Copiar API Key
1. En el dashboard, ve a la sección **"API Key"**
2. Tu API key estará visible automáticamente
3. Copia la key (se ve así: `abc123def456ghi789jkl012mno345pqr678`)

### Paso 4: Configurar en la aplicación
1. Abre el archivo **`.env`** en la carpeta `backend/`
2. Encuentra la línea: `SERPAPI_KEY=your_api_key_here`
3. Reemplaza `your_api_key_here` con tu API key real
4. Guarda el archivo

Ejemplo:
```bash
SERPAPI_KEY=abc123def456ghi789jkl012mno345pqr678
```

### Paso 5: Reiniciar el backend
```bash
cd backend
source venv/bin/activate
python run.py
```

## ✅ Verificar que funciona

1. Abre el navegador en: `http://localhost:5000/flight-search.html`
2. Completa el formulario:
   - **Origen**: MEX (Ciudad de México)
   - **Destino**: MDE (Medellín)
   - **Fecha salida**: Cualquier fecha futura
   - **Pasajeros**: 1
3. Haz clic en **"🔍 Buscar Vuelos"**

Si todo está configurado correctamente, deberías ver los 5 vuelos más baratos de Google Flights.

## 🎁 Plan Gratuito de SerpApi

✅ **100 búsquedas GRATIS por mes**
✅ No requiere tarjeta de crédito
✅ Registro instantáneo (sin aprobación)
✅ Datos de Google Flights (muy confiables)
✅ API key disponible inmediatamente

## 💡 ¿Por qué SerpApi?

- 🚀 **Más rápido de obtener**: API key en 2 minutos vs 10-15 minutos de otras APIs
- 🎯 **Datos de Google Flights**: Los mismos resultados que ves en Google
- 💳 **Sin tarjeta de crédito**: Plan gratuito sin compromiso
- 📊 **Confiable**: Usada por +1,000 empresas
- 🔄 **Fácil migración**: Si necesitas más, upgrade es simple

## 🔧 Troubleshooting

### Error: "No se encontraron vuelos"
- ✅ Verifica que la API key esté correctamente configurada
- ✅ Asegúrate de usar códigos IATA válidos (MEX, MDE, BOG, etc.)
- ✅ Intenta con fechas diferentes (mínimo 3 días en el futuro)
- ✅ Revisa que la fecha no sea pasada

### Error: "Error al buscar vuelos"
- ✅ Revisa que el backend esté corriendo (`python run.py`)
- ✅ Verifica que la API key sea válida en SerpApi dashboard
- ✅ Checa la consola del backend para ver errores específicos
- ✅ Asegúrate de tener internet

### Error: "Invalid API key" / 401
- ✅ Tu API key no es válida
- ✅ Cópiala de nuevo desde el dashboard de SerpApi
- ✅ Asegúrate de no tener espacios al inicio/final
- ✅ Reinicia el backend después de cambiar la key

### Límite de búsquedas alcanzado
- ✅ El plan gratuito incluye 100 búsquedas/mes
- ✅ Revisa tu uso en el dashboard de SerpApi
- ✅ El contador se reinicia cada mes
- ✅ Si necesitas más, upgrade a $50/mes por 5,000 búsquedas

## 📚 Documentación

- **Página principal**: https://serpapi.com/
- **Documentación Google Flights**: https://serpapi.com/google-flights-api
- **Dashboard**: https://serpapi.com/dashboard
- **Ejemplos**: https://serpapi.com/google-flights-api-examples

## 🚀 Características

El buscador de vuelos incluye:

✈️ **Búsqueda inteligente**
- Top 5 vuelos más baratos de Google Flights
- Ordenados automáticamente por precio
- Vuelos directos destacados con badge verde

💰 **Información detallada**
- Precio por pasajero en tu moneda
- Duración total del vuelo
- Horarios exactos de salida/llegada
- Escalas y ciudades intermedias
- Aerolíneas que operan el vuelo

🎯 **Filtros avanzados**
- ✅ Solo vuelos directos
- ✅ Máximo 1 escala
- ✅ Cualquier vuelo (hasta 2 escalas)
- ✅ Vuelos redondos (ida y vuelta)

💱 **Multi-moneda**
- Precios en MXN, USD, o COP
- Conversión automática según tu preferencia

🌐 **Multi-idioma**
- Español, Inglés, Portugués
- Interfaz completamente traducida
- Se adapta al idioma del navegador

📱 **Responsive**
- Optimizado para móvil y tablet
- Diseño Airbnb-style moderno
- Touch-friendly en dispositivos móviles

## 🔗 Integración con Travel Advisor

El buscador de vuelos está perfectamente integrado:
- ✈️ Botón **"Vuelos"** en el header de todas las páginas
- 🔄 Comparte preferencias de idioma y moneda
- 🎨 Diseño consistente con el resto de la app
- 📊 Mismos códigos IATA que usas en destinos

## 🎯 Próximos Pasos

1. ✅ Obtén tu API key (2 minutos)
2. ✅ Configúrala en `.env`
3. ✅ Reinicia el backend
4. ✅ ¡Busca tu próximo vuelo!

**Nota**: SerpApi es mucho más fácil de configurar que otras APIs porque no requiere aprobación, validación de empresa, ni tarjeta de crédito. ¡Solo regístrate y obtén tu key!
