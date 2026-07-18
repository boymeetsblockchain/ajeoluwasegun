<script lang="ts">
	import { profile } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="about" number="01" label="About">
	<div class="max-w-lg space-y-4 text-base leading-relaxed text-ink-muted">
		{#each profile.intro as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</div>
</Section>
