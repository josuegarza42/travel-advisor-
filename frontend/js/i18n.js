// Internationalization (i18n) - Translations
const translations = {
    es: {
        // Header
        'app.title': 'TripwiseAI',
        'app.subtitle': 'Deja que la IA te ayude a elegir tu próximo destino',
        'header.flights': 'Vuelos',
        'header.converter': 'Divisas',

        // Mode selector
        'mode.title': 'Modo de análisis',
        'mode.practical.title': 'Modo Práctico',
        'mode.practical.desc': 'Rápido y simple. Solo información esencial.',
        'mode.practical.time': '~15 segundos',
        'mode.complete.title': 'Modo Completo',
        'mode.complete.desc': 'Análisis profundo con hostales, WiFi, y riesgos.',
        'mode.complete.time': '~30-45 segundos',

        // Preferences
        'prefs.title': 'Preferencias del grupo',
        'prefs.travelers': 'Número de viajeros',
        'prefs.maxBudget': 'Presupuesto máximo por persona',
        'prefs.minDays': 'Duración mínima (días)',
        'prefs.maxDays': 'Duración máxima (días)',
        'prefs.advanceDays': 'Días de anticipación para reservar',
        'prefs.priority': 'Prioridad',
        'prefs.priority.price': 'Precio (lo más barato)',
        'prefs.priority.balance': 'Balance (precio/experiencia)',
        'prefs.priority.experience': 'Experiencia (calidad)',
        'prefs.travelTypes': 'Tipos de viaje preferidos (selecciona varios)',
        'prefs.activities': 'Actividades de interés (selecciona varias)',
        'prefs.avoidActivities': 'Actividades a EVITAR',

        // Travel style
        'style.title': 'Estilo de viaje',
        'style.hostels': 'Siempre nos quedamos en hostales',
        'style.social': 'Nos gusta conocer gente nueva',
        'style.safety': 'La seguridad de la ciudad/barrio es muy importante',

        // Remote work
        'work.title': 'Trabajo remoto',
        'work.wifi': 'Requiere WiFi confiable (trabajo remoto)',
        'work.duringTrip': 'Trabajan durante el viaje',
        'work.englishLevel': 'Nivel de inglés del grupo',
        'work.english.none': 'Ninguno',
        'work.english.basic': 'Básico',
        'work.english.intermediate': 'Intermedio',
        'work.english.fluent': 'Fluido',
        'work.currency': 'Moneda preferida / Mejor tasa de cambio',

        // Documents
        'docs.title': 'Documentos y salud',
        'docs.passport': '¿Todos tienen pasaporte vigente?',
        'docs.visa': '¿Tienen visa americana?',
        'docs.insurance': '¿Ya tienen seguro de viaje?',
        'docs.vaccines': '¿Tienen vacunas requeridas?',

        // Destinations
        'dest.title': 'Tus destinos',
        'dest.add': 'Agregar destino',
        'dest.number': 'Destino',
        'dest.country': 'País',
        'dest.city': 'Ciudad',
        'dest.selectCountry': 'Primero selecciona un país',
        'dest.searchCountry': 'Escribe para buscar...',
        'dest.proposedBy': 'Propuesto por',
        'dest.budget': 'Presupuesto',
        'dest.budgetPerPerson': 'persona',
        'dest.startDate': 'Fecha inicio',
        'dest.endDate': 'Fecha fin',
        'dest.duration': 'Duración (días)',
        'dest.airport': 'Aeropuerto de salida',
        'dest.airportSelect': 'Selecciona...',
        'dest.flexibility': 'Flexibilidad de fechas',
        'dest.flex.fixed': 'Fechas fijas',
        'dest.flex.days3': '±3 días',
        'dest.flex.week': '±1 semana',

        // Accommodation
        'accom.title': 'Hospedaje',
        'accom.hostel': 'Hostal (recomendado)',
        'accom.hotelBudget': 'Hotel económico',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': 'Hotel medio',

        // WiFi
        'wifi.title': 'WiFi necesario',
        'wifi.critical': 'CRÍTICO (trabajo remoto)',
        'wifi.important': 'Importante',
        'wifi.nice': 'Deseable',

        // Hostel info
        'hostel.title': 'Info del Hostal',
        'hostel.workspace': 'Tiene espacio para trabajar',
        'hostel.social': 'Buen ambiente social',

        // Safety
        'safety.title': 'Seguridad ciudad/barrio',
        'safety.safe': 'Muy segura',
        'safety.moderate': 'Normal',
        'safety.concern': 'Con precaución',
        'safety.dangerous': 'Peligrosa',

        // Requirements
        'req.title': 'Requisitos',
        'req.insurance': 'Requiere seguro de viaje',
        'req.vaccines': 'Requiere vacunas',
        'req.events': 'Eventos especiales (opcional)',
        'req.eventsPlaceholder': 'Festival, Carnaval, etc.',

        // Travel types
        'travel.beach': 'Playa',
        'travel.city': 'Ciudad',
        'travel.nature': 'Naturaleza',
        'travel.cultural': 'Cultural',
        'travel.adventure': 'Aventura',

        // Activities
        'activity.food': 'Comida',
        'activity.party': 'Fiesta',
        'activity.history': 'Historia',
        'activity.sports': 'Deportes',
        'activity.relax': 'Relajación',
        'activity.shopping': 'Compras',

        // Avoid activities
        'avoid.heights': 'Alturas',
        'avoid.heat': 'Calor extremo',
        'avoid.cold': 'Frío extremo',
        'avoid.crowds': 'Multitudes',

        // Notes
        'notes.label': 'Notas (opcional)',
        'notes.placeholder': 'Info adicional sobre este destino...',

        // Analysis
        'analyze.button': 'Analizar destinos',
        'analyze.loading': 'Claude está analizando...',
        'analyze.loadingFast': 'Claude está analizando rápidamente...',
        'analyze.loadingDetailed': 'Claude está analizando los destinos en detalle...',

        // Results
        'results.title': 'Tu recomendación',
        'results.winner': 'Este es el mejor destino para tu grupo',

        // Footer
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',

        // Currency badge
        'currency.updated': 'Tasas actualizadas',

        // Toast
        'toast.ratesUpdated': 'Tasas actualizadas',

        // Converter
        'converter.title': 'Convertidor de Monedas',
        'converter.subtitle': 'Compara hasta 4 monedas en tiempo real',
        'converter.back': 'Volver',
        'converter.amount': 'Cantidad',
        'converter.currencies': 'Monedas a comparar',
        'converter.description': 'Selecciona entre 2 y 4 monedas para comparar',
        'converter.add': 'Agregar moneda',
        'converter.results': 'Resultados',
        'converter.lastUpdate': 'Tasas actualizadas:',
        'converter.currency': 'Moneda',

        // Quick Fill
        'quickfill.title': 'Relleno Rápido con IA',
        'quickfill.description': 'Describe tu viaje en texto libre y la IA rellenará automáticamente todos los campos',
        'quickfill.placeholder': 'Ejemplo: Somos 4 amigos que queremos ir a Medellín o Cartagena en Colombia del 15 al 22 de marzo. Presupuesto de 20,000 pesos por persona. Nos gusta la fiesta, comida y conocer gente nueva. Salimos desde Ciudad de México...',
        'quickfill.button': '🚀 Auto-rellenar campos',
        'quickfill.loading': 'Analizando tu descripción...',
        'quickfill.emptyError': 'Por favor escribe una descripción de tu viaje',
        'quickfill.success': '¡Campos rellenados exitosamente!',
        'quickfill.error': 'Error al procesar el texto',

        // Flight Search
        'flights.title': '✈️ Buscador de Vuelos',
        'flights.subtitle': 'Encuentra los 5 vuelos más baratos para tu destino',
        'flights.search': 'Buscar Vuelos',
        'flights.origin': 'Origen',
        'flights.destination': 'Destino',
        'flights.departureDate': 'Fecha de salida',
        'flights.returnDate': 'Fecha de regreso (opcional)',
        'flights.passengers': 'Pasajeros',
        'flights.flightType': 'Preferencia de escalas',
        'flights.anyFlight': 'Más barato (con escalas)',
        'flights.directOnly': 'Solo vuelos directos',
        'flights.oneStop': 'Máximo 1 escala',
        'flights.currency': 'Moneda',
        'flights.searchButton': '🔍 Buscar Vuelos',
        'flights.searching': 'Buscando los mejores vuelos...',
        'flights.results': 'Resultados',
        'flights.noResults': 'No se encontraron vuelos',
        'flights.tryDifferent': 'Intenta con fechas diferentes o más flexibilidad',
        'flights.direct': 'Directo',
        'flights.oneStopBadge': '1 escala',
        'flights.stops': 'escalas',
        'flights.cheapest': 'Más barato',
        'flights.stopoverIn': 'Escala en',
        'flights.perPerson': 'por persona',
        'flights.airlines': 'Aerolíneas',
        'flights.book': 'Reservar',
        'flights.viewFullTrip': '🔍 Ver vuelos completos',
        'flights.viewInGoogle': '🔍 Buscar en Google',
        'flights.googleNote': 'Google Flights mostrará este vuelo y opciones similares. Usa los detalles copiados para encontrarlo.',
        'flights.roundTrip': 'Ida y vuelta',
        'flights.returnFlight': 'Vuelo de regreso',
        'flights.viewFullDetails': 'Ver detalles completos en Google Flights',
        'flights.outboundOnly': 'Solo se muestran horarios del vuelo de ida',
        'flights.priceIncludes': 'El precio incluye ida y vuelta',
        'flights.clickToSee': 'Haz clic en "Reservar" para ver horarios y detalles del vuelo de regreso',
        'flights.newSearch': '🔄 Nueva búsqueda',
        'flights.fillRequired': 'Por favor completa todos los campos requeridos',
        'flights.searchError': 'Error al buscar vuelos'
    },

    en: {
        // Header
        'app.title': 'TripwiseAI',
        'app.subtitle': 'Let AI help you choose your next destination',
        'header.flights': 'Flights',
        'header.converter': 'Currency',

        // Mode selector
        'mode.title': 'Analysis mode',
        'mode.practical.title': 'Quick Mode',
        'mode.practical.desc': 'Fast and simple. Essential info only.',
        'mode.practical.time': '~15 seconds',
        'mode.complete.title': 'Complete Mode',
        'mode.complete.desc': 'In-depth analysis with hostels, WiFi, and risks.',
        'mode.complete.time': '~30-45 seconds',

        // Preferences
        'prefs.title': 'Group preferences',
        'prefs.travelers': 'Number of travelers',
        'prefs.maxBudget': 'Maximum budget per person',
        'prefs.minDays': 'Minimum duration (days)',
        'prefs.maxDays': 'Maximum duration (days)',
        'prefs.advanceDays': 'Booking advance days',
        'prefs.priority': 'Priority',
        'prefs.priority.price': 'Price (cheapest)',
        'prefs.priority.balance': 'Balance (price/experience)',
        'prefs.priority.experience': 'Experience (quality)',
        'prefs.travelTypes': 'Preferred travel types (select multiple)',
        'prefs.activities': 'Activities of interest (select multiple)',
        'prefs.avoidActivities': 'Activities to AVOID',

        // Travel style
        'style.title': 'Travel style',
        'style.hostels': 'We always stay in hostels',
        'style.social': 'We like meeting new people',
        'style.safety': 'City/neighborhood safety is very important',

        // Remote work
        'work.title': 'Remote work',
        'work.wifi': 'Requires reliable WiFi (remote work)',
        'work.duringTrip': 'Working during trip',
        'work.englishLevel': "Group's English level",
        'work.english.none': 'None',
        'work.english.basic': 'Basic',
        'work.english.intermediate': 'Intermediate',
        'work.english.fluent': 'Fluent',
        'work.currency': 'Preferred currency / Best exchange rate',

        // Documents
        'docs.title': 'Documents and health',
        'docs.passport': 'Everyone has valid passport?',
        'docs.visa': 'Have US visa?',
        'docs.insurance': 'Already have travel insurance?',
        'docs.vaccines': 'Have required vaccines?',

        // Destinations
        'dest.title': 'Your destinations',
        'dest.add': 'Add destination',
        'dest.number': 'Destination',
        'dest.country': 'Country',
        'dest.city': 'City',
        'dest.selectCountry': 'First select a country',
        'dest.searchCountry': 'Type to search...',
        'dest.proposedBy': 'Proposed by',
        'dest.budget': 'Budget',
        'dest.budgetPerPerson': 'person',
        'dest.startDate': 'Start date',
        'dest.endDate': 'End date',
        'dest.duration': 'Duration (days)',
        'dest.airport': 'Departure airport',
        'dest.airportSelect': 'Select...',
        'dest.flexibility': 'Date flexibility',
        'dest.flex.fixed': 'Fixed dates',
        'dest.flex.days3': '±3 days',
        'dest.flex.week': '±1 week',

        // Accommodation
        'accom.title': 'Accommodation',
        'accom.hostel': 'Hostel (recommended)',
        'accom.hotelBudget': 'Budget hotel',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': 'Mid-range hotel',

        // WiFi
        'wifi.title': 'WiFi needed',
        'wifi.critical': 'CRITICAL (remote work)',
        'wifi.important': 'Important',
        'wifi.nice': 'Nice to have',

        // Hostel info
        'hostel.title': 'Hostel Info',
        'hostel.workspace': 'Has workspace',
        'hostel.social': 'Good social vibe',

        // Safety
        'safety.title': 'City/neighborhood safety',
        'safety.safe': 'Very safe',
        'safety.moderate': 'Moderate',
        'safety.concern': 'Use caution',
        'safety.dangerous': 'Dangerous',

        // Requirements
        'req.title': 'Requirements',
        'req.insurance': 'Requires travel insurance',
        'req.vaccines': 'Requires vaccines',
        'req.events': 'Special events (optional)',
        'req.eventsPlaceholder': 'Festival, Carnival, etc.',

        // Travel types
        'travel.beach': 'Beach',
        'travel.city': 'City',
        'travel.nature': 'Nature',
        'travel.cultural': 'Cultural',
        'travel.adventure': 'Adventure',

        // Activities
        'activity.food': 'Food',
        'activity.party': 'Party',
        'activity.history': 'History',
        'activity.sports': 'Sports',
        'activity.relax': 'Relaxation',
        'activity.shopping': 'Shopping',

        // Avoid activities
        'avoid.heights': 'Heights',
        'avoid.heat': 'Extreme heat',
        'avoid.cold': 'Extreme cold',
        'avoid.crowds': 'Crowds',

        // Notes
        'notes.label': 'Notes (optional)',
        'notes.placeholder': 'Additional info about this destination...',

        // Analysis
        'analyze.button': 'Analyze destinations',
        'analyze.loading': 'Claude is analyzing...',
        'analyze.loadingFast': 'Claude is analyzing quickly...',
        'analyze.loadingDetailed': 'Claude is analyzing destinations in detail...',

        // Results
        'results.title': 'Your recommendation',
        'results.winner': 'This is the best destination for your group',

        // Footer
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',

        // Currency badge
        'currency.updated': 'Exchange rates updated',

        // Toast
        'toast.ratesUpdated': 'Rates updated',

        // Converter
        'converter.title': 'Currency Converter',
        'converter.subtitle': 'Compare up to 4 currencies in real-time',
        'converter.back': 'Back',
        'converter.amount': 'Amount',
        'converter.currencies': 'Currencies to compare',
        'converter.description': 'Select between 2 and 4 currencies to compare',
        'converter.add': 'Add currency',
        'converter.results': 'Results',
        'converter.lastUpdate': 'Rates updated:',
        'converter.currency': 'Currency',

        // Quick Fill
        'quickfill.title': 'AI Quick Fill',
        'quickfill.description': 'Describe your trip in free text and AI will automatically fill all fields',
        'quickfill.placeholder': 'Example: We are 4 friends wanting to go to Medellín or Cartagena in Colombia from March 15 to 22. Budget of 20,000 pesos per person. We like partying, food and meeting new people. Departing from Mexico City...',
        'quickfill.button': '🚀 Auto-fill fields',
        'quickfill.loading': 'Analyzing your description...',
        'quickfill.emptyError': 'Please write a description of your trip',
        'quickfill.success': 'Fields filled successfully!',
        'quickfill.error': 'Error processing text',

        // Flight Search
        'flights.title': '✈️ Flight Search',
        'flights.subtitle': 'Find the 5 cheapest flights to your destination',
        'flights.search': 'Search Flights',
        'flights.origin': 'Origin',
        'flights.destination': 'Destination',
        'flights.departureDate': 'Departure date',
        'flights.returnDate': 'Return date (optional)',
        'flights.passengers': 'Passengers',
        'flights.flightType': 'Layover preference',
        'flights.anyFlight': 'Cheapest (with layovers)',
        'flights.directOnly': 'Direct flights only',
        'flights.oneStop': 'Maximum 1 stop',
        'flights.currency': 'Currency',
        'flights.searchButton': '🔍 Search Flights',
        'flights.searching': 'Searching for the best flights...',
        'flights.results': 'Results',
        'flights.noResults': 'No flights found',
        'flights.tryDifferent': 'Try different dates or more flexibility',
        'flights.direct': 'Direct',
        'flights.oneStopBadge': '1 stop',
        'flights.stops': 'stops',
        'flights.cheapest': 'Cheapest',
        'flights.stopoverIn': 'Stopover in',
        'flights.perPerson': 'per person',
        'flights.airlines': 'Airlines',
        'flights.book': 'Book',
        'flights.viewFullTrip': '🔍 View complete flights',
        'flights.viewInGoogle': '🔍 Search on Google',
        'flights.googleNote': 'Google Flights will show this flight and similar options. Use the copied details to find it.',
        'flights.roundTrip': 'Round trip',
        'flights.returnFlight': 'Return flight',
        'flights.viewFullDetails': 'View full details on Google Flights',
        'flights.outboundOnly': 'Only outbound flight times shown',
        'flights.priceIncludes': 'Price includes round trip',
        'flights.clickToSee': 'Click "Book" to see return flight times and details',
        'flights.newSearch': '🔄 New search',
        'flights.fillRequired': 'Please fill all required fields',
        'flights.searchError': 'Error searching flights'
    },

    pt: {
        // Header
        'app.title': 'TripwiseAI',
        'app.subtitle': 'Deixe a IA ajudar você a escolher seu próximo destino',
        'header.flights': 'Voos',
        'header.converter': 'Divisas',

        // Mode selector
        'mode.title': 'Modo de análise',
        'mode.practical.title': 'Modo Rápido',
        'mode.practical.desc': 'Rápido e simples. Apenas informações essenciais.',
        'mode.practical.time': '~15 segundos',
        'mode.complete.title': 'Modo Completo',
        'mode.complete.desc': 'Análise profunda com albergues, WiFi e riscos.',
        'mode.complete.time': '~30-45 segundos',

        // Preferences
        'prefs.title': 'Preferências do grupo',
        'prefs.travelers': 'Número de viajantes',
        'prefs.maxBudget': 'Orçamento máximo por pessoa',
        'prefs.minDays': 'Duração mínima (dias)',
        'prefs.maxDays': 'Duração máxima (dias)',
        'prefs.advanceDays': 'Dias de antecedência para reservar',
        'prefs.priority': 'Prioridade',
        'prefs.priority.price': 'Preço (mais barato)',
        'prefs.priority.balance': 'Equilíbrio (preço/experiência)',
        'prefs.priority.experience': 'Experiência (qualidade)',
        'prefs.travelTypes': 'Tipos de viagem preferidos (selecione vários)',
        'prefs.activities': 'Atividades de interesse (selecione várias)',
        'prefs.avoidActivities': 'Atividades a EVITAR',

        // Travel style
        'style.title': 'Estilo de viagem',
        'style.hostels': 'Sempre ficamos em albergues',
        'style.social': 'Gostamos de conhecer novas pessoas',
        'style.safety': 'A segurança da cidade/bairro é muito importante',

        // Remote work
        'work.title': 'Trabalho remoto',
        'work.wifi': 'Requer WiFi confiável (trabalho remoto)',
        'work.duringTrip': 'Trabalhando durante a viagem',
        'work.englishLevel': 'Nível de inglês do grupo',
        'work.english.none': 'Nenhum',
        'work.english.basic': 'Básico',
        'work.english.intermediate': 'Intermediário',
        'work.english.fluent': 'Fluente',
        'work.currency': 'Moeda preferida / Melhor taxa de câmbio',

        // Documents
        'docs.title': 'Documentos e saúde',
        'docs.passport': 'Todos têm passaporte válido?',
        'docs.visa': 'Têm visto americano?',
        'docs.insurance': 'Já têm seguro viagem?',
        'docs.vaccines': 'Têm vacinas necessárias?',

        // Destinations
        'dest.title': 'Seus destinos',
        'dest.add': 'Adicionar destino',
        'dest.number': 'Destino',
        'dest.country': 'País',
        'dest.city': 'Cidade',
        'dest.selectCountry': 'Primeiro selecione um país',
        'dest.searchCountry': 'Digite para pesquisar...',
        'dest.proposedBy': 'Proposto por',
        'dest.budget': 'Orçamento',
        'dest.budgetPerPerson': 'pessoa',
        'dest.startDate': 'Data início',
        'dest.endDate': 'Data fim',
        'dest.duration': 'Duração (dias)',
        'dest.airport': 'Aeroporto de partida',
        'dest.airportSelect': 'Selecione...',
        'dest.flexibility': 'Flexibilidade de datas',
        'dest.flex.fixed': 'Datas fixas',
        'dest.flex.days3': '±3 dias',
        'dest.flex.week': '±1 semana',

        // Accommodation
        'accom.title': 'Hospedagem',
        'accom.hostel': 'Albergue (recomendado)',
        'accom.hotelBudget': 'Hotel econômico',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': 'Hotel médio',

        // WiFi
        'wifi.title': 'WiFi necessário',
        'wifi.critical': 'CRÍTICO (trabalho remoto)',
        'wifi.important': 'Importante',
        'wifi.nice': 'Desejável',

        // Hostel info
        'hostel.title': 'Info do Albergue',
        'hostel.workspace': 'Tem espaço para trabalhar',
        'hostel.social': 'Bom ambiente social',

        // Safety
        'safety.title': 'Segurança cidade/bairro',
        'safety.safe': 'Muito segura',
        'safety.moderate': 'Moderada',
        'safety.concern': 'Com precaução',
        'safety.dangerous': 'Perigosa',

        // Requirements
        'req.title': 'Requisitos',
        'req.insurance': 'Requer seguro viagem',
        'req.vaccines': 'Requer vacinas',
        'req.events': 'Eventos especiais (opcional)',
        'req.eventsPlaceholder': 'Festival, Carnaval, etc.',

        // Travel types
        'travel.beach': 'Praia',
        'travel.city': 'Cidade',
        'travel.nature': 'Natureza',
        'travel.cultural': 'Cultural',
        'travel.adventure': 'Aventura',

        // Activities
        'activity.food': 'Comida',
        'activity.party': 'Festa',
        'activity.history': 'História',
        'activity.sports': 'Esportes',
        'activity.relax': 'Relaxamento',
        'activity.shopping': 'Compras',

        // Avoid activities
        'avoid.heights': 'Alturas',
        'avoid.heat': 'Calor extremo',
        'avoid.cold': 'Frio extremo',
        'avoid.crowds': 'Multidões',

        // Notes
        'notes.label': 'Notas (opcional)',
        'notes.placeholder': 'Info adicional sobre este destino...',

        // Analysis
        'analyze.button': 'Analisar destinos',
        'analyze.loading': 'Claude está analisando...',
        'analyze.loadingFast': 'Claude está analisando rapidamente...',
        'analyze.loadingDetailed': 'Claude está analisando os destinos em detalhe...',

        // Results
        'results.title': 'Sua recomendação',
        'results.winner': 'Este é o melhor destino para seu grupo',

        // Footer
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',

        // Currency badge
        'currency.updated': 'Taxas atualizadas',

        // Toast
        'toast.ratesUpdated': 'Taxas atualizadas',

        // Converter
        'converter.title': 'Conversor de Moedas',
        'converter.subtitle': 'Compare até 4 moedas em tempo real',
        'converter.back': 'Voltar',
        'converter.amount': 'Quantidade',
        'converter.currencies': 'Moedas para comparar',
        'converter.description': 'Selecione entre 2 e 4 moedas para comparar',
        'converter.add': 'Adicionar moeda',
        'converter.results': 'Resultados',
        'converter.lastUpdate': 'Taxas atualizadas:',
        'converter.currency': 'Moeda',

        // Quick Fill
        'quickfill.title': 'Preenchimento Rápido com IA',
        'quickfill.description': 'Descreva sua viagem em texto livre e a IA preencherá automaticamente todos os campos',
        'quickfill.placeholder': 'Exemplo: Somos 4 amigos que queremos ir para Medellín ou Cartagena na Colômbia de 15 a 22 de março. Orçamento de 20.000 pesos por pessoa. Gostamos de festa, comida e conhecer pessoas novas. Saindo da Cidade do México...',
        'quickfill.button': '🚀 Auto-preencher campos',
        'quickfill.loading': 'Analisando sua descrição...',
        'quickfill.emptyError': 'Por favor, escreva uma descrição da sua viagem',
        'quickfill.success': 'Campos preenchidos com sucesso!',
        'quickfill.error': 'Erro ao processar o texto',

        // Flight Search
        'flights.title': '✈️ Busca de Voos',
        'flights.subtitle': 'Encontre os 5 voos mais baratos para seu destino',
        'flights.search': 'Buscar Voos',
        'flights.origin': 'Origem',
        'flights.destination': 'Destino',
        'flights.departureDate': 'Data de partida',
        'flights.returnDate': 'Data de retorno (opcional)',
        'flights.passengers': 'Passageiros',
        'flights.flightType': 'Preferência de escalas',
        'flights.anyFlight': 'Mais barato (com escalas)',
        'flights.directOnly': 'Apenas voos diretos',
        'flights.oneStop': 'Máximo 1 escala',
        'flights.currency': 'Moeda',
        'flights.searchButton': '🔍 Buscar Voos',
        'flights.searching': 'Buscando os melhores voos...',
        'flights.results': 'Resultados',
        'flights.noResults': 'Nenhum voo encontrado',
        'flights.tryDifferent': 'Tente datas diferentes ou mais flexibilidade',
        'flights.direct': 'Direto',
        'flights.oneStopBadge': '1 escala',
        'flights.stops': 'escalas',
        'flights.cheapest': 'Mais barato',
        'flights.stopoverIn': 'Escala em',
        'flights.perPerson': 'por pessoa',
        'flights.airlines': 'Companhias aéreas',
        'flights.book': 'Reservar',
        'flights.viewFullTrip': '🔍 Ver voos completos',
        'flights.viewInGoogle': '🔍 Buscar no Google',
        'flights.googleNote': 'Google Flights mostrará este voo e opções similares. Use os detalhes copiados para encontrá-lo.',
        'flights.roundTrip': 'Ida e volta',
        'flights.returnFlight': 'Voo de retorno',
        'flights.viewFullDetails': 'Ver detalhes completos no Google Flights',
        'flights.outboundOnly': 'Apenas horários do voo de ida são mostrados',
        'flights.priceIncludes': 'O preço inclui ida e volta',
        'flights.clickToSee': 'Clique em "Reservar" para ver horários e detalhes do voo de retorno',
        'flights.newSearch': '🔄 Nova busca',
        'flights.fillRequired': 'Por favor preencha todos os campos obrigatórios',
        'flights.searchError': 'Erro ao buscar voos'
    },

    fr: {
        'app.title': 'TripwiseAI',
        'app.subtitle': 'Laissez l\'IA vous aider à choisir votre prochaine destination',
        'header.flights': 'Vols',
        'header.converter': 'Devises',
        'mode.title': 'Mode d\'analyse',
        'mode.practical.title': 'Mode Rapide',
        'mode.practical.desc': 'Rapide et simple. Informations essentielles uniquement.',
        'mode.practical.time': '~15 secondes',
        'mode.complete.title': 'Mode Complet',
        'mode.complete.desc': 'Analyse approfondie avec hébergements, WiFi et risques.',
        'mode.complete.time': '~30-45 secondes',
        'prefs.title': 'Préférences du groupe',
        'prefs.travelers': 'Nombre de voyageurs',
        'prefs.maxBudget': 'Budget maximum par personne',
        'prefs.minDays': 'Durée minimale (jours)',
        'prefs.maxDays': 'Durée maximale (jours)',
        'prefs.advanceDays': 'Jours de réservation à l\'avance',
        'prefs.priority': 'Priorité',
        'prefs.priority.price': 'Prix (le moins cher)',
        'prefs.priority.balance': 'Équilibre (prix/expérience)',
        'prefs.priority.experience': 'Expérience (qualité)',
        'prefs.travelTypes': 'Types de voyage préférés (sélectionnez plusieurs)',
        'prefs.activities': 'Activités d\'intérêt (sélectionnez plusieurs)',
        'prefs.avoidActivities': 'Activités à ÉVITER',
        'style.title': 'Style de voyage',
        'style.hostels': 'Nous logeons toujours en auberges',
        'style.social': 'Nous aimons rencontrer de nouvelles personnes',
        'style.safety': 'La sécurité de la ville/quartier est très importante',
        'work.title': 'Travail à distance',
        'work.wifi': 'Nécessite un WiFi fiable (travail à distance)',
        'work.duringTrip': 'Travail pendant le voyage',
        'work.englishLevel': 'Niveau d\'anglais du groupe',
        'work.english.none': 'Aucun',
        'work.english.basic': 'Basique',
        'work.english.intermediate': 'Intermédiaire',
        'work.english.fluent': 'Courant',
        'work.currency': 'Devise préférée / Meilleur taux de change',
        'docs.title': 'Documents et santé',
        'docs.passport': 'Tout le monde a un passeport valide ?',
        'docs.visa': 'Ont un visa américain ?',
        'docs.insurance': 'Ont déjà une assurance voyage ?',
        'docs.vaccines': 'Ont les vaccins requis ?',
        'dest.title': 'Vos destinations',
        'dest.add': 'Ajouter une destination',
        'dest.number': 'Destination',
        'dest.country': 'Pays',
        'dest.city': 'Ville',
        'dest.selectCountry': 'Sélectionnez d\'abord un pays',
        'dest.searchCountry': 'Tapez pour rechercher...',
        'dest.proposedBy': 'Proposé par',
        'dest.budget': 'Budget',
        'dest.budgetPerPerson': 'personne',
        'dest.startDate': 'Date de début',
        'dest.endDate': 'Date de fin',
        'dest.duration': 'Durée (jours)',
        'dest.airport': 'Aéroport de départ',
        'dest.airportSelect': 'Sélectionner...',
        'dest.flexibility': 'Flexibilité des dates',
        'dest.flex.fixed': 'Dates fixes',
        'dest.flex.days3': '±3 jours',
        'dest.flex.week': '±1 semaine',
        'accom.title': 'Hébergement',
        'accom.hostel': 'Auberge (recommandé)',
        'accom.hotelBudget': 'Hôtel économique',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': 'Hôtel milieu de gamme',
        'wifi.title': 'WiFi nécessaire',
        'wifi.critical': 'CRITIQUE (travail à distance)',
        'wifi.important': 'Important',
        'wifi.nice': 'Souhaitable',
        'hostel.title': 'Info Auberge',
        'hostel.workspace': 'Dispose d\'un espace de travail',
        'hostel.social': 'Bonne ambiance sociale',
        'safety.title': 'Sécurité ville/quartier',
        'safety.safe': 'Très sûre',
        'safety.moderate': 'Normale',
        'safety.concern': 'Avec précaution',
        'safety.dangerous': 'Dangereuse',
        'req.title': 'Exigences',
        'req.insurance': 'Assurance voyage requise',
        'req.vaccines': 'Vaccins requis',
        'req.events': 'Événements spéciaux (optionnel)',
        'req.eventsPlaceholder': 'Festival, Carnaval, etc.',
        'travel.beach': 'Plage',
        'travel.city': 'Ville',
        'travel.nature': 'Nature',
        'travel.cultural': 'Culturel',
        'travel.adventure': 'Aventure',
        'activity.food': 'Gastronomie',
        'activity.party': 'Fête',
        'activity.history': 'Histoire',
        'activity.sports': 'Sports',
        'activity.relax': 'Détente',
        'activity.shopping': 'Shopping',
        'avoid.heights': 'Hauteurs',
        'avoid.heat': 'Chaleur extrême',
        'avoid.cold': 'Froid extrême',
        'avoid.crowds': 'Foules',
        'notes.label': 'Notes (optionnel)',
        'notes.placeholder': 'Info supplémentaire sur cette destination...',
        'analyze.button': 'Analyser les destinations',
        'analyze.loading': 'Claude analyse...',
        'analyze.loadingFast': 'Claude analyse rapidement...',
        'analyze.loadingDetailed': 'Claude analyse les destinations en détail...',
        'results.title': 'Votre recommandation',
        'results.winner': 'C\'est la meilleure destination pour votre groupe',
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',
        'currency.updated': 'Taux mis à jour',
        'toast.ratesUpdated': 'Taux mis à jour',
        'converter.title': 'Convertisseur de devises',
        'converter.subtitle': 'Comparez jusqu\'à 4 devises en temps réel',
        'converter.back': 'Retour',
        'converter.amount': 'Montant',
        'converter.currencies': 'Devises à comparer',
        'converter.description': 'Sélectionnez entre 2 et 4 devises',
        'converter.add': 'Ajouter une devise',
        'converter.results': 'Résultats',
        'converter.lastUpdate': 'Taux mis à jour :',
        'converter.currency': 'Devise',
        'quickfill.title': 'Remplissage Rapide IA',
        'quickfill.description': 'Décrivez votre voyage en texte libre et l\'IA remplira tous les champs',
        'quickfill.placeholder': 'Exemple : Nous sommes 4 amis voulant aller à Paris ou Rome du 15 au 22 mars. Budget 1500€ par personne. On aime la gastronomie et la culture...',
        'quickfill.button': '🚀 Remplissage automatique',
        'quickfill.loading': 'Analyse de votre description...',
        'quickfill.emptyError': 'Veuillez écrire une description de votre voyage',
        'quickfill.success': 'Champs remplis avec succès !',
        'quickfill.error': 'Erreur lors du traitement du texte',
        'flights.title': '✈️ Recherche de Vols',
        'flights.subtitle': 'Trouvez les 5 vols les moins chers',
        'flights.search': 'Rechercher',
        'flights.origin': 'Origine',
        'flights.destination': 'Destination',
        'flights.departureDate': 'Date de départ',
        'flights.returnDate': 'Date de retour (optionnel)',
        'flights.passengers': 'Passagers',
        'flights.flightType': 'Préférence d\'escales',
        'flights.anyFlight': 'Le moins cher (avec escales)',
        'flights.directOnly': 'Vols directs uniquement',
        'flights.oneStop': 'Maximum 1 escale',
        'flights.currency': 'Devise',
        'flights.searchButton': '🔍 Rechercher des Vols',
        'flights.searching': 'Recherche des meilleurs vols...',
        'flights.results': 'Résultats',
        'flights.noResults': 'Aucun vol trouvé',
        'flights.tryDifferent': 'Essayez d\'autres dates ou plus de flexibilité',
        'flights.direct': 'Direct',
        'flights.oneStopBadge': '1 escale',
        'flights.stops': 'escales',
        'flights.cheapest': 'Le moins cher',
        'flights.stopoverIn': 'Escale à',
        'flights.perPerson': 'par personne',
        'flights.airlines': 'Compagnies aériennes',
        'flights.book': 'Réserver',
        'flights.viewFullTrip': '🔍 Voir les vols complets',
        'flights.viewInGoogle': '🔍 Rechercher sur Google',
        'flights.googleNote': 'Google Flights affichera ce vol et des options similaires.',
        'flights.roundTrip': 'Aller-retour',
        'flights.returnFlight': 'Vol de retour',
        'flights.viewFullDetails': 'Voir les détails sur Google Flights',
        'flights.outboundOnly': 'Seuls les horaires du vol aller sont affichés',
        'flights.priceIncludes': 'Le prix inclut l\'aller-retour',
        'flights.clickToSee': 'Cliquez sur "Réserver" pour voir les détails du vol retour',
        'flights.newSearch': '🔄 Nouvelle recherche',
        'flights.fillRequired': 'Veuillez remplir tous les champs obligatoires',
        'flights.searchError': 'Erreur lors de la recherche de vols'
    },

    de: {
        'app.title': 'TripwiseAI',
        'app.subtitle': 'Lass die KI dir helfen, dein nächstes Reiseziel zu wählen',
        'header.flights': 'Flüge',
        'header.converter': 'Währungen',
        'mode.title': 'Analysemodus',
        'mode.practical.title': 'Schnellmodus',
        'mode.practical.desc': 'Schnell und einfach. Nur wesentliche Infos.',
        'mode.practical.time': '~15 Sekunden',
        'mode.complete.title': 'Vollständiger Modus',
        'mode.complete.desc': 'Tiefenanalyse mit Hostels, WLAN und Risiken.',
        'mode.complete.time': '~30-45 Sekunden',
        'prefs.title': 'Gruppeneinstellungen',
        'prefs.travelers': 'Anzahl der Reisenden',
        'prefs.maxBudget': 'Maximales Budget pro Person',
        'prefs.minDays': 'Mindestdauer (Tage)',
        'prefs.maxDays': 'Maximale Dauer (Tage)',
        'prefs.advanceDays': 'Buchungsvorlaufzeit (Tage)',
        'prefs.priority': 'Priorität',
        'prefs.priority.price': 'Preis (günstigste)',
        'prefs.priority.balance': 'Balance (Preis/Erlebnis)',
        'prefs.priority.experience': 'Erlebnis (Qualität)',
        'prefs.travelTypes': 'Bevorzugte Reisearten (mehrere auswählen)',
        'prefs.activities': 'Interessante Aktivitäten (mehrere auswählen)',
        'prefs.avoidActivities': 'Aktivitäten VERMEIDEN',
        'style.title': 'Reisestil',
        'style.hostels': 'Wir übernachten immer in Hostels',
        'style.social': 'Wir treffen gerne neue Leute',
        'style.safety': 'Die Sicherheit der Stadt/des Viertels ist sehr wichtig',
        'work.title': 'Fernarbeit',
        'work.wifi': 'Zuverlässiges WLAN erforderlich (Fernarbeit)',
        'work.duringTrip': 'Arbeiten während der Reise',
        'work.englishLevel': 'Englischkenntnisse der Gruppe',
        'work.english.none': 'Keine',
        'work.english.basic': 'Grundkenntnisse',
        'work.english.intermediate': 'Mittelstufe',
        'work.english.fluent': 'Fließend',
        'work.currency': 'Bevorzugte Währung / Bester Wechselkurs',
        'docs.title': 'Dokumente und Gesundheit',
        'docs.passport': 'Alle haben gültigen Reisepass?',
        'docs.visa': 'Haben US-Visum?',
        'docs.insurance': 'Haben bereits Reiseversicherung?',
        'docs.vaccines': 'Haben erforderliche Impfungen?',
        'dest.title': 'Ihre Reiseziele',
        'dest.add': 'Reiseziel hinzufügen',
        'dest.number': 'Reiseziel',
        'dest.country': 'Land',
        'dest.city': 'Stadt',
        'dest.selectCountry': 'Erst Land auswählen',
        'dest.searchCountry': 'Tippen zum Suchen...',
        'dest.proposedBy': 'Vorgeschlagen von',
        'dest.budget': 'Budget',
        'dest.budgetPerPerson': 'Person',
        'dest.startDate': 'Startdatum',
        'dest.endDate': 'Enddatum',
        'dest.duration': 'Dauer (Tage)',
        'dest.airport': 'Abflughafen',
        'dest.airportSelect': 'Auswählen...',
        'dest.flexibility': 'Datumsflexibilität',
        'dest.flex.fixed': 'Feste Daten',
        'dest.flex.days3': '±3 Tage',
        'dest.flex.week': '±1 Woche',
        'accom.title': 'Unterkunft',
        'accom.hostel': 'Hostel (empfohlen)',
        'accom.hotelBudget': 'Günstiges Hotel',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': 'Mittelklassehotel',
        'wifi.title': 'WLAN benötigt',
        'wifi.critical': 'KRITISCH (Fernarbeit)',
        'wifi.important': 'Wichtig',
        'wifi.nice': 'Wünschenswert',
        'hostel.title': 'Hostel Info',
        'hostel.workspace': 'Hat Arbeitsbereich',
        'hostel.social': 'Gute soziale Atmosphäre',
        'safety.title': 'Sicherheit Stadt/Viertel',
        'safety.safe': 'Sehr sicher',
        'safety.moderate': 'Normal',
        'safety.concern': 'Mit Vorsicht',
        'safety.dangerous': 'Gefährlich',
        'req.title': 'Anforderungen',
        'req.insurance': 'Reiseversicherung erforderlich',
        'req.vaccines': 'Impfungen erforderlich',
        'req.events': 'Besondere Veranstaltungen (optional)',
        'req.eventsPlaceholder': 'Festival, Karneval, etc.',
        'travel.beach': 'Strand',
        'travel.city': 'Stadt',
        'travel.nature': 'Natur',
        'travel.cultural': 'Kulturell',
        'travel.adventure': 'Abenteuer',
        'activity.food': 'Essen',
        'activity.party': 'Party',
        'activity.history': 'Geschichte',
        'activity.sports': 'Sport',
        'activity.relax': 'Entspannung',
        'activity.shopping': 'Einkaufen',
        'avoid.heights': 'Höhen',
        'avoid.heat': 'Extreme Hitze',
        'avoid.cold': 'Extreme Kälte',
        'avoid.crowds': 'Menschenmassen',
        'notes.label': 'Notizen (optional)',
        'notes.placeholder': 'Zusätzliche Info zu diesem Reiseziel...',
        'analyze.button': 'Reiseziele analysieren',
        'analyze.loading': 'Claude analysiert...',
        'analyze.loadingFast': 'Claude analysiert schnell...',
        'analyze.loadingDetailed': 'Claude analysiert die Reiseziele im Detail...',
        'results.title': 'Ihre Empfehlung',
        'results.winner': 'Das ist das beste Reiseziel für Ihre Gruppe',
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',
        'currency.updated': 'Kurse aktualisiert',
        'toast.ratesUpdated': 'Kurse aktualisiert',
        'converter.title': 'Währungsrechner',
        'converter.subtitle': 'Bis zu 4 Währungen in Echtzeit vergleichen',
        'converter.back': 'Zurück',
        'converter.amount': 'Betrag',
        'converter.currencies': 'Währungen zum Vergleichen',
        'converter.description': 'Wählen Sie zwischen 2 und 4 Währungen',
        'converter.add': 'Währung hinzufügen',
        'converter.results': 'Ergebnisse',
        'converter.lastUpdate': 'Kurse aktualisiert:',
        'converter.currency': 'Währung',
        'quickfill.title': 'KI-Schnellausfüllung',
        'quickfill.description': 'Beschreiben Sie Ihre Reise und die KI füllt alle Felder automatisch aus',
        'quickfill.placeholder': 'Beispiel: Wir sind 4 Freunde und wollen nach Paris oder Rom vom 15. bis 22. März. Budget 1500€ pro Person. Wir mögen Essen und Kultur...',
        'quickfill.button': '🚀 Felder automatisch ausfüllen',
        'quickfill.loading': 'Beschreibung wird analysiert...',
        'quickfill.emptyError': 'Bitte eine Reisebeschreibung eingeben',
        'quickfill.success': 'Felder erfolgreich ausgefüllt!',
        'quickfill.error': 'Fehler beim Verarbeiten des Textes',
        'flights.title': '✈️ Flugsuche',
        'flights.subtitle': 'Finden Sie die 5 günstigsten Flüge',
        'flights.search': 'Suchen',
        'flights.origin': 'Abflug',
        'flights.destination': 'Ziel',
        'flights.departureDate': 'Abflugdatum',
        'flights.returnDate': 'Rückflugdatum (optional)',
        'flights.passengers': 'Passagiere',
        'flights.flightType': 'Stopover-Präferenz',
        'flights.anyFlight': 'Günstigste (mit Stopover)',
        'flights.directOnly': 'Nur Direktflüge',
        'flights.oneStop': 'Maximal 1 Zwischenstopp',
        'flights.currency': 'Währung',
        'flights.searchButton': '🔍 Flüge suchen',
        'flights.searching': 'Suche nach den besten Flügen...',
        'flights.results': 'Ergebnisse',
        'flights.noResults': 'Keine Flüge gefunden',
        'flights.tryDifferent': 'Versuchen Sie andere Daten oder mehr Flexibilität',
        'flights.direct': 'Direkt',
        'flights.oneStopBadge': '1 Stopp',
        'flights.stops': 'Stopps',
        'flights.cheapest': 'Günstigste',
        'flights.stopoverIn': 'Zwischenstopp in',
        'flights.perPerson': 'pro Person',
        'flights.airlines': 'Fluggesellschaften',
        'flights.book': 'Buchen',
        'flights.viewFullTrip': '🔍 Vollständige Flüge ansehen',
        'flights.viewInGoogle': '🔍 Bei Google suchen',
        'flights.googleNote': 'Google Flights zeigt diesen Flug und ähnliche Optionen.',
        'flights.roundTrip': 'Hin und zurück',
        'flights.returnFlight': 'Rückflug',
        'flights.viewFullDetails': 'Vollständige Details bei Google Flights',
        'flights.outboundOnly': 'Nur Hinflugzeiten werden angezeigt',
        'flights.priceIncludes': 'Preis inklusive Hin- und Rückflug',
        'flights.clickToSee': 'Klicken Sie auf "Buchen", um Rückflugdetails zu sehen',
        'flights.newSearch': '🔄 Neue Suche',
        'flights.fillRequired': 'Bitte alle Pflichtfelder ausfüllen',
        'flights.searchError': 'Fehler bei der Flugsuche'
    },

    zh: {
        'app.title': 'TripwiseAI',
        'app.subtitle': '让AI帮你选择下一个旅行目的地',
        'header.flights': '机票',
        'header.converter': '货币',
        'mode.title': '分析模式',
        'mode.practical.title': '快速模式',
        'mode.practical.desc': '快速简单，仅显示基本信息。',
        'mode.practical.time': '约15秒',
        'mode.complete.title': '完整模式',
        'mode.complete.desc': '包含住宿、WiFi和风险的深度分析。',
        'mode.complete.time': '约30-45秒',
        'prefs.title': '团体偏好',
        'prefs.travelers': '旅行人数',
        'prefs.maxBudget': '每人最高预算',
        'prefs.minDays': '最短时长（天）',
        'prefs.maxDays': '最长时长（天）',
        'prefs.advanceDays': '提前预订天数',
        'prefs.priority': '优先级',
        'prefs.priority.price': '价格（最便宜）',
        'prefs.priority.balance': '平衡（价格/体验）',
        'prefs.priority.experience': '体验（质量）',
        'prefs.travelTypes': '偏好旅行类型（可多选）',
        'prefs.activities': '感兴趣的活动（可多选）',
        'prefs.avoidActivities': '要避免的活动',
        'style.title': '旅行风格',
        'style.hostels': '我们总是住青旅',
        'style.social': '我们喜欢结交新朋友',
        'style.safety': '城市/社区安全非常重要',
        'work.title': '远程办公',
        'work.wifi': '需要可靠WiFi（远程办公）',
        'work.duringTrip': '旅途中工作',
        'work.englishLevel': '团队英语水平',
        'work.english.none': '无',
        'work.english.basic': '基础',
        'work.english.intermediate': '中级',
        'work.english.fluent': '流利',
        'work.currency': '首选货币/最佳汇率',
        'docs.title': '证件与健康',
        'docs.passport': '所有人都有有效护照？',
        'docs.visa': '有美国签证？',
        'docs.insurance': '已有旅行保险？',
        'docs.vaccines': '已接种所需疫苗？',
        'dest.title': '你的目的地',
        'dest.add': '添加目的地',
        'dest.number': '目的地',
        'dest.country': '国家',
        'dest.city': '城市',
        'dest.selectCountry': '先选择国家',
        'dest.searchCountry': '输入搜索...',
        'dest.proposedBy': '由…提议',
        'dest.budget': '预算',
        'dest.budgetPerPerson': '每人',
        'dest.startDate': '开始日期',
        'dest.endDate': '结束日期',
        'dest.duration': '时长（天）',
        'dest.airport': '出发机场',
        'dest.airportSelect': '请选择...',
        'dest.flexibility': '日期灵活性',
        'dest.flex.fixed': '固定日期',
        'dest.flex.days3': '±3天',
        'dest.flex.week': '±1周',
        'accom.title': '住宿',
        'accom.hostel': '青旅（推荐）',
        'accom.hotelBudget': '经济型酒店',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': '中档酒店',
        'wifi.title': '需要WiFi',
        'wifi.critical': '关键（远程办公）',
        'wifi.important': '重要',
        'wifi.nice': '较好',
        'hostel.title': '青旅信息',
        'hostel.workspace': '有工作区域',
        'hostel.social': '良好社交氛围',
        'safety.title': '城市/社区安全',
        'safety.safe': '非常安全',
        'safety.moderate': '一般',
        'safety.concern': '需注意',
        'safety.dangerous': '危险',
        'req.title': '要求',
        'req.insurance': '需要旅行保险',
        'req.vaccines': '需要疫苗',
        'req.events': '特殊活动（可选）',
        'req.eventsPlaceholder': '节日、嘉年华等',
        'travel.beach': '海滩',
        'travel.city': '城市',
        'travel.nature': '自然',
        'travel.cultural': '文化',
        'travel.adventure': '探险',
        'activity.food': '美食',
        'activity.party': '派对',
        'activity.history': '历史',
        'activity.sports': '运动',
        'activity.relax': '休闲',
        'activity.shopping': '购物',
        'avoid.heights': '高处',
        'avoid.heat': '极端高温',
        'avoid.cold': '极端寒冷',
        'avoid.crowds': '人群',
        'notes.label': '备注（可选）',
        'notes.placeholder': '关于此目的地的其他信息...',
        'analyze.button': '分析目的地',
        'analyze.loading': 'Claude正在分析...',
        'analyze.loadingFast': 'Claude正在快速分析...',
        'analyze.loadingDetailed': 'Claude正在详细分析目的地...',
        'results.title': '你的推荐',
        'results.winner': '这是适合你团队的最佳目的地',
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',
        'currency.updated': '汇率已更新',
        'toast.ratesUpdated': '汇率已更新',
        'converter.title': '货币换算',
        'converter.subtitle': '实时比较最多4种货币',
        'converter.back': '返回',
        'converter.amount': '金额',
        'converter.currencies': '要比较的货币',
        'converter.description': '选择2到4种货币进行比较',
        'converter.add': '添加货币',
        'converter.results': '结果',
        'converter.lastUpdate': '汇率更新时间：',
        'converter.currency': '货币',
        'quickfill.title': 'AI智能填写',
        'quickfill.description': '用自由文字描述你的旅行，AI将自动填写所有字段',
        'quickfill.placeholder': '示例：我们是4个朋友，想在3月15日至22日去巴黎或东京。每人预算1500美元。我们喜欢美食和文化...',
        'quickfill.button': '🚀 自动填写',
        'quickfill.loading': '正在分析你的描述...',
        'quickfill.emptyError': '请写下你的旅行描述',
        'quickfill.success': '字段填写成功！',
        'quickfill.error': '处理文本时出错',
        'flights.title': '✈️ 机票搜索',
        'flights.subtitle': '找到最便宜的5个航班',
        'flights.search': '搜索',
        'flights.origin': '出发地',
        'flights.destination': '目的地',
        'flights.departureDate': '出发日期',
        'flights.returnDate': '返回日期（可选）',
        'flights.passengers': '乘客',
        'flights.flightType': '中转偏好',
        'flights.anyFlight': '最便宜（含中转）',
        'flights.directOnly': '仅直飞',
        'flights.oneStop': '最多1次中转',
        'flights.currency': '货币',
        'flights.searchButton': '🔍 搜索机票',
        'flights.searching': '正在搜索最佳航班...',
        'flights.results': '结果',
        'flights.noResults': '未找到航班',
        'flights.tryDifferent': '尝试不同日期或更多灵活性',
        'flights.direct': '直飞',
        'flights.oneStopBadge': '1次中转',
        'flights.stops': '次中转',
        'flights.cheapest': '最便宜',
        'flights.stopoverIn': '中转地',
        'flights.perPerson': '每人',
        'flights.airlines': '航空公司',
        'flights.book': '预订',
        'flights.viewFullTrip': '🔍 查看完整行程',
        'flights.viewInGoogle': '🔍 在Google搜索',
        'flights.googleNote': 'Google Flights将显示此航班及类似选项。',
        'flights.roundTrip': '往返',
        'flights.returnFlight': '返程航班',
        'flights.viewFullDetails': '在Google Flights查看完整详情',
        'flights.outboundOnly': '仅显示去程航班时间',
        'flights.priceIncludes': '价格含往返',
        'flights.clickToSee': '点击"预订"查看返程详情',
        'flights.newSearch': '🔄 新搜索',
        'flights.fillRequired': '请填写所有必填项',
        'flights.searchError': '搜索航班时出错'
    },

    ja: {
        'app.title': 'TripwiseAI',
        'app.subtitle': 'AIがあなたの次の旅行先選びをサポートします',
        'header.flights': 'フライト',
        'header.converter': '通貨',
        'mode.title': '分析モード',
        'mode.practical.title': 'クイックモード',
        'mode.practical.desc': '迅速でシンプル。必須情報のみ。',
        'mode.practical.time': '約15秒',
        'mode.complete.title': '完全モード',
        'mode.complete.desc': 'ホステル、WiFi、リスクを含む詳細分析。',
        'mode.complete.time': '約30〜45秒',
        'prefs.title': 'グループの設定',
        'prefs.travelers': '旅行者数',
        'prefs.maxBudget': '1人あたりの最大予算',
        'prefs.minDays': '最短日数',
        'prefs.maxDays': '最長日数',
        'prefs.advanceDays': '予約の事前日数',
        'prefs.priority': '優先事項',
        'prefs.priority.price': '価格（最安値）',
        'prefs.priority.balance': 'バランス（価格/体験）',
        'prefs.priority.experience': '体験（品質）',
        'prefs.travelTypes': '好みの旅行タイプ（複数選択可）',
        'prefs.activities': '興味のある活動（複数選択可）',
        'prefs.avoidActivities': '避けたい活動',
        'style.title': '旅行スタイル',
        'style.hostels': 'いつもホステルに泊まる',
        'style.social': '新しい人と出会うのが好き',
        'style.safety': '街/地区の安全は非常に重要',
        'work.title': 'リモートワーク',
        'work.wifi': '信頼できるWiFiが必要（リモートワーク）',
        'work.duringTrip': '旅行中も仕事をする',
        'work.englishLevel': 'グループの英語レベル',
        'work.english.none': 'なし',
        'work.english.basic': '基礎',
        'work.english.intermediate': '中級',
        'work.english.fluent': '流暢',
        'work.currency': '希望通貨/最良為替レート',
        'docs.title': '書類と健康',
        'docs.passport': '全員が有効なパスポートを持っていますか？',
        'docs.visa': '米国ビザを持っていますか？',
        'docs.insurance': 'すでに旅行保険に加入していますか？',
        'docs.vaccines': '必要なワクチンを接種していますか？',
        'dest.title': '目的地',
        'dest.add': '目的地を追加',
        'dest.number': '目的地',
        'dest.country': '国',
        'dest.city': '都市',
        'dest.selectCountry': '先に国を選択してください',
        'dest.searchCountry': '入力して検索...',
        'dest.proposedBy': '提案者',
        'dest.budget': '予算',
        'dest.budgetPerPerson': '1人あたり',
        'dest.startDate': '開始日',
        'dest.endDate': '終了日',
        'dest.duration': '期間（日）',
        'dest.airport': '出発空港',
        'dest.airportSelect': '選択...',
        'dest.flexibility': '日程の柔軟性',
        'dest.flex.fixed': '固定日程',
        'dest.flex.days3': '±3日',
        'dest.flex.week': '±1週間',
        'accom.title': '宿泊',
        'accom.hostel': 'ホステル（推奨）',
        'accom.hotelBudget': 'リーズナブルなホテル',
        'accom.airbnb': 'Airbnb',
        'accom.hotelMid': 'ミッドレンジホテル',
        'wifi.title': 'WiFiが必要',
        'wifi.critical': '必須（リモートワーク）',
        'wifi.important': '重要',
        'wifi.nice': 'あると良い',
        'hostel.title': 'ホステル情報',
        'hostel.workspace': 'ワークスペースあり',
        'hostel.social': '良い社交雰囲気',
        'safety.title': '街/地区の安全性',
        'safety.safe': '非常に安全',
        'safety.moderate': '普通',
        'safety.concern': '注意が必要',
        'safety.dangerous': '危険',
        'req.title': '要件',
        'req.insurance': '旅行保険が必要',
        'req.vaccines': 'ワクチンが必要',
        'req.events': '特別なイベント（任意）',
        'req.eventsPlaceholder': 'フェスティバル、カーニバルなど',
        'travel.beach': 'ビーチ',
        'travel.city': '都市',
        'travel.nature': '自然',
        'travel.cultural': '文化',
        'travel.adventure': 'アドベンチャー',
        'activity.food': 'グルメ',
        'activity.party': 'パーティー',
        'activity.history': '歴史',
        'activity.sports': 'スポーツ',
        'activity.relax': 'リラックス',
        'activity.shopping': 'ショッピング',
        'avoid.heights': '高所',
        'avoid.heat': '極端な暑さ',
        'avoid.cold': '極端な寒さ',
        'avoid.crowds': '人混み',
        'notes.label': 'メモ（任意）',
        'notes.placeholder': 'この目的地に関する追加情報...',
        'analyze.button': '目的地を分析',
        'analyze.loading': 'Claudeが分析中...',
        'analyze.loadingFast': 'Claudeが素早く分析中...',
        'analyze.loadingDetailed': 'Claudeが目的地を詳細に分析中...',
        'results.title': 'あなたへのおすすめ',
        'results.winner': 'これがグループに最適な目的地です',
        'footer.powered': 'Powered by Claude AI | TripwiseAI v1.0',
        'currency.updated': '為替レート更新済み',
        'toast.ratesUpdated': 'レート更新済み',
        'converter.title': '通貨換算',
        'converter.subtitle': '最大4通貨をリアルタイムで比較',
        'converter.back': '戻る',
        'converter.amount': '金額',
        'converter.currencies': '比較する通貨',
        'converter.description': '2〜4通貨を選択して比較',
        'converter.add': '通貨を追加',
        'converter.results': '結果',
        'converter.lastUpdate': 'レート更新時刻：',
        'converter.currency': '通貨',
        'quickfill.title': 'AI自動入力',
        'quickfill.description': '旅行を自由に説明すると、AIが全フィールドを自動入力します',
        'quickfill.placeholder': '例：3月15日から22日にパリか東京に行きたい4人組。1人当たり予算15万円。グルメと文化が好き...',
        'quickfill.button': '🚀 フィールドを自動入力',
        'quickfill.loading': '説明を分析中...',
        'quickfill.emptyError': '旅行の説明を入力してください',
        'quickfill.success': 'フィールドの入力が完了しました！',
        'quickfill.error': 'テキスト処理中にエラーが発生しました',
        'flights.title': '✈️ フライト検索',
        'flights.subtitle': '最安値の5便を見つけましょう',
        'flights.search': '検索',
        'flights.origin': '出発地',
        'flights.destination': '目的地',
        'flights.departureDate': '出発日',
        'flights.returnDate': '帰国日（任意）',
        'flights.passengers': '乗客数',
        'flights.flightType': '乗り継ぎ設定',
        'flights.anyFlight': '最安値（乗り継ぎあり）',
        'flights.directOnly': '直行便のみ',
        'flights.oneStop': '最大1回乗り継ぎ',
        'flights.currency': '通貨',
        'flights.searchButton': '🔍 フライトを検索',
        'flights.searching': '最適なフライトを検索中...',
        'flights.results': '検索結果',
        'flights.noResults': 'フライトが見つかりませんでした',
        'flights.tryDifferent': '別の日程や条件でお試しください',
        'flights.direct': '直行便',
        'flights.oneStopBadge': '1回乗り継ぎ',
        'flights.stops': '回乗り継ぎ',
        'flights.cheapest': '最安値',
        'flights.stopoverIn': '乗り継ぎ地',
        'flights.perPerson': '1人あたり',
        'flights.airlines': '航空会社',
        'flights.book': '予約する',
        'flights.viewFullTrip': '🔍 全フライトを表示',
        'flights.viewInGoogle': '🔍 Googleで検索',
        'flights.googleNote': 'Google Flightsにこのフライトと類似の選択肢が表示されます。',
        'flights.roundTrip': '往復',
        'flights.returnFlight': '帰りのフライト',
        'flights.viewFullDetails': 'Google Flightsで詳細を確認',
        'flights.outboundOnly': '往路フライトの時刻のみ表示',
        'flights.priceIncludes': '価格には往復が含まれています',
        'flights.clickToSee': '「予約する」をクリックして帰りのフライト詳細を確認',
        'flights.newSearch': '🔄 新しい検索',
        'flights.fillRequired': '必須項目をすべて入力してください',
        'flights.searchError': 'フライト検索中にエラーが発生しました'
    }
};

// Current language
let currentLanguage = 'es';

// Get translation
function t(key) {
    return translations[currentLanguage]?.[key] || translations['es'][key] || key;
}

// Change language
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, using Spanish`);
        lang = 'es';
    }

    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    updateAllTexts();
    console.log(`🌐 Language changed to: ${lang}`);
}

// Get saved language or detect from browser
function getInitialLanguage() {
    // Check localStorage first
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && translations[saved]) {
        return saved;
    }

    // Detect from browser
    const browserLang = (navigator.language || navigator.userLanguage || 'es').split('-')[0];
    return translations[browserLang] ? browserLang : 'es';
}

// Initialize language
function initLanguage() {
    currentLanguage = getInitialLanguage();
    document.documentElement.lang = currentLanguage;
    console.log(`🌐 Initial language: ${currentLanguage}`);
}

// Update all texts on the page
function updateAllTexts() {
    // Update document title
    const isConverterPage = window.location.pathname.includes('currency-converter');
    if (isConverterPage) {
        document.title = `${t('converter.title')} - ${t('app.title')}`;
    } else {
        document.title = `${t('app.title')} - ${t('app.subtitle')}`;
    }

    // Update header
    document.querySelector('h1').textContent = isConverterPage ? t('converter.title') : t('app.title');
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = isConverterPage ? t('converter.subtitle') : t('app.subtitle');
    }

    // Update converter link
    const converterLink = document.querySelector('[data-i18n="header.converter"]');
    if (converterLink) {
        converterLink.innerHTML = `💱 ${t('header.converter')}`;
    }

    // Update quick fill section
    const quickFillTitle = document.querySelector('.quick-fill-section h2 span[data-i18n="quickfill.title"]');
    if (quickFillTitle) quickFillTitle.textContent = t('quickfill.title');

    const quickFillDesc = document.querySelector('.quick-fill-section .section-description[data-i18n="quickfill.description"]');
    if (quickFillDesc) quickFillDesc.textContent = t('quickfill.description');

    const quickFillTextarea = document.getElementById('quick-fill-text');
    if (quickFillTextarea) quickFillTextarea.placeholder = t('quickfill.placeholder');

    const quickFillBtn = document.querySelector('#quick-fill-btn span[data-i18n="quickfill.button"]');
    if (quickFillBtn) quickFillBtn.textContent = t('quickfill.button');

    const quickFillLoading = document.querySelector('#quick-fill-loading p[data-i18n="quickfill.loading"]');
    if (quickFillLoading) quickFillLoading.textContent = t('quickfill.loading');

    // Update mode selector
    const modeSection = document.querySelector('.mode-selector h2');
    if (modeSection) modeSection.textContent = t('mode.title');

    const modeCards = document.querySelectorAll('.mode-card');
    if (modeCards[0]) {
        modeCards[0].querySelector('.mode-title').textContent = `⚡ ${t('mode.practical.title')}`;
        modeCards[0].querySelector('.mode-description').textContent = t('mode.practical.desc');
        modeCards[0].querySelector('.mode-time').textContent = t('mode.practical.time');
    }
    if (modeCards[1]) {
        modeCards[1].querySelector('.mode-title').textContent = `🔬 ${t('mode.complete.title')}`;
        modeCards[1].querySelector('.mode-description').textContent = t('mode.complete.desc');
        modeCards[1].querySelector('.mode-time').textContent = t('mode.complete.time');
    }

    // Update preferences section
    const prefsSection = document.querySelector('.preferences-section h2');
    if (prefsSection) prefsSection.textContent = t('prefs.title');

    // Update form labels
    updateLabel('num-travelers', t('prefs.travelers'));
    updateLabel('max-budget', t('prefs.maxBudget'));
    updateLabel('min-days', t('prefs.minDays'));
    updateLabel('max-days', t('prefs.maxDays'));
    updateLabel('advance-days', t('prefs.advanceDays'));
    updateLabel('priority', t('prefs.priority'));

    // Update priority options
    const prioritySelect = document.getElementById('priority');
    if (prioritySelect) {
        prioritySelect.options[0].text = t('prefs.priority.price');
        prioritySelect.options[1].text = t('prefs.priority.balance');
        prioritySelect.options[2].text = t('prefs.priority.experience');
    }

    // Update checkboxes labels
    updateCheckboxLabels('.travel-type', ['travel.beach', 'travel.city', 'travel.nature', 'travel.cultural', 'travel.adventure']);
    updateCheckboxLabels('.activity', ['activity.food', 'activity.party', 'activity.history', 'activity.sports', 'activity.relax', 'activity.shopping']);
    updateCheckboxLabels('.avoid-activity', ['avoid.heights', 'avoid.heat', 'avoid.cold', 'avoid.crowds']);

    // Update section headers
    const sections = {
        '.preferences-section h2': 'prefs.title',
        '.preferences-section h3:nth-of-type(1)': 'style.title',
        '.preferences-section h3:nth-of-type(2)': 'work.title',
        '.preferences-section h3:nth-of-type(3)': 'docs.title'
    };

    for (const [selector, key] of Object.entries(sections)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = t(key);
    }

    // Update hostels checkbox
    const hostelsCheckbox = document.querySelector('label[style*="bold"] input#prefers-hostels');
    if (hostelsCheckbox && hostelsCheckbox.parentElement) {
        hostelsCheckbox.parentElement.innerHTML = `<input type="checkbox" id="prefers-hostels" ${hostelsCheckbox.checked ? 'checked' : ''}> 🛏️ ${t('style.hostels')}`;
    }

    // Update social checkbox
    const socialCheckbox = document.querySelector('label[style*="bold"] input#values-social');
    if (socialCheckbox && socialCheckbox.parentElement) {
        socialCheckbox.parentElement.innerHTML = `<input type="checkbox" id="values-social" ${socialCheckbox.checked ? 'checked' : ''}> 👥 ${t('style.social')}`;
    }

    // Update safety checkbox
    const safetyCheckbox = document.querySelector('input#city-safety-important');
    if (safetyCheckbox && safetyCheckbox.parentElement) {
        const isChecked = safetyCheckbox.checked;
        safetyCheckbox.parentElement.innerHTML = `<input type="checkbox" id="city-safety-important" ${isChecked ? 'checked' : ''}> 🛡️ ${t('style.safety')}`;
    }

    // Update WiFi checkbox
    const wifiCheckbox = document.querySelector('input#needs-wifi');
    if (wifiCheckbox && wifiCheckbox.parentElement) {
        const isChecked = wifiCheckbox.checked;
        wifiCheckbox.parentElement.innerHTML = `<input type="checkbox" id="needs-wifi" ${isChecked ? 'checked' : ''}> 🔴 ${t('work.wifi')}`;
    }

    // Update works during trip checkbox
    const worksCheckbox = document.querySelector('input#works-during-trip');
    if (worksCheckbox && worksCheckbox.parentElement) {
        const isChecked = worksCheckbox.checked;
        worksCheckbox.parentElement.innerHTML = `<input type="checkbox" id="works-during-trip" ${isChecked ? 'checked' : ''}> ${t('work.duringTrip')}`;
    }

    // Update English level
    updateLabel('english-level', t('work.englishLevel'));
    const englishSelect = document.getElementById('english-level');
    if (englishSelect) {
        englishSelect.options[0].text = t('work.english.none');
        englishSelect.options[1].text = t('work.english.basic');
        englishSelect.options[2].text = t('work.english.intermediate');
        englishSelect.options[3].text = t('work.english.fluent');
    }

    // Update currency preference
    updateLabel('currency-preference', t('work.currency'));

    // Update documents checkboxes
    updateDocumentCheckbox('has-passport', t('docs.passport'));
    updateDocumentCheckbox('has-us-visa', t('docs.visa'));
    updateDocumentCheckbox('has-insurance', t('docs.insurance'));
    updateDocumentCheckbox('has-vaccines', t('docs.vaccines'));

    // Update destinations section
    const destSection = document.querySelector('.destinations-section h2');
    if (destSection) destSection.textContent = t('dest.title');

    const addDestBtn = document.getElementById('add-destination');
    if (addDestBtn) addDestBtn.textContent = `+ ${t('dest.add')}`;

    // Update analyze button
    const analyzeBtn = document.getElementById('analyze-btn');
    if (analyzeBtn) analyzeBtn.textContent = t('analyze.button');

    // Update loading text
    const loadingText = document.querySelector('#loading p');
    if (loadingText) {
        const mode = document.querySelector('input[name="analysis-mode"]:checked').value;
        loadingText.textContent = mode === 'practical' ? t('analyze.loadingFast') : t('analyze.loadingDetailed');
    }

    // Update results section
    const resultsTitle = document.querySelector('#results h2');
    if (resultsTitle) resultsTitle.textContent = t('results.title');

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = t('footer.powered');

    // Update existing destination cards
    updateDestinationCards();
}

// Helper function to update label text
function updateLabel(inputId, text) {
    const input = document.getElementById(inputId);
    if (input) {
        const label = input.previousElementSibling || input.parentElement.querySelector('label');
        if (label && label.tagName === 'LABEL') {
            label.textContent = text;
        }
    }
}

// Helper function to update checkbox labels
function updateCheckboxLabels(className, keys) {
    const checkboxes = document.querySelectorAll(className);
    checkboxes.forEach((checkbox, index) => {
        if (keys[index] && checkbox.parentElement) {
            const isChecked = checkbox.checked;
            checkbox.parentElement.innerHTML = `<input type="checkbox" value="${checkbox.value}" class="${className.substring(1)}" ${isChecked ? 'checked' : ''}> ${t(keys[index])}`;
        }
    });
}

// Helper function to update document checkboxes
function updateDocumentCheckbox(id, text) {
    const checkbox = document.getElementById(id);
    if (checkbox && checkbox.parentElement) {
        const isChecked = checkbox.checked;
        checkbox.parentElement.innerHTML = `<input type="checkbox" id="${id}" ${isChecked ? 'checked' : ''}> ${text}`;
    }
}

// Helper function to update destination cards
function updateDestinationCards() {
    // This will be called by app.js when rendering destination cards
    // For now, just trigger a re-render if the function exists
    if (typeof window.updateAllDestinationCards === 'function') {
        window.updateAllDestinationCards();
    }
}
