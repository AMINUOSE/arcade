<script>
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/crossword', label: 'Crossword' },
		{ href: '/2048', label: '2048' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<nav class="site-nav" aria-label="Main">
	<a class="brand" href="/">
		<img src="/images/logo.svg" alt="" width="32" height="32" />
		<span>Side Quest &middot; Zekai Chen</span>
	</a>
	<ul role="list">
		{#each links as { href, label } (href)}
			<li>
				<a {href} aria-current={page.url.pathname === href ? 'page' : undefined}>{label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.site-nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-1) var(--space-4);
		max-width: var(--content-width);
		margin: 0 auto;
		padding: var(--space-1) var(--space-3);
	}

	.brand {
		display: inline-flex;
		align-items: center;
		margin-right: auto;
		gap: var(--space-2);
		min-height: var(--tap-target);
		color: var(--color-text);
		font-size: var(--text-lg);
		font-weight: 800;
		letter-spacing: -0.02em;
		text-decoration: none;
	}

	.brand:hover {
		color: var(--color-accent);
	}

	ul {
		display: flex;
		gap: var(--space-1);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	ul a {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: var(--tap-target);
		min-width: var(--tap-target);
		padding: 0 var(--space-3);
		border-radius: var(--radius-pill);
		color: var(--color-text);
		font-weight: 700;
		text-decoration: none;
		transition:
			background-color var(--transition),
			color var(--transition);
	}

	ul a:hover {
		background-color: var(--color-paper-alt);
		color: var(--color-accent);
	}

	ul a[aria-current='page'] {
		background-color: var(--color-accent);
		color: var(--color-on-accent);
	}

	ul a[aria-current='page']:focus-visible {
		outline-color: var(--color-ink);
	}

	@media (max-width: 600px) {
		.site-nav {
			padding: var(--space-1) var(--space-2);
		}

		.brand {
			flex-basis: 100%;
			justify-content: center;
		}

		ul {
			flex-basis: 100%;
			justify-content: space-between;
		}

		li {
			flex: 1;
		}

		ul a {
			padding: 0 var(--space-1);
			font-size: var(--text-sm);
		}
	}
</style>
