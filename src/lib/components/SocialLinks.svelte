<script lang="ts">
	import { social } from '$lib/data';
	import Icon from './Icon.svelte';

	const links = [
		{ href: social.github, label: 'GitHub', icon: 'github' as const, external: true },
		{ href: social.linkedin, label: 'LinkedIn', icon: 'linkedin' as const, external: true },
		{ href: `mailto:${social.email}`, label: 'Email', icon: 'mail' as const, external: false }
	];
</script>

<ul class="flex items-center gap-5">
	{#each links as link (link.label)}
		<li>
			<a
				href={link.href}
				target={link.external ? '_blank' : undefined}
				rel={link.external ? 'noreferrer' : undefined}
				aria-label={link.label}
				class="text-ink-muted transition-colors hover:text-accent"
			>
				<Icon name={link.icon} class="h-5 w-5" />
			</a>
		</li>
	{/each}
</ul>
