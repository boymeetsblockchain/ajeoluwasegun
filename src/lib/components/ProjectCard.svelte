<script lang="ts">
	import type { Project } from '$lib/data';
	import Icon from './Icon.svelte';

	let { project }: { project: Project } = $props();
</script>

<div
	class="rounded-xl border p-5 transition-colors {project.placeholder
		? 'border-dashed border-white/10'
		: 'border-white/5 bg-panel/40 hover:border-accent/40'}"
>
	<h4 class="font-medium text-ink">{project.name}</h4>
	<p class="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>

	<ul class="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-ink-muted">
		{#each project.stack as tech (tech)}
			<li class="rounded-full border border-white/10 px-2.5 py-0.5">{tech}</li>
		{/each}
	</ul>

	{#if project.links.length}
		<div class="mt-4 flex flex-wrap gap-4">
			{#each project.links as link (link.label)}
				<a
					href={link.href}
					target="_blank"
					rel="noreferrer external"
					class="inline-flex items-center gap-1 text-xs font-medium text-ink transition-colors hover:text-accent"
				>
					{link.label}
					<Icon name="external" class="h-3 w-3" />
				</a>
			{/each}
		</div>
	{/if}
</div>
