<script lang="ts">
	import { otherProjects } from '$lib/data';
	import Section from './Section.svelte';
	import FeaturedProject from './FeaturedProject.svelte';
	import ProjectCard from './ProjectCard.svelte';
</script>

<Section id="projects" number="03" label="Projects">
	<FeaturedProject />

	<div class="mt-16">
		<h3 class="mb-6 font-mono text-xs tracking-widest text-ink-muted uppercase">Other projects</h3>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each otherProjects as project (project.name)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</Section>
