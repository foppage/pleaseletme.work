<script lang="ts">
	import type { Tech } from '$lib/data/cv';

	let { tech }: { tech: Tech } = $props();
</script>

<span class="tech-icon">
	<img src="https://cdn.simpleicons.org/{tech.slug}/f472b6" alt="" height="18" />
	<span class="tech-label">{tech.label}</span>
</span>

<style>
	.tech-icon {
		position: relative;
		display: inline-flex;
		align-items: center;
	}

	.tech-icon img {
		opacity: 0.4;
		transition: opacity 0.2s ease;
		cursor: default;
	}

	.tech-icon:hover img {
		opacity: 1;
	}

	.tech-label {
		position: absolute;
		bottom: calc(100% + 6px);
		left: 50%;
		transform: translateX(-50%) translateY(4px);
		opacity: 0;
		transition:
			opacity 0.15s ease,
			transform 0.15s ease;
		pointer-events: none;
		white-space: nowrap;
		font-size: 12px;
		color: #d4d4d4;
		background: #333;
		padding: 2px 6px;
		border-radius: 3px;
		line-height: 1.4;
	}

	.tech-icon:hover .tech-label {
		opacity: 1;
		transform: translateX(-50%) translateY(0);
	}
</style>
