<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div id="top" class="mx-auto flex max-w-6xl flex-col lg:flex-row lg:gap-8 lg:px-8 xl:gap-16">
	<Sidebar />
	<MobileNav />
	{@render children()}
</div>
