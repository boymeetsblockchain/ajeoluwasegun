let current = $state('about');

export function getActiveSection() {
	return current;
}

export function setActiveSection(id: string) {
	current = id;
}
