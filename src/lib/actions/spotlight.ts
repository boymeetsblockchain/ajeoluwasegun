// eslint-disable-next-line @typescript-eslint/no-unused-vars -- action signature requires the node param; glow tracks the whole viewport via window listeners
export function spotlight(node: HTMLElement) {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

	if (prefersReducedMotion || isCoarsePointer) {
		return {};
	}

	const root = document.documentElement;
	let frame = 0;

	function handleMove(event: PointerEvent) {
		if (frame) return;
		frame = requestAnimationFrame(() => {
			root.style.setProperty('--spot-x', `${event.clientX}px`);
			root.style.setProperty('--spot-y', `${event.clientY}px`);
			root.style.setProperty('--spot-opacity', '1');
			frame = 0;
		});
	}

	function handleLeave() {
		root.style.setProperty('--spot-opacity', '0');
	}

	window.addEventListener('pointermove', handleMove);
	document.documentElement.addEventListener('mouseleave', handleLeave);
	window.addEventListener('blur', handleLeave);

	return {
		destroy() {
			window.removeEventListener('pointermove', handleMove);
			document.documentElement.removeEventListener('mouseleave', handleLeave);
			window.removeEventListener('blur', handleLeave);
			if (frame) cancelAnimationFrame(frame);
		}
	};
}
