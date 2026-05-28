<script lang="ts">
	import { cv } from '$lib/data/cv';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="layout">
	<Header data={cv} />

	<div class="columns">
		<Sidebar data={cv} />

		<main class="content">
			<Experience data={cv} />

			<section>
				<h2>Projects</h2>
				<div class="project-grid">
					{#each cv.projects as project (project.name)}
						<ProjectCard {project} />
					{/each}
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	.layout {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.columns {
		display: flex;
		flex: 1;
		min-height: 0;
	}

	.content {
		flex: 1;
		padding: 20px 28px;
		overflow-y: auto;
	}

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

	.project-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
</style>
