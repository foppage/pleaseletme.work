<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background: #1a1a1a;
		color: #d4d4d4;
		font-family: 'Inter', sans-serif;
		font-size: 16px;
		line-height: 1.5;
		height: 100vh;
		overflow: hidden;
	}

	:global(a) {
		color: #f472b6;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}
</style>
