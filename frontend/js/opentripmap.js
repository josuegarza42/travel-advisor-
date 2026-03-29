const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
let _currentPlaces = [];

function flyToPlace(index) {
    const place = _currentPlaces[index];
    if (!place || !place.point || !window.map) return;
    window.map.flyTo({ center: [place.point.lon, place.point.lat], zoom: 15, speed: 1.2 });
    if (window.map._flytravelMarkers && window.map._flytravelMarkers[index]) {
        window.map._flytravelMarkers[index].togglePopup();
    }
}

async function getCityCoords(city) {
    const res = await fetch(`${API_BASE}/api/map/geoname?name=${encodeURIComponent(city)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.lat && data.lon) return { lat: data.lat, lon: data.lon };
    return null;
}

async function getPopularPlaces(lat, lon) {
    const res = await fetch(`${API_BASE}/api/map/places?lat=${lat}&lon=${lon}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.filter(place => place.point && place.name);
}

async function showPopularDestinations(city) {
    const tl = (key, fallback) => (typeof t === 'function' ? t(key) : fallback);
    const titleSpan = document.getElementById('city-title');
    if (titleSpan) titleSpan.textContent = city ? `${tl('map.nearCity', 'Destinos cerca de')} ${city}` : '';
    const list = document.getElementById('destinations-list');
    list.innerHTML = `<li style="padding: 20px 0; text-align:center;">
        <div style="display:inline-block;width:28px;height:28px;border:3px solid #f0f0f0;border-top-color:#FF385C;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
        <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
    </li>`;
    if (!city) return;

    const coords = await getCityCoords(city);
    if (!coords) {
        list.innerHTML = `<li style="color: #B0B0B0;">${tl('map.cityNotFound', 'Ciudad no encontrada.')}</li>`;
        return;
    }

    const places = await getPopularPlaces(coords.lat, coords.lon);
    _currentPlaces = places;
    if (!places.length) {
        list.innerHTML = `<li style="color: #B0B0B0;">${tl('map.noDestinations', 'No se encontraron destinos populares.')}</li>`;
        return;
    }

    list.innerHTML = places.map((d, i) =>
        `<li data-index="${i}" style="padding: 10px 0; border-bottom: 1px solid #F0F0F0; display:flex; align-items:center; gap:10px; cursor:pointer; border-radius:6px; transition:background 0.15s;" onmouseover="this.style.background='#fff5f5'" onmouseout="this.style.background=''" onclick="flyToPlace(${i})">
            <span style="background:#FF385C;color:white;font-size:11px;font-weight:700;min-width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i + 1}</span>
            <span>${d.name}</span>
        </li>`
    ).join('');

    // --- MapLibre GL JS integration ---
    if (!window.map) {
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
        removeMapLibreMarkers(window.map);
        window.map.flyTo({ center: [coords.lon, coords.lat], zoom: 13, speed: 1.4 });
        // Add markers after fly animation starts
        const addAfterFly = () => {
            addMapLibreMarkers(window.map, places);
            window.map.off('moveend', addAfterFly);
        };
        window.map.on('moveend', addAfterFly);
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

// Initialize map with a default view
function initDefaultMap() {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return;

    window.map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [-99.1332, 23.6345], // Mexico center
        zoom: 4.5
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
        // Show default map centered on Mexico
        initDefaultMap();
        const list = document.getElementById('destinations-list');
        const tl2 = (key, fallback) => (typeof t === 'function' ? t(key) : fallback);
        if (list) list.innerHTML = `<li style="color: #B0B0B0;">${tl2('map.enterCity', 'Ingresa una ciudad para ver destinos populares.')}</li>`;
    }
});
