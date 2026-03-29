
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
    const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&rate=3&format=json&limit=10&apikey=${OPENTRIPMAP_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    // Return full place objects (with lat/lon)
    return data.filter(place => place.point && place.name);
}

async function showPopularDestinations(city) {
    const titleSpan = document.getElementById('city-title');
    if (city) {
        titleSpan.textContent = city;
    } else {
        titleSpan.textContent = '...';
    }
    const list = document.getElementById('destinations-list');
    list.innerHTML = '<li style="color: #B0B0B0;">Cargando...</li>';
    if (!city) return;
    const coords = await getCityCoords(city);
    if (!coords) {
        list.innerHTML = '<li style="color: #B0B0B0;">Ciudad no encontrada.</li>';
        if (window.map) window.map.remove();
        return;
    }
    const places = await getPopularPlaces(coords.lat, coords.lon);
    if (!places.length) {
        list.innerHTML = '<li style="color: #B0B0B0;">No se encontraron destinos populares.</li>';
        if (window.map) window.map.setView([coords.lat, coords.lon], 12);
        return;
    }
    list.innerHTML = places.map(d => `<li style="padding: 10px 0; border-bottom: 1px solid #F0F0F0;">${d.name}</li>`).join('');

    // --- MapLibre GL JS integration ---
    if (!window.map) {
        window.map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [coords.lon, coords.lat],
            zoom: 12
        });
        window.map.on('load', function() {
            addMapLibreMarkers(window.map, places);
        });
    } else {
        window.map.setCenter([coords.lon, coords.lat]);
        window.map.setZoom(12);
        removeMapLibreMarkers(window.map);
        addMapLibreMarkers(window.map, places);
    }
}

// Helper to add markers to MapLibre map
function addMapLibreMarkers(map, places) {
    if (!map._flytravelMarkers) map._flytravelMarkers = [];
    places.forEach(place => {
        if (place.point && place.point.lat && place.point.lon) {
            const el = document.createElement('div');
            el.className = 'maplibre-marker';
            el.style.background = '#FF385C';
            el.style.width = '18px';
            el.style.height = '18px';
            el.style.borderRadius = '50%';
            el.style.border = '2px solid white';
            el.style.boxShadow = '0 2px 6px #0003';
            el.title = place.name;
            const marker = new maplibregl.Marker(el)
                .setLngLat([place.point.lon, place.point.lat])
                .setPopup(new maplibregl.Popup().setHTML(`<b>${place.name}</b>`))
                .addTo(map);
            map._flytravelMarkers.push(marker);
        }
    });
}

// Helper to remove all markers from MapLibre map
function removeMapLibreMarkers(map) {
    if (map._flytravelMarkers) {
        map._flytravelMarkers.forEach(marker => marker.remove());
        map._flytravelMarkers = [];
    }
}

// On load
let city = (new URL(window.location.href)).searchParams.get('city');
showPopularDestinations(city);
