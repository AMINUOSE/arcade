<script>
	let { href, title, description } = $props();
</script>

<li class="link-card">
	<h3><a {href}>{title}</a></h3>
	<p>{description}</p>
</li>

<style>
	.link-card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 6rem;
		padding: var(--space-3) var(--space-4);
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
		transition:
			background-color var(--transition),
			transform var(--transition);
	}

	h3 {
		margin: 0;
	}

	h3 a {
		color: inherit;
		text-decoration: none;
	}

	h3 a::after {
		content: ' \2192';
		color: var(--color-accent);
	}

	/* Stretch the link over the whole card so the entire card is the tap target */
	h3 a::before {
		content: '';
		position: absolute;
		inset: 0;
	}

	p {
		margin: 0;
		color: var(--color-text-muted);
	}

	.link-card:hover,
	.link-card:focus-within {
		background-color: var(--color-paper-alt);
		transform: translateY(-3px);
	}
</style>
