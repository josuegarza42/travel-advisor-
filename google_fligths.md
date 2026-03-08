
Api Dashboard

Your Account
Api Documentation

Google Search API
Google Light Search API
Google AI Mode API
Google AI Overview API
Google Ads Transparency API
Google Autocomplete API
Google Events API
Google Finance API
Google Flights API
Airports Results
Autocomplete API
Booking Options
Flights Results
Price Insights
Google Forums API
Google Hotels API
Google Images API
Google Images Light API
Google Immersive Product API
Google Jobs API
Google Lens API
Google Light Fast API
Google Local API
Google Local Services API
Google Maps API
Google Maps Reviews API
Google News API
Google News Light API
Google Patents API
Google Play Store API
Google Related Questions API
Google Reverse Image API
Google Scholar API
Google Shopping API
Google Shopping Light API
Google Short Videos API
Google Travel Explore API
Google Trends API
Google Videos API
Google Videos Light API
Amazon Search API
Amazon Product API
Apple App Store API
Baidu Search API
Bing Search API
Bing Copilot API
Bing Images API
DuckDuckGo Search API
DuckDuckGo Light API
eBay Search API
Facebook Profile API
Naver Search API
OpenTable Reviews API
The Home Depot Search API
Tripadvisor Search API
Walmart Search API
Yahoo! Search API
Yandex Search API
Yelp Search API
YouTube Search API
Extra APIs
Status and Error Codes
Model Context Protocol
Search
0 / 250 searches
Google Flights API
API uptime
99.879%
Our Google Flights API allows you to scrape flight results from Google Flights. The API is accessed through the following endpoint: /search?engine=google_flights.

A user may query the following: https://serpapi.com/search?engine=google_flights utilizing a GET request. Head to the playground for a live and interactive demo.

Note on Result Similarity
The results you receive by default may differ from what you see on Google Flights in the browser.

Setting deep_search to true will produce results that are identical to Google Flights in the browser at the cost of increased response times.

Enable this option if more precise results are essential for your use case.

departure_idDeparture Id
CDG
arrival_idArrival Id
AUS
Search


Tools
Find...
HTML size:

JSON size:

Show X-Ray borders:

Show JSON path:

Show raw JSON:

Collapse JSON tree:
Reset settings
Collapse / Expand
JSON
 + 
Copy JSON path:
 + 
{
"search_metadata":
{
"id":
"695926708c24bd247f1be7a8",
"status":
"Success",
"json_endpoint":
"https://serpapi.com/searches/bd53afa897791ee0/695926708c24bd247f1be7a8.json",
"created_at":
"2026-01-03 14:23:44 UTC",
"processed_at":
"2026-01-03 14:23:44 UTC",
"google_flights_url":
"https://www.google.com/travel/flights?hl=en&gl=us&curr=USD&tfs=CBwQAhoeEgoyMDI2LTAzLTAzagcIARIDQ0RHcgcIARIDQVVTQgEBSAFwAZgBAg&tfu=EgIIAQ",
"raw_html_file":
"https://serpapi.com/searches/bd53afa897791ee0/695926708c24bd247f1be7a8.html",
"prettify_html_file":
"https://serpapi.com/searches/bd53afa897791ee0/695926708c24bd247f1be7a8.prettify",
"total_time_taken":
0.91
},
"search_parameters":
{
"engine":
"google_flights",
"hl":
"en",
"gl":
"us",
"type":
"2",
"departure_id":
"CDG",
"arrival_id":
"AUS",
"outbound_date":
"2026-03-03",
"currency":
"USD"
},
"best_flights":
[
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 10:10"
},
"arrival_airport":
{
"name":
"Heathrow Airport",
"id":
"LHR",
"time":
"2026-03-03 10:40"
},
"duration":
90,
"airplane":
"Airbus A319",
"airline":
"British Airways",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"travel_class":
"Economy",
"flight_number":
"BA 301",
"ticket_also_sold_by":
[
"American"
],
"legroom":
"29 in",
"extensions":
[
"Below average legroom (29 in)",
"In-seat USB outlet",
"Carbon emissions estimate: 63 kg"
]
},
{
"departure_airport":
{
"name":
"Heathrow Airport",
"id":
"LHR",
"time":
"2026-03-03 12:10"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 16:50"
},
"duration":
640,
"airplane":
"Airbus A350",
"airline":
"British Airways",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"travel_class":
"Economy",
"flight_number":
"BA 191",
"ticket_also_sold_by":
[
"American",
"Iberia",
"Finnair"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 461 kg"
]
}
],
"layovers":
[
{
"duration":
90,
"name":
"Heathrow Airport",
"id":
"LHR"
}
],
"total_duration":
820,
"carbon_emissions":
{
"this_flight":
525000,
"typical_for_this_route":
529000,
"difference_percent":
-1
},
"price":
520,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3RDUVRNd01YeENRVEU1TVJvTENNS1ZBeEFDR2dOVlUwUTRISERDbFFNPSIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIkxIUiIsbnVsbCwiQkEiLCIzMDEiXSxbIkxIUiIsIjIwMjYtMDMtMDMiLCJBVVMiLG51bGwsIkJBIiwiMTkxIl1dXQ=="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 11:55"
},
"arrival_airport":
{
"name":
"Heathrow Airport",
"id":
"LHR",
"time":
"2026-03-03 12:25"
},
"duration":
90,
"airplane":
"Airbus A320",
"airline":
"British Airways",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"travel_class":
"Economy",
"flight_number":
"BA 303",
"ticket_also_sold_by":
[
"American"
],
"legroom":
"29 in",
"extensions":
[
"Below average legroom (29 in)",
"Wi-Fi for a fee",
"In-seat USB outlet",
"Carbon emissions estimate: 55 kg"
],
"often_delayed_by_over_30_min":
true
},
{
"departure_airport":
{
"name":
"Heathrow Airport",
"id":
"LHR",
"time":
"2026-03-03 15:00"
},
"arrival_airport":
{
"name":
"Dallas Fort Worth International Airport",
"id":
"DFW",
"time":
"2026-03-03 19:10"
},
"duration":
610,
"airplane":
"Airbus A350",
"airline":
"British Airways",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"travel_class":
"Economy",
"flight_number":
"BA 193",
"ticket_also_sold_by":
[
"American"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 394 kg"
],
"often_delayed_by_over_30_min":
true
},
{
"departure_airport":
{
"name":
"Dallas Fort Worth International Airport",
"id":
"DFW",
"time":
"2026-03-03 20:56"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 22:05"
},
"duration":
69,
"airplane":
"Airbus A321",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 3242",
"ticket_also_sold_by":
[
"British Airways"
],
"legroom":
"30 in",
"extensions":
[
"Average legroom (30 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"Stream media to your device",
"Carbon emissions estimate: 59 kg"
]
}
],
"layovers":
[
{
"duration":
155,
"name":
"Heathrow Airport",
"id":
"LHR"
},
{
"duration":
106,
"name":
"Dallas Fort Worth International Airport",
"id":
"DFW"
}
],
"total_duration":
1030,
"carbon_emissions":
{
"this_flight":
509000,
"typical_for_this_route":
529000,
"difference_percent":
-4
},
"price":
525,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/multi.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFaEpDUVRNd00zeENRVEU1TTN4QlFUTXlORElhQ3dqeW1RTVFBaG9EVlZORU9CeHc4cGtEIixbWyJDREciLCIyMDI2LTAzLTAzIiwiTEhSIixudWxsLCJCQSIsIjMwMyJdLFsiTEhSIiwiMjAyNi0wMy0wMyIsIkRGVyIsbnVsbCwiQkEiLCIxOTMiXSxbIkRGVyIsIjIwMjYtMDMtMDMiLCJBVVMiLG51bGwsIkFBIiwiMzI0MiJdXV0="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 11:05"
},
"arrival_airport":
{
"name":
"Dallas Fort Worth International Airport",
"id":
"DFW",
"time":
"2026-03-03 14:45"
},
"duration":
640,
"airplane":
"Boeing 787",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 49",
"ticket_also_sold_by":
[
"Finnair"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 409 kg"
]
},
{
"departure_airport":
{
"name":
"Dallas Fort Worth International Airport",
"id":
"DFW",
"time":
"2026-03-03 16:39"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 17:47"
},
"duration":
68,
"airplane":
"Airbus A319",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 2458",
"ticket_also_sold_by":
[
"Finnair"
],
"legroom":
"30 in",
"extensions":
[
"Average legroom (30 in)",
"Wi-Fi for a fee",
"In-seat power outlet",
"Stream media to your device",
"Carbon emissions estimate: 65 kg"
]
}
],
"layovers":
[
{
"duration":
114,
"name":
"Dallas Fort Worth International Airport",
"id":
"DFW"
}
],
"total_duration":
822,
"carbon_emissions":
{
"this_flight":
475000,
"typical_for_this_route":
529000,
"difference_percent":
-10
},
"price":
526,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3RCUVRRNWZFRkJNalExT0JvTENLU2FBeEFDR2dOVlUwUTRISENrbWdNPSIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIkRGVyIsbnVsbCwiQUEiLCI0OSJdLFsiREZXIiwiMjAyNi0wMy0wMyIsIkFVUyIsbnVsbCwiQUEiLCIyNDU4Il1dXQ=="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 11:25"
},
"arrival_airport":
{
"name":
"Miami International Airport",
"id":
"MIA",
"time":
"2026-03-03 15:30"
},
"duration":
605,
"airplane":
"Boeing 787",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 63",
"ticket_also_sold_by":
[
"Iberia"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 462 kg"
]
},
{
"departure_airport":
{
"name":
"Miami International Airport",
"id":
"MIA",
"time":
"2026-03-03 19:00"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 21:24"
},
"duration":
204,
"airplane":
"Boeing 737",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 2629",
"ticket_also_sold_by":
[
"Iberia"
],
"legroom":
"30 in",
"extensions":
[
"Average legroom (30 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"Stream media to your device",
"Carbon emissions estimate: 158 kg"
]
}
],
"layovers":
[
{
"duration":
210,
"name":
"Miami International Airport",
"id":
"MIA"
}
],
"total_duration":
1019,
"carbon_emissions":
{
"this_flight":
622000,
"typical_for_this_route":
529000,
"difference_percent":
18
},
"price":
532,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3RCUVRZemZFRkJNall5T1JvTENPNmVBeEFDR2dOVlUwUTRISER1bmdNPSIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIk1JQSIsbnVsbCwiQUEiLCI2MyJdLFsiTUlBIiwiMjAyNi0wMy0wMyIsIkFVUyIsbnVsbCwiQUEiLCIyNjI5Il1dXQ=="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 13:30"
},
"arrival_airport":
{
"name":
"Philadelphia International Airport",
"id":
"PHL",
"time":
"2026-03-03 15:45"
},
"duration":
495,
"airplane":
"Boeing 787",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 755",
"ticket_also_sold_by":
[
"Iberia"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 462 kg"
]
},
{
"departure_airport":
{
"name":
"Philadelphia International Airport",
"id":
"PHL",
"time":
"2026-03-03 18:50"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 21:56"
},
"duration":
246,
"airplane":
"Airbus A319",
"airline":
"American",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"travel_class":
"Economy",
"flight_number":
"AA 1394",
"ticket_also_sold_by":
[
"Iberia"
],
"legroom":
"30 in",
"extensions":
[
"Average legroom (30 in)",
"Wi-Fi for a fee",
"In-seat power outlet",
"Stream media to your device",
"Carbon emissions estimate: 236 kg"
]
}
],
"layovers":
[
{
"duration":
185,
"name":
"Philadelphia International Airport",
"id":
"PHL"
}
],
"total_duration":
926,
"carbon_emissions":
{
"this_flight":
699000,
"typical_for_this_route":
529000,
"difference_percent":
32
},
"price":
532,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AA.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3hCUVRjMU5YeEJRVEV6T1RRYUN3anVuZ01RQWhvRFZWTkVPQnh3N3A0RCIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIlBITCIsbnVsbCwiQUEiLCI3NTUiXSxbIlBITCIsIjIwMjYtMDMtMDMiLCJBVVMiLG51bGwsIkFBIiwiMTM5NCJdXV0="
}
],
"other_flights":
[
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 20:35"
},
"arrival_airport":
{
"name":
"Heathrow Airport",
"id":
"LHR",
"time":
"2026-03-03 20:50"
},
"duration":
75,
"airplane":
"Airbus A319",
"airline":
"British Airways",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"travel_class":
"Economy",
"flight_number":
"BA 319",
"legroom":
"29 in",
"extensions":
[
"Below average legroom (29 in)",
"In-seat USB outlet",
"Carbon emissions estimate: 64 kg"
]
},
{
"departure_airport":
{
"name":
"Heathrow Airport",
"id":
"LHR",
"time":
"2026-03-04 12:10"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-04 16:50"
},
"duration":
640,
"airplane":
"Airbus A350",
"airline":
"British Airways",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"travel_class":
"Economy",
"flight_number":
"BA 191",
"ticket_also_sold_by":
[
"American",
"Finnair",
"Iberia"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 461 kg"
]
}
],
"layovers":
[
{
"duration":
920,
"name":
"Heathrow Airport",
"id":
"LHR",
"overnight":
true
}
],
"total_duration":
1635,
"carbon_emissions":
{
"this_flight":
526000,
"typical_for_this_route":
529000,
"difference_percent":
-1
},
"price":
538,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/BA.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3RDUVRNeE9YeENRVEU1TVJvTENKZWtBeEFDR2dOVlUwUTRISENYcEFNPSIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIkxIUiIsbnVsbCwiQkEiLCIzMTkiXSxbIkxIUiIsIjIwMjYtMDMtMDQiLCJBVVMiLG51bGwsIkJBIiwiMTkxIl1dXQ=="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 08:55"
},
"arrival_airport":
{
"name":
"Hartsfield-Jackson Atlanta International Airport",
"id":
"ATL",
"time":
"2026-03-03 12:50"
},
"duration":
595,
"airplane":
"Airbus A330-900neo",
"airline":
"Delta",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"travel_class":
"Economy",
"flight_number":
"DL 83",
"ticket_also_sold_by":
[
"Virgin Atlantic"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Free Wi-Fi",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 435 kg"
]
},
{
"departure_airport":
{
"name":
"Hartsfield-Jackson Atlanta International Airport",
"id":
"ATL",
"time":
"2026-03-03 15:50"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 17:37"
},
"duration":
167,
"airplane":
"Airbus A320",
"airline":
"Delta",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"travel_class":
"Economy",
"flight_number":
"DL 1491",
"ticket_also_sold_by":
[
"Virgin Atlantic"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Free Wi-Fi",
"In-seat power & USB outlets",
"Live TV",
"Carbon emissions estimate: 132 kg"
]
}
],
"layovers":
[
{
"duration":
180,
"name":
"Hartsfield-Jackson Atlanta International Airport",
"id":
"ATL"
}
],
"total_duration":
942,
"carbon_emissions":
{
"this_flight":
567000,
"typical_for_this_route":
529000,
"difference_percent":
7
},
"price":
1588,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3RFVERnemZFUk1NVFE1TVJvTENMallDUkFDR2dOVlUwUTRISEM0MkFrPSIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIkFUTCIsbnVsbCwiREwiLCI4MyJdLFsiQVRMIiwiMjAyNi0wMy0wMyIsIkFVUyIsbnVsbCwiREwiLCIxNDkxIl1dXQ=="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 10:30"
},
"arrival_airport":
{
"name":
"Minneapolis–Saint Paul International Airport",
"id":
"MSP",
"time":
"2026-03-03 13:00"
},
"duration":
570,
"airplane":
"Airbus A330",
"airline":
"Delta",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"travel_class":
"Economy",
"flight_number":
"DL 153",
"ticket_also_sold_by":
[
"KLM"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Free Wi-Fi",
"In-seat power & USB outlets",
"On-demand video",
"Carbon emissions estimate: 427 kg"
],
"often_delayed_by_over_30_min":
true
},
{
"departure_airport":
{
"name":
"Minneapolis–Saint Paul International Airport",
"id":
"MSP",
"time":
"2026-03-03 14:35"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 17:49"
},
"duration":
194,
"airplane":
"Airbus A220-100 Passenger",
"airline":
"Delta",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"travel_class":
"Economy",
"flight_number":
"DL 2687",
"ticket_also_sold_by":
[
"KLM"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Free Wi-Fi",
"In-seat power & USB outlets",
"Live TV",
"Carbon emissions estimate: 203 kg"
]
}
],
"layovers":
[
{
"duration":
95,
"name":
"Minneapolis–Saint Paul International Airport",
"id":
"MSP"
}
],
"total_duration":
859,
"carbon_emissions":
{
"this_flight":
631000,
"typical_for_this_route":
529000,
"difference_percent":
19
},
"price":
1588,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3hFVERFMU0zeEVUREkyT0RjYUN3aTQyQWtRQWhvRFZWTkVPQnh3dU5nSiIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIk1TUCIsbnVsbCwiREwiLCIxNTMiXSxbIk1TUCIsIjIwMjYtMDMtMDMiLCJBVVMiLG51bGwsIkRMIiwiMjY4NyJdXV0="
},
{
"flights":
[
{
"departure_airport":
{
"name":
"Paris Charles de Gaulle Airport",
"id":
"CDG",
"time":
"2026-03-03 16:05"
},
"arrival_airport":
{
"name":
"Detroit Metropolitan Wayne County Airport",
"id":
"DTW",
"time":
"2026-03-03 18:55"
},
"duration":
530,
"airplane":
"Airbus A350",
"airline":
"Air France",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/AF.png",
"travel_class":
"Economy",
"flight_number":
"AF 378",
"ticket_also_sold_by":
[
"Delta",
"KLM"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Wi-Fi for a fee",
"In-seat USB outlet",
"On-demand video",
"Carbon emissions estimate: 385 kg"
]
},
{
"departure_airport":
{
"name":
"Detroit Metropolitan Wayne County Airport",
"id":
"DTW",
"time":
"2026-03-03 20:25"
},
"arrival_airport":
{
"name":
"Austin-Bergstrom International Airport",
"id":
"AUS",
"time":
"2026-03-03 22:58"
},
"duration":
213,
"airplane":
"Airbus A319",
"airline":
"Delta",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/DL.png",
"travel_class":
"Economy",
"flight_number":
"DL 1448",
"ticket_also_sold_by":
[
"KLM"
],
"legroom":
"31 in",
"extensions":
[
"Average legroom (31 in)",
"Free Wi-Fi",
"In-seat power & USB outlets",
"Live TV",
"Carbon emissions estimate: 193 kg"
]
}
],
"layovers":
[
{
"duration":
90,
"name":
"Detroit Metropolitan Wayne County Airport",
"id":
"DTW"
}
],
"total_duration":
833,
"carbon_emissions":
{
"this_flight":
578000,
"typical_for_this_route":
529000,
"difference_percent":
9
},
"price":
1589,
"type":
"One way",
"airline_logo":
"https://www.gstatic.com/flights/airline_logos/70px/multi.png",
"extensions":
[
"Checked baggage for a fee",
"Full refund for cancellations",
"Free change, possible fare difference"
],
"booking_token":
"WyJDalJJU1hWeFNuVkZkSGt3VkVGQlJWOUJhbEZDUnkwdExTMHRMUzB0TFMxd2FuVnJNVUZCUVVGQlIyeGFTbTVKUVhkNVgwZEJFZ3hCUmpNM09IeEVUREUwTkRnYUN3amUyQWtRQWhvRFZWTkVPQnh3M3RnSiIsW1siQ0RHIiwiMjAyNi0wMy0wMyIsIkRUVyIsbnVsbCwiQUYiLCIzNzgiXSxbIkRUVyIsIjIwMjYtMDMtMDMiLCJBVVMiLG51bGwsIkRMIiwiMTQ0OCJdXV0="
}
],
"price_insights":
{
"lowest_price":
520,
"price_level":
"low",
"typical_price_range":
[
690,
1350
],
"price_history":
[
[
1762210800,
499
],
[
1762297200,
499
],
[
1762383600,
498
],
[
1762470000,
498
],
[
1762556400,
501
],
[
1762642800,
501
],
[
1762729200,
501
],
[
1762815600,
500
],
[
1762902000,
501
],
[
1762988400,
501
],
[
1763074800,
501
],
[
1763161200,
503
],
[
1763247600,
503
],
[
1763334000,
503
],
[
1763420400,
502
],
[
1763506800,
501
],
[
1763593200,
501
],
[
1763679600,
499
],
[
1763766000,
499
],
[
1763852400,
499
],
[
1763938800,
499
],
[
1764025200,
498
],
[
1764111600,
499
],
[
1764198000,
501
],
[
1764284400,
502
],
[
1764370800,
502
],
[
1764457200,
502
],
[
1764543600,
502
],
[
1764630000,
502
],
[
1764716400,
502
],
[
1764802800,
503
],
[
1764889200,
505
],
[
1764975600,
515
],
[
1765062000,
515
],
[
1765148400,
515
],
[
1765234800,
515
],
[
1765321200,
515
],
[
1765407600,
515
],
[
1765494000,
520
],
[
1765580400,
520
],
[
1765666800,
519
],
[
1765753200,
519
],
[
1765839600,
520
],
[
1765926000,
520
],
[
1766012400,
519
],
[
1766098800,
519
],
[
1766185200,
518
],
[
1766271600,
518
],
[
1766358000,
518
],
[
1766444400,
520
],
[
1766530800,
522
],
[
1766617200,
522
],
[
1766703600,
521
],
[
1766790000,
521
],
[
1766876400,
521
],
[
1766962800,
521
],
[
1767049200,
521
],
[
1767135600,
520
],
[
1767222000,
519
],
[
1767308400,
520
],
[
1767394800,
520
]
]
},
"airports":
[
{
"departure":
[
{
"airport":
{
"id":
"CDG",
"name":
"Paris Charles de Gaulle Airport"
},
"city":
"Paris",
"country":
"France",
"country_code":
"FR",
"image":
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGx8ii2KbSDdbdzfKye5oDN2bwBA6audqI7XUEf2iMRZezpn_ZbQe1ZIuvUSH-8XOMe958umDwSsAF1w",
"thumbnail":
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyQJ-woNs0iO22mPSkmRUM5gcsTbbYeypQ6BBTeFxXr90mqTxZl57Fdq2CDuLn4w7cKZ8TT9_zZhOpF57rIpA7yWKQnqKvkKIf9Y-qJDo"
}
],
"arrival":
[
{
"airport":
{
"id":
"AUS",
"name":
"Austin-Bergstrom International Airport"
},
"city":
"Austin",
"country":
"United States",
"country_code":
"US",
"image":
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdjkMcBZuGRD1MjnuLQvdGtpTk0RyjdYs0Z8JsPtfIjer-6VvmfmMLxzvBkeyUrhf_focikfda4rVHg",
"thumbnail":
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQ73FSj9E8pKaNvjWKyEDQGfLV-pky_onARvOY-zHWvQ-hOuPJSqyyXzvyg4-kGGAcZxdO6T5SYGWBzrX8x6MSPq7gBHsSLzX9MYjFJWA"
}
]
}
]
}

GET


https://serpapi.com/search.json?engine=google_flights&departure_id=CDG&arrival_id=AUS&currency=USD&type=2&outbound_date=2026-03-03

Code to integrate

cURLRubyPythonJavaScriptGoPHPJavaRust.NETGoogle Sheets

require "serpapi" 

client = SerpApi::Client.new(
  engine: "google_flights",
  departure_id: "CDG",
  arrival_id: "AUS",
  currency: "USD",
  type: "2",
  outbound_date: "2026-03-03",
  api_key: "a35f0a1c35005075dcf44c7443ea970634f25eee07047e22a04226f04f9cd6c5"
)

results = client.search
best_flights = results[:best_flights]
API Parameters
Search Query
departure_id

Optional

Parameter defines the departure airport code or location kgmid.
An airport code is an uppercase 3-letter code. You can search for it on Google Flights or IATA.
For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport.
A location kgmid is a string that starts with /m/. You can search for a location on Wikidata and use its "Freebase ID" as the location kgmid. For example, /m/0vzm is the location kgmid for Austin, TX.
You can specify multiple departure airports by separating them with a comma. For example, CDG,ORY,/m/04jpl.

arrival_id

Optional

Parameter defines the arrival airport code or location kgmid.
An airport code is an uppercase 3-letter code. You can search for it on Google Flights or IATA.
For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport.
A location kgmid is a string that starts with /m/. You can search for a location on Wikidata and use its "Freebase ID" as the location kgmid. For example, /m/0vzm is the location kgmid for Austin, TX.
You can specify multiple arrival airports by separating them with a comma. For example, CDG,ORY,/m/04jpl.

Localization
gl

Optional

Parameter defines the country to use for the Google Flights search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries page for a full list of supported Google countries.

hl

Optional

Parameter defines the language to use for the Google Flights search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.

currency

Optional

Parameter defines the currency of the returned prices. Default to USD. Head to the Google Travel Currencies page for a full list of supported currency codes.

Advanced Google Flights Parameters
type

Optional

Parameter defines the type of the flights.
Available options:

1 - Round trip (default)
2 - One way
3 - Multi-city

When this parameter is set to 3, use multi_city_json to set the flight information.

To obtain the returning flight information for Round Trip (1), you need to make another request using a departure_token.

outbound_date

Optional

Parameter defines the outbound date. The format is YYYY-MM-DD. e.g. 2026-03-08

return_date

Optional

Parameter defines the return date. The format is YYYY-MM-DD. e.g. 2026-03-14

Parameter is required if type parameter is set to: 1 (Round trip)

travel_class

Optional

Parameter defines the travel class.
Available options:

1 - Economy (default)
2 - Premium economy
3 - Business
4 - First

multi_city_json

Optional

Parameter defines the flight information for multi-city flights. It's a JSON string containing multiple flight information objects. Each object should contain the following fields:

departure_id - The departure airport code or location kgmid. The format is the same as the main departure_id parameter.
arrival_id - The arrival airport code or location kgmid. The format is the same as the main arrival_id parameter.
date - Flight date. The format is the same as the outbound_date parameter.
times - Time range for the flight. The format is the same as the outbound_times parameter. This parameter is optional.

Example:
[{"departure_id":"CDG","arrival_id":"NRT","date":"2026-03-14"},{"departure_id":"NRT","arrival_id":"LAX,SEA","date":"2026-03-21"},{"departure_id":"LAX,SEA","arrival_id":"AUS","date":"2026-03-28","times":"8,18,9,23"}]

The example is a multi-city flight from CDG to NRT on 2026-03-14, then from NRT to LAX or SEA on 2026-03-21, and finally from LAX or SEA to AUS on 2026-03-28. The last flight has a departure time range from 8:00 AM to 7:00 PM and an arrival time range from 9:00 AM to 12:00 AM (Midnight).

show_hidden

Optional

Set to true to include the hidden flight results. Default to false.

exclude_basic

Optional

Set to true to exclude basic results. Resulting fares will have free seat selection and carry on bags. Default to false. As of now, this filter only works for domestic flights in the US.

Parameter can only be used when gl isus and travel_class is1

deep_search

Optional

Set to true to enable deep search, which may yield better results but with a longer response time. Deep search results are identical to those found on Google Flights pages in the browser. By default, this option is set to false for performance reasons.

Number Of Passengers
adults

Optional

Parameter defines the number of adults. Default to 1.

children

Optional

Parameter defines the number of children. Default to 0.

infants_in_seat

Optional

Parameter defines the number of infants in seat. Default to 0.

infants_on_lap

Optional

Parameter defines the number of infants on lap. Default to 0.

Sorting
sort_by

Optional

Parameter defines the sorting order of the results.
Available options:

1 - Top flights (default)
2 - Price
3 - Departure time
4 - Arrival time
5 - Duration
6 - Emissions

Advanced Filters
stops

Optional

Parameter defines the number of stops during the flight.
Available options:

0 - Any number of stops (default)
1 - Nonstop only
2 - 1 stop or fewer
3 - 2 stops or fewer

exclude_airlines

Optional

Parameter defines the airline codes to be excluded. Split multiple airlines with comma.
It can't be used together with include_airlines.
Each airline code should be a 2-character IATA code consisting of either two uppercase letters or one uppercase letter and one digit. You can search for airline codes on IATA.
For example, UA is United Airlines.
Additionally, alliances can be also included here:

STAR_ALLIANCE - Star Alliance
SKYTEAM - SkyTeam
ONEWORLD - Oneworld

exclude_airlines and include_airlines parameters can't be used together.

include_airlines

Optional

Parameter defines the airline codes to be included. Split multiple airlines with comma.
It can't be used together with exclude_airlines.
Each airline code should be a 2-character IATA code consisting of either two uppercase letters or one uppercase letter and one digit. You can search for airline codes on IATA.
For example, UA is United Airlines.
Additionally, alliances can be also included here:

STAR_ALLIANCE - Star Alliance
SKYTEAM - SkyTeam
ONEWORLD - Oneworld

exclude_airlines and include_airlines parameters can't be used together.

bags

Optional

Parameter defines the number of carry-on bags. Default to 0.

Parameter should not exceed the total number of passengers with carry-on bag allowance (adults, children and infants_in_seat).

max_price

Optional

Parameter defines the maximum ticket price. Default to unlimited.

outbound_times

Optional

Parameter defines the outbound times range. It's a string containing two (for departure only) or four (for departure and arrival) comma-separated numbers. Each number represents the beginning of an hour. For example:

4,18: 4:00 AM - 7:00 PM departure
0,18: 12:00 AM - 7:00 PM departure
19,23: 7:00 PM - 12:00 AM departure
4,18,3,19: 4:00 AM - 7:00 PM departure, 3:00 AM - 8:00 PM arrival
0,23,3,19: unrestricted departure, 3:00 AM - 8:00 PM arrival

return_times

Optional

Parameter defines the return times range. It's a string containing two (for departure only) or four (for departure and arrival) comma-separated numbers. Each number represents the beginning of an hour. For example:

4,18: 4:00 AM - 7:00 PM departure
0,18: 12:00 AM - 7:00 PM departure
19,23: 7:00 PM - 12:00 AM departure
4,18,3,19: 4:00 AM - 7:00 PM departure, 3:00 AM - 8:00 PM arrival
0,23,3,19: unrestricted departure, 3:00 AM - 8:00 PM arrival

Parameter should only be used when type parameter is set to: 1 (Round trip)

emissions

Optional

Parameter defines the emission level of the flight.
Available options:

1 - Less emissions only

layover_duration

Optional

Parameter defines the layover duration, in minutes. It's a string containing two comma-separated numbers. For example, specify 90,330 for 1 hr 30 min - 5 hr 30 min.

exclude_conns

Optional

Parameter defines the connecting airport codes to be excluded.
An airport ID is an uppercase 3-letter code. You can search for it on Google Flights or IATA.
For example, CDG is Paris Charles de Gaulle Airport and AUS is Austin-Bergstrom International Airport.

You can also combine multiple Airports by joining them with a comma (value + , + value; eg: CDG,AUS).

max_duration

Optional

Parameter defines the maximum flight duration, in minutes. For example, specify 1500 for 25 hours.

If your search returns no results, try increasing your max_duration by up to 200 minutes to account for route-specific scheduling variances.

Next Flights
departure_token

Optional

Parameter is used to select the flight and get returning flights (for Round trip) or flights for the next leg of itinerary (for Multi-city). Find this token in the departure flight results.

It cannot be used together with booking_token.

Booking Flights
booking_token

Optional

Parameter is used to get booking options for the selected flights. Find this token in the flight results.

It cannot be used together with departure_token.
When using this token, parameters related to date and parameters inside "Advanced Filters" section won't affect the result.

Serpapi Parameters
engine

Required

Set parameter to google_flights to use the Google Flights API engine.

no_cache

Optional

Parameter will force SerpApi to fetch the Google Flights results even if a cached version is already present. A cache is served only if the query and all parameters are exactly the same. Cache expires after 1h. Cached searches are free, and are not counted towards your searches per month. It can be set to false (default) to allow results from the cache, or true to disallow results from the cache. no_cache and async parameters should not be used together.

async

Optional

Parameter defines the way you want to submit your search to SerpApi. It can be set to false (default) to open an HTTP connection and keep it open until you got your search results, or true to just submit your search to SerpApi and retrieve them later. In this case, you'll need to use our Searches Archive API to retrieve your results. async and no_cache parameters should not be used together. async should not be used on accounts with Ludicrous Speed enabled.

zero_trace

Optional

Enterprise only. Parameter enables ZeroTrace mode. It can be set to false (default) or true. Enable this mode to skip storing search parameters, search files, and search metadata on our servers. This may make debugging more difficult.

api_key

Required

Parameter defines the SerpApi private key to use.

output

Optional

Parameter defines the final output you want. It can be set to json (default) to get a structured JSON of the results, or html to get the raw html retrieved.

json_restrictor

Optional

Parameter defines the fields you want to restrict in the outputs for smaller, faster responses. See JSON Restrictor for more details.

API Results
JSON Results
JSON output includes structured data for Flight Results and Price Insights.

A search status is accessible through search_metadata.status. It flows this way: Processing -> Success || Error. If a search has failed, error will contain an error message. search_metadata.id is the search ID inside SerpApi.

HTML Results
This API does not have html response, just a text. search_metadata.prettify_html_file contains prettified version of result. It is displayed in playground.

API Examples
Typical Example
GET


https://serpapi.com/search.json?engine=google_flights&departure_id=PEK&arrival_id=AUS&outbound_date=2026-03-08&return_date=2026-03-14&currency=USD&hl=en

Code to integrate


Ruby

require "serpapi" 

client = SerpApi::Client.new(
  engine: "google_flights",
  departure_id: "PEK",
  arrival_id: "AUS",
  outbound_date: "2026-03-08",
  return_date: "2026-03-14",
  currency: "USD",
  hl: "en",
  api_key: "a35f0a1c35005075dcf44c7443ea970634f25eee07047e22a04226f04f9cd6c5"
)

results = client.search

JSON Example

{
  "search_metadata": {
    "id": "651a585815afff2d53eb9a5e",
    "status": "Success",
    "json_endpoint": "https://serpapi.com/searches/e65fd34e00db9b2b/651a585815afff2d53eb9a5e.json",
    "created_at": "2023-10-02 05:42:48 UTC",
    "processed_at": "2023-10-02 05:42:48 UTC",
    "google_flights_url": "https://www.google.com/travel/flights?hl=en",
    "raw_html_file": "https://serpapi.com/searches/e65fd34e00db9b2b/651a585815afff2d53eb9a5e.html",
    "prettify_html_file": "https://serpapi.com/searches/e65fd34e00db9b2b/651a585815afff2d53eb9a5e.prettify",
    "total_time_taken": 0.71
  },
  "search_parameters": {
    "engine": "google_flights",
    "hl": "en",
    "departure_id": "PEK",
    "arrival_id": "AUS",
    "outbound_date": "2023-10-03",
    "return_date": "2023-10-09",
    "currency": "USD"
  },
  "best_flights": [
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Beijing Capital International Airport",
            "id": "PEK",
            "time": "2023-10-03 15:10"
          },
          "arrival_airport": {
            "name": "Haneda Airport",
            "id": "HND",
            "time": "2023-10-03 19:35"
          },
          "duration": 205,
          "airplane": "Boeing 787",
          "airline": "ANA",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/NH.png",
          "travel_class": "Economy",
          "flight_number": "NH 962",
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 133 kg"
          ]
        },
        {
          "departure_airport": {
            "name": "Haneda Airport",
            "id": "HND",
            "time": "2023-10-03 21:05"
          },
          "arrival_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2023-10-03 15:10"
          },
          "duration": 605,
          "airplane": "Boeing 787",
          "airline": "ANA",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/NH.png",
          "travel_class": "Economy",
          "flight_number": "NH 126",
          "ticket_also_sold_by": [
            "United"
          ],
          "legroom": "32 in",
          "extensions": [
            "Above average legroom (32 in)",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 836 kg"
          ],
          "overnight": true
        },
        {
          "departure_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2023-10-03 19:01"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2023-10-03 23:59"
          },
          "duration": 178,
          "airplane": "Boeing 737MAX 9 Passenger",
          "airline": "United",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
          "travel_class": "Economy",
          "flight_number": "UA 2175",
          "legroom": "30 in",
          "extensions": [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power outlet",
            "Stream media to your device",
            "Carbon emissions estimate: 135 kg"
          ]
        }
      ],
      "layovers": [
        {
          "duration": 90,
          "name": "Haneda Airport",
          "id": "HND"
        },
        {
          "duration": 231,
          "name": "Los Angeles International Airport",
          "id": "LAX"
        }
      ],
      "total_duration": 1309,
      "carbon_emissions": {
        "this_flight": 1106000,
        "typical_for_this_route": 949000,
        "difference_percent": 17
      },
      "price": 2512,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      "departure_token": "W1siUEVLIiwiMjAyMy0xMC0wMyIsIkhORCIsbnVsbCwiTkgiLCI5NjIiXSxbIkhORCIsIjIwMjMtMTAtMDMiLCJMQVgiLG51bGwsIk5IIiwiMTI2Il0sWyJMQVgiLCIyMDIzLTEwLTAzIiwiQVVTIixudWxsLCJVQSIsIjIxNzUiXV0="
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Beijing Capital International Airport",
            "id": "PEK",
            "time": "2023-10-03 10:40"
          },
          "arrival_airport": {
            "name": "Incheon International Airport",
            "id": "ICN",
            "time": "2023-10-03 13:50"
          },
          "duration": 130,
          "airplane": "Airbus A330",
          "airline": "Asiana",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/OZ.png",
          "travel_class": "Economy",
          "flight_number": "OZ 332",
          "legroom": "32 in",
          "extensions": [
            "Above average legroom (32 in)",
            "In-seat power outlet",
            "On-demand video",
            "Carbon emissions estimate: 84 kg"
          ]
        },
        {
          "departure_airport": {
            "name": "Incheon International Airport",
            "id": "ICN",
            "time": "2023-10-03 20:55"
          },
          "arrival_airport": {
            "name": "San Francisco International Airport",
            "id": "SFO",
            "time": "2023-10-03 15:30"
          },
          "duration": 635,
          "airplane": "Airbus A350",
          "airline": "Asiana",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/OZ.png",
          "travel_class": "Economy",
          "flight_number": "OZ 212",
          "legroom": "32 in",
          "extensions": [
            "Above average legroom (32 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 619 kg"
          ],
          "overnight": true,
          "often_delayed_by_over_30_min": true
        },
        {
          "departure_airport": {
            "name": "San Francisco International Airport",
            "id": "SFO",
            "time": "2023-10-04 07:40"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2023-10-04 13:10"
          },
          "duration": 210,
          "airplane": "Boeing 737",
          "airline": "Alaska",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AS.png",
          "travel_class": "Economy",
          "flight_number": "AS 512",
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 175 kg"
          ]
        }
      ],
      "layovers": [
        {
          "duration": 425,
          "name": "Incheon International Airport",
          "id": "ICN"
        },
        {
          "duration": 970,
          "name": "San Francisco International Airport",
          "id": "SFO",
          "overnight": true
        }
      ],
      "total_duration": 2370,
      "carbon_emissions": {
        "this_flight": 880000,
        "typical_for_this_route": 949000,
        "difference_percent": -7
      },
      "price": 2513,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      "departure_token": "W1siUEVLIiwiMjAyMy0xMC0wMyIsIklDTiIsbnVsbCwiT1oiLCIzMzIiXSxbIklDTiIsIjIwMjMtMTAtMDMiLCJTRk8iLG51bGwsIk9aIiwiMjEyIl0sWyJTRk8iLCIyMDIzLTEwLTA0IiwiQVVTIixudWxsLCJBUyIsIjUxMiJdXQ=="
    },
    ...
  ],
  "other_flights": [
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Beijing Capital International Airport",
            "id": "PEK",
            "time": "2023-10-03 18:30"
          },
          "arrival_airport": {
            "name": "Incheon International Airport",
            "id": "ICN",
            "time": "2023-10-03 21:40"
          },
          "duration": 130,
          "airplane": "Boeing 737MAX 8 Passenger",
          "airline": "Korean Air",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
          "travel_class": "Economy",
          "flight_number": "KE 860",
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 81 kg"
          ]
        },
        {
          "departure_airport": {
            "name": "Incheon International Airport",
            "id": "ICN",
            "time": "2023-10-04 09:20"
          },
          "arrival_airport": {
            "name": "Dallas/Fort Worth International Airport",
            "id": "DFW",
            "time": "2023-10-04 08:00"
          },
          "duration": 760,
          "airplane": "Boeing 787",
          "airline": "Korean Air",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
          "travel_class": "Economy",
          "flight_number": "KE 31",
          "legroom": "33 in",
          "extensions": [
            "Above average legroom (33 in)",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 807 kg"
          ],
          "overnight": true
        },
        {
          "departure_airport": {
            "name": "Dallas/Fort Worth International Airport",
            "id": "DFW",
            "time": "2023-10-04 09:35"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2023-10-04 10:40"
          },
          "duration": 65,
          "airplane": "Embraer 175",
          "airline": "American",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
          "travel_class": "Economy",
          "flight_number": "AA 3489",
          "legroom": "30 in",
          "extensions": [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 60 kg"
          ]
        }
      ],
      "layovers": [
        {
          "duration": 700,
          "name": "Incheon International Airport",
          "id": "ICN",
          "overnight": true
        },
        {
          "duration": 95,
          "name": "Dallas/Fort Worth International Airport",
          "id": "DFW"
        }
      ],
      "total_duration": 1750,
      "carbon_emissions": {
        "this_flight": 949000,
        "typical_for_this_route": 949000,
        "difference_percent": 0
      },
      "price": 3521,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      "departure_token": "W1siUEVLIiwiMjAyMy0xMC0wMyIsIklDTiIsbnVsbCwiS0UiLCI4NjAiXSxbIklDTiIsIjIwMjMtMTAtMDQiLCJERlciLG51bGwsIktFIiwiMzEiXSxbIkRGVyIsIjIwMjMtMTAtMDQiLCJBVVMiLG51bGwsIkFBIiwiMzQ4OSJdXQ=="
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Beijing Capital International Airport",
            "id": "PEK",
            "time": "2023-10-03 18:30"
          },
          "arrival_airport": {
            "name": "Incheon International Airport",
            "id": "ICN",
            "time": "2023-10-03 21:40"
          },
          "duration": 130,
          "airplane": "Boeing 737MAX 8 Passenger",
          "airline": "Korean Air",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
          "travel_class": "Economy",
          "flight_number": "KE 860",
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 81 kg"
          ]
        },
        {
          "departure_airport": {
            "name": "Incheon International Airport",
            "id": "ICN",
            "time": "2023-10-04 09:20"
          },
          "arrival_airport": {
            "name": "Hartsfield-Jackson Atlanta International Airport",
            "id": "ATL",
            "time": "2023-10-04 09:50"
          },
          "duration": 810,
          "airplane": "Boeing 747",
          "airline": "Korean Air",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
          "travel_class": "Economy",
          "flight_number": "KE 35",
          "legroom": "33 in",
          "extensions": [
            "Above average legroom (33 in)",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 954 kg"
          ],
          "overnight": true
        },
        {
          "departure_airport": {
            "name": "Hartsfield-Jackson Atlanta International Airport",
            "id": "ATL",
            "time": "2023-10-04 12:59"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2023-10-04 14:18"
          },
          "duration": 139,
          "airplane": "Airbus A321",
          "airline": "Delta",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
          "travel_class": "Economy",
          "flight_number": "DL 1384",
          "ticket_also_sold_by": [
            "Korean Air"
          ],
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Free Wi-Fi",
            "In-seat power & USB outlets",
            "Live TV",
            "Carbon emissions estimate: 109 kg"
          ]
        }
      ],
      "layovers": [
        {
          "duration": 700,
          "name": "Incheon International Airport",
          "id": "ICN",
          "overnight": true
        },
        {
          "duration": 189,
          "name": "Hartsfield-Jackson Atlanta International Airport",
          "id": "ATL"
        }
      ],
      "total_duration": 1968,
      "carbon_emissions": {
        "this_flight": 1146000,
        "typical_for_this_route": 949000,
        "difference_percent": 21
      },
      "price": 3521,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      "departure_token": "W1siUEVLIiwiMjAyMy0xMC0wMyIsIklDTiIsbnVsbCwiS0UiLCI4NjAiXSxbIklDTiIsIjIwMjMtMTAtMDQiLCJBVEwiLG51bGwsIktFIiwiMzUiXSxbIkFUTCIsIjIwMjMtMTAtMDQiLCJBVVMiLG51bGwsIkRMIiwiMTM4NCJdXQ=="
    },
    ...
  ],
  "price_insights": {
    "lowest_price": 2512,
    "price_level": "high",
    "typical_price_range": [
      1500,
      1900
    ],
    "price_history": [
      [
        1691424000,
        1877
      ],
      [
        1691510400,
        1915
      ],
      ...,
      [
        1696089600,
        2309
      ],
      [
        1696176000,
        2512
      ]
    ]
  },
  "airports": [
    {
      "departure": [
        {
          "airport": {
            "name": "Beijing Capital International Airport",
            "id": "PEK"
          },
          "city": "Beijing",
          "country": "China",
          "country_code": "CN",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9v_tNYxaummsU2qbFn8zuYzkcG0x6qCvqB2gbBnx-2FVlZZPsnkvUXGk07vxotk-0vRQMUYCjj2d4Wg",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzsj_yw6o3vb8i54_D21VgI5rTohxexQkZ0TrZKDKJwTSKw2yqnRYLoIcBWIY50BlHo-OPMm68zbUO-qnFvmQmm6jvtWPwo7WOzjNGX_A"
        }
      ],
      "arrival": [
        {
          "airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS"
          },
          "city": "Austin",
          "country": "United States",
          "country_code": "US",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdjkMcBZuGRD1MjnuLQvdGtpTk0RyjdYs0Z8JsPtfIjer-6VvmfmMLxzvBkeyUrhf_focikfda4rVHg",
          "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQ73FSj9E8pKaNvjWKyEDQGfLV-pky_onARvOY-zHWvQ-hOuPJSqyyXzvyg4-kGGAcZxdO6T5SYGWBzrX8x6MSPq7gBHsSLzX9MYjFJWA"
        }
      ]
    },
    {
      "departure": [
        {
          "airport": {
            "name": "John F. Kennedy International Airport",
            "id": "JFK"
          },
          "city": "New York",
          "country": "United States",
          "country_code": "US",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQXj9frEFT6DZoIoTn-QoPoV3oZxBBgHclLt7dHsHG6B1AGu8zJzYmj_4rFxyc",
          "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSO9yu_buXnYWg4cXn3J8RU6YZyOG59BovV4PfIt8x5_lc5F8-9l9Yxv9oIH8"
        }
      ],
      "arrival": [
        {
          "airport": {
            "name": "London Heathrow Airport",
            "id": "LHR"
          },
          "city": "London",
          "country": "United Kingdom",
          "country_code": "GB",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS1nKcZksZTFlL5sKtK3HZf2wPzU-QdOcE6XQulTyP5WBGXlb1D-8FbfyCTFbU",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_kdUQHgJlIUl0c3uHq6LfVRfHRyKP9dJUpge3DEx8HmxldzLZQw1xCdLfYM"
        }
      ]
    }
  ],
  ...
}
Example with 
departure_id
:
CDG,ORY
(multiple departure airports)
GET


https://serpapi.com/search.json?engine=google_flights&departure_id=CDG,ORY&arrival_id=LAX&outbound_date=2026-03-08&return_date=2026-03-14&currency=USD&hl=en

Code to integrate


Ruby

require "serpapi" 

client = SerpApi::Client.new(
  engine: "google_flights",
  departure_id: "CDG,ORY",
  arrival_id: "LAX",
  outbound_date: "2026-03-08",
  return_date: "2026-03-14",
  currency: "USD",
  hl: "en",
  api_key: "a35f0a1c35005075dcf44c7443ea970634f25eee07047e22a04226f04f9cd6c5"
)

results = client.search

JSON Example

{
  ...
  "best_flights": [
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG",
            "time": "2024-03-20 18:50"
          },
          "arrival_airport": {
            "name": "Istanbul Airport",
            "id": "IST",
            "time": "2024-03-21 00:20"
          },
          ...
        },
        {
          "departure_airport": {
            "name": "Istanbul Airport",
            "id": "IST",
            "time": "2024-03-21 08:00"
          },
          "arrival_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2024-03-21 11:55"
          },
          ...
        }
      ],
      "layovers": [
        {
          "duration": 460,
          "name": "Istanbul Airport",
          "id": "IST",
          "overnight": true
        }
      ],
      "total_duration": 1505,
      "price": 887,
      "type": "Round trip",
      ...
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Paris-Orly Airport",
            "id": "ORY",
            "time": "2024-03-20 07:00"
          },
          "arrival_airport": {
            "name": "London Gatwick Airport",
            "id": "LGW",
            "time": "2024-03-20 07:10"
          },
          ...
        },
        {
          "departure_airport": {
            "name": "London Gatwick Airport",
            "id": "LGW",
            "time": "2024-03-20 10:35"
          },
          "arrival_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2024-03-20 15:10"
          },
          ...
        }
      ],
      "layovers": [
        {
          "duration": 205,
          "name": "London Gatwick Airport",
          "id": "LGW"
        }
      ],
      "total_duration": 970,
      "price": 890,
      "type": "Round trip",
      ...
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG",
            "time": "2024-03-20 13:15"
          },
          "arrival_airport": {
            "name": "Dublin Airport",
            "id": "DUB",
            "time": "2024-03-20 14:05"
          },
          ...
        },
        {
          "departure_airport": {
            "name": "Dublin Airport",
            "id": "DUB",
            "time": "2024-03-20 15:20"
          },
          "arrival_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2024-03-20 19:35"
          },
          ...
        }
      ],
      "layovers": [
        {
          "duration": 75,
          "name": "Dublin Airport",
          "id": "DUB"
        }
      ],
      "total_duration": 860,
      "price": 1240,
      "type": "Round trip",
      ...
    }
  ],
  "airports": [
    {
      "departure": [
        {
          "airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG"
          },
          "city": "Paris",
          "country": "France",
          "country_code": "FR",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9v_tNYxaummsU2qbFn8zuYzkcG0x6qCvqB2gbBnx-2FVlZZPsnkvUXGk07vxotk-0vRQMUYCjj2d4Wg",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzsj_yw6o3vb8i54_D21VgI5rTohxexQkZ0TrZKDKJwTSKw2yqnRYLoIcBWIY50BlHo-OPMm68zbUO-qnFvmQmm6jvtWPwo7WOzjNGX_A"
        },
        {
          "airport": {
            "name": "Paris-Orly Airport",
            "id": "ORY"
          },
          "city": "Paris",
          "country": "France",
          "country_code": "FR",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGx8ii2KbSDdbdzfKye5oDN2bwBA6audqI7XUEf2iMRZezpn_ZbQe1ZIuvUSH-8XOMe958umDwSsAF1w",
          "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyQJ-woNs0iO22mPSkmRUM5gcsTbbYeypQ6BBTeFxXr90mqTxZl57Fdq2CDuLn4w7cKZ8TT9_zZhOpF57rIpA7yWKQnqKvkKIf9Y-qJDo"
        },
        ...
      ],
      "arrival": [
        {
          "airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX"
          },
          "city": "Los Angeles",
          "country": "United States",
          "country_code": "US",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdjkMcBZuGRD1MjnuLQvdGtpTk0RyjdYs0Z8JsPtfIjer-6VvmfmMLxzvBkeyUrhf_focikfda4rVHg",
          "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQ73FSj9E8pKaNvjWKyEDQGfLV-pky_onARvOY-zHWvQ-hOuPJSqyyXzvyg4-kGGAcZxdO6T5SYGWBzrX8x6MSPq7gBHsSLzX9MYjFJWA"
        },
        ...
      ]
    },
    ...
  ],
  ...
}
Multi-city example
Use departure_token to select the flight and get flights for the next leg of itinerary.

GET


https://serpapi.com/search.json?engine=google_flights&currency=USD&hl=en&type=3&multi_city_json=[{"departure_id":"CDG","arrival_id":"NRT","date":"2026-03-14"},{"departure_id":"NRT","arrival_id":"LAX,SEA","date":"2026-03-21"},{"departure_id":"LAX,SEA","arrival_id":"AUS","date":"2026-03-28","times":"8,18,9,23"}]

Code to integrate


Ruby

require "serpapi" 

client = SerpApi::Client.new(
  engine: "google_flights",
  currency: "USD",
  hl: "en",
  type: "3",
  multi_city_json: "[{"departure_id":"CDG","arrival_id":"NRT","date":"2026-03-14"},{"departure_id":"NRT","arrival_id":"LAX,SEA","date":"2026-03-21"},{"departure_id":"LAX,SEA","arrival_id":"AUS","date":"2026-03-28","times":"8,18,9,23"}]",
  api_key: "a35f0a1c35005075dcf44c7443ea970634f25eee07047e22a04226f04f9cd6c5"
)

results = client.search

JSON Example

{
  ...
  "best_flights": [
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG",
            "time": "2024-07-16 09:10"
          },
          "arrival_airport": {
            "name": "Montréal-Pierre Elliott Trudeau International Airport",
            "id": "YUL",
            "time": "2024-07-16 10:45"
          },
          ...
        },
        {
          "departure_airport": {
            "name": "Montréal-Pierre Elliott Trudeau International Airport",
            "id": "YUL",
            "time": "2024-07-16 12:50"
          },
          "arrival_airport": {
            "name": "Narita International Airport",
            "id": "NRT",
            "time": "2024-07-17 15:25"
          },
          ...
        }
      ],
      "layovers": [
        {
          "duration": 125,
          "name": "Montréal-Pierre Elliott Trudeau International Airport",
          "id": "YUL"
        }
      ],
      "total_duration": 1395,
      "price": 3124,
      "type": "Multi-city",
      ...
      "departure_token": "WyJDalJJU21sa1NWOWZibGMwVGpCQlEwZGplbmRDUnkwdExTMHRMUzB0TFhWcWFHMHpNMEZCUVVGQlIyRk5lVUZqU2tKbFJXRkJFZ2xCUXpnM05YeEJRelVhQ3dqUGlCTVFBaG9EVlZORU9CeHd6NGdUIixbWyJDREciLCIyMDI0LTA3LTE2IiwiWVVMIixudWxsLCJBQyIsIjg3NSJdLFsiWVVMIiwiMjAyNC0wNy0xNiIsIk5SVCIsbnVsbCwiQUMiLCI1Il1dXQ=="
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG",
            "time": "2024-07-16 13:25"
          },
          "arrival_airport": {
            "name": "Shanghai Pudong International Airport",
            "id": "PVG",
            "time": "2024-07-17 07:00"
          },
          ...
        },
        {
          "departure_airport": {
            "name": "Shanghai Pudong International Airport",
            "id": "PVG",
            "time": "2024-07-17 09:05"
          },
          "arrival_airport": {
            "name": "Narita International Airport",
            "id": "NRT",
            "time": "2024-07-17 12:50"
          },
          ...
        }
      ],
      "layovers": [
        {
          "duration": 125,
          "name": "Shanghai Pudong International Airport",
          "id": "PVG"
        }
      ],
      "total_duration": 985,
      "price": 4174,
      "type": "Multi-city",
      ...
      "departure_token": "WyJDalJJU21sa1NWOWZibGMwVGpCQlEwZGplbmRDUnkwdExTMHRMUzB0TFhWcWFHMHpNMEZCUVVGQlIyRk5lVUZqU2tKbFJXRkJFZ3ROVlRVMU5IeE5WVFV5TXhvTENQYThHUkFDR2dOVlUwUTRISEQydkJrPSIsW1siQ0RHIiwiMjAyNC0wNy0xNiIsIlBWRyIsbnVsbCwiTVUiLCI1NTQiXSxbIlBWRyIsIjIwMjQtMDctMTciLCJOUlQiLG51bGwsIk1VIiwiNTIzIl1dXQ=="
    }
  ],
  "other_flights": [
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG",
            "time": "2024-07-16 21:20"
          },
          "arrival_airport": {
            "name": "Shanghai Pudong International Airport",
            "id": "PVG",
            "time": "2024-07-17 14:40"
          },
          ...
        },
        {
          "departure_airport": {
            "name": "Shanghai Pudong International Airport",
            "id": "PVG",
            "time": "2024-07-17 16:55"
          },
          "arrival_airport": {
            "name": "Narita International Airport",
            "id": "NRT",
            "time": "2024-07-17 20:55"
          },
          ...
        }
      ],
      "layovers": [
        {
          "duration": 135,
          "name": "Shanghai Pudong International Airport",
          "id": "PVG"
        }
      ],
      "total_duration": 995,
      "price": 4174,
      "type": "Multi-city",
      ...
      "departure_token": "WyJDalJJU21sa1NWOWZibGMwVGpCQlEwZGplbmRDUnkwdExTMHRMUzB0TFhWcWFHMHpNMEZCUVVGQlIyRk5lVUZqU2tKbFJXRkJFZ3ROVlRVM01IeE5WVEkzTVJvTENQYThHUkFDR2dOVlUwUTRISEQydkJrPSIsW1siQ0RHIiwiMjAyNC0wNy0xNiIsIlBWRyIsbnVsbCwiTVUiLCI1NzAiXSxbIlBWRyIsIjIwMjQtMDctMTciLCJOUlQiLG51bGwsIk1VIiwiMjcxIl1dXQ=="
    },
    ...
  ],
  "airports": [
    {
      "departure": [
        {
          "airport": {
            "name": "Paris Charles de Gaulle Airport",
            "id": "CDG"
          },
          "city": "Paris",
          "country": "France",
          "country_code": "FR",
          "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9v_tNYxaummsU2qbFn8zuYzkcG0x6qCvqB2gbBnx-2FVlZZPsnkvUXGk07vxotk-0vRQMUYCjj2d4Wg",
          "thumbnail": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzsj_yw6o3vb8i54_D21VgI5rTohxexQkZ0TrZKDKJwTSKw2yqnRYLoIcBWIY50BlHo-OPMm68zbUO-qnFvmQmm6jvtWPwo7WOzjNGX_A"
        },
        {
          "airport": {
            "name": "Narita International Airport",
            "id": "NRT"
          },
          "city": "Tokyo",
          "country": "Japan",
          "country_code": "JP",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLnIToEgwiM_jV3cbw5eQZoUAIg6XqdrJAiClDyyg0w-JBSRN5ZeOT-iFb3SvwkwP1uoBCmT-gKE5VcyCYf-xq4guL4NAFICSaNyOnYOA",
          "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLnIToEgwiM_jV3cbw5eQZoUAIg6XqdrJAiClDyyg0w-JBSRN5ZeOT-iFb3SvwkwP1uoBCmT-gKE5VcyCYf-xq4guL4NAFICSaNyOnYOA"
        },
        ...
      ],
      "arrival": [
        {
          "airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS"
          },
          "city": "Austin",
          "country": "United States",
          "country_code": "US",
          "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKdjkMcBZuGRD1MjnuLQvdGtpTk0RyjdYs0Z8JsPtfIjer-6VvmfmMLxzvBkeyUrhf_focikfda4rVHg",
          "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQ73FSj9E8pKaNvjWKyEDQGfLV-pky_onARvOY-zHWvQ-hOuPJSqyyXzvyg4-kGGAcZxdO6T5SYGWBzrX8x6MSPq7gBHsSLzX9MYjFJWA"
        },
        ...
      ]
    },
    ...
  ],
  ...
}
Example with 
exclude_basic
:
true
(Economy (exclude basic))
Use exclude_basic to filter Economy flights which include carry-on bags and free seat selection.


JSON Example

{
  "search_metadata": {
    "id": "68d55f17fc8a2b590a866dc5",
    "status": "Success",
    "json_endpoint": "https://www.serpapi.com/searches/247809397c7209a6/68d55f17fc8a2b590a866dc5.json",
    "created_at": "2025-09-25 15:26:15 UTC",
    "processed_at": "2025-09-25 15:26:15 UTC",
    "google_flights_url": "https://www.google.com/travel/flights?hl=en&gl=us&curr=USD&tfs=CBwQAhoeEgoyMDI1LTEwLTE0agcIARIDTEFYcgcIARIDQVVTGh4SCjIwMjUtMTAtMjFqBwgBEgNBVVNyBwgBEgNMQVhCAQFIAXABmAEByAEB&tfu=EgIIAQ",
    "raw_html_file": "https://www.serpapi.com/searches/247809397c7209a6/68d55f17fc8a2b590a866dc5.html",
    "prettify_html_file": "https://www.serpapi.com/searches/247809397c7209a6/68d55f17fc8a2b590a866dc5.prettify",
    "total_time_taken": 1.37
  },
  "search_parameters": {
    "engine": "google_flights",
    "hl": "en",
    "gl": "us",
    "departure_id": "LAX",
    "arrival_id": "AUS",
    "outbound_date": "2025-10-14",
    "return_date": "2025-10-21",
    "travel_class": 1,
    "currency": "USD",
    "exclude_basic": true
  },
  "best_flights": [
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2025-10-14 11:30"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2025-10-14 16:25"
          },
          "duration": 175,
          "airplane": "Boeing 737MAX 8 Passenger",
          "airline": "Southwest",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/WN.png",
          "travel_class": "Economy",
          "flight_number": "WN 649",
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Wi-Fi",
            "In-seat USB outlet",
            "Stream media to your device",
            "Carbon emissions estimate: 150 kg"
          ]
        }
      ],
      "total_duration": 175,
      "carbon_emissions": {
        "this_flight": 151000,
        "typical_for_this_route": 187000,
        "difference_percent": -19
      },
      "price": 393,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/WN.png",
      "extensions": [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight"
      ],
      "departure_token": "WyJDalJJUW05cFJuUndUakJuTFZWQlJrRXdTbEZDUnkwdExTMHRMUzB0TFhkaVltWm1Na0ZCUVVGQlIycFdXSGhyUzI1TWJIbEJFZ1ZYVGpZME9Sb0xDUGF5QWhBQ0dnTlZVMFE0SEhEMnNnST0iLFtbIkxBWCIsIjIwMjUtMTAtMTQiLCJBVVMiLG51bGwsIldOIiwiNjQ5Il1dXQ=="
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2025-10-14 10:04"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2025-10-14 15:10"
          },
          "duration": 186,
          "airplane": "Boeing 737",
          "airline": "Delta",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
          "travel_class": "Economy",
          "flight_number": "DL 986",
          "legroom": "31 in",
          "extensions": [
            "Average legroom (31 in)",
            "Free Wi-Fi",
            "In-seat power & USB outlets",
            "Live TV",
            "Carbon emissions estimate: 175 kg"
          ]
        }
      ],
      "total_duration": 186,
      "carbon_emissions": {
        "this_flight": 176000,
        "typical_for_this_route": 187000,
        "difference_percent": -6
      },
      "price": 464,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
      "extensions": [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight"
      ],
      "departure_token": "WyJDalJJUW05cFJuUndUakJuTFZWQlJrRXdTbEZDUnkwdExTMHRMUzB0TFhkaVltWm1Na0ZCUVVGQlIycFdXSGhyUzI1TWJIbEJFZ1ZFVERrNE5ob0xDTDdxQWhBQ0dnTlZVMFE0SEhDKzZnST0iLFtbIkxBWCIsIjIwMjUtMTAtMTQiLCJBVVMiLG51bGwsIkRMIiwiOTg2Il1dXQ=="
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2025-10-14 07:45"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2025-10-14 12:44"
          },
          "duration": 179,
          "airplane": "Boeing 737",
          "airline": "American",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
          "travel_class": "Economy",
          "flight_number": "AA 821",
          "ticket_also_sold_by": [
            "Alaska"
          ],
          "legroom": "30 in",
          "extensions": [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "Stream media to your device",
            "Carbon emissions estimate: 185 kg"
          ]
        }
      ],
      "total_duration": 179,
      "carbon_emissions": {
        "this_flight": 186000,
        "typical_for_this_route": 187000,
        "difference_percent": -1
      },
      "price": 473,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
      "extensions": [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight"
      ],
      "departure_token": "WyJDalJJUW05cFJuUndUakJuTFZWQlJrRXdTbEZDUnkwdExTMHRMUzB0TFhkaVltWm1Na0ZCUVVGQlIycFdXSGhyUzI1TWJIbEJFZ1ZCUVRneU1Sb0xDTUh4QWhBQ0dnTlZVMFE0SEhEQjhRST0iLFtbIkxBWCIsIjIwMjUtMTAtMTQiLCJBVVMiLG51bGwsIkFBIiwiODIxIl1dXQ=="
    },
    {
      "flights": [
        {
          "departure_airport": {
            "name": "Los Angeles International Airport",
            "id": "LAX",
            "time": "2025-10-14 10:35"
          },
          "arrival_airport": {
            "name": "Austin-Bergstrom International Airport",
            "id": "AUS",
            "time": "2025-10-14 15:38"
          },
          "duration": 183,
          "airplane": "Boeing 737MAX 8 Passenger",
          "airline": "United",
          "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
          "travel_class": "Economy",
          "flight_number": "UA 1990",
          "legroom": "30 in",
          "extensions": [
            "Average legroom (30 in)",
            "Wi-Fi for a fee",
            "In-seat power & USB outlets",
            "On-demand video",
            "Carbon emissions estimate: 197 kg"
          ]
        }
      ],
      "total_duration": 183,
      "carbon_emissions": {
        "this_flight": 197000,
        "typical_for_this_route": 187000,
        "difference_percent": 5
      },
      "price": 473,
      "type": "Round trip",
      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
      "extensions": [
        "Checked baggage for a fee",
        "Bag and fare conditions depend on the return flight"
      ],
      "departure_token": "WyJDalJJUW05cFJuUndUakJuTFZWQlJrRXdTbEZDUnkwdExTMHRMUzB0TFhkaVltWm1Na0ZCUVVGQlIycFdXSGhyUzI1TWJIbEJFZ1pWUVRFNU9UQWFDd2pCOFFJUUFob0RWVk5FT0J4d3dmRUMiLFtbIkxBWCIsIjIwMjUtMTAtMTQiLCJBVVMiLG51bGwsIlVBIiwiMTk5MCJdXV0="
    }
  ],
  ...
}
JSON structure overview
{
  ...
  "best_flights": [
    // best_flights is not always returned
    {
      "flights": [
        {
          "departure_airport": {
            "name": "String - Departure airport name",
            "id": "String - Departure airport code",
            "time": "String - Departure time"
          },
          "arrival_airport": {
            "name": "String - Arrival airport name",
            "id": "String - Arrival airport code",
            "time": "String - Arrival time"
          },
          "duration": "Integer - Flight duration, in minutes",
          "airplane": "String - Airplane model",
          "airline": "String - Name of the airline",
          "airline_logo": "String - URL to the logo of the airline",
          "travel_class": "String - Travel class",
          "flight_number": "String - The flight number",
          "extensions": "Array - A list of flight features",
          "ticket_also_sold_by": "Array - A list of other sellers",
          "legroom": "String - The legroom, including unit",
          "overnight": "Boolean - Returns 'true' if the flight is overnight",
          "often_delayed_by_over_30_min": "Boolean - Returns 'true' if the flight is often delayed by 30+ min.",
          "plane_and_crew_by": "String - Information about operating airline that provides the plane and the crew",
        }
      ],
      "layovers": [
        {
          "duration": "Integer - Duration of the layover, in minutes",
          "name": "String - Name of the airport for the layover",
          "id": "String - The airport code for the layover",
          "overnight": "Boolean - Returns 'true' if the layover is overnight",
        }
      ],
      "total_duration": "Integer - Total minutes of all flights and layovers",
      "carbon_emissions": {
        "this_flight": "Integer - The amount of carbon emissions of the flight, in grams",
        "typical_for_this_route": "Integer - Typical amount of carbon emissions for the route, in grams",
        "difference_percent": "Integer - The carbon emissions difference between the flight and typical value, in percent",
      },
      "price": "Integer - This ticket price in the selected currency, the default currency is USD",
      "type": "String - The type of the flight. It's a reflection of the request parameter `type`",
      "airline_logo": "String - URL to the logo of mixed airlines",
      "extensions": "Array - A list of features of the entire flight",
      "departure_token": "String - The token for retrieving returning flights when the flight type is 'Round trip'",
      "booking_token": "String - The token for retrieving booking options for selected flights",
    }
  ],
  "other_flights": [
    // The same structure as best_flights
    // When the results are not separated into best_flights and other_flights, they are in other_flights
  ]
  "price_insights": {
    "lowest_price": "Integer - The lowest price among the returned flights",
    "price_level": "String - Price level of the lowest_price",
    "typical_price_range": "Array - A two-integer array, indicating the low bound and high bound of 'typical' price of this flight",
    "price_history": "Array - A two-integer array, where the first element is the timestamp, and the second one is the price",
  },
  "airports": [
    {
      "departure": [
        {
          "airport": {
            "name": "String - Departure airport name",
            "id": "String - Departure airport code"
          },
          "city": "String - Departure city",
          "country": "String - Departure country name",
          "country_code": "String - Departure country code",
          "image": "String - URL to the image of the departure city",
          "thumbnail": "String - URL to the thumbnail image of the departure city"
        },
      ],
      "arrival": [
        {
          "airport": {
            "name": "String - Arrival airport name",
            "id": "String - Arrival airport code"
          },
          "city": "String - Arrival city",
          "country": "String - Arrival country name",
          "country_code": "String - Arrival country code",
          "image": "String - URL to the image of the arrival city",
          "thumbnail": "String - URL to the thumbnail image of the arrival city"
        },
      ]
    },
  ],
  ...
}
Api Status ‧GitHub ‧Legal ‧Security ‧Libraries ‧Release Notes ‧Public Roadmap ‧Support
© 2016-2026 SerpApi, LLC.

