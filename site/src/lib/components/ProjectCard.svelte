<script lang="ts">
	import githubSvg from '$lib/assets/github.svg';
	import linkSvg from '$lib/assets/link.svg';
	import TechIcon from './TechIcon.svelte';
	import type { Project } from '$lib/data/cv';

	let { project }: { project: Project } = $props();

	let linkImg = $derived(project.icon === 'github' ? githubSvg : linkSvg);
</script>

<div class="project-card" class:full-width={project.fullWidth}>
	<h3>
		{#if project.url}
			<a href={project.url} target="_blank" rel="noreferrer">
				{project.name} <img src={linkImg} alt="" width="18" height="18" class="inline-link" />
			</a>
		{:else}
			{project.name}
		{/if}
	</h3>
	{#if project.date}
		<p class="meta">{project.date}</p>
	{/if}
	<ul>
		{#each project.bullets as bullet (bullet)}
			<li>{bullet}</li>
		{/each}
	</ul>
	<div class="tech-icons">
		{#each project.tech as t (t.slug)}
			<TechIcon tech={t} />
		{/each}
	</div>
</div>

<style>
	.project-card {
		background: #252525;
		border-radius: 6px;
		padding: 12px 14px;
		display: flex;
		flex-direction: column;
	}

	.full-width {
		grid-column: 1 / -1;
	}

	h3 {
		color: #d4d4d4;
		font-size: 16px;
		font-weight: 600;
		margin-top: 0;
		margin-bottom: 3px;
		line-height: 1.3;
	}

	h3 a {
		color: #d4d4d4;
		text-decoration: none;
	}

	h3 a:hover {
		color: #f472b6;
		text-decoration: underline;
	}

	.inline-link {
		vertical-align: middle;
		filter: brightness(0) saturate(100%) invert(65%) sepia(18%) saturate(2878%) hue-rotate(291deg)
			brightness(99%) contrast(97%);
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
		margin-bottom: 12px;
	}

	li {
		font-size: 15px;
		line-height: 1.55;
		padding-left: 12px;
		position: relative;
		color: #b0b0b0;
	}

	li::before {
		content: '-';
		position: absolute;
		left: 2px;
		color: #666;
	}

	.tech-icons {
		display: flex;
		gap: 10px;
		padding-top: 8px;
		margin-top: auto;
		border-top: 1px solid #383838;
		align-items: center;
	}
</style>
