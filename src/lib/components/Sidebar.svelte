<script lang="ts">
	import { profile } from '$lib/data';
	import NavLinks from './NavLinks.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<header
	class="hidden shrink-0 px-8 py-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[380px] lg:flex-col lg:justify-between xl:w-[420px] xl:px-12"
>
	<div>
		<a href="#top" class="inline-block text-2xl font-semibold text-ink transition-colors hover:text-accent">
			{profile.name}
		</a>
		<p class="mt-3 max-w-xs text-base leading-relaxed text-ink-muted">
			{profile.tagline}
		</p>

		<nav class="mt-16" aria-label="Section navigation">
			<NavLinks />
		</nav>
	</div>

	<SocialLinks />
</header>
