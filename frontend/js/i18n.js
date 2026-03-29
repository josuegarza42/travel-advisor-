// Internationalization (i18n) - Translations
const translations = {
    es: {
        // Header
        'app.title': 'TripwiseAI',
        'app.subtitle': 'Deja que la IA te ayude a elegir tu próximo destino',
        'header.flights': 'Vuelos',
        'header.converter': 'Convertidor',

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
        'header.converter': 'Converter',

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
        'header.converter': 'Conversor',

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
