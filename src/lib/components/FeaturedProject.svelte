<script lang="ts">
	import { featuredProject } from '$lib/data';
	import Icon from './Icon.svelte';
</script>

<div class="rounded-2xl border border-white/5 bg-panel/60 p-6 sm:p-8">
	<div class="flex flex-wrap items-baseline justify-between gap-2">
		<h3 class="text-xl font-semibold text-ink">{featuredProject.name}</h3>
		<span class="font-mono text-xs tracking-widest text-accent uppercase">
			{featuredProject.tagline}
		</span>
	</div>

	<p class="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
		{featuredProject.problem}
	</p>
	<p class="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
		{featuredProject.role}
	</p>

	<div class="mt-8 grid gap-4 sm:grid-cols-3">
		{#each featuredProject.screenshots as shot (shot.alt)}
			<div
				role="img"
				aria-label={shot.alt}
				class="flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/10 bg-bg/60 px-4 text-center font-mono text-[11px] text-ink-muted"
			>
				Screenshot placeholder
			</div>
		{/each}
	</div>

	<div class="mt-8 grid gap-6 sm:grid-cols-3">
		{#each featuredProject.highlights as item (item.title)}
			<div>
				<h4 class="text-sm font-medium text-ink">{item.title}</h4>
				<p class="mt-1 text-sm leading-relaxed text-ink-muted">{item.body}</p>
			</div>
		{/each}
	</div>

	<ul class="mt-8 flex flex-wrap gap-2 font-mono text-xs text-ink-muted">
		{#each featuredProject.stack as tech (tech)}
			<li class="rounded-full border border-white/10 px-3 py-1">{tech}</li>
		{/each}
	</ul>

	<div class="mt-6 flex flex-wrap gap-5">
		{#each featuredProject.links as link (link.label)}
			<a
				href={link.href}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
			>
				{link.label}
				<Icon name="external" class="h-3.5 w-3.5" />
			</a>
		{/each}
	</div>
</div>
