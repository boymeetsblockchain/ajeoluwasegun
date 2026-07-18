<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { scrollSpy } from '$lib/actions/scrollSpy';
	import { nav, profile, social } from '$lib/data';

	const sectionIds = nav.map((item) => item.href.slice(1));

	const siteUrl = 'https://ajeoluwasegun.com';
	const title = 'Aje Oluwasegun — Full-Stack Engineer';
	const description =
		'Aje Oluwasegun — full-stack engineer building clinically-grounded healthtech.';
	const ogImage = `${siteUrl}/og-image.png`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		url: siteUrl,
		jobTitle: 'Full-Stack Engineer',
		description: profile.tagline,
		sameAs: [social.github, social.linkedin],
		email: `mailto:${social.email}`
	};
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={siteUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={profile.name} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static JSON-LD, no user input -->
	{@html '<' + 'script type="application/ld+json">' + JSON.stringify(jsonLd) + '</' + 'script>'}
</svelte:head>

<main use:scrollSpy={sectionIds} class="min-w-0 flex-1 px-6 pb-24 lg:px-0 lg:py-24">
	<Hero />
	<Experience />
	<Projects />
	<Skills />
	<Contact />

	<footer class="pt-8 text-center font-mono text-xs text-ink-muted lg:text-left">
		Built with SvelteKit and Tailwind CSS.
	</footer>
</main>
