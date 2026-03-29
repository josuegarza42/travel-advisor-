// Use the API key from config.js
const OPENTRIPMAP_API_KEY = window.OPENTRIPMAP_API_KEY;
let _currentPlaces = [];

function flyToPlace(index) {
    const place = _currentPlaces[index];
    if (!place || !place.point || !window.map) return;
    window.map.flyTo({ center: [place.point.lon, place.point.lat], zoom: 15, speed: 1.2 });
    // Open popup for that marker
    if (window.map._flytravelMarkers && window.map._flytravelMarkers[index]) {
        window.map._flytravelMarkers[index].togglePopup();
    }
}

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
    list.innerHTML = `<li style="padding: 20px 0; text-align:center;">
        <div style="display:inline-block;width:28px;height:28px;border:3px solid #f0f0f0;border-top-color:#FF385C;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
        <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
    </li>`;
    if (!city) return;

    const coords = await getCityCoords(city);
    if (!coords) {
        list.innerHTML = '<li style="color: #B0B0B0;">Ciudad no encontrada.</li>';
        return;
    }

    const places = await getPopularPlaces(coords.lat, coords.lon);
    _currentPlaces = places;
    if (!places.length) {
        list.innerHTML = '<li style="color: #B0B0B0;">No se encontraron destinos populares.</li>';
        return;
    }

    list.innerHTML = places.map((d, i) =>
        `<li data-index="${i}" style="padding: 10px 0; border-bottom: 1px solid #F0F0F0; display:flex; align-items:center; gap:10px; cursor:pointer; border-radius:6px; transition:background 0.15s;" onmouseover="this.style.background='#fff5f5'" onmouseout="this.style.background=''" onclick="flyToPlace(${i})">
            <span style="background:#FF385C;color:white;font-size:11px;font-weight:700;min-width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i + 1}</span>
            <span>${d.name}</span>
        </li>`
    ).join('');

    // --- MapLibre GL JS integration ---
    if (!window.map || typeof window.map.setCenter !== 'function' || typeof window.map.setZoom !== 'function') {
        // Clear previous map instance if any
        const mapDiv = document.getElementById('map');
        if (mapDiv) mapDiv.innerHTML = '';

        window.map = new maplibregl.Map({
            container: 'map',
            style: 'https://tiles.openfreemap.org/styles/liberty',
            center: [coords.lon, coords.lat],
            zoom: 13
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

function addMapLibreMarkers(map, places) {
    if (!map._flytravelMarkers) map._flytravelMarkers = [];
    places.forEach((place, i) => {
        if (place.point && place.point.lat && place.point.lon) {
            const el = document.createElement('div');
            el.innerHTML = `<div style="
                background: #FF385C;
                color: white;
                font-size: 11px;
                font-weight: 700;
                font-family: sans-serif;
                width: 28px;
                height: 28px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 2px solid white;
                box-shadow: 0 3px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            "><span style="transform: rotate(45deg)">${i + 1}</span></div>`;
            el.title = place.name;
            const marker = new maplibregl.Marker(el)
                .setLngLat([place.point.lon, place.point.lat])
                .setPopup(
                    new maplibregl.Popup({ offset: 30, maxWidth: '220px' })
                        .setHTML(`<div style="font-family:sans-serif;padding:4px 2px"><b style="font-size:13px">${i + 1}. ${place.name}</b></div>`)
                )
                .addTo(map);
            map._flytravelMarkers.push(marker);
        }
    });
}

function removeMapLibreMarkers(map) {
    if (map._flytravelMarkers) {
        map._flytravelMarkers.forEach(marker => marker.remove());
        map._flytravelMarkers = [];
    }
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
