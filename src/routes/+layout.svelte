<script>
	import '#lib/styles/tokens.css';
	import '#lib/styles/global.css';
	import Nav from '#lib/components/Nav.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
</svelte:head>

<header>
	<a class="skip-link" href="#main">Skip to main content</a>
	<Nav />
</header>

<main id="main">
	{@render children()}
</main>

<Footer />

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--color-bg);
		border-bottom: 2px solid var(--color-ink);
	}

	.skip-link {
		position: absolute;
		left: var(--space-3);
		top: 0;
		padding: var(--space-2) var(--space-3);
		background-color: var(--color-accent);
		color: var(--color-on-accent);
		font-weight: 700;
		border-radius: 0 0 var(--radius) var(--radius);
		transform: translateY(-120%);
		transition: transform var(--transition);
	}

	.skip-link:focus-visible {
		transform: translateY(0);
		outline-color: var(--color-ink);
		outline-offset: -4px;
	}

	main {
		max-width: var(--content-width);
		margin: 0 auto;
		padding: var(--space-5) var(--space-3) var(--space-6);
	}

	@media (max-width: 600px) {
		main {
			padding: var(--space-4) var(--space-3) var(--space-5);
		}
	}
</style>
