<script lang="ts">
	import { experience } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="experience" number="02" label="Experience">
	<ol class="space-y-10">
		{#each experience as job (job.company + job.dates)}
			<li class="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
				<p class="font-mono text-xs text-ink-muted sm:pt-1">{job.dates}</p>
				<div>
					<h3 class="font-medium text-ink">
						{job.role} <span class="text-ink-muted">· {job.company}</span>
					</h3>
					<p class="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
						{job.description}
					</p>
				</div>
			</li>
		{/each}
	</ol>
</Section>
