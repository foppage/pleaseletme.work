<script lang="ts">
	import emailSvg from '$lib/assets/email.svg';
	import githubSvg from '$lib/assets/github.svg';
	import type { cv } from '$lib/data/cv';

	let { data }: { data: typeof cv } = $props();
</script>

<header class="top-header">
	<div class="name-row">
		<h1>{data.name}</h1>
		<div class="contact">
			{#each data.contact as item (item.href)}
				<a href={item.href} class="contact-item">
					<img src={item.icon === 'email' ? emailSvg : githubSvg} alt="" width="18" height="18" />
					{item.label}
				</a>
			{/each}
		</div>
	</div>
	<p class="summary">{data.summary}</p>
</header>

<style>
	.top-header {
		padding: 24px 32px 16px;
		border-bottom: 1px solid #333;
		flex-shrink: 0;
	}

	.name-row {
		display: flex;
		align-items: baseline;
		gap: 24px;
		flex-wrap: wrap;
		margin-bottom: 6px;
	}

	h1 {
		color: #f472b6;
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	.contact {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}

	.contact-item {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 15px;
	}

	.contact-item img {
		filter: brightness(0) saturate(100%) invert(65%) sepia(18%) saturate(2878%) hue-rotate(291deg)
			brightness(99%) contrast(97%);
	}

	.summary {
		font-size: 15px;
		line-height: 1.5;
		color: #b0b0b0;
		max-width: 900px;
	}

	@media (max-width: 768px) {
		.top-header {
			padding: 16px;
		}

		.name-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}

		h1 {
			font-size: 28px;
		}

		.contact {
			gap: 12px;
		}

		.contact-item {
			font-size: 13px;
		}

		.contact-item img {
			width: 16px;
			height: 16px;
		}

		.summary {
			font-size: 13px;
			max-width: none;
		}
	}
</style>
