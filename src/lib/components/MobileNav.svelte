<script lang="ts">
	import { profile } from '$lib/data';
	import NavLinks from './NavLinks.svelte';
	import SocialLinks from './SocialLinks.svelte';
	import Icon from './Icon.svelte';

	let open = $state(false);

	function close() {
		open = false;
	}
</script>

<header
	class="sticky top-0 z-40 flex items-center justify-between bg-bg/90 px-6 py-4 backdrop-blur lg:hidden"
>
	<a href="#top" class="text-lg font-semibold text-ink">{profile.shortName}</a>
	<button
		type="button"
		onclick={() => (open = !open)}
		aria-expanded={open}
		aria-label={open ? 'Close menu' : 'Open menu'}
		class="p-1 text-ink-muted transition-colors hover:text-ink"
	>
		<Icon name={open ? 'close' : 'menu'} class="h-6 w-6" />
	</button>
</header>

{#if open}
	<div class="fixed inset-0 z-30 flex flex-col justify-between bg-bg px-6 pt-24 pb-12 lg:hidden">
		<nav aria-label="Section navigation">
			<NavLinks onNavigate={close} />
		</nav>
		<SocialLinks />
	</div>
{/if}
