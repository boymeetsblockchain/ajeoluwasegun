<script lang="ts">
	import { nav } from '$lib/data';
	import { getActiveSection } from '$lib/activeSection.svelte';

	let { onNavigate }: { onNavigate?: () => void } = $props();
</script>

<ul class="flex flex-col gap-4">
	{#each nav as item (item.href)}
		{@const active = getActiveSection() === item.href.slice(1)}
		<li>
			<a
				href={item.href}
				onclick={onNavigate}
				class="group flex items-center gap-4 py-2 text-sm font-medium uppercase tracking-widest transition-colors {active
					? 'text-ink'
					: 'text-ink-muted hover:text-ink'}"
			>
				<span
					class="h-px transition-all duration-200 {active
						? 'w-16 bg-accent'
						: 'w-8 bg-ink-muted group-hover:w-12 group-hover:bg-ink'}"
				></span>
				{item.label}
			</a>
		</li>
	{/each}
</ul>
