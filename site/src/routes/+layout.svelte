<script lang="ts">
	import favicon from '$lib/assets/favicon.jpg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>June | pleaseletme.work</title>
</svelte:head>

{@render children()}

<style>
	@font-face {
		font-family: 'Inter';
		src: url('/fonts/Inter-Regular.woff2') format('woff2');
		font-weight: 400;
		font-display: swap;
	}
	@font-face {
		font-family: 'Inter';
		src: url('/fonts/Inter-SemiBold.woff2') format('woff2');
		font-weight: 600;
		font-display: swap;
	}

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
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(a) {
		color: #f472b6;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		:global(body) {
			height: auto;
			overflow: auto;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	}
</style>
