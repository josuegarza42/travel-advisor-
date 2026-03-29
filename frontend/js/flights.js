// Flight Search Logic
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';

// Fallback for i18n if not loaded
if (typeof t !== 'function') {
    window.t = function(key) {
        const fallbacks = {
            'flights.fillRequired': 'Por favor completa todos los campos requeridos',
            'flights.searchError': 'Error al buscar vuelos',
            'flights.title': '✈️ Buscador de Vuelos',
            'app.title': 'TripwiseAI'
        };
        return fallbacks[key] || key;
    };
    console.warn('⚠️ i18n not loaded, using fallback translations');
}

// DOM Elements
const searchForm = document.querySelector('.flight-search-form');
const searchBtn = document.getElementById('search-flights-btn');
const searchLoading = document.getElementById('search-loading');
const resultsSection = document.getElementById('results-section');
const flightsContainer = document.getElementById('flights-container');
const noResults = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');
const routeInfo = document.getElementById('route-info');

// Form inputs
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const departureDateInput = document.getElementById('departure-date');
const returnDateInput = document.getElementById('return-date');
const passengersInput = document.getElementById('passengers');
const flightTypeInput = document.getElementById('flight-type');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Flight search page loading...');

    // Initialize language (with error handling)
    try {
        if (typeof initLanguage === 'function') {
            initLanguage();
            console.log('✅ Language initialized');
        }
        if (typeof updateFlightTexts === 'function') {
            updateFlightTexts();
            console.log('✅ Texts updated');
        }
    } catch (error) {
        console.warn('⚠️ Language initialization failed:', error);
    }

    // Language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        try {
            if (typeof currentLanguage !== 'undefined') {
                languageSelector.value = currentLanguage;
            }
            languageSelector.addEventListener('change', function() {
                if (typeof changeLanguage === 'function') {
                    changeLanguage(this.value);
                }
                if (typeof updateFlightTexts === 'function') {
                    updateFlightTexts();
                }
            });
            console.log('✅ Language selector configured');
        } catch (error) {
            console.warn('⚠️ Language selector failed:', error);
        }
    }

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    if (departureDateInput) {
        departureDateInput.min = today;
        departureDateInput.value = today; // Set default date
        console.log('✅ Departure date set to:', today);
    }
    if (returnDateInput) {
        returnDateInput.min = today;
    }

    // Update return date min when departure changes
    if (departureDateInput && returnDateInput) {
        departureDateInput.addEventListener('change', function() {
            returnDateInput.min = this.value;
        });
    }

    // Search button
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
        console.log('✅ Search button ready');
    } else {
        console.error('❌ Search button not found!');
    }


    console.log('✅ Flight search page ready!');

    // New search button
    const newSearchBtn = document.getElementById('new-search-btn');
    if (newSearchBtn) {
        newSearchBtn.addEventListener('click', function() {
            // Scroll back to the form
            document.querySelector('.search-card').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log('🔄 Scrolling back to search form');
        });
    }
});

// Update texts for flight page
function updateFlightTexts() {
    try {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = t(key);

            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update document title
        document.title = `${t('flights.title')} - ${t('app.title')}`;
        console.log('✅ Flight texts updated');
    } catch (error) {
        console.warn('⚠️ Error updating flight texts:', error);
    }
}

// Handle search
async function handleSearch() {
    console.log('🔍 Search button clicked');

    // Get form values
    const origin = originInput.value.trim();
    const destination = destinationInput.value.trim();
    const departureDate = departureDateInput.value;
    const returnDate = returnDateInput.value;
    const passengers = parseInt(passengersInput.value);
    const maxStopovers = parseInt(flightTypeInput.value);
    const currency = localStorage.getItem('preferredCurrency') || 'MXN';

    console.log('📋 Form values:', { origin, destination, departureDate, passengers, maxStopovers, currency });

    // Validate
    if (!origin || !destination || !departureDate) {
        const errorMsg = t('flights.fillRequired') || 'Por favor completa todos los campos requeridos';
        console.error('❌ Validation failed:', { origin, destination, departureDate });
        alert(errorMsg);
        return;
    }

    console.log('✅ Validation passed');

    // Convert dates to DD/MM/YYYY format
    const formattedDepartureDate = formatDateForAPI(departureDate);
    const formattedReturnDate = returnDate ? formatDateForAPI(returnDate) : null;

    console.log('📅 Formatted dates:', { formattedDepartureDate, formattedReturnDate });

    // Show loading
    searchBtn.disabled = true;
    searchLoading.classList.remove('hidden');
    resultsSection.classList.add('hidden');
    console.log('⏳ Loading state activated');

    try {
        // Build request body
        const requestBody = {
            origin,
            destination,
            date_from: formattedDepartureDate,
            date_to: formattedDepartureDate,
            adults: passengers,
            max_stopovers: maxStopovers,
            currency,
            limit: 5
        };

        // Add return dates if specified
        if (formattedReturnDate) {
            requestBody.return_from = formattedReturnDate;
            requestBody.return_to = formattedReturnDate;
        }

        console.log('📤 Sending request:', requestBody);
        console.log('🌐 API URL:', `${API_URL}/api/search-flights`);

        // Make API request
        const response = await fetch(`${API_URL}/api/search-flights`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        console.log('📡 Response status:', response.status);

        const result = await response.json();
        console.log('📊 Response data:', result);
        console.log('🔗 First flight deep_link:', result.flights[0]?.deep_link);

        if (!response.ok || !result.success) {
            throw new Error(result.error || 'Error al buscar vuelos');
        }

        console.log(`✅ Success! Found ${result.total_found} flights`);

        // Display results
        displayFlights(result);

    } catch (error) {
        console.error('❌ Error searching flights:', error);
        console.error('Request body:', requestBody);

        // Show detailed error message
        let errorMessage = t('flights.searchError') || 'Error al buscar vuelos';
        if (error.message) {
            errorMessage += `\n\nDetalles: ${error.message}`;
        }

        alert(errorMessage);

        // Show no results section with error
        resultsSection.classList.remove('hidden');
        noResults.classList.remove('hidden');
        flightsContainer.innerHTML = '';
        resultsCount.textContent = '0';
    } finally {
        searchBtn.disabled = false;
        searchLoading.classList.add('hidden');
    }
}

// Display flights
function displayFlights(data) {
    const flights = data.flights || [];
    const currency = data.currency;
    const searchParams = data.search_params;

    // Clear container
    flightsContainer.innerHTML = '';

    // Show results section
    resultsSection.classList.remove('hidden');

    if (flights.length === 0) {
        noResults.classList.remove('hidden');
        resultsCount.textContent = '0';
        routeInfo.textContent = '';
        return;
    }

    noResults.classList.add('hidden');
    resultsCount.textContent = flights.length;
    routeInfo.textContent = `${searchParams.origin} → ${searchParams.destination}`;

    // Find cheapest flight
    const cheapestPrice = Math.min(...flights.map(f => f.price));

    // Create flight cards
    flights.forEach((flight, index) => {
        const card = createFlightCard(flight, currency, index === 0, flight.price === cheapestPrice, searchParams);
        flightsContainer.appendChild(card);
    });

    // Scroll to results
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Create flight card
function createFlightCard(flight, currency, isFirst, isCheapest, searchParams) {
    console.log('🎫 Creating card for flight with deep_link:', flight.deep_link);

    const card = document.createElement('div');
    card.className = 'flight-card';

    if (flight.is_direct) {
        card.classList.add('direct-flight');
    }

    // Check if it's a round trip
    const isRoundTrip = searchParams && searchParams.return_from;
    const returnDate = isRoundTrip ? searchParams.return_from : null;

    // Format price
    const formattedPrice = new Intl.NumberFormat('es-MX', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(flight.price);

    // Currency symbol
    const currencySymbols = {
        'MXN': '$',
        'USD': '$',
        'COP': '$'
    };
    const symbol = currencySymbols[currency] || currency;

    // Badges
    let badges = '';
    if (isRoundTrip) {
        badges += `<span class="badge badge-roundtrip">↔️ ${t('flights.roundTrip') || 'Ida y vuelta'}</span>`;
    }
    if (flight.is_direct) {
        badges += `<span class="badge badge-direct">${t('flights.direct') || 'Directo'}</span>`;
    } else {
        const stopText = flight.stopovers === 1
            ? (t('flights.oneStopBadge') || '1 escala')
            : `${flight.stopovers} ${t('flights.stops') || 'escalas'}`;
        badges += `<span class="badge badge-stopovers">${stopText}</span>`;
    }
    if (isCheapest) {
        badges += `<span class="badge badge-cheapest">💰 ${t('flights.cheapest') || 'Más barato'}</span>`;
    }

    // Stopover info
    let stopoverHTML = '';
    if (flight.stopovers > 0 && flight.stopover_cities.length > 0) {
        stopoverHTML = `
            <div class="stopovers-info">
                <div class="stopovers-title">${t('flights.stopoverIn') || 'Escala en'}:</div>
                <div class="stopover-cities">${flight.stopover_cities.join(', ')}</div>
            </div>
        `;
    }

    // Return flight info
    let returnHTML = '';
    if (isRoundTrip && returnDate) {
        // Convert DD/MM/YYYY to display format
        const returnDateFormatted = formatReturnDate(returnDate);
        returnHTML = `
            <div class="return-info">
                <div class="return-header">
                    <div class="return-title">🔄 ${t('flights.returnFlight') || 'Vuelo de regreso'}</div>
                    <div class="return-date">${returnDateFormatted}</div>
                </div>
                <div class="return-route">
                    <div class="return-location">
                        <div class="return-airport">${flight.arrival.airport}</div>
                        <div class="return-city">${flight.arrival.city}</div>
                    </div>
                    <div class="return-arrow">→</div>
                    <div class="return-location">
                        <div class="return-airport">${flight.departure.airport}</div>
                        <div class="return-city">${flight.departure.city}</div>
                    </div>
                </div>
                <div class="return-note">
                    <div class="return-warning">
                        ⚠️ <strong>${t('flights.outboundOnly') || 'Solo se muestran horarios del vuelo de ida'}</strong>
                    </div>
                    <div class="return-info-text">
                        ✓ ${t('flights.priceIncludes') || 'El precio incluye ida y vuelta'}<br>
                        ✓ ${t('flights.clickToSee') || 'Haz clic en "Reservar" para ver horarios y detalles del vuelo de regreso'}
                    </div>
                </div>
            </div>
        `;
    }

    // Airlines
    const airlines = flight.airlines.join(', ');

    card.innerHTML = `
        <div class="flight-header">
            <div class="flight-badges">
                ${badges}
            </div>
            <div class="flight-price">
                <div class="price-amount">${symbol}${formattedPrice}</div>
                <div class="price-currency">${currency} ${t('flights.perPerson') || 'por persona'}</div>
            </div>
        </div>

        <div class="flight-route">
            <div class="flight-location">
                <div class="location-time">${flight.departure.time}</div>
                <div class="location-date">${formatDateForDisplay(flight.departure.date)}</div>
                <div class="location-city">${flight.departure.city}</div>
                <div class="location-code">${flight.departure.airport}</div>
            </div>

            <div class="flight-direction">
                <div class="direction-icon">✈️</div>
                <div class="direction-duration">${flight.duration.total_text}</div>
                <div class="direction-type">${flight.is_direct ? (t('flights.direct') || 'Directo') : `${flight.stopovers} ${t('flights.stops') || 'escalas'}`}</div>
            </div>

            <div class="flight-location">
                <div class="location-time">${flight.arrival.time}</div>
                <div class="location-date">${formatDateForDisplay(flight.arrival.date)}</div>
                <div class="location-city">${flight.arrival.city}</div>
                <div class="location-code">${flight.arrival.airport}</div>
            </div>
        </div>

        ${stopoverHTML}

        ${returnHTML}

        <div class="flight-details">
            <div class="flight-airlines">
                <span class="airlines-label">${t('flights.airlines') || 'Aerolíneas'}:</span>
                <span class="airlines-list">${airlines}</span>
            </div>

            <div class="flight-actions">
                <button class="btn-copy" onclick="navigator.clipboard.writeText('${flight.departure.airport} → ${flight.arrival.airport} | ${flight.departure.time} | ${airlines} | ${symbol}${formattedPrice} ${currency}'); alert('✓ Detalles copiados')">
                    📋 Copiar detalles
                </button>
                <a href="${flight.deep_link}" target="_blank" class="btn-book" rel="noopener noreferrer">
                    ${isRoundTrip ? (t('flights.viewInGoogle') || '🔍 Buscar en Google') : (t('flights.viewInGoogle') || '🔍 Buscar en Google')}
                </a>
            </div>
            <div class="flight-note">
                ℹ️ ${t('flights.googleNote') || 'Google Flights mostrará este vuelo y opciones similares. Usa los detalles copiados para encontrarlo.'}
            </div>
        </div>
    `;

    return card;
}

// Format date for API (DD/MM/YYYY)
function formatDateForAPI(isoDate) {
    const date = new Date(isoDate + 'T00:00:00');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Format date for display
function formatDateForDisplay(dateStr) {
    try {
        // Parse "YYYY-MM-DD HH:MM" format
        const [datePart] = dateStr.split(' ');
        const [year, month, day] = datePart.split('-');

        const date = new Date(year, month - 1, day);

        const locale = currentLanguage === 'en' ? 'en-US' :
                      currentLanguage === 'pt' ? 'pt-BR' : 'es-MX';

        return date.toLocaleDateString(locale, {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });
    } catch (e) {
        return dateStr;
    }
}

// Format return date from DD/MM/YYYY
function formatReturnDate(dateStr) {
    try {
        // Parse "DD/MM/YYYY" format
        const [day, month, year] = dateStr.split('/');
        const date = new Date(year, month - 1, day);

        const locale = currentLanguage === 'en' ? 'en-US' :
                      currentLanguage === 'pt' ? 'pt-BR' : 'es-MX';

        return date.toLocaleDateString(locale, {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    } catch (e) {
        return dateStr;
    }
}
