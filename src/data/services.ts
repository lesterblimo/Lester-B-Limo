export type ServiceSlug =
	| 'airport-transportation'
	| 'corporate-transportation'
	| 'private-transportation'
	| 'group-transportation'
	| 'weddings-special-events'
	| 'hourly-chauffeur';

export interface ServiceFeature {
	title: string;
	description: string;
}

export interface Service {
	slug: ServiceSlug;
	name: string;
	eyebrow: string;
	heroTitle: string;
	heroAccent: string;
	heroDescription: string;
	cardDescription: string;
	seoTitle: string;
	seoDescription: string;
	image: string;
	imageAlt: string;
	introTitle: string;
	intro: string[];
	features: ServiceFeature[];
	useCases: string[];
	quoteHref: string;
}

export const services: Service[] = [
	{
		slug: 'airport-transportation',
		name: 'Airport Transportation',
		eyebrow: 'Airport transportation',
		heroTitle: 'Airport Transportation',
		heroAccent: 'Made Simple',
		heroDescription:
			'Thoughtful pickup and drop-off service built around your flight, luggage, and transportation needs.',
		cardDescription:
			'Thoughtful pickup and drop-off service built around your flight and luggage needs.',
		seoTitle: 'Airport Transportation | Lester Pearson Limousine',
		seoDescription:
			'Private airport transportation with scheduled pickups, flight-aware service, professional chauffeurs, and luggage-friendly executive vehicles.',
		image: '/images/airport-business-travelers-real.jpg',
		imageAlt: 'Business travelers walking through an airport terminal with luggage',
		introTitle: 'A quieter way to navigate airport travel',
		intro: [
			'From a scheduled pickup to the final drop-off, each part of the airport transfer is coordinated around the trip.',
			'Executive SUVs and Executive Sprinter service provide options for private travelers, groups, and their luggage.',
		],
		features: [
			{
				title: 'Scheduled pickups',
				description: 'Pickup and drop-off details are arranged around the planned airport journey.',
			},
			{
				title: 'Flight-aware service',
				description: 'Transportation is coordinated with the timing of the traveler’s flight.',
			},
			{
				title: 'Meet-and-greet availability',
				description: 'Meet-and-greet service can be included when it suits the pickup plan.',
			},
			{
				title: 'Luggage-friendly vehicles',
				description: 'Choose an executive SUV or Sprinter according to the group and luggage needs.',
			},
		],
		useCases: [
			'Airport pickups',
			'Airport drop-offs',
			'Executive airport transfers',
			'Private airport transportation',
		],
		quoteHref: '/quote/?service=airport-transportation',
	},
	{
		slug: 'corporate-transportation',
		name: 'Corporate Transportation',
		eyebrow: 'Corporate transportation',
		heroTitle: 'Transportation',
		heroAccent: 'Built for Business',
		heroDescription:
			'Professional executive travel for airport transfers, meetings, roadshows, conferences, and client care.',
		cardDescription:
			'Dependable executive travel for meetings, roadshows, conferences, and client care.',
		seoTitle: 'Corporate Transportation | Lester Pearson Limousine',
		seoDescription:
			'Professional corporate transportation for executive airport transfers, meetings, roadshows, conferences, events, and client travel.',
		image: '/images/hero-cadillac-escalade-road.webp',
		imageAlt: 'Black executive SUV traveling along a tree-lined road',
		introTitle: 'Executive service shaped around the calendar',
		intro: [
			'Business travel calls for transportation that supports the itinerary instead of adding another complication to it.',
			'Lester Pearson Limousine serves executive airport transfers, meetings, roadshows, conferences, corporate events, and client transportation.',
		],
		features: [
			{
				title: 'Executive airport transfers',
				description: 'Professional transportation between the airport and the next business destination.',
			},
			{
				title: 'Meetings and roadshows',
				description: 'Executive travel arranged around a business schedule and its destinations.',
			},
			{
				title: 'Conferences and events',
				description: 'Transportation for conference days and planned corporate gatherings.',
			},
			{
				title: 'Client transportation',
				description: 'A professional ride for guests, colleagues, and business clients.',
			},
		],
		useCases: ['Executive travel', 'Meetings', 'Roadshows', 'Conferences and corporate events'],
		quoteHref: '/quote/?service=corporate-transportation',
	},
	{
		slug: 'private-transportation',
		name: 'Private Transportation',
		eyebrow: 'Private transportation',
		heroTitle: 'Private Travel',
		heroAccent: 'On Your Schedule',
		heroDescription:
			'Discreet, door-to-door transportation for appointments, evenings out, and personal travel.',
		cardDescription:
			'Discreet, door-to-door service for appointments, evenings out, and personal travel.',
		seoTitle: 'Private Transportation | Lester Pearson Limousine',
		seoDescription:
			'Discreet private transportation and door-to-door chauffeur service for appointments, evenings out, and personal travel.',
		image: '/images/hero-cadillac-escalade-road.webp',
		imageAlt: 'Black executive SUV traveling on a quiet road',
		introTitle: 'Door-to-door service for the day ahead',
		intro: [
			'Private transportation keeps the focus on the destination, with a professional chauffeur and an executive vehicle arranged for the trip.',
			'It is a comfortable option for appointments, evenings out, and personal transportation throughout the day.',
		],
		features: [
			{
				title: 'Door-to-door transportation',
				description: 'A private ride planned between the pickup point and destination.',
			},
			{
				title: 'Appointments',
				description: 'Professional transportation for scheduled personal appointments.',
			},
			{
				title: 'Evenings out',
				description: 'Comfortable private travel for an evening itinerary.',
			},
			{
				title: 'Personal travel',
				description: 'Discreet transportation for the places the day needs to take you.',
			},
		],
		useCases: ['Appointments', 'Evenings out', 'Personal travel', 'Private door-to-door rides'],
		quoteHref: '/quote/?service=private-transportation',
	},
	{
		slug: 'group-transportation',
		name: 'Group Transportation',
		eyebrow: 'Group transportation',
		heroTitle: 'Group Travel',
		heroAccent: 'Made Comfortable',
		heroDescription:
			'Coordinated group transportation in an Executive Sprinter with seating for 12–14 passengers.',
		cardDescription:
			'Comfortable, coordinated group movement in a premium front-facing-seat Sprinter.',
		seoTitle: 'Group Transportation | Lester Pearson Limousine',
		seoDescription:
			'Comfortable group transportation in an Executive Sprinter with front-facing seating, a high-roof cabin, and room for 12–14 passengers.',
		image: '/images/fleet-mercedes-sprinter-black.webp',
		imageAlt: 'Black Mercedes-Benz Sprinter passenger van outside a building',
		introTitle: 'Keep the group moving together',
		intro: [
			'The Executive Sprinter brings group transportation into one comfortable, coordinated ride.',
			'Its front-facing seating, high-roof cabin, passenger interior, and luggage capacity are suited to groups of 12–14 passengers.',
		],
		features: [
			{
				title: '12–14 passengers',
				description: 'Passenger capacity suited to coordinated group transportation.',
			},
			{
				title: 'Front-facing seating',
				description: 'A passenger layout designed around a comfortable group ride.',
			},
			{
				title: 'High-roof cabin',
				description: 'A spacious cabin for group travel in the Executive Sprinter.',
			},
			{
				title: 'Large luggage capacity',
				description: 'Room for the luggage that accompanies the group’s trip.',
			},
		],
		useCases: ['Group transportation', 'Airport transportation', 'Conferences', 'Corporate events'],
		quoteHref: '/quote/?service=group-transportation&vehicle=executive-sprinter',
	},
	{
		slug: 'weddings-special-events',
		name: 'Weddings & Special Events',
		eyebrow: 'Weddings and special events',
		heroTitle: 'Arrivals',
		heroAccent: 'Worth Remembering',
		heroDescription:
			'Polished arrivals and planned transportation for weddings and special events.',
		cardDescription:
			'Polished arrivals and planned transportation for the moments worth remembering.',
		seoTitle: 'Wedding & Event Transportation | Lester Pearson Limousine',
		seoDescription:
			'Planned private and group transportation for polished wedding and special-event arrivals.',
		image: '/images/hero-cadillac-escalade-road.webp',
		imageAlt: 'Black executive SUV on a tree-lined road',
		introTitle: 'Transportation planned with the occasion',
		intro: [
			'Wedding and special-event transportation brings the arrival into the wider plan for the day.',
			'Private executive SUVs and the Executive Sprinter offer options for personal and group transportation.',
		],
		features: [
			{
				title: 'Wedding transportation',
				description: 'A planned ride for the transportation details surrounding the wedding day.',
			},
			{
				title: 'Special events',
				description: 'Professional transportation for occasions and planned gatherings.',
			},
			{
				title: 'Polished arrivals',
				description: 'Executive transportation for an arrival that feels considered.',
			},
			{
				title: 'Private or group travel',
				description: 'Choose an executive SUV or Sprinter according to the transportation plan.',
			},
		],
		useCases: ['Weddings', 'Special events', 'Private arrivals', 'Group transportation'],
		quoteHref: '/quote/?service=weddings-special-events',
	},
	{
		slug: 'hourly-chauffeur',
		name: 'Hourly Chauffeur Service',
		eyebrow: 'Hourly chauffeur service',
		heroTitle: 'A Chauffeur',
		heroAccent: 'As Plans Evolve',
		heroDescription:
			'Keep a professional vehicle and chauffeur available as the itinerary changes throughout the service.',
		cardDescription:
			'Keep a professional vehicle and chauffeur available as your itinerary evolves.',
		seoTitle: 'Hourly Chauffeur Service | Lester Pearson Limousine',
		seoDescription:
			'Hourly chauffeur service with a professional vehicle and chauffeur available as your itinerary evolves.',
		image: '/images/hero-cadillac-escalade-road.webp',
		imageAlt: 'Black executive SUV traveling along a road',
		introTitle: 'Transportation that stays with the itinerary',
		intro: [
			'Hourly chauffeur service keeps a professional vehicle and chauffeur available while the schedule develops.',
			'It is an option for transportation plans that call for more flexibility than a single pickup and drop-off.',
		],
		features: [
			{
				title: 'Hourly service',
				description: 'Arrange transportation around the time required for the itinerary.',
			},
			{
				title: 'Professional chauffeur',
				description: 'Keep a professional chauffeur with the service as plans progress.',
			},
			{
				title: 'Evolving itinerary',
				description: 'A practical fit when the day is not limited to one direct transfer.',
			},
			{
				title: 'Executive vehicle',
				description: 'Choose the vehicle that fits the passenger and trip requirements.',
			},
		],
		useCases: ['Business itineraries', 'Personal travel', 'Appointments', 'Evenings out'],
		quoteHref: '/quote/?service=hourly-chauffeur',
	},
];

export const getServiceBySlug = (slug: string | undefined) =>
	services.find((service) => service.slug === slug);
