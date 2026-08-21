export interface NavigationItem {
	label: string;
	href: string;
}

export interface FooterNavigationGroup {
	label: string;
	links: readonly NavigationItem[];
}

export const SITE = {
	name: 'Lester Pearson Limousine',
	defaultTitle: 'Lester Pearson Limousine | Executive Transportation',
	defaultDescription:
		'Premium airport, corporate, private, and group transportation with professional chauffeurs and an executive fleet.',
	language: 'en-CA',
	locale: 'en_CA',
	phoneDisplay: '(647) 914-1071',
	phoneHref: 'tel:+16479141071',
	email: 'lesterb.limo@gmail.com',
	serviceArea: 'Greater Toronto Area and beyond',
	logo: '/images/lesterblimo-logo-white.webp',
} as const;

// Lowercase alias keeps page/component imports concise while SITE remains
// available for code that prefers constant-style naming.
export const site = SITE;

export const PRIMARY_NAVIGATION = [
	{ label: 'Home', href: '/' },
	{ label: 'Fleet', href: '/fleet/' },
	{ label: 'Services', href: '/services/' },
	{ label: 'Airport Transportation', href: '/services/airport-transportation/' },
	{ label: 'Corporate', href: '/services/corporate-transportation/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Contact', href: '/contact/' },
] as const satisfies readonly NavigationItem[];

export const FOOTER_NAVIGATION = [
	{
		label: 'Fleet',
		links: [
			{ label: 'Executive SUVs', href: '/fleet/executive-suv/' },
			{ label: 'Executive Sprinter', href: '/fleet/executive-sprinter/' },
		],
	},
	{
		label: 'Services',
		links: [
			{ label: 'Airport Transportation', href: '/services/airport-transportation/' },
			{ label: 'Corporate Transportation', href: '/services/corporate-transportation/' },
			{ label: 'Private Transportation', href: '/services/private-transportation/' },
			{ label: 'Group Transportation', href: '/services/group-transportation/' },
			{ label: 'Weddings & Events', href: '/services/weddings-special-events/' },
			{ label: 'Hourly Chauffeur Service', href: '/services/hourly-chauffeur/' },
		],
	},
] as const satisfies readonly FooterNavigationGroup[];

export function normalizePath(pathname: string): string {
	const path = pathname.split(/[?#]/, 1)[0]?.replace(/\/index\.html$/, '') ?? '/';
	const trimmed = path.replace(/^\/+|\/+$/g, '');
	return trimmed ? `/${trimmed}/` : '/';
}
