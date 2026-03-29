// Mobile bottom navigation bar
(function () {
    const PAGES = [
        { href: 'index.html',              emoji: '✈️', label: 'Vuelos'   },
        { href: 'compare.html',            emoji: '🔍', label: 'Comparar' },
        { href: 'currency-converter.html', emoji: '💱', label: 'Divisas'  },
        { href: 'map.html',                emoji: '🗺️', label: 'Mapa'     },
        { href: 'vplus.html',              emoji: '🎫', label: 'V+'       }
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
            a.innerHTML = `<span class="mbn-emoji">${page.emoji}</span><span class="mbn-label">${page.label}</span>`;
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
