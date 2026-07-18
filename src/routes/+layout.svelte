<script lang="ts">
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';

	let { children } = $props();
</script>

<div id="top" class="mx-auto flex max-w-6xl flex-col lg:flex-row lg:gap-8 lg:px-8 xl:gap-16">
	<Sidebar />
	<MobileNav />
	{@render children()}
</div>
