// Currency Converter Logic
const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

let currencyCount = 0;
let selectedCurrencies = [];
let exchangeRates = {};
let lastUpdate = null;

// DOM Elements
const amountInput = document.getElementById('amount');
const currenciesContainer = document.getElementById('currencies-container');
const addCurrencyBtn = document.getElementById('add-currency-btn');
const resultsSection = document.getElementById('results-section');
const resultsContainer = document.getElementById('results-container');
const lastUpdateSpan = document.getElementById('last-update');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize language system
    initLanguage();
    updateConverterTexts();

    // Initialize language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
        languageSelector.addEventListener('change', function() {
            changeLanguage(this.value);
            updateConverterTexts();
        });
    }

    await fetchExchangeRates();

    // Add initial 2 currencies
    addCurrency('USD');
    addCurrency('MXN');

    // Event listeners
    amountInput.addEventListener('input', debounce(calculateConversions, 300));
    addCurrencyBtn.addEventListener('click', () => addCurrency());

    // Initial calculation
    calculateConversions();
});

// Update converter page texts
function updateConverterTexts() {
    // Update header
    const title = document.querySelector('[data-i18n="converter.title"]');
    if (title) title.textContent = t('converter.title');

    const subtitle = document.querySelector('[data-i18n="converter.subtitle"]');
    if (subtitle) subtitle.textContent = t('converter.subtitle');

    const backLink = document.querySelector('[data-i18n="converter.back"]');
    if (backLink) backLink.textContent = `← ${t('converter.back')}`;

    // Update amount label
    const amountLabel = document.querySelector('label[for="amount"]');
    if (amountLabel) amountLabel.textContent = t('converter.amount');

    // Update section titles
    const currenciesTitle = document.querySelector('.converters-section h2');
    if (currenciesTitle) currenciesTitle.textContent = t('converter.currencies');

    const currenciesDesc = document.querySelector('.section-description');
    if (currenciesDesc) currenciesDesc.textContent = t('converter.description');

    const addCurrencyText = document.getElementById('add-currency-btn');
    if (addCurrencyText) addCurrencyText.textContent = `+ ${t('converter.add')}`;

    const resultsTitle = document.querySelector('#results-section h2');
    if (resultsTitle) resultsTitle.textContent = t('converter.results');

    // Update "Moneda" labels in currency items
    document.querySelectorAll('.currency-number').forEach((span, index) => {
        span.textContent = `${t('converter.currency')} ${index + 1}`;
    });

    // Update last update label
    const updateInfoSmall = document.querySelector('.update-info small');
    if (updateInfoSmall && lastUpdate) {
        const userLocale = navigator.language || navigator.userLanguage || 'es-MX';
        const uses12Hour = !new Intl.DateTimeFormat(userLocale, { hour: 'numeric' })
            .format(0).match(/24|00/);

        const formattedDate = lastUpdate.toLocaleString(userLocale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: uses12Hour
        });

        updateInfoSmall.innerHTML = `${t('converter.lastUpdate')} <span id="last-update">${formattedDate}</span>`;
    }
}

// Fetch exchange rates from API
async function fetchExchangeRates() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        exchangeRates = data.rates;
        lastUpdate = new Date(data.time_last_updated * 1000);

        if (lastUpdateSpan) {
            // Detectar locale del dispositivo
            const userLocale = navigator.language || navigator.userLanguage || 'es-MX';
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            // Determinar si usa formato 12h o 24h
            const uses12Hour = !new Intl.DateTimeFormat(userLocale, { hour: 'numeric' })
                .format(0)
                .match(/24|00/);

            lastUpdateSpan.textContent = lastUpdate.toLocaleString(userLocale, {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: uses12Hour
            });

            console.log('🌍 Convertidor - Locale:', userLocale, '| Zona:', timezone);
        }
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        alert('Error al cargar las tasas de cambio. Por favor recarga la página.');
    }
}

// Add currency converter
function addCurrency(defaultCurrency = null) {
    if (currencyCount >= 4) {
        return;
    }

    currencyCount++;

    // Find available currency
    let currency = defaultCurrency;
    if (!currency) {
        currency = POPULAR_CURRENCIES.find(c => !selectedCurrencies.includes(c)) ||
                   Object.keys(CURRENCIES).find(c => !selectedCurrencies.includes(c));
    }

    selectedCurrencies.push(currency);

    const currencyItem = document.createElement('div');
    currencyItem.className = 'currency-item';
    currencyItem.id = `currency-${currencyCount}`;
    currencyItem.dataset.currencyId = currencyCount;

    currencyItem.innerHTML = `
        <div class="currency-header">
            <span class="currency-number">${t('converter.currency')} ${currencyCount}</span>
            ${currencyCount > 2 ? `<button class="remove-currency" onclick="removeCurrency(${currencyCount})">✕</button>` : ''}
        </div>
        <div class="currency-select-wrapper">
            <select class="currency-select" onchange="handleCurrencyChange(${currencyCount}, this.value)">
                ${generateCurrencyOptions(currency)}
            </select>
        </div>
    `;

    currenciesContainer.appendChild(currencyItem);

    // Update button visibility
    updateAddButton();
    calculateConversions();
}

// Remove currency converter
function removeCurrency(id) {
    if (currencyCount <= 2) {
        return;
    }

    const item = document.getElementById(`currency-${id}`);
    if (item) {
        const select = item.querySelector('.currency-select');
        const currency = select.value;

        // Remove from selected currencies
        selectedCurrencies = selectedCurrencies.filter(c => c !== currency);

        item.remove();
        currencyCount--;

        updateAddButton();
        calculateConversions();
    }
}

// Handle currency change
function handleCurrencyChange(id, newCurrency) {
    const item = document.getElementById(`currency-${id}`);
    if (!item) return;

    const select = item.querySelector('.currency-select');
    const oldCurrency = selectedCurrencies.find(c => {
        const option = Array.from(select.options).find(opt => opt.value === c && opt.selected);
        return option;
    });

    // Update selected currencies
    const index = selectedCurrencies.indexOf(oldCurrency);
    if (index !== -1) {
        selectedCurrencies[index] = newCurrency;
    }

    calculateConversions();
}

// Generate currency options HTML
function generateCurrencyOptions(selectedCurrency) {
    return Object.keys(CURRENCIES)
        .sort((a, b) => {
            // Popular currencies first
            const aIndex = POPULAR_CURRENCIES.indexOf(a);
            const bIndex = POPULAR_CURRENCIES.indexOf(b);

            if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
            if (aIndex !== -1) return -1;
            if (bIndex !== -1) return 1;

            return CURRENCIES[a].name.localeCompare(CURRENCIES[b].name);
        })
        .map(code => {
            const currency = CURRENCIES[code];
            const selected = code === selectedCurrency ? 'selected' : '';
            return `<option value="${code}" ${selected}>${currency.flag} ${code} - ${currency.name}</option>`;
        })
        .join('');
}

// Update add button visibility
function updateAddButton() {
    if (currencyCount < 4) {
        addCurrencyBtn.style.display = 'block';
    } else {
        addCurrencyBtn.style.display = 'none';
    }
}

// Calculate conversions
function calculateConversions() {
    const amount = parseFloat(amountInput.value) || 0;

    if (amount <= 0 || selectedCurrencies.length < 2) {
        resultsSection.classList.add('hidden');
        return;
    }

    resultsSection.classList.remove('hidden');
    resultsContainer.innerHTML = '';

    // Get all selected currencies from the DOM
    const activeCurrencies = [];
    document.querySelectorAll('.currency-select').forEach(select => {
        activeCurrencies.push(select.value);
    });

    // Calculate conversions from first currency to others
    const baseCurrency = activeCurrencies[0];
    const baseRate = exchangeRates[baseCurrency];

    activeCurrencies.forEach(targetCurrency => {
        const targetRate = exchangeRates[targetCurrency];
        const convertedAmount = (amount / baseRate) * targetRate;
        const exchangeRate = targetRate / baseRate;

        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        const currency = CURRENCIES[targetCurrency];

        resultItem.innerHTML = `
            <div class="result-currency">
                <span class="currency-flag">${currency.flag}</span>
                <div class="currency-info">
                    <h3>${currency.name}</h3>
                    <span class="currency-code">${targetCurrency}</span>
                </div>
            </div>
            <div class="result-amount">
                <div class="converted-amount">
                    ${currency.symbol}${formatNumber(convertedAmount)}
                </div>
                ${targetCurrency !== baseCurrency ?
                    `<div class="exchange-rate">1 ${baseCurrency} = ${formatNumber(exchangeRate, 4)} ${targetCurrency}</div>`
                    : '<div class="exchange-rate">Moneda base</div>'}
            </div>
        `;

        resultsContainer.appendChild(resultItem);
    });
}

// Format number
function formatNumber(num, decimals = 2) {
    return num.toLocaleString('es-MX', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions available globally
window.removeCurrency = removeCurrency;
window.handleCurrencyChange = handleCurrencyChange;
