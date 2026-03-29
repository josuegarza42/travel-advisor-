
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
    if (titleSpan) titleSpan.textContent = city ? `Destinos cerca de ${city}` : '';
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
    const geojson = {
        type: 'FeatureCollection',
        features: places
            .filter(p => p.point && p.point.lat && p.point.lon)
            .map(p => ({
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [p.point.lon, p.point.lat] },
                properties: { name: p.name }
            }))
    };

    if (!window.map) {
        window.map = new maplibregl.Map({
            container: 'map',
            style: {
                version: 8,
                sources: {
                    'osm': {
                        type: 'raster',
                        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '© OpenStreetMap contributors'
                    }
                },
                layers: [{ id: 'osm', type: 'raster', source: 'osm' }]
            },
            center: [coords.lon, coords.lat],
            zoom: 12
        });
        window.map.on('load', function() {
            addHeatmapAndMarkers(window.map, geojson);
        });
    } else {
        window.map.setCenter([coords.lon, coords.lat]);
        window.map.setZoom(12);
        updateHeatmapAndMarkers(window.map, geojson);
    }
}

function addHeatmapAndMarkers(map, geojson) {
    map.addSource('places', { type: 'geojson', data: geojson });

    map.addLayer({
        id: 'places-heat',
        type: 'heatmap',
        source: 'places',
        paint: {
            'heatmap-weight': 1,
            'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 8, 0.6, 14, 1.5],
            'heatmap-color': [
                'interpolate', ['linear'], ['heatmap-density'],
                0,   'rgba(255,56,92,0)',
                0.2, 'rgba(255,100,100,0.4)',
                0.5, 'rgba(255,56,92,0.7)',
                0.8, 'rgba(200,0,50,0.85)',
                1,   'rgba(150,0,30,1)'
            ],
            'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 8, 20, 14, 40],
            'heatmap-opacity': 0.75
        }
    });

    // Markers on top
    if (!map._flytravelMarkers) map._flytravelMarkers = [];
    geojson.features.forEach(f => {
        const el = document.createElement('div');
        el.style.cssText = 'background:#FF385C;width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 2px 6px #0004;cursor:pointer;';
        el.title = f.properties.name;
        const marker = new maplibregl.Marker(el)
            .setLngLat(f.geometry.coordinates)
            .setPopup(new maplibregl.Popup({ offset: 10 }).setHTML(`<b>${f.properties.name}</b>`))
            .addTo(map);
        map._flytravelMarkers.push(marker);
    });
}

function updateHeatmapAndMarkers(map, geojson) {
    if (map.getSource('places')) {
        map.getSource('places').setData(geojson);
    } else {
        addHeatmapAndMarkers(map, geojson);
        return;
    }
    if (map._flytravelMarkers) {
        map._flytravelMarkers.forEach(m => m.remove());
        map._flytravelMarkers = [];
    }
    geojson.features.forEach(f => {
        const el = document.createElement('div');
        el.style.cssText = 'background:#FF385C;width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 2px 6px #0004;cursor:pointer;';
        el.title = f.properties.name;
        const marker = new maplibregl.Marker(el)
            .setLngLat(f.geometry.coordinates)
            .setPopup(new maplibregl.Popup({ offset: 10 }).setHTML(`<b>${f.properties.name}</b>`))
            .addTo(map);
        map._flytravelMarkers.push(marker);
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
        // Show empty state
        const list = document.getElementById('destinations-list');
        if (list) list.innerHTML = '<li style="color: #B0B0B0;">Ingresa una ciudad para ver destinos populares.</li>';
        const titleSpan = document.getElementById('city-title');
        if (titleSpan) titleSpan.textContent = '';
    }
});
