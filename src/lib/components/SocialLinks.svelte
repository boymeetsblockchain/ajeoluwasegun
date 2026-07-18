<script lang="ts">
	import { social } from '$lib/data';
	import Icon from './Icon.svelte';

	const links = [
		{ href: social.github, label: 'GitHub', icon: 'github' as const },
		{ href: social.linkedin, label: 'LinkedIn', icon: 'linkedin' as const },
		{ href: `mailto:${social.email}`, label: 'Email', icon: 'mail' as const }
	];
</script>

<ul class="flex items-center gap-5">
	{#each links as link (link.label)}
		<li>
			<a
				href={link.href}
				target="_blank"
				rel="noreferrer external"
				aria-label={link.label}
				class="text-ink-muted transition-colors hover:text-accent"
			>
				<Icon name={link.icon} class="h-5 w-5" />
			</a>
		</li>
	{/each}
</ul>
