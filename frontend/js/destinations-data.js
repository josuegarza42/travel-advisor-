// Datos de países y ciudades populares para viajeros desde México
const DESTINATIONS_DATA = {
    "México": [
        // Zona Centro (CDMX, Bajío, Centro)
        "Ciudad de México", "Guadalajara", "Monterrey", "Querétaro", "León/Guanajuato",
        "Aguascalientes", "San Luis Potosí", "Morelia", "Zacatecas", "Puebla",

        // Caribe Mexicano y Península de Yucatán
        "Cancún", "Playa del Carmen", "Tulum", "Cozumel", "Mérida", "Chetumal", "Campeche",

        // Pacífico Norte
        "Puerto Vallarta", "Mazatlán", "Los Cabos", "La Paz", "Loreto", "Culiacán",
        "Tepic", "Colima", "Manzanillo",

        // Pacífico Sur
        "Zihuatanejo/Ixtapa", "Acapulco", "Oaxaca", "Puerto Escondido", "Huatulco",

        // Norte
        "Tijuana", "Hermosillo", "Chihuahua", "Ciudad Juárez", "Torreón", "Durango",
        "Los Mochis", "Mexicali", "Ensenada", "Saltillo",

        // Golfo de México
        "Veracruz", "Tampico", "Villahermosa", "Tuxtla Gutiérrez", "Tapachula",
        "Minatitlán/Coatzacoalcos", "Palenque",

        // Otros destinos con aeropuerto
        "Toluca", "Cuernavaca", "Uruapan", "Reynosa", "Matamoros", "Nuevo Laredo",
        "Cd. Obregón", "Guaymas", "Nogales", "Piedras Negras", "Monclova"
    ],
    "Colombia": [
        "Medellín", "Cartagena", "Bogotá", "Cali", "Santa Marta", "Barranquilla",
        "Salento", "San Andrés", "Pereira", "Guatapé", "Villa de Leyva", "Tayrona"
    ],
    "Perú": [
        "Lima", "Cusco", "Arequipa", "Machu Picchu", "Puno", "Iquitos",
        "Huaraz", "Paracas", "Máncora", "Trujillo"
    ],
    "Argentina": [
        "Buenos Aires", "Mendoza", "Bariloche", "Córdoba", "Salta", "Ushuaia",
        "El Calafate", "Iguazú", "Mar del Plata", "Rosario"
    ],
    "Chile": [
        "Santiago", "Valparaíso", "San Pedro de Atacama", "Puerto Varas", "Pucón",
        "Viña del Mar", "La Serena", "Punta Arenas", "Chiloé"
    ],
    "Brasil": [
        "Río de Janeiro", "São Paulo", "Salvador", "Florianópolis", "Foz do Iguaçu",
        "Brasília", "Fortaleza", "Recife", "Manaus", "Porto Alegre"
    ],
    "Ecuador": [
        "Quito", "Guayaquil", "Cuenca", "Baños", "Montañita", "Galápagos",
        "Otavalo", "Mindo", "Salinas"
    ],
    "Costa Rica": [
        "San José", "Tamarindo", "Manuel Antonio", "La Fortuna", "Puerto Viejo",
        "Monteverde", "Jacó", "Dominical", "Santa Teresa"
    ],
    "Guatemala": [
        "Antigua", "Ciudad de Guatemala", "Flores", "Panajachel", "Quetzaltenango",
        "Tikal", "Lago Atitlán", "Semuc Champey"
    ],
    "Panamá": [
        "Ciudad de Panamá", "Bocas del Toro", "Boquete", "San Blas", "Casco Viejo",
        "Santa Catalina", "Pedasí", "Colón"
    ],
    "España": [
        "Barcelona", "Madrid", "Sevilla", "Valencia", "Granada", "Bilbao",
        "San Sebastián", "Málaga", "Toledo", "Salamanca", "Ibiza"
    ],
    "Portugal": [
        "Lisboa", "Porto", "Faro", "Lagos", "Coimbra", "Sintra", "Évora", "Albufeira"
    ],
    "Estados Unidos": [
        "Nueva York", "Los Ángeles", "San Francisco", "Miami", "Chicago", "Austin",
        "Seattle", "Las Vegas", "San Diego", "Boston", "Portland", "Denver"
    ],
    "Canadá": [
        "Toronto", "Vancouver", "Montreal", "Quebec", "Calgary", "Ottawa",
        "Victoria", "Banff", "Whistler"
    ],
    "Cuba": [
        "La Habana", "Varadero", "Trinidad", "Viñales", "Santiago de Cuba", "Holguín"
    ],
    "Belice": [
        "Caye Caulker", "San Pedro", "Placencia", "San Ignacio", "Belize City"
    ],
    "Nicaragua": [
        "Granada", "León", "San Juan del Sur", "Managua", "Ometepe", "Corn Islands"
    ],
    "Honduras": [
        "Roatán", "Utila", "Copán", "La Ceiba", "Tegucigalpa"
    ],
    "El Salvador": [
        "San Salvador", "El Tunco", "Suchitoto", "Santa Ana"
    ],
    "Bolivia": [
        "La Paz", "Sucre", "Uyuni", "Copacabana", "Santa Cruz", "Potosí"
    ],
    "Uruguay": [
        "Montevideo", "Punta del Este", "Colonia del Sacramento", "Cabo Polonio"
    ],
    "Paraguay": [
        "Asunción", "Ciudad del Este", "Encarnación"
    ],
    "Venezuela": [
        "Caracas", "Isla Margarita", "Los Roques", "Mérida", "Canaima"
    ],
    "República Dominicana": [
        "Santo Domingo", "Punta Cana", "Puerto Plata", "Samaná", "La Romana", "Cabarete"
    ],
    "Jamaica": [
        "Kingston", "Montego Bay", "Negril", "Ocho Ríos", "Port Antonio"
    ],
    "Tailandia": [
        "Bangkok", "Chiang Mai", "Phuket", "Krabi", "Koh Samui", "Pattaya", "Ayutthaya"
    ],
    "Vietnam": [
        "Hanói", "Ho Chi Minh", "Da Nang", "Hoi An", "Nha Trang", "Ha Long Bay"
    ],
    "Indonesia": [
        "Bali", "Yakarta", "Lombok", "Gili Islands", "Yogyakarta", "Komodo"
    ],
    "Japón": [
        "Tokio", "Kioto", "Osaka", "Hiroshima", "Nara", "Fukuoka", "Sapporo", "Okinawa"
    ],
    "Corea del Sur": [
        "Seúl", "Busan", "Jeju", "Incheon", "Daegu"
    ],
    "China": [
        "Beijing", "Shanghai", "Hong Kong", "Guangzhou", "Xi'an", "Chengdu", "Hangzhou"
    ],
    "India": [
        "Delhi", "Mumbai", "Goa", "Jaipur", "Bangalore", "Agra", "Varanasi", "Kerala"
    ],
    "Turquía": [
        "Estambul", "Capadocia", "Antalya", "Izmir", "Bodrum", "Ankara", "Pamukkale"
    ],
    "Marruecos": [
        "Marrakech", "Casablanca", "Fez", "Rabat", "Tánger", "Essaouira", "Chefchaouen"
    ],
    "Egipto": [
        "El Cairo", "Luxor", "Asuán", "Alejandría", "Sharm el-Sheij", "Hurghada"
    ],
    "Sudáfrica": [
        "Ciudad del Cabo", "Johannesburgo", "Durban", "Pretoria", "Port Elizabeth"
    ],
    "Australia": [
        "Sídney", "Melbourne", "Brisbane", "Perth", "Cairns", "Gold Coast", "Adelaide"
    ],
    "Nueva Zelanda": [
        "Auckland", "Wellington", "Queenstown", "Christchurch", "Rotorua"
    ],
    "Francia": [
        "París", "Niza", "Lyon", "Marsella", "Burdeos", "Toulouse", "Estrasburgo"
    ],
    "Italia": [
        "Roma", "Florencia", "Venecia", "Milán", "Nápoles", "Bolonia", "Verona", "Pisa"
    ],
    "Grecia": [
        "Atenas", "Santorini", "Mykonos", "Creta", "Rodas", "Tesalónica", "Zakynthos"
    ],
    "Reino Unido": [
        "Londres", "Edimburgo", "Manchester", "Liverpool", "Glasgow", "Oxford", "Cambridge"
    ],
    "Países Bajos": [
        "Ámsterdam", "Rotterdam", "La Haya", "Utrecht", "Eindhoven"
    ],
    "Alemania": [
        "Berlín", "Múnich", "Hamburgo", "Frankfurt", "Colonia", "Dresde", "Stuttgart"
    ],
    "Austria": [
        "Viena", "Salzburgo", "Innsbruck", "Graz", "Hallstatt"
    ],
    "Suiza": [
        "Zúrich", "Ginebra", "Berna", "Lucerna", "Interlaken", "Lausana"
    ],
    "República Checa": [
        "Praga", "Brno", "Český Krumlov", "Karlovy Vary"
    ],
    "Polonia": [
        "Varsovia", "Cracovia", "Gdansk", "Wroclaw", "Poznan"
    ],
    "Croacia": [
        "Dubrovnik", "Split", "Zagreb", "Hvar", "Zadar", "Rovinj"
    ],
    "Hungría": [
        "Budapest", "Eger", "Pécs", "Debrecen"
    ],
    "Noruega": [
        "Oslo", "Bergen", "Tromsø", "Stavanger", "Trondheim"
    ],
    "Suecia": [
        "Estocolmo", "Gotemburgo", "Malmö", "Uppsala"
    ],
    "Dinamarca": [
        "Copenhague", "Aarhus", "Odense", "Aalborg"
    ],
    "Finlandia": [
        "Helsinki", "Rovaniemi", "Tampere", "Turku"
    ],
    "Islandia": [
        "Reikiavik", "Akureyri", "Vík"
    ],
    "Irlanda": [
        "Dublín", "Cork", "Galway", "Killarney", "Limerick"
    ],
    "Bélgica": [
        "Bruselas", "Brujas", "Amberes", "Gante", "Lovaina"
    ]
};

// Lista de países ordenada alfabéticamente
const COUNTRIES = Object.keys(DESTINATIONS_DATA).sort();
