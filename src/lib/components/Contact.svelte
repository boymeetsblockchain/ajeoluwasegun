<script lang="ts">
	import { social } from '$lib/data';
	import Section from './Section.svelte';
	import Icon from './Icon.svelte';
</script>

<Section id="contact" number="05" label="Contact">
	<div class="max-w-lg">
		<p class="text-base leading-relaxed text-ink-muted">
			The fastest way to reach me is email. I'm open to remote roles and interesting healthtech
			problems.
		</p>
		<div class="mt-6 flex flex-col gap-3 text-sm">
			<a
				href={`mailto:${social.email}`}
				class="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent"
			>
				<Icon name="mail" class="h-4 w-4" />
				{social.email}
			</a>
			<a
				href={social.linkedin}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent"
			>
				<Icon name="linkedin" class="h-4 w-4" />
				LinkedIn
			</a>
			<a
				href={social.github}
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent"
			>
				<Icon name="github" class="h-4 w-4" />
				GitHub
			</a>
		</div>
	</div>
</Section>
