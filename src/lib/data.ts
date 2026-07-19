export const profile = {
	name: 'Aje Oluwasegun',
	shortName: 'Aje',
	tagline: 'Full-stack engineer building healthtech that ships',
	intro: [
		"I'm a full-stack and mobile engineer who ships — not just prototypes, production systems that handle real users and real money.",

		"Right now I wear two hats. As Solutions Architect at TJDND IT Solutions, I oversee technical architecture and delivery across multiple client products — including TaxSprings (a Nigerian tax platform with PAYE/CIT compliance), WakaNest (a multi-vendor travel and lifestyle marketplace), and TechFrontline — owning each end-to-end from schema design through deployment. As Lead Developer at Swiftxend Courier, I'm building a real-time logistics tracking platform from the ground up, covering live location updates, delivery status, and dispatch workflows.",

		"Before that, I spent a year at Trippicker, where I was promoted from Backend Developer to Lead Developer after architecting the microservices behind an e-hailing app and companion fintech product — cutting deployment time by 40% and leading the team that shipped it. I've also worked contract roles at Tetra Location (fintech backend, 1,000+ users) and Geniz Technology (React Native apps serving 10,000+ users at a 98% satisfaction rate), and built features for Konnect, an outsourcing/talent-matching app, at Pretoria Consulting.",

		"My core stack is React, Next.js, NestJS, TypeScript, and PostgreSQL, with hands-on production experience in payment integrations (Paystack), KYC/AML workflows, and real-time systems (geolocation, live tracking, video). I also build in React Native for mobile, work comfortably in Go, Java, Python, and Svelte, and I've deployed on both AWS and Azure.",

		"What makes my work different: I'm also a physiotherapist by training. That means when I build healthtech, I'm not guessing at the clinical workflow — I've lived it. That thinking is behind RehabWise, a stroke telerehabilitation platform I designed and built end-to-end: NestJS, PostgreSQL, and Prisma on the backend, Next.js on the front end, Cloudflare R2 for exercise video storage, Africa's Talking for SMS alerts, and Daily.co for live video consultations between patients and therapists. It's live at rehabwise.online, and it's the project I'm proudest of — not because of the stack, but because it solves a real problem I understand from both sides.",

		"I'm currently open to remote full-stack roles where I can own real problems end-to-end, not just tickets — ideally somewhere building products that matter, whether that's fintech, healthtech, or something in between."
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
		company: 'Tetra ',
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
