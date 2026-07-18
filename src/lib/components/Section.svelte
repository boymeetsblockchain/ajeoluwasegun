<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Snippet } from 'svelte';

	let {
		id,
		number,
		label,
		children
	}: { id: string; number: string; label: string; children: Snippet } = $props();
</script>

<section {id} use:reveal class="scroll-mt-24 py-16 first:pt-0 lg:py-24">
	<h2
		class="mb-8 flex items-baseline gap-3 text-sm font-semibold tracking-widest text-ink uppercase"
	>
		<span class="font-mono text-xs text-accent">{number}</span>
		{label}
	</h2>
	{@render children()}
</section>
