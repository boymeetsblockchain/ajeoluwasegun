<script lang="ts">
	import { skills } from '$lib/data';
	import Section from './Section.svelte';
</script>

<Section id="skills" number="04" label="Skills">
	<div class="grid gap-8 sm:grid-cols-3">
		{#each skills as group (group.group)}
			<div>
				<h3 class="mb-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
					{group.group}
				</h3>
				<ul class="flex flex-wrap gap-2">
					{#each group.items as item (item)}
						<li class="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-ink">
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Section>
