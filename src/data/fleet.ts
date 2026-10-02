export type FleetSlug = 'executive-suv' | 'executive-sedan' | 'executive-sprinter';

export interface FleetGalleryImage {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
}

export interface FleetVehicle {
	slug: FleetSlug;
	name: string;
	eyebrow: string;
	heroTitle: string;
	heroAccent: string;
	heroDescription: string;
	seoTitle: string;
	seoDescription: string;
	image: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	gallery: FleetGalleryImage[];
	capacity: string;
	capacityShort: string;
	description: string;
	introTitle: string;
	intro: string[];
	attributes: string[];
	useCases: string[];
	quoteHref: string;
}

export const fleet: FleetVehicle[] = [
	{
		slug: 'executive-suv',
		name: 'Full-Size Executive SUV',
		eyebrow: 'Our fleet',
		heroTitle: 'Full-Size',
		heroAccent: 'Executive SUV',
		heroDescription:
			'Comfort, privacy, luggage capacity, and professional transportation for up to six passengers.',
		seoTitle: 'Full-Size Executive SUV | Lester Pearson Limousine',
		seoDescription:
			'Explore full-size executive SUV transportation for up to six passengers, airport transfers, corporate travel, and private service.',
		image: '/images/fleet-chevrolet-suburban-2025.avif',
		imageAlt: 'Black Chevrolet Suburban full-size executive SUV',
		imageWidth: 768,
		imageHeight: 450,
		gallery: [
			{
				src: '/images/fleet/gallery/suv-interior-dashboard-2026.avif',
				alt: 'Full-size executive SUV dashboard, steering wheel, and panoramic digital display',
				caption: 'Dashboard and driver technology',
				width: 1852,
				height: 1080,
			},
			{
				src: '/images/fleet/gallery/suv-interior-captain-seats.webp',
				alt: 'Full-size executive SUV interior with premium second-row captain seats',
				caption: 'Premium captain seats',
				width: 1280,
				height: 960,
			},
			{
				src: '/images/fleet/gallery/suv-interior-three-row-cabin.webp',
				alt: 'Full-size executive SUV interior showing three rows of black leather seating and the front cabin',
				caption: 'Spacious three-row cabin',
				width: 1920,
				height: 1080,
			},
		],
		capacity: 'Up to 6 passengers',
		capacityShort: '6 passengers',
		description:
			'Premium full-size SUVs offering comfort, privacy, luggage capacity, and professional transportation for airport transfers, corporate travel, and private service.',
		introTitle: 'Private space for executive travel',
		intro: [
			'The Full-Size Executive SUV is a comfortable private option for airport transfers, business schedules, and personal transportation.',
			'Its passenger space, leather interior, and luggage capacity support trips for groups of up to six passengers.',
		],
		attributes: [
			'Up to 6 passengers',
			'Premium leather interior',
			'Spacious luggage capacity',
			'Airport and corporate travel',
		],
		useCases: ['Airport transfers', 'Corporate travel', 'Private transportation'],
		quoteHref: '/reserve/?vehicle=executive-suv',
	},
	{
		slug: 'executive-sedan',
		name: 'Executive Sedan',
		eyebrow: 'Our fleet',
		heroTitle: 'Executive',
		heroAccent: 'Sedan',
		heroDescription:
			'A quiet, private sedan for airport transfers, business travel, and personal service for up to four passengers.',
		seoTitle: 'Executive Sedan | Lester Pearson Limousine',
		seoDescription:
			'Explore executive sedan transportation for up to four passengers, airport transfers, corporate travel, and private service.',
		image: '/images/fleet-chrysler-300-sedan.webp',
		imageAlt: 'Black Chrysler 300 executive sedan',
		imageWidth: 1600,
		imageHeight: 904,
		gallery: [
			{
				src: '/images/fleet/gallery/sedan-interior-dashboard.webp',
				alt: 'Executive sedan front cabin with leather seating, steering wheel, and centre touchscreen',
				caption: 'Front cabin and controls',
				width: 768,
				height: 500,
			},
			{
				src: '/images/fleet/gallery/sedan-interior-rear-seats.webp',
				alt: 'Executive sedan rear bench with stitched black leather seating',
				caption: 'Rear passenger seating',
				width: 1200,
				height: 800,
			},
		],
		capacity: 'Up to 4 passengers',
		capacityShort: '4 passengers',
		description:
			'A refined executive sedan offering a quiet ride, leather seating, and professional transportation for airport transfers, corporate travel, and private service.',
		introTitle: 'A quieter way to travel',
		intro: [
			'The Executive Sedan is a discreet, comfortable option for airport transfers, business schedules, and personal transportation.',
			'Its leather interior and quiet cabin suit trips for up to four passengers travelling with carry-on and standard luggage.',
		],
		attributes: [
			'Up to 4 passengers',
			'Premium leather interior',
			'Quiet, private cabin',
			'Airport and corporate travel',
		],
		useCases: ['Airport transfers', 'Corporate travel', 'Private transportation'],
		quoteHref: '/reserve/?vehicle=executive-sedan',
	},
	{
		slug: 'executive-sprinter',
		name: 'Executive Sprinter',
		eyebrow: 'Our fleet',
		heroTitle: 'Executive',
		heroAccent: 'Sprinter',
		heroDescription:
			'Premium group transportation with a high-roof cabin and seating for 12–14 passengers.',
		seoTitle: 'Executive Sprinter | Lester Pearson Limousine',
		seoDescription:
			'Explore Executive Sprinter group transportation with front-facing seating, a high-roof cabin, luggage capacity, and room for 12–14 passengers.',
		image: '/images/fleet-mercedes-sprinter-black.webp',
		imageAlt: 'Black Mercedes-Benz Sprinter passenger van',
		imageWidth: 1219,
		imageHeight: 889,
		// Temporary representative imagery from official Mercedes-Benz Sprinter Tourer pages:
		// https://www.mercedes-benz.it/vans/models/sprinter/tourer/overview.html
		gallery: [
			{
				src: '/images/fleet/gallery/sprinter-interior-seating-detail.webp',
				alt: 'Representative Mercedes-Benz Sprinter passenger seats with armrests and seatbelts',
				caption: 'Flexible passenger seating',
				width: 1280,
				height: 960,
			},
			{
				src: '/images/fleet/gallery/sprinter-interior-passenger-cabin.webp',
				alt: 'Representative Mercedes-Benz Sprinter front-facing passenger cabin',
				caption: 'Spacious front-facing cabin',
				width: 1599,
				height: 900,
			},
			{
				src: '/images/fleet/gallery/sprinter-interior-rear-cabin.webp',
				alt: 'Representative Mercedes-Benz Sprinter multi-row passenger seating layout',
				caption: 'Multi-row passenger layout',
				width: 1600,
				height: 900,
			},
		],
		capacity: '12–14 passengers',
		capacityShort: '12–14 passengers',
		description:
			'Premium group transportation with spacious front-facing seating, generous luggage capacity, and a comfortable high-roof cabin.',
		introTitle: 'One comfortable ride for the group',
		intro: [
			'The Executive Sprinter keeps groups together in a passenger-focused interior with front-facing seating.',
			'Its high-roof cabin and large luggage capacity support comfortable transportation for 12–14 passengers.',
		],
		attributes: [
			'12–14 passengers',
			'Front-facing seating',
			'Premium passenger interior',
			'High-roof cabin',
			'Large luggage capacity',
		],
		useCases: ['Group transportation', 'Airport transportation', 'Conferences and corporate events'],
		quoteHref: '/reserve/?vehicle=executive-sprinter',
	},
];

export const getFleetVehicleBySlug = (slug: string | undefined) =>
	fleet.find((vehicle) => vehicle.slug === slug);
