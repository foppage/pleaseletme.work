<script lang="ts">
	import type { cv } from '$lib/data/cv';

	let { data }: { data: typeof cv } = $props();
</script>

<section>
	<h2>Experience</h2>
	<div class="card">
		<h3>{data.experience.title}</h3>
		<p class="meta">{data.experience.company}</p>
		<p class="meta">{data.experience.date}</p>
		<ul>
			{#each data.experience.bullets as bullet (bullet)}
				<li>{bullet}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	section {
		margin-bottom: 24px;
	}

	section:last-child {
		margin-bottom: 0;
	}

	h2 {
		color: #f472b6;
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 12px;
		border-bottom: 1.5px solid #f472b6;
		padding-bottom: 5px;
	}

	.card {
		background: #252525;
		border-radius: 6px;
		padding: 14px;
	}

	h3 {
		color: #d4d4d4;
		font-size: 16px;
		font-weight: 600;
		margin-top: 0;
		margin-bottom: 3px;
		line-height: 1.3;
	}

	.meta {
		font-size: 14px;
		color: #888;
		margin-bottom: 5px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin-top: 3px;
	}

	li {
		font-size: 15px;
		line-height: 1.55;
		padding-left: 14px;
		position: relative;
		color: #b0b0b0;
	}

	li::before {
		content: '-';
		position: absolute;
		left: 3px;
		color: #666;
	}
</style>
