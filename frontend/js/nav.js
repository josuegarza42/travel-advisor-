// Mobile bottom navigation bar
(function () {
    const tl = (key, fallback) => (typeof t === 'function' ? t(key) : fallback);
    const PAGES = [
        { href: 'index.html',              emoji: '✈️', label: () => tl('header.flights', 'Vuelos')   },
        { href: 'compare.html',            emoji: '🔍', label: () => tl('nav.compare',    'Comparar') },
        { href: 'currency-converter.html', emoji: '💱', label: () => tl('header.converter','Divisas') },
        { href: 'map.html',                emoji: '🗺️', label: () => tl('nav.map',        'Mapa')     },
        { href: 'vplus.html',              emoji: '🎫', label: () => tl('nav.vplus',       'V+')       }
    ];

    // Determine which page is active from the current path
    function getActivePage() {
        const path = window.location.pathname;
        const file = path.split('/').pop() || 'index.html';
        return PAGES.findIndex(p => p.href === file);
    }

    function buildNav() {
        const nav = document.createElement('nav');
        nav.className = 'mobile-bottom-nav';
        nav.setAttribute('aria-label', 'Navegación principal');

        const activeIdx = getActivePage();

        PAGES.forEach((page, i) => {
            const a = document.createElement('a');
            a.href = page.href;
            a.className = 'mbn-item' + (i === activeIdx ? ' mbn-active' : '');
            a.innerHTML = `<span class="mbn-emoji">${page.emoji}</span><span class="mbn-label">${page.label()}</span>`;
            nav.appendChild(a);
        });

        document.body.appendChild(nav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildNav);
    } else {
        buildNav();
    }
})();
