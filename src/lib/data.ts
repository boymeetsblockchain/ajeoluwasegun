export const profile = {
	name: 'Aje Oluwasegun',
	shortName: 'Segun',
	tagline: 'Full-stack engineer building healthtech that ships',
	intro: [
		"I'm a full-stack and mobile engineer working across React, Next.js, NestJS, TypeScript, and PostgreSQL, currently a Solutions Architect overseeing delivery across several client products.",
		'I trained as a physiotherapist before moving into software, which shapes how I build: I design healthtech with a clinical model in mind, not just a technical one.',
		'Open to remote roles.'
	]
};

export const social = {
	github: 'https://github.com/boymeetsblockchain',
	linkedin: 'https://linkedin.com/in/oluwasegun-aje-b990a1232',
	email: 'ajeoluwaasegun18@gmail.com'
};

export const nav = [
	{ href: '#about', label: 'About' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#contact', label: 'Contact' }
];

export type ExperienceEntry = {
	company: string;
	role: string;
	dates: string;
	description: string;
};

export const experience: ExperienceEntry[] = [
	{
		company: 'TJDND IT Solutions',
		role: 'Solutions Architect',
		dates: 'Oct 2025 — Present',
		description:
			'Oversee architecture and delivery across multiple client products, including TaxSprings, WakaNest, and TechFrontline.'
	},
	{
		company: 'Swiftxend Courier',
		role: 'Lead Developer',
		dates: 'Sep 2025 — Present',
		description: 'Built a real-time logistics tracking application for courier operations.'
	},
	{
		company: 'Pretoria Consulting',
		role: 'Mobile Developer, Contract',
		dates: 'Jan 2026 — Jun 2026',
		description: 'Built features for Konnect, a React Native outsourcing and talent-matching app.'
	},
	{
		company: 'Trippicker Nigeria',
		role: 'Backend Developer → Lead Developer',
		dates: 'Sep 2024 — Sep 2025',
		description:
			'Architected microservices for an e-hailing and fintech app. Promoted to Lead Developer.'
	},
	{
		company: 'Tetra Location',
		role: 'Backend Developer, Contract',
		dates: 'Aug 2024 — Aug 2025',
		description: 'Built backend services for a fintech platform serving 1,000+ users.'
	},
	{
		company: 'Geniz Technology',
		role: 'Fullstack Mobile Developer, Contract',
		dates: 'Aug 2024 — Aug 2025',
		description: 'Built React Native apps serving 10,000+ users.'
	}
];

export type ProjectLink = {
	label: string;
	href: string;
};

export const featuredProject = {
	name: 'RehabWise',
	tagline: 'Stroke telerehabilitation platform',
	problem:
		'Stroke survivors need consistent, guided rehab exercises, but easy remote access to a therapist is rare — most rehab programs stall once a patient leaves the clinic.',
	role: 'I designed and built the full product end-to-end, drawing on a physiotherapy background to shape the clinical data model behind exercise progression.',
	highlights: [
		{
			title: 'Tiered exercise progression',
			body: 'Exercise plans are modeled as tiers with clinically-informed progression rules, so a patient advances only when their recorded performance supports it.'
		},
		{
			title: 'Video storage on Cloudflare R2',
			body: 'Exercise demonstration and session recordings are stored on R2 for zero egress fees at scale, keeping per-patient video cheap to serve.'
		},
		{
			title: 'Live patient-therapist video',
			body: 'Daily.co powers scheduled live consultations directly in the browser, with SMS reminders sent via Africa’s Talking so sessions aren’t missed.'
		}
	],
	stack: [
		'NestJS',
		'PostgreSQL',
		'Prisma',
		'Next.js',
		'Cloudflare R2',
		"Africa's Talking",
		'Daily.co'
	],
	links: [
		{ label: 'Live site', href: 'https://rehabwise.online' },
		{ label: 'Client repo', href: 'https://github.com/boymeetsblockchain/rehabwise-client' },
		{ label: 'API repo', href: 'https://github.com/xendrcourier/rehabwise-api' }
	] as ProjectLink[],
	screenshots: [
		{ alt: 'RehabWise patient dashboard screenshot' },
		{ alt: 'RehabWise exercise progression screenshot' },
		{ alt: 'RehabWise live consultation screenshot' }
	]
};

export type Project = {
	name: string;
	description: string;
	stack: string[];
	links: ProjectLink[];
	placeholder?: boolean;
};

export const otherProjects: Project[] = [
	{
		name: 'TaxSprings',
		description:
			'Nigerian tax management platform with PAYE and CIT modules for businesses and individuals.',
		stack: ['NestJS', 'PostgreSQL', 'Next.js'],
		links: []
	},
	{
		name: 'WakaNest',
		description: 'Multi-vendor travel and lifestyle platform connecting vendors to travelers.',
		stack: ['Next.js', 'NestJS', 'Prisma'],
		links: []
	},
	{
		name: 'Add your next project',
		description: 'Duplicate this card and swap in a project name, description, and stack.',
		stack: ['Tech', 'Stack', 'Tags'],
		links: [],
		placeholder: true
	}
];

export const skills = [
	{
		group: 'Languages & Frameworks',
		items: [
			'TypeScript',
			'JavaScript',
			'Go',
			'Java',
			'Python',
			'React',
			'Next.js',
			'Svelte',
			'NestJS',
			'Node.js',
			'React Native'
		]
	},
	{
		group: 'Data',
		items: ['PostgreSQL', 'Prisma', 'MongoDB']
	},
	{
		group: 'Cloud & Infrastructure',
		items: ['AWS', 'Azure', 'Cloudflare R2', 'Daily.co', "Africa's Talking", 'Paystack', 'Docker']
	}
];
