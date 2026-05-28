<script lang="ts">
	import type { cv } from '$lib/data/cv';

	let { data }: { data: typeof cv } = $props();
</script>

<aside class="sidebar">
	<section>
		<h2>Education</h2>

		{#each data.education as entry (entry.title)}
			{#if entry.kind === 'degree'}
				<h3>{entry.title}</h3>
				<p class="meta">{entry.school}</p>
				<p class="meta">{entry.date}</p>
				{#if entry.description}
					<p class="sub">{entry.description}</p>
				{/if}
				{#if entry.modules}
					<p class="label">Modules studied:</p>
					<ul>
						{#each entry.modules as module (module)}
							<li>{module}</li>
						{/each}
					</ul>
				{/if}
			{:else if entry.kind === 'list'}
				<h3>{entry.title}</h3>
				<ul>
					{#each entry.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			{:else if entry.kind === 'text'}
				<h3>{entry.title}</h3>
				<p class="sub">{entry.text}</p>
			{/if}
		{/each}
	</section>

	<section>
		<h2>Additional information</h2>
		<ul>
			{#each data.additional as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
</aside>

<style>
	.sidebar {
		width: 440px;
		min-width: 440px;
		padding: 20px 24px;
		background: #1e1e1e;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: #555 transparent;
	}

	.sidebar::-webkit-scrollbar {
		width: 6px;
	}

	.sidebar::-webkit-scrollbar-track {
		background: transparent;
	}

	.sidebar::-webkit-scrollbar-thumb {
		background: #555;
		border-radius: 3px;
	}

	.sidebar::-webkit-scrollbar-thumb:hover {
		background: #777;
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

	h3 {
		color: #d4d4d4;
		font-size: 16px;
		font-weight: 600;
		margin-top: 12px;
		margin-bottom: 3px;
		line-height: 1.3;
	}

	h3:first-child {
		margin-top: 0;
	}

	.meta {
		font-size: 14px;
		color: #888;
		margin-bottom: 5px;
	}

	.sub {
		font-size: 15px;
		color: #b0b0b0;
		margin-bottom: 5px;
	}

	.label {
		font-size: 15px;
		margin-top: 6px;
		margin-bottom: 3px;
		color: #d4d4d4;
	}

	ul {
		list-style: none;
		padding: 0;
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
