// Configuration
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';

// State
let destinations = [];
let destinationCounter = 0;

// DOM Elements
const destinationsContainer = document.getElementById('destinations-container');
const addDestinationBtn = document.getElementById('add-destination');
const analyzeBtn = document.getElementById('analyze-btn');
const loading = document.getElementById('loading');
const results = document.getElementById('results');
const resultsContent = document.getElementById('results-content');

// Initialize - Load exchange rates and language first
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize language system
    initLanguage();
    updateAllTexts();

    // Initialize language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }

    // Wire up the random fill button
    const randomFillBtn = document.getElementById('random-fill-btn');
    if (randomFillBtn) {
        randomFillBtn.addEventListener('click', handleRandomFill);
        console.log('🎲 Random fill button wired up');
    }

    await fetchExchangeRates();
});

// Event Listeners
addDestinationBtn.addEventListener('click', addDestinationForm);
analyzeBtn.addEventListener('click', analyzeDestinations);

// Mode selector
document.querySelectorAll('input[name="analysis-mode"]').forEach(radio => {
    radio.addEventListener('change', handleModeChange);
});

// Quick Fill functionality
const quickFillBtn = document.getElementById('quick-fill-btn');
const quickFillText = document.getElementById('quick-fill-text');
const quickFillLoading = document.getElementById('quick-fill-loading');

if (quickFillBtn && quickFillText) {
    quickFillBtn.addEventListener('click', handleQuickFill);
}

// Currency data
const CURRENCY_SYMBOLS = {
    'USD': { symbol: '$',  name: 'USD', rate: 1 },
    'MXN': { symbol: '$',  name: 'MXN', rate: 17.2 },
    'COP': { symbol: '$',  name: 'COP', rate: 4200 },
    'EUR': { symbol: '€',  name: 'EUR', rate: 0.92 },
    'BRL': { symbol: 'R$', name: 'BRL', rate: 5.0 }
};

let currentCurrency = 'MXN';
let previousCurrency = 'MXN';
let exchangeRates = {};
let lastRatesUpdate = null;
const EXCHANGE_API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

// Currency selector
const currencySelector = document.getElementById('currency-selector');
if (currencySelector) {
    // Load saved currency preference
    const savedCurrency = localStorage.getItem('preferredCurrency') || 'MXN';
    currentCurrency = savedCurrency;
    previousCurrency = savedCurrency;
    currencySelector.value = savedCurrency;

    // Save currency preference on change
    currencySelector.addEventListener('change', function() {
        previousCurrency = currentCurrency;
        currentCurrency = this.value;
        localStorage.setItem('preferredCurrency', this.value);
        updateCurrencyDisplay(this.value);
    });

    // Initialize currency display
    updateCurrencyDisplay(savedCurrency);
}

function updateCurrencyDisplay(currency) {
    const currencyInfo = CURRENCY_SYMBOLS[currency];

    // Update currency badge
    const currencyBadge = document.getElementById('currency-badge');
    const currencyBadgeText = document.getElementById('currency-badge-text');
    const currencyEmoji = currencyBadge?.querySelector('.currency-emoji');

    if (currencyBadgeText) {
        currencyBadgeText.textContent = currencyInfo.name;
    }

    if (currencyEmoji) {
        const emojiMap = {
            'USD': '🇺🇸',
            'MXN': '🇲🇽',
            'COP': '🇨🇴',
            'EUR': '🇪🇺',
            'BRL': '🇧🇷'
        };
        currencyEmoji.textContent = emojiMap[currency];
    }

    // Update all budget labels
    document.querySelectorAll('label').forEach(label => {
        if (label.textContent.includes('USD')) {
            label.textContent = label.textContent.replace('USD', currencyInfo.name);
        } else if (label.textContent.includes('MXN')) {
            label.textContent = label.textContent.replace('MXN', currencyInfo.name);
        } else if (label.textContent.includes('COP')) {
            label.textContent = label.textContent.replace('COP', currencyInfo.name);
        }
    });

    // Update main budget input
    const maxBudgetLabel = document.querySelector('label[for="max-budget"]');
    if (maxBudgetLabel) {
        maxBudgetLabel.textContent = `${t('prefs.maxBudget')} (${currencyInfo.name})`;
    }

    // Update all destination budget inputs and convert values
    document.querySelectorAll('.dest-budget').forEach(input => {
        const currentValue = parseFloat(input.value);
        if (currentValue && !isNaN(currentValue)) {
            const convertedValue = convertCurrency(currentValue, previousCurrency, currency);
            input.value = Math.round(convertedValue);
        }

        // Update placeholder
        const placeholder = getPlaceholderForCurrency(currency);
        input.placeholder = placeholder;
    });

    // Convert and update max budget
    const maxBudgetInput = document.getElementById('max-budget');
    if (maxBudgetInput) {
        const currentValue = parseFloat(maxBudgetInput.value);
        if (currentValue && !isNaN(currentValue)) {
            const convertedValue = convertCurrency(currentValue, previousCurrency, currency);
            maxBudgetInput.value = Math.round(convertedValue);
        } else {
            maxBudgetInput.value = getDefaultBudget(currency);
        }
    }

    // Update all budget labels in destinations
    updateDestinationLabels(currencyInfo.name);

    // Show notification
    showCurrencyChangeNotification(currency);
}

function showCurrencyChangeNotification(currency) {
    const badge = document.getElementById('currency-badge');
    if (badge) {
        badge.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            badge.style.animation = '';
        }, 500);
    }
}

// Fetch real-time exchange rates
async function fetchExchangeRates() {
    try {
        showLoadingIndicator(true);

        const response = await fetch(EXCHANGE_API_URL);
        if (!response.ok) {
            throw new Error('Error al cargar tasas de cambio');
        }

        const data = await response.json();
        exchangeRates = data.rates;
        lastRatesUpdate = new Date(data.time_last_updated * 1000);

        // Update CURRENCY_SYMBOLS with real rates
        CURRENCY_SYMBOLS['USD'].rate = 1;
        CURRENCY_SYMBOLS['MXN'].rate = exchangeRates['MXN'] || 17.2;
        CURRENCY_SYMBOLS['COP'].rate = exchangeRates['COP'] || 4200;
        CURRENCY_SYMBOLS['EUR'].rate = exchangeRates['EUR'] || 0.92;
        CURRENCY_SYMBOLS['BRL'].rate = exchangeRates['BRL'] || 5.0;

        // Detectar configuración regional del usuario
        const userLocale = navigator.language || navigator.userLanguage || 'es-MX';
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        console.log('✅ Tasas de cambio actualizadas:', {
            'USD → MXN': CURRENCY_SYMBOLS['MXN'].rate.toFixed(4),
            'USD → COP': CURRENCY_SYMBOLS['COP'].rate.toFixed(2),
            'Actualizado': lastRatesUpdate.toLocaleString(userLocale),
            'Locale': userLocale,
            'Zona horaria': userTimezone
        });

        // Update badge with last update info
        updateRatesTimestamp();

        // Show success toast
        showRatesUpdateToast();

        showLoadingIndicator(false);
        return true;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);

        // Use fallback rates
        console.warn('⚠️ Usando tasas de respaldo');
        CURRENCY_SYMBOLS['USD'].rate = 1;
        CURRENCY_SYMBOLS['MXN'].rate = 17.2;
        CURRENCY_SYMBOLS['COP'].rate = 4200;
        CURRENCY_SYMBOLS['EUR'].rate = 0.92;
        CURRENCY_SYMBOLS['BRL'].rate = 5.0;

        showLoadingIndicator(false);
        return false;
    }
}

function updateRatesTimestamp() {
    const badge = document.getElementById('currency-badge');
    if (badge && lastRatesUpdate) {
        // Detectar locale del dispositivo
        const userLocale = navigator.language || navigator.userLanguage || 'es-MX';

        // Formato completo con fecha y hora según locale del usuario
        const dateTimeStr = lastRatesUpdate.toLocaleString(userLocale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        badge.title = `Tasas actualizadas: ${dateTimeStr}`;
    }
}

function showLoadingIndicator(show) {
    const badge = document.getElementById('currency-badge');
    if (badge) {
        if (show) {
            badge.style.opacity = '0.5';
        } else {
            badge.style.opacity = '1';
        }
    }
}

function showRatesUpdateToast() {
    const toast = document.getElementById('rates-toast');
    const toastTime = document.getElementById('toast-time');

    if (toast && toastTime && lastRatesUpdate) {
        // Detectar locale del dispositivo
        const userLocale = navigator.language || navigator.userLanguage || 'es-MX';

        // Determinar si el dispositivo usa formato 12h o 24h
        const uses12Hour = !new Intl.DateTimeFormat(userLocale, { hour: 'numeric' })
            .format(0)
            .match(/24|00/);

        // Formato de fecha y hora según configuración del dispositivo
        const dateTimeStr = lastRatesUpdate.toLocaleString(userLocale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: uses12Hour
        });

        toastTime.textContent = dateTimeStr;

        // Show toast
        toast.classList.remove('hidden');

        // Hide after 4 seconds
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }
}

// Get user locale information
function getUserLocaleInfo() {
    const locale = navigator.language || navigator.userLanguage || 'es-MX';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Detect 12h or 24h format
    const testDate = new Date(2020, 0, 1, 13, 0);
    const timeFormat = new Intl.DateTimeFormat(locale, { hour: 'numeric' })
        .format(testDate);
    const uses12Hour = timeFormat.includes('PM') || timeFormat.includes('AM') || timeFormat.includes('p.') || timeFormat.includes('a.');

    return {
        locale,
        timezone,
        uses12Hour,
        dateExample: new Date().toLocaleDateString(locale),
        timeExample: new Date().toLocaleTimeString(locale)
    };
}

// Update footer with locale info
function updateLocaleFooter() {
    const localeInfo = getUserLocaleInfo();
    const footerElement = document.getElementById('locale-info');

    if (footerElement) {
        const localeNames = {
            'es-MX': 'Español (México)',
            'es-ES': 'Español (España)',
            'es-CO': 'Español (Colombia)',
            'es-AR': 'Español (Argentina)',
            'en-US': 'English (United States)',
            'en-GB': 'English (United Kingdom)',
            'pt-BR': 'Português (Brasil)',
            'fr-FR': 'Français (France)'
        };

        const localeName = localeNames[localeInfo.locale] || localeInfo.locale;
        const timeFormatStr = localeInfo.uses12Hour ? '12h' : '24h';

        footerElement.innerHTML = `
            <small>
                🌍 ${localeName} | ⏰ ${timeFormatStr} | 🕐 ${localeInfo.timezone}
            </small>
        `;
    }
}

// Log user locale info on load
const localeInfo = getUserLocaleInfo();
console.log('🌍 Configuración regional detectada:', localeInfo);

// Update footer with locale info
updateLocaleFooter();

// Refresh rates every 30 minutes
setInterval(async () => {
    console.log('🔄 Actualizando tasas de cambio...');
    await fetchExchangeRates();
}, 30 * 60 * 1000); // 30 minutes

function updateDestinationLabels(currencyName) {
    document.querySelectorAll('.destination-card').forEach(card => {
        const budgetLabel = Array.from(card.querySelectorAll('label')).find(label =>
            label.textContent.includes('Presupuesto') || label.textContent.includes('💰')
        );
        if (budgetLabel) {
            budgetLabel.textContent = `💰 Presupuesto (${currencyName}/persona)`;
        }
    });
}

function convertCurrency(amount, fromCurrency, toCurrency) {
    const fromRate = CURRENCY_SYMBOLS[fromCurrency].rate;
    const toRate = CURRENCY_SYMBOLS[toCurrency].rate;

    // Convert to USD first, then to target currency
    const usdAmount = amount / fromRate;
    const convertedAmount = usdAmount * toRate;

    return convertedAmount;
}

function getPlaceholderForCurrency(currency) {
    switch(currency) {
        case 'USD': return '800';
        case 'MXN': return '14000';
        case 'COP': return '3400000';
        case 'EUR': return '750';
        case 'BRL': return '4000';
        default:    return '800';
    }
}

function getDefaultBudget(currency) {
    switch(currency) {
        case 'USD': return '1000';
        case 'MXN': return '17200';
        case 'COP': return '4200000';
        case 'EUR': return '920';
        case 'BRL': return '5000';
        default:    return '1000';
    }
}

function formatCurrency(amount, currency) {
    const currencyInfo = CURRENCY_SYMBOLS[currency];
    const roundedAmount = Math.round(amount);

    return `${currencyInfo.symbol}${roundedAmount.toLocaleString('es-MX')} ${currencyInfo.name}`;
}

// Initialize with 2 empty destinations
addDestinationForm();
addDestinationForm();

// Initialize mode
handleModeChange();

// Quick Fill Handler
async function handleQuickFill() {
    const text = quickFillText.value.trim();

    if (!text) {
        alert(t('quickfill.emptyError') || 'Por favor escribe una descripción de tu viaje');
        return;
    }

    // Show loading
    quickFillBtn.disabled = true;
    quickFillLoading.classList.remove('hidden');

    try {
        const response = await fetch(`${API_URL}/api/quick-fill`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        const result = await response.json();

        if (!response.ok || result.error) {
            throw new Error(result.message || 'Error al procesar el texto');
        }

        // Auto-fill form with extracted data
        fillFormWithData(result.data);

        // Clear textarea
        quickFillText.value = '';

        // Show success message
        showToast(t('quickfill.success') || '¡Campos rellenados exitosamente!', 'success');

    } catch (error) {
        console.error('Error en quick fill:', error);
        alert(`Error: ${error.message}`);
    } finally {
        quickFillBtn.disabled = false;
        quickFillLoading.classList.add('hidden');
    }
}

function fillFormWithData(data) {
    console.log('📝 Rellenando formulario con datos:', data);

    // Fill group preferences
    if (data.num_travelers) {
        const numTravelersInput = document.getElementById('num-travelers');
        if (numTravelersInput) numTravelersInput.value = data.num_travelers;
    }

    if (data.max_budget) {
        const maxBudgetInput = document.getElementById('max-budget');
        if (maxBudgetInput) maxBudgetInput.value = data.max_budget;
    }

    if (data.currency && data.currency !== currentCurrency) {
        const currencySelector = document.getElementById('currency-selector');
        if (currencySelector) {
            currencySelector.value = data.currency;
            currencySelector.dispatchEvent(new Event('change'));
        }
    }

    // Fill preferences
    if (data.preferences) {
        const prefs = data.preferences;

        if (prefs.priority) {
            const prioritySelect = document.getElementById('priority');
            if (prioritySelect) prioritySelect.value = prefs.priority;
        }

        if (prefs.departure_airport) {
            // This will be applied to destinations
        }

        if (prefs.travel_types) {
            document.querySelectorAll('.travel-type').forEach(checkbox => {
                checkbox.checked = prefs.travel_types.includes(checkbox.value);
            });
        }

        if (prefs.activities) {
            document.querySelectorAll('.activity').forEach(checkbox => {
                checkbox.checked = prefs.activities.includes(checkbox.value);
            });
        }

        if (prefs.avoid_activities) {
            document.querySelectorAll('.avoid-activity').forEach(checkbox => {
                checkbox.checked = prefs.avoid_activities.includes(checkbox.value);
            });
        }

        if (typeof prefs.prefers_hostels === 'boolean') {
            const checkbox = document.getElementById('prefers-hostels');
            if (checkbox) checkbox.checked = prefs.prefers_hostels;
        }

        if (typeof prefs.values_social === 'boolean') {
            const checkbox = document.getElementById('values-social');
            if (checkbox) checkbox.checked = prefs.values_social;
        }

        if (typeof prefs.city_safety_important === 'boolean') {
            const checkbox = document.getElementById('city-safety-important');
            if (checkbox) checkbox.checked = prefs.city_safety_important;
        }

        if (typeof prefs.needs_wifi === 'boolean') {
            const checkbox = document.getElementById('needs-wifi');
            if (checkbox) checkbox.checked = prefs.needs_wifi;
        }

        if (typeof prefs.works_during_trip === 'boolean') {
            const checkbox = document.getElementById('works-during-trip');
            if (checkbox) checkbox.checked = prefs.works_during_trip;
        }

        if (prefs.english_level) {
            const select = document.getElementById('english-level');
            if (select) select.value = prefs.english_level;
        }
    }

    // Fill dates in preferences
    if (data.dates) {
        if (data.dates.duration_days) {
            const minDays = document.getElementById('min-days');
            const maxDays = document.getElementById('max-days');
            if (minDays) minDays.value = data.dates.duration_days;
            if (maxDays) maxDays.value = data.dates.duration_days;
        }
    }

    // Clear existing destinations
    destinationsContainer.innerHTML = '';
    destinationCounter = 0;

    // Add destinations
    if (data.destinations && data.destinations.length > 0) {
        data.destinations.forEach((dest, index) => {
            addDestinationForm();

            // Fill destination data
            const card = document.getElementById(`destination-${index}`);
            if (card) {
                const countryInput = card.querySelector('.dest-country-input');
                const citySelect = card.querySelector('.dest-name');
                const proposedByInput = card.querySelector('.dest-proposed-by');
                const budgetInput = card.querySelector('.dest-budget');
                const startDateInput = card.querySelector('.dest-start-date');
                const endDateInput = card.querySelector('.dest-end-date');
                const durationInput = card.querySelector('.dest-duration');
                const airportSelect = card.querySelector('.dest-airport');
                const flexibilitySelect = card.querySelector('.dest-flexibility');

                if (countryInput && dest.country) {
                    countryInput.value = dest.country;
                    // Trigger change to populate cities
                    countryInput.dispatchEvent(new Event('input'));

                    // Wait a bit and set city
                    setTimeout(() => {
                        if (citySelect && dest.city) {
                            citySelect.value = dest.city;
                        }
                    }, 100);
                }

                if (proposedByInput && dest.proposed_by) {
                    proposedByInput.value = dest.proposed_by;
                }

                if (budgetInput && data.max_budget) {
                    budgetInput.value = data.max_budget;
                }

                if (data.dates) {
                    if (startDateInput && data.dates.start_date) {
                        startDateInput.value = data.dates.start_date;
                    }
                    if (endDateInput && data.dates.end_date) {
                        endDateInput.value = data.dates.end_date;
                    }
                    if (durationInput && data.dates.duration_days) {
                        durationInput.value = data.dates.duration_days;
                    }
                    if (flexibilitySelect && data.dates.flexibility) {
                        flexibilitySelect.value = data.dates.flexibility;
                    }
                }

                if (airportSelect && data.preferences?.departure_airport) {
                    airportSelect.value = data.preferences.departure_airport;
                }
            }
        });
    }

    // Scroll to destinations section
    setTimeout(() => {
        const destSection = document.querySelector('.destinations-section');
        if (destSection) {
            destSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 200);
}

function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#FF385C'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function handleModeChange() {
    const mode = document.querySelector('input[name="analysis-mode"]:checked').value;

    if (mode === 'practical') {
        document.body.classList.add('practical-mode');
        document.body.classList.remove('complete-mode');
    } else {
        document.body.classList.add('complete-mode');
        document.body.classList.remove('practical-mode');
    }
}

function addDestinationForm() {
    const id = destinationCounter++;
    const destinationCard = document.createElement('div');
    destinationCard.className = 'destination-card';
    destinationCard.id = `destination-${id}`;

    destinationCard.innerHTML = `
        <div class="destination-header">
            <h3>${t('dest.number')} ${id + 1}</h3>
            <button class="remove-destination" onclick="removeDestination(${id})">✕</button>
        </div>

        <div class="form-grid">
            <div class="form-group">
                <label>${t('dest.country')} 🌎</label>
                <input type="text" class="input dest-country-input" placeholder="${t('dest.searchCountry')}" list="countries-datalist-${id}" required autocomplete="off">
                <datalist id="countries-datalist-${id}">
                    ${COUNTRIES.map(c => `<option value="${c}">`).join('')}
                </datalist>
            </div>

            <div class="form-group">
                <label>${t('dest.city')} ✈️</label>
                <select class="input dest-name" required disabled>
                    <option value="">${t('dest.selectCountry')}</option>
                </select>
            </div>

            <div class="form-group">
                <label>💰 ${t('dest.budget')} (${CURRENCY_SYMBOLS[currentCurrency].name}/${t('dest.budgetPerPerson')}) <span style="font-weight:400;color:var(--text-secondary);font-size:0.8125rem;">— costo estimado</span></label>
                <input type="number" class="input dest-budget" placeholder="${getPlaceholderForCurrency(currentCurrency)}" min="0" required>
            </div>

            <div class="form-group">
                <label>📅 ${t('dest.startDate')}</label>
                <input type="date" class="input dest-start-date" required>
            </div>

            <div class="form-group">
                <label>📅 ${t('dest.endDate')}</label>
                <input type="date" class="input dest-end-date" required>
            </div>

            <div class="form-group">
                <label>⏱️ ${t('dest.duration')}</label>
                <input type="number" class="input dest-duration" placeholder="5" min="1" required>
            </div>

            <div class="form-group">
                <label>🛫 ${t('dest.airport')}</label>
                <select class="input dest-airport" required>
                    <option value="">${t('dest.airportSelect')}</option>
                    <optgroup label="🇲🇽 México">
                        <option value="MEX">Ciudad de México (MEX)</option>
                        <option value="GDL">Guadalajara (GDL)</option>
                        <option value="MTY">Monterrey (MTY)</option>
                        <option value="CUN">Cancún (CUN)</option>
                        <option value="TIJ">Tijuana (TIJ)</option>
                        <option value="BJX">León/Bajío (BJX)</option>
                        <option value="QRO">Querétaro (QRO)</option>
                        <option value="OAX">Oaxaca (OAX)</option>
                    </optgroup>
                    <optgroup label="🇨🇴 Colombia">
                        <option value="BOG">Bogotá (BOG)</option>
                        <option value="MDE">Medellín (MDE)</option>
                        <option value="CTG">Cartagena (CTG)</option>
                        <option value="CLO">Cali (CLO)</option>
                        <option value="BAQ">Barranquilla (BAQ)</option>
                    </optgroup>
                    <optgroup label="🇺🇸 Estados Unidos">
                        <option value="MIA">Miami (MIA)</option>
                        <option value="LAX">Los Angeles (LAX)</option>
                        <option value="JFK">Nueva York (JFK)</option>
                        <option value="DFW">Dallas (DFW)</option>
                        <option value="ORD">Chicago (ORD)</option>
                    </optgroup>
                    <optgroup label="🌎 América del Sur">
                        <option value="LIM">Lima (LIM)</option>
                        <option value="SCL">Santiago (SCL)</option>
                        <option value="EZE">Buenos Aires (EZE)</option>
                        <option value="GRU">São Paulo (GRU)</option>
                        <option value="UIO">Quito (UIO)</option>
                        <option value="PTY">Panamá (PTY)</option>
                    </optgroup>
                    <optgroup label="🇪🇸 Europa">
                        <option value="MAD">Madrid (MAD)</option>
                        <option value="BCN">Barcelona (BCN)</option>
                        <option value="LHR">Londres (LHR)</option>
                        <option value="CDG">París (CDG)</option>
                    </optgroup>
                </select>
            </div>

            <div class="form-group">
                <label>📆 ${t('dest.flexibility')}</label>
                <select class="input dest-flexibility" required>
                    <option value="fixed">🔒 ${t('dest.flex.fixed')}</option>
                    <option value="±3days">📅 ${t('dest.flex.days3')}</option>
                    <option value="±1week">📅 ${t('dest.flex.week')}</option>
                </select>
            </div>

            <div class="form-group complete-mode-only">
                <label>🏨 ${t('accom.title')}</label>
                <select class="input dest-accommodation" required>
                    <option value="hostal" selected>🛏️ ${t('accom.hostel')}</option>
                    <option value="hotel_economico">🏨 ${t('accom.hotelBudget')}</option>
                    <option value="airbnb">🏠 ${t('accom.airbnb')}</option>
                    <option value="hotel_mid">⭐ ${t('accom.hotelMid')}</option>
                </select>
            </div>

            <div class="form-group complete-mode-only">
                <label>📶 ${t('wifi.title')}</label>
                <select class="input dest-wifi" required>
                    <option value="critical">🔴 ${t('wifi.critical')}</option>
                    <option value="important">🟡 ${t('wifi.important')}</option>
                    <option value="nice_to_have">🟢 ${t('wifi.nice')}</option>
                </select>
            </div>
        </div>

        <div class="complete-mode-only">
            <h4 style="margin: 20px 0 10px 0; color: var(--primary-color);">🏠 ${t('hostel.title')}</h4>
            <div class="form-grid">
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" class="dest-hostel-workspace" checked> ${t('hostel.workspace')}
                    </label>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" class="dest-hostel-social" checked> ${t('hostel.social')}
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>🛡️ ${t('safety.title')}</label>
                <select class="input dest-city-safety" required>
                    <option value="safe">✅ ${t('safety.safe')}</option>
                    <option value="moderate" selected>🟡 ${t('safety.moderate')}</option>
                    <option value="concern">🟠 ${t('safety.concern')}</option>
                    <option value="dangerous">🔴 ${t('safety.dangerous')}</option>
                </select>
            </div>

            <h4 style="margin: 20px 0 10px 0;">📋 ${t('req.title')}</h4>
            <div class="form-grid">
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" class="dest-insurance"> ${t('req.insurance')}
                    </label>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" class="dest-vaccines"> ${t('req.vaccines')}
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>🎉 ${t('req.events')}</label>
                <input type="text" class="input dest-events" placeholder="${t('req.eventsPlaceholder')}">
            </div>

            <div class="form-group">
                <label>🎒 ${t('prefs.travelTypes')}</label>
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" value="playa" class="dest-travel-type"> 🏖️ ${t('travel.beach')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="ciudad" class="dest-travel-type"> 🏙️ ${t('travel.city')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="naturaleza" class="dest-travel-type"> 🌲 ${t('travel.nature')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="cultural" class="dest-travel-type"> 🎭 ${t('travel.cultural')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="aventura" class="dest-travel-type"> 🧗 ${t('travel.adventure')}
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>🎯 ${t('prefs.activities')}</label>
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" value="comida" class="dest-activity"> 🍽️ ${t('activity.food')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="fiesta" class="dest-activity"> 🎉 ${t('activity.party')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="historia" class="dest-activity"> 🏛️ ${t('activity.history')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="deportes" class="dest-activity"> ⚡ ${t('activity.sports')}
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" value="relajacion" class="dest-activity"> 🧘 ${t('activity.relax')}
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label>📝 ${t('notes.label')}</label>
                <textarea class="input dest-notes" rows="2" placeholder="${t('notes.placeholder')}"></textarea>
            </div>
        </div>
    `;

    destinationsContainer.appendChild(destinationCard);

    // Configurar cascada país -> ciudad
    setupCountryCityCascade(id);
}

function setupCountryCityCascade(id) {
    const card = document.getElementById(`destination-${id}`);
    if (!card) return;

    const countryInput = card.querySelector('.dest-country-input');
    const citySelect = card.querySelector('.dest-name');

    countryInput.addEventListener('input', function() {
        const selectedCountry = this.value.trim();

        // Verificar si el país existe en nuestra data
        if (DESTINATIONS_DATA[selectedCountry]) {
            // Habilitar y poblar ciudades
            citySelect.disabled = false;
            citySelect.innerHTML = `<option value="">${t('dest.selectCountry')}</option>`;

            DESTINATIONS_DATA[selectedCountry].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            // Deshabilitar si no hay match
            citySelect.disabled = true;
            citySelect.innerHTML = `<option value="">${t('dest.selectCountry')}</option>`;
        }
    });

    // Soporte para cuando selecciona del datalist
    countryInput.addEventListener('change', function() {
        // Trigger input event para actualizar ciudades
        const event = new Event('input', { bubbles: true });
        this.dispatchEvent(event);
    });
}

function removeDestination(id) {
    const card = document.getElementById(`destination-${id}`);
    if (card) {
        card.remove();
    }
}

function collectFormData() {
    const mode = document.querySelector('input[name="analysis-mode"]:checked').value;
    const isPractical = mode === 'practical';

    // Group preferences
    const groupPreferences = {
        max_budget_per_person: parseFloat(document.getElementById('max-budget').value),
        preferred_travel_types: isPractical ? [] : Array.from(document.querySelectorAll('.travel-type:checked')).map(el => el.value),
        preferred_activities: isPractical ? [] : Array.from(document.querySelectorAll('.activity:checked')).map(el => el.value),
        avoid_activities: isPractical ? [] : Array.from(document.querySelectorAll('.avoid-activity:checked')).map(el => el.value),
        has_valid_passport: isPractical ? false : document.getElementById('has-passport').checked,
        has_us_visa: isPractical ? false : document.getElementById('has-us-visa').checked,
        max_trip_days: parseInt(document.getElementById('max-days').value),
        min_trip_days: parseInt(document.getElementById('min-days').value),
        advance_booking_days: 30,
        priority: document.getElementById('priority').value,
        prefers_hostels: isPractical ? true : document.getElementById('prefers-hostels').checked,
        values_social_atmosphere: isPractical ? false : document.getElementById('values-social').checked,
        city_safety_important: isPractical ? false : document.getElementById('city-safety-important').checked,
        needs_reliable_wifi: isPractical ? false : document.getElementById('needs-wifi').checked,
        works_during_trip: isPractical ? false : document.getElementById('works-during-trip').checked,
        preferred_currency_rate: isPractical ? null : (document.getElementById('currency-preference').value || null),
        english_level: isPractical ? 'basic' : document.getElementById('english-level').value,
        has_travel_insurance: isPractical ? false : document.getElementById('has-insurance').checked,
        has_required_vaccines: isPractical ? false : document.getElementById('has-vaccines').checked
    };

    // Collect destinations
    const destinations = [];
    document.querySelectorAll('.destination-card').forEach(card => {
        const startDate = card.querySelector('.dest-start-date').value;
        const endDate = card.querySelector('.dest-end-date').value;

        const destination = {
            name: card.querySelector('.dest-name').value,
            country: card.querySelector('.dest-country-input').value,
            proposed_by: '',
            budget_per_person: parseFloat(card.querySelector('.dest-budget').value),
            start_date: startDate,
            end_date: endDate,
            duration_days: parseInt(card.querySelector('.dest-duration').value),
            travel_type: isPractical ? [] : Array.from(card.querySelectorAll('.dest-travel-type:checked')).map(el => el.value),
            activities: isPractical ? [] : Array.from(card.querySelectorAll('.dest-activity:checked')).map(el => el.value),
            departure_airport: card.querySelector('.dest-airport').value,
            date_flexibility: card.querySelector('.dest-flexibility').value,
            accepts_layovers: isPractical ? true : (card.querySelector('.dest-layovers')?.checked ?? true),
            accommodation_type: isPractical ? 'hostal' : card.querySelector('.dest-accommodation').value,
            wifi_quality: isPractical ? 'important' : card.querySelector('.dest-wifi').value,
            hostel_has_workspace: isPractical ? false : card.querySelector('.dest-hostel-workspace').checked,
            hostel_social_vibe: isPractical ? false : card.querySelector('.dest-hostel-social').checked,
            city_safety_rating: isPractical ? 'moderate' : card.querySelector('.dest-city-safety').value,
            requires_travel_insurance: isPractical ? false : card.querySelector('.dest-insurance').checked,
            requires_vaccines: isPractical ? false : card.querySelector('.dest-vaccines').checked,
            special_events: isPractical ? null : (card.querySelector('.dest-events').value || null),
            notes: isPractical ? null : (card.querySelector('.dest-notes').value || null)
        };

        destinations.push(destination);
    });

    return {
        destinations,
        group_preferences: groupPreferences,
        num_travelers: parseInt(document.getElementById('num-travelers').value),
        analysis_mode: mode,
        currency: currentCurrency
    };
}

function validateForm(data) {
    if (data.destinations.length < 2) {
        alert('Se requieren al menos 2 destinos para comparar');
        return false;
    }

    for (let dest of data.destinations) {
        if (!dest.name || !dest.country) {
            alert('Por favor completa todos los campos obligatorios de los destinos');
            return false;
        }
    }

    // Solo validar tipos de viaje en modo completo
    if (data.analysis_mode === 'complete' && data.group_preferences.preferred_travel_types.length === 0) {
        alert('Por favor selecciona al menos un tipo de viaje preferido');
        return false;
    }

    return true;
}

async function analyzeDestinations() {
    const data = collectFormData();

    if (!validateForm(data)) {
        return;
    }

    // Update loading message based on mode
    const loadingText = data.analysis_mode === 'practical'
        ? t('analyze.loadingFast')
        : t('analyze.loadingDetailed');
    loading.querySelector('p').textContent = loadingText;

    // Show loading
    analyzeBtn.disabled = true;
    loading.classList.remove('hidden');
    results.classList.add('hidden');

    try {
        const response = await fetch(`${API_URL}/api/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Error al analizar destinos');
        }

        displayResults(result.analysis);
    } catch (error) {
        alert(`Error: ${error.message}\n\nAsegúrate de que el servidor backend esté corriendo en ${API_URL}`);
        console.error('Error:', error);
    } finally {
        analyzeBtn.disabled = false;
        loading.classList.add('hidden');
    }
}

function displayPracticalResults(analysis, initialHtml) {
    let html = initialHtml;

    // Main reasons
    if (analysis.main_reasons && analysis.main_reasons.length > 0) {
        html += '<h3>💡 Por qué es el mejor</h3>';
        html += '<ul class="reason-list">';
        analysis.main_reasons.forEach(reason => {
            html += `<li>${reason}</li>`;
        });
        html += '</ul>';
    }

    // Quick tip
    if (analysis.quick_tip) {
        html += `
            <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #fef3c7, #fef9c3); border-radius: 8px; border-left: 4px solid var(--secondary-color);">
                <h3 style="color: var(--secondary-color); margin-bottom: 10px;">💡 Tip Rápido</h3>
                <p style="font-size: 1.1rem;">${analysis.quick_tip}</p>
            </div>
        `;
    }

    // Raw response fallback
    if (analysis.raw_response && !analysis.recommended_destination) {
        html += `
            <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px;">
                <h3>📝 Recomendación</h3>
                <pre style="white-space: pre-wrap; font-family: inherit;">${analysis.raw_response}</pre>
            </div>
        `;
    }

    resultsContent.innerHTML = html;
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth' });
}

function displayResults(analysis) {
    let html = '';
    const mode = document.querySelector('input[name="analysis-mode"]:checked').value;

    if (analysis.recommended_destination) {
        const cityForMap = encodeURIComponent(analysis.recommended_destination.split(',')[0].trim());
        html += `
            <div class="recommendation-box">
                <h3 class="recommendation-title">🎯 ${analysis.recommended_destination}</h3>
                <p style="font-size: 1.2rem; color: var(--text-secondary);">Este es el mejor destino para tu grupo</p>
                ${analysis.score ? `<div class="score" style="margin-top: 10px;">${analysis.score}/100</div>` : ''}
                <a href="map.html?city=${cityForMap}" class="btn btn-outline" style="margin-top: 16px; display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">🗺️ Ver en mapa</a>
            </div>
        `;
    }

    // En modo práctico, mostrar solo lo esencial
    if (mode === 'practical') {
        displayPracticalResults(analysis, html);
        return;
    }

    // Scores
    if (analysis.scores && analysis.scores.length > 0) {
        html += '<h3>📊 Puntuación de Destinos</h3>';
        html += '<div class="score-container">';

        const worksRemotely = document.getElementById('works-during-trip').checked;

        analysis.scores.forEach(score => {
            let breakdownHtml = '';

            if (score.breakdown) {
                // Modo Trabajo Remoto (9 categorías)
                if (score.breakdown.work_safety !== undefined) {
                    breakdownHtml = `
                        <small style="color: var(--text-secondary); display: block; margin-top: 8px;">
                            💰 Precio: ${score.breakdown.price || 0}/20<br>
                            ❤️ Preferencias: ${score.breakdown.preferences || 0}/10<br>
                            📋 Viabilidad: ${score.breakdown.viability || 0}/10<br>
                            ✨ Experiencia: ${score.breakdown.experience || 0}/10<br>
                            🌤️ Temporada: ${score.breakdown.season || 0}/10<br>
                            🏠 Hostal: ${score.breakdown.hostel_quality || 0}/10<br>
                            🛡️ Seguridad Ciudad: ${score.breakdown.city_safety || 0}/10<br>
                            🔴 WiFi/Digital: ${score.breakdown.digital_infrastructure || 0}/10<br>
                            🚨 <strong>Seg. Laboral: ${score.breakdown.work_safety || 0}/10</strong>
                        </small>
                    `;
                }
                // Modo Vacaciones (7 categorías)
                else {
                    breakdownHtml = `
                        <small style="color: var(--text-secondary); display: block; margin-top: 8px;">
                            💰 Precio: ${score.breakdown.price || 0}/30<br>
                            ❤️ Preferencias: ${score.breakdown.preferences || 0}/20<br>
                            📋 Viabilidad: ${score.breakdown.viability || 0}/10<br>
                            ✨ Experiencia: ${score.breakdown.experience || 0}/15<br>
                            🌤️ Temporada: ${score.breakdown.season || 0}/10<br>
                            🏠 Hostal: ${score.breakdown.hostel_quality || 0}/5<br>
                            🛡️ Seguridad Ciudad: ${score.breakdown.city_safety || 0}/10
                        </small>
                    `;
                }
            }

            html += `
                <div class="score-card">
                    <h4>${score.destination}</h4>
                    <div class="score">${score.score}/100</div>
                    ${breakdownHtml}
                </div>
            `;
        });

        html += '</div>';
    }

    // Hostel Analysis
    if (analysis.hostel_analysis) {
        html += `
            <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #f0f9ff, #e0f2fe); border-radius: 8px; border-left: 4px solid #0284c7;">
                <h3 style="color: #0284c7; margin-bottom: 10px;">🏠 Evaluación de Hostales</h3>
                <p style="white-space: pre-line; font-size: 1.05rem;">${analysis.hostel_analysis}</p>
            </div>
        `;
    }

    // City Safety Analysis
    if (analysis.city_safety_analysis) {
        html += `
            <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-radius: 8px; border-left: 4px solid #16a34a;">
                <h3 style="color: #16a34a; margin-bottom: 10px;">🛡️ Seguridad de la Ciudad/Barrio</h3>
                <p style="white-space: pre-line; font-size: 1.05rem;">${analysis.city_safety_analysis}</p>
            </div>
        `;
    }

    // Work Safety Summary (si trabajan durante el viaje)
    if (analysis.work_safety_summary) {
        html += `
            <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #fee2e2, #ffedd5); border-radius: 8px; border-left: 4px solid #dc2626;">
                <h3 style="color: #dc2626; margin-bottom: 10px;">🚨 Seguridad Laboral - Riesgos por País</h3>
                <p style="white-space: pre-line; font-size: 1.05rem;">${analysis.work_safety_summary}</p>
            </div>
        `;
    }

    // WiFi Assessment (CRÍTICO para trabajo remoto)
    if (analysis.wifi_assessment) {
        html += `
            <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, #dbeafe, #fef3c7); border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <h3 style="color: var(--primary-color); margin-bottom: 10px;">🔴 Evaluación de Conectividad (Trabajo Remoto)</h3>
                <p style="white-space: pre-line; font-size: 1.05rem;">${analysis.wifi_assessment}</p>
            </div>
        `;
    }

    // Main reasons
    if (analysis.main_reasons && analysis.main_reasons.length > 0) {
        html += '<h3>💡 Razones Principales</h3>';
        html += '<ul class="reason-list">';
        analysis.main_reasons.forEach(reason => {
            html += `<li>${reason}</li>`;
        });
        html += '</ul>';
    }

    // Comparison
    if (analysis.comparison) {
        html += `
            <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px;">
                <h3>⚖️ Comparación con otros destinos</h3>
                <p style="white-space: pre-line;">${analysis.comparison}</p>
            </div>
        `;
    }

    // Additional recommendations
    if (analysis.additional_recommendations) {
        const rec = analysis.additional_recommendations;
        html += '<h3>✨ Recomendaciones Adicionales</h3>';
        html += '<div class="tips-grid">';

        if (rec.airlines && rec.airlines.length > 0) {
            html += `
                <div class="tip-card">
                    <h4>✈️ Aerolíneas recomendadas</h4>
                    <ul>
                        ${rec.airlines.map(airline => `<li>${airline}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.best_booking_time) {
            html += `
                <div class="tip-card">
                    <h4>📅 Mejor momento para reservar</h4>
                    <p>${rec.best_booking_time}</p>
                </div>
            `;
        }

        if (rec.recommended_hostels && rec.recommended_hostels.length > 0) {
            html += `
                <div class="tip-card" style="border-left: 4px solid #0284c7;">
                    <h4>🏠 Hostales Recomendados</h4>
                    <ul>
                        ${rec.recommended_hostels.map(hostel => `<li>${hostel}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.safe_neighborhoods && rec.safe_neighborhoods.length > 0) {
            html += `
                <div class="tip-card" style="border-left: 4px solid #16a34a;">
                    <h4>🛡️ Barrios Seguros</h4>
                    <ul>
                        ${rec.safe_neighborhoods.map(neighborhood => `<li>${neighborhood}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.coworking_spaces && rec.coworking_spaces.length > 0) {
            html += `
                <div class="tip-card" style="border-left: 4px solid var(--danger-color);">
                    <h4>🔴 Espacios de Coworking</h4>
                    <ul>
                        ${rec.coworking_spaces.map(space => `<li>${space}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.wifi_providers && rec.wifi_providers.length > 0) {
            html += `
                <div class="tip-card" style="border-left: 4px solid var(--danger-color);">
                    <h4>📶 Proveedores de Internet</h4>
                    <ul>
                        ${rec.wifi_providers.map(provider => `<li>${provider}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.work_risk_warnings && rec.work_risk_warnings.length > 0) {
            html += `
                <div class="tip-card" style="border-left: 4px solid #dc2626; background: #fef2f2;">
                    <h4 style="color: #dc2626;">🚨 Advertencias de Riesgo Laboral</h4>
                    <ul>
                        ${rec.work_risk_warnings.map(warning => `<li>${warning}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.travel_insurance_cost) {
            html += `
                <div class="tip-card">
                    <h4>🏥 Seguro de Viaje</h4>
                    <p>${rec.travel_insurance_cost}</p>
                </div>
            `;
        }

        if (rec.required_vaccines && rec.required_vaccines.length > 0) {
            html += `
                <div class="tip-card">
                    <h4>💉 Vacunas Requeridas</h4>
                    <ul>
                        ${rec.required_vaccines.map(vaccine => `<li>${vaccine}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.currency_exchange_tips) {
            html += `
                <div class="tip-card">
                    <h4>💱 Cambio de Divisa</h4>
                    <p>${rec.currency_exchange_tips}</p>
                </div>
            `;
        }

        if (rec.cost_saving_tips && rec.cost_saving_tips.length > 0) {
            html += `
                <div class="tip-card">
                    <h4>💰 Tips para Ahorrar</h4>
                    <ul>
                        ${rec.cost_saving_tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        if (rec.warnings && rec.warnings.length > 0) {
            html += `
                <div class="tip-card" style="border-left: 4px solid var(--danger-color);">
                    <h4>⚠️ Advertencias</h4>
                    <ul>
                        ${rec.warnings.map(warning => `<li>${warning}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        html += '</div>';
    }

    // Raw response fallback
    if (analysis.raw_response && !analysis.recommended_destination) {
        html += `
            <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px;">
                <h3>📝 Análisis Completo</h3>
                <pre style="white-space: pre-wrap; font-family: inherit;">${analysis.raw_response}</pre>
            </div>
        `;
    }

    resultsContent.innerHTML = html;
    results.classList.remove('hidden');
    results.scrollIntoView({ behavior: 'smooth' });
}

// ══════════════════════════════════════════════════════════════════════════════
// Random Fill - Surprise Me Button
// ══════════════════════════════════════════════════════════════════════════════

const RANDOM_DESTINATIONS = [
    { country: 'Colombia', city: 'Medellín' },
    { country: 'Colombia', city: 'Cartagena' },
    { country: 'Colombia', city: 'Bogotá' },
    { country: 'Peru', city: 'Lima' },
    { country: 'Peru', city: 'Cusco' },
    { country: 'Argentina', city: 'Buenos Aires' },
    { country: 'Chile', city: 'Santiago' },
    { country: 'Brazil', city: 'São Paulo' },
    { country: 'Brazil', city: 'Rio de Janeiro' },
    { country: 'Mexico', city: 'Cancún' },
    { country: 'Mexico', city: 'Puerto Vallarta' },
    { country: 'Mexico', city: 'Oaxaca' },
    { country: 'Mexico', city: 'Guadalajara' },
    { country: 'Mexico', city: 'Monterrey' },
    { country: 'Costa Rica', city: 'San José' },
    { country: 'Panama', city: 'Ciudad de Panamá' },
    { country: 'Guatemala', city: 'Antigua Guatemala' },
    { country: 'Spain', city: 'Barcelona' },
    { country: 'Spain', city: 'Madrid' },
    { country: 'Portugal', city: 'Lisboa' },
    { country: 'Italy', city: 'Roma' },
    { country: 'France', city: 'París' },
    { country: 'Thailand', city: 'Bangkok' },
    { country: 'Japan', city: 'Tokyo' },
    { country: 'Vietnam', city: 'Ho Chi Minh' },
    { country: 'Indonesia', city: 'Bali' },
    { country: 'USA', city: 'New York' },
    { country: 'USA', city: 'Los Angeles' },
    { country: 'USA', city: 'Miami' },
    { country: 'Canada', city: 'Toronto' },
];

const TRAVEL_TYPES = ['beach', 'city', 'nature', 'cultural', 'adventure'];
const ACTIVITIES = ['food', 'party', 'history', 'sports', 'relax', 'shopping'];
const AVOID_ACTIVITIES = ['heights', 'heat', 'cold', 'crowds'];
const PRIORITIES = ['price', 'balance', 'experience'];
const ENGLISH_LEVELS = ['none', 'basic', 'intermediate', 'fluent'];
const AIRPORTS = ['MEX', 'GDL', 'MTY', 'CUN', 'TIJ'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItems(arr, min, max) {
    const count = getRandomInt(min, max);
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDate(daysFromNow, rangeDays) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow + getRandomInt(0, rangeDays));
    return date.toISOString().split('T')[0];
}

// Helper to safely set element value
function setVal(id, value) {
    const el = document.getElementById(id);
    if (el) el.value = value;
}

function setChecked(id, checked) {
    const el = document.getElementById(id);
    if (el) el.checked = checked;
}

function handleRandomFill() {
    console.log('🎲 Random fill triggered!');

    // Random number of travelers (1-8)
    const numTravelers = getRandomInt(1, 8);
    setVal('num-travelers', numTravelers);

    // Random budget (5000-50000 MXN)
    const budget = getRandomInt(5, 50) * 1000;
    setVal('max-budget', budget);

    // Random trip duration
    const minDays = getRandomInt(3, 7);
    const maxDays = minDays + getRandomInt(0, 7);
    setVal('min-days', minDays);
    setVal('max-days', maxDays);

    // Random priority
    setVal('priority', getRandomItem(PRIORITIES));

    // Random travel types (1-3)
    const selectedTravelTypes = getRandomItems(TRAVEL_TYPES, 1, 3);
    document.querySelectorAll('.travel-type').forEach(checkbox => {
        checkbox.checked = selectedTravelTypes.includes(checkbox.value);
    });

    // Random activities (2-4)
    const selectedActivities = getRandomItems(ACTIVITIES, 2, 4);
    document.querySelectorAll('.activity').forEach(checkbox => {
        checkbox.checked = selectedActivities.includes(checkbox.value);
    });

    // Random avoid activities (0-2)
    const selectedAvoid = getRandomItems(AVOID_ACTIVITIES, 0, 2);
    document.querySelectorAll('.avoid-activity').forEach(checkbox => {
        checkbox.checked = selectedAvoid.includes(checkbox.value);
    });

    // Random checkboxes
    setChecked('prefers-hostels', Math.random() > 0.5);
    setChecked('values-social', Math.random() > 0.4);
    setChecked('city-safety-important', Math.random() > 0.3);
    setChecked('needs-wifi', Math.random() > 0.6);
    setChecked('works-during-trip', Math.random() > 0.7);

    // Random English level
    setVal('english-level', getRandomItem(ENGLISH_LEVELS));

    // Random documents
    setChecked('has-passport', Math.random() > 0.2);
    setChecked('has-us-visa', Math.random() > 0.5);
    setChecked('has-insurance', Math.random() > 0.6);
    setChecked('has-vaccines', Math.random() > 0.4);

    // Random airport
    const airport = getRandomItem(AIRPORTS);
    
    // Random dates
    const startDaysFromNow = getRandomInt(14, 90);
    const startDate = getRandomDate(startDaysFromNow, 0);
    const endDate = getRandomDate(startDaysFromNow + minDays, maxDays - minDays);
    
    // Pick 2-4 random destinations (no duplicates)
    const numDestinations = getRandomInt(2, 4);
    const shuffledDestinations = [...RANDOM_DESTINATIONS].sort(() => 0.5 - Math.random());
    const selectedDestinations = shuffledDestinations.slice(0, numDestinations);

    // Get container fresh
    const container = document.getElementById('destinations-container');
    if (!container) {
        console.error('❌ destinations-container not found');
        return;
    }

    // Clear existing destinations
    container.innerHTML = '';
    destinations = [];
    destinationCounter = 0;

    console.log(`🎲 Adding ${selectedDestinations.length} destinations...`);

    // Add random destinations
    selectedDestinations.forEach((dest, index) => {
        addDestinationForm();
        const card = container.children[index];

        if (!card) {
            console.error(`❌ Card ${index} not found`);
            return;
        }

        console.log(`📍 Filling destination ${index + 1}: ${dest.city}, ${dest.country}`);

        // Fill country (input with datalist)
        const countryInput = card.querySelector('.dest-country-input');
        if (countryInput) {
            countryInput.value = dest.country;
            // Trigger input event to enable city select
            countryInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        // Fill city (select that gets populated after country)
        const citySelect = card.querySelector('.dest-name');
        if (citySelect) {
            // Need to wait a bit for the city options to populate
            setTimeout(() => {
                // First try to find the city in the options
                const options = Array.from(citySelect.options);
                const matchingOption = options.find(opt =>
                    opt.value.toLowerCase() === dest.city.toLowerCase() ||
                    opt.text.toLowerCase().includes(dest.city.toLowerCase())
                );

                if (matchingOption) {
                    citySelect.value = matchingOption.value;
                } else {
                    // If the city isn't in the list, add it as a custom option
                    const option = document.createElement('option');
                    option.value = dest.city;
                    option.text = dest.city;
                    citySelect.add(option);
                    citySelect.value = dest.city;
                }
                citySelect.disabled = false;
            }, 150);
        }

        // Fill other fields with correct class names
        const budgetInput = card.querySelector('.dest-budget');
        const startDateInput = card.querySelector('.dest-start-date');
        const endDateInput = card.querySelector('.dest-end-date');
        const durationInput = card.querySelector('.dest-duration');
        const airportSelect = card.querySelector('.dest-airport');

        if (budgetInput) budgetInput.value = getRandomInt(Math.floor(budget * 0.5), budget);
        if (startDateInput) startDateInput.value = startDate;
        if (endDateInput) endDateInput.value = endDate;
        if (durationInput) durationInput.value = getRandomInt(minDays, maxDays);
        if (airportSelect) airportSelect.value = airport;
    });

    // Show success toast
    showToast(t('quickfill.randomSuccess') || '🎲 ¡Formulario rellenado al azar!', 'success');
}

