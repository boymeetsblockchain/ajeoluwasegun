import { setActiveSection } from '$lib/activeSection.svelte';

export function scrollSpy(node: HTMLElement, ids: string[]) {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			}
		},
		{ rootMargin: '-40% 0px -55% 0px', threshold: 0 }
	);

	for (const id of ids) {
		const el = document.getElementById(id);
		if (el) observer.observe(el);
	}

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
