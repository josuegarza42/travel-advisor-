
// Use the API key from config.js
const OPENTRIPMAP_API_KEY = window.OPENTRIPMAP_API_KEY;

async function getCityCoords(city) {
    const url = `https://api.opentripmap.com/0.1/en/places/geoname?name=${encodeURIComponent(city)}&apikey=${OPENTRIPMAP_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.lat && data.lon) return { lat: data.lat, lon: data.lon };
    return null;
}

async function getPopularPlaces(lat, lon) {
    const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&rate=3&format=json&limit=15&apikey=${OPENTRIPMAP_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter(place => place.point && place.name);
}

async function showPopularDestinations(city) {
    const titleSpan = document.getElementById('city-title');
    if (titleSpan) titleSpan.textContent = city ? `Destinos cerca de ${city}` : '';
    const list = document.getElementById('destinations-list');
    list.innerHTML = '<li style="color: #B0B0B0;">Cargando...</li>';
    if (!city) return;

    const coords = await getCityCoords(city);
    if (!coords) {
        list.innerHTML = '<li style="color: #B0B0B0;">Ciudad no encontrada.</li>';
        return;
    }

    const places = await getPopularPlaces(coords.lat, coords.lon);
    if (!places.length) {
        list.innerHTML = '<li style="color: #B0B0B0;">No se encontraron destinos populares.</li>';
        renderMap(coords, []);
        return;
    }

    list.innerHTML = places.map(d =>
        `<li style="padding: 10px 0; border-bottom: 1px solid #F0F0F0;">${d.name}</li>`
    ).join('');

    renderMap(coords, places);
}

function renderMap(coords, places) {
    if (!window._leafletMap) {
        window._leafletMap = L.map('map').setView([coords.lat, coords.lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(window._leafletMap);
    } else {
        window._leafletMap.setView([coords.lat, coords.lon], 13);
        // Clear previous layers except tile layer
        window._leafletMap.eachLayer(layer => {
            if (!(layer instanceof L.TileLayer)) {
                window._leafletMap.removeLayer(layer);
            }
        });
    }

    const map = window._leafletMap;

    // Heatmap effect: large semi-transparent circles per place
    places.forEach(place => {
        if (!place.point) return;
        L.circle([place.point.lat, place.point.lon], {
            radius: 600,
            color: 'transparent',
            fillColor: '#FF385C',
            fillOpacity: 0.18
        }).addTo(map);
    });

    // Dot markers with popups on top
    places.forEach(place => {
        if (!place.point) return;
        const marker = L.circleMarker([place.point.lat, place.point.lon], {
            radius: 8,
            color: '#fff',
            weight: 2,
            fillColor: '#FF385C',
            fillOpacity: 1
        }).addTo(map);
        marker.bindPopup(`<b>${place.name}</b>`);
    });
}

// On load
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('city-input');
    const btn = document.getElementById('search-btn');

    function search() {
        const city = input ? input.value.trim() : '';
        if (city) showPopularDestinations(city);
    }

    if (btn) btn.addEventListener('click', search);
    if (input) input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') search();
    });

    // Support ?city= query param on load
    const cityParam = (new URL(window.location.href)).searchParams.get('city');
    if (cityParam) {
        if (input) input.value = cityParam;
        showPopularDestinations(cityParam);
    } else {
        const list = document.getElementById('destinations-list');
        if (list) list.innerHTML = '<li style="color: #B0B0B0;">Ingresa una ciudad para ver destinos populares.</li>';
    }
});
