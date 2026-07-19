<script lang="ts">
	import './layout.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { spotlight } from '$lib/actions/spotlight';

	let { children } = $props();
</script>

<div class="cursor-glow" use:spotlight aria-hidden="true"></div>

<div id="top" class="mx-auto flex max-w-6xl flex-col lg:flex-row lg:gap-8 lg:px-8 xl:gap-16">
	<Sidebar />
	<MobileNav />
	{@render children()}
</div>
