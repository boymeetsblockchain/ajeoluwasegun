<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { scrollSpy } from '$lib/actions/scrollSpy';
	import { nav } from '$lib/data';

	const sectionIds = nav.map((item) => item.href.slice(1));
</script>

<svelte:head>
	<title>Aje Oluwasegun — Full-Stack Engineer</title>
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
