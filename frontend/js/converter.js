// Currency Converter — bilateral FROM ↔ TO
const RATES_API = 'https://api.exchangerate-api.com/v4/latest/USD';

let exchangeRates = {};
let lastUpdate = null;
let extraCurrencies = []; // codes added to the comparison section

// DOM refs
const fromCurrencySel = document.getElementById('from-currency');
const toCurrencySel   = document.getElementById('to-currency');
const fromAmountInput = document.getElementById('from-amount');
const toResultEl      = document.getElementById('to-result');
const convRateEl      = document.getElementById('conv-rate');
const convUpdateEl    = document.getElementById('conv-update');
const heroRateEl      = document.getElementById('hero-rate-text');
const extraGrid       = document.getElementById('extra-currencies');
const addCurrencyBtn  = document.getElementById('add-currency-btn');
const extraToggle     = document.getElementById('extra-toggle');
const extraChevron    = document.getElementById('extra-chevron');
const extraContainer  = document.getElementById('extra-container');

// ── Init ──────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', async () => {
    try { if (typeof initLanguage === 'function') initLanguage(); } catch (e) {}

    populateSelects();
    fromCurrencySel.value = 'MXN';
    toCurrencySel.value   = 'USD';

    await fetchRates();

    calculate();

    fromAmountInput.addEventListener('input', calculate);
    fromCurrencySel.addEventListener('change', calculate);
    toCurrencySel.addEventListener('change', calculate);

    document.getElementById('swap-btn').addEventListener('click', swapCurrencies);

    extraToggle.addEventListener('click', toggleExtra);
    addCurrencyBtn.addEventListener('click', addExtraCurrency);
});

// ── Populate selects ──────────────────────────────────────

function populateSelects() {
    const opts = generateOptions();
    fromCurrencySel.innerHTML = opts;
    toCurrencySel.innerHTML   = opts;
}

function generateOptions() {
    return Object.keys(CURRENCIES)
        .sort((a, b) => {
            const ai = POPULAR_CURRENCIES.indexOf(a);
            const bi = POPULAR_CURRENCIES.indexOf(b);
            if (ai !== -1 && bi !== -1) return ai - bi;
            if (ai !== -1) return -1;
            if (bi !== -1) return 1;
            return CURRENCIES[a].name.localeCompare(CURRENCIES[b].name);
        })
        .map(code => {
            const c = CURRENCIES[code];
            return `<option value="${code}">${c.flag} ${code} — ${c.name}</option>`;
        })
        .join('');
}

// ── Fetch rates ───────────────────────────────────────────

async function fetchRates() {
    try {
        const res  = await fetch(RATES_API);
        const data = await res.json();
        exchangeRates = data.rates;
        lastUpdate    = new Date(data.time_last_updated * 1000);

        const userLocale = navigator.language || 'es-MX';
        const uses12h = !new Intl.DateTimeFormat(userLocale, { hour: 'numeric' }).format(0).match(/24|00/);
        const dateStr = lastUpdate.toLocaleString(userLocale, {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: 'numeric', minute: '2-digit', hour12: uses12h
        });
        convUpdateEl.textContent = `Tasas actualizadas: ${dateStr}`;
    } catch (err) {
        convUpdateEl.textContent = 'No se pudieron cargar las tasas';
        console.error('Error fetching rates:', err);
    }
}

// ── Core calculation ──────────────────────────────────────

function calculate() {
    const fromCode = fromCurrencySel.value;
    const toCode   = toCurrencySel.value;
    const amount   = parseFloat(fromAmountInput.value);

    if (!fromCode || !toCode || !exchangeRates[fromCode]) return;

    // Convert: amount (fromCode) → toCode
    // All rates are relative to USD
    const result = (amount / exchangeRates[fromCode]) * exchangeRates[toCode];
    const rate   = exchangeRates[toCode] / exchangeRates[fromCode];

    toResultEl.textContent = isNaN(result) ? '—' : fmt(result);

    const rateStr = rate < 0.01
        ? `1 ${fromCode} = ${rate.toFixed(6)} ${toCode}`
        : `1 ${fromCode} = ${fmt(rate, 4)} ${toCode}`;

    convRateEl.textContent = rateStr;

    // Update hero subtitle
    if (heroRateEl && amount && !isNaN(result)) {
        heroRateEl.textContent = `${fmt(amount)} ${fromCode} = ${fmt(result)} ${toCode}`;
    }

    // Refresh extra currencies if visible
    renderExtraCurrencies();
}

// ── Swap ──────────────────────────────────────────────────

function swapCurrencies() {
    const fromCode = fromCurrencySel.value;
    const toCode   = toCurrencySel.value;

    fromCurrencySel.value = toCode;
    toCurrencySel.value   = fromCode;

    calculate();
}

// ── Extra currencies (comparison) ────────────────────────

function toggleExtra() {
    const isOpen = !extraContainer.classList.contains('hidden');
    extraContainer.classList.toggle('hidden', isOpen);
    extraChevron.classList.toggle('open', !isOpen);

    if (!isOpen && extraCurrencies.length === 0) {
        addExtraCurrency();
    } else {
        renderExtraCurrencies();
    }
}

function addExtraCurrency() {
    const used = [fromCurrencySel.value, toCurrencySel.value, ...extraCurrencies];
    const next = POPULAR_CURRENCIES.find(c => !used.includes(c))
              || Object.keys(CURRENCIES).find(c => !used.includes(c));
    if (!next) return;
    extraCurrencies.push(next);
    renderExtraCurrencies();
    updateAddButton();
}

function removeExtraCurrency(code) {
    extraCurrencies = extraCurrencies.filter(c => c !== code);
    renderExtraCurrencies();
    updateAddButton();
}

function renderExtraCurrencies() {
    if (extraContainer.classList.contains('hidden')) return;

    const fromCode = fromCurrencySel.value;
    const amount   = parseFloat(fromAmountInput.value) || 0;

    extraGrid.innerHTML = extraCurrencies.map(code => {
        const c    = CURRENCIES[code];
        if (!c) return '';
        const rate   = exchangeRates[code] / exchangeRates[fromCode];
        const result = amount * rate;
        const rateStr = rate < 0.01
            ? `1 ${fromCode} = ${rate.toFixed(6)} ${code}`
            : `1 ${fromCode} = ${fmt(rate, 4)} ${code}`;

        return `
            <div class="extra-item">
                <div class="extra-item-left">
                    <span class="extra-item-flag">${c.flag}</span>
                    <div class="extra-item-info">
                        <div class="extra-item-code">${code}</div>
                        <div class="extra-item-name">${c.name}</div>
                    </div>
                </div>
                <div class="extra-item-right">
                    <div class="extra-item-amount">${c.symbol}${fmt(result)}</div>
                    <div class="extra-item-rate">${rateStr}</div>
                </div>
                <button class="extra-item-remove" onclick="removeExtraCurrency('${code}')" title="Quitar">✕</button>
            </div>
        `;
    }).join('');
}

function updateAddButton() {
    const used = [fromCurrencySel.value, toCurrencySel.value, ...extraCurrencies];
    const hasMore = Object.keys(CURRENCIES).some(c => !used.includes(c));
    addCurrencyBtn.style.display = hasMore ? '' : 'none';
}

// ── Helpers ───────────────────────────────────────────────

function fmt(num, decimals = 2) {
    if (isNaN(num)) return '—';
    return num.toLocaleString('es-MX', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Expose for inline onclick
window.removeExtraCurrency = removeExtraCurrency;
