<script>
	let { title, meta, heading, items } = $props();
</script>

<article class="card">
	<h3>{title}</h3>
	<p class="meta">{meta}</p>
	{#if heading}
		<h4>{heading}</h4>
	{/if}
	<ul>
		{#each items as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</article>

<style>
	.card {
		margin-bottom: var(--space-3);
		padding: var(--space-4);
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius-lg);
		box-shadow: 4px 4px 0 var(--color-ink);
	}

	h3 {
		margin-bottom: var(--space-1);
	}

	.meta {
		margin-bottom: var(--space-3);
		color: var(--color-text-muted);
		font-size: var(--text-sm);
	}

	h4 {
		margin: var(--space-3) 0 var(--space-1);
		color: var(--color-accent);
	}

	ul {
		margin: 0;
		padding-left: var(--space-4);
	}

	li {
		max-width: var(--reading-width);
		margin-bottom: var(--space-1);
	}

	li::marker {
		color: var(--color-accent);
	}

	@media (max-width: 600px) {
		.card {
			box-shadow: 3px 3px 0 var(--color-ink);
		}
	}
</style>
