<script>
	import Button from '#lib/components/Button.svelte';

	let { number, title, description, href, image, imageAlt, soon = false } = $props();
</script>

<li class="card" class:soon>
	<p class="number">{number}</p>
	{#if image}
		<img src={image} width="260" height="260" alt={imageAlt} />
	{/if}
	<h3>{title}</h3>
	<p class="description">{description}</p>
	{#if href && !soon}
		<Button {href}>Play &rarr;</Button>
	{/if}
</li>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius-lg);
		box-shadow: 4px 4px 0 var(--color-ink);
	}

	h3 {
		margin: 0;
		font-size: var(--text-xl);
	}

	p {
		margin: 0;
	}

	.number {
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-weight: 800;
		letter-spacing: 0.08em;
	}

	.description {
		flex: 1;
		margin-bottom: var(--space-2);
		color: var(--color-text-muted);
	}

	img {
		align-self: center;
		width: 10rem;
		margin-bottom: var(--space-2);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
	}

	.card :global(.button) {
		align-self: flex-start;
	}

	.soon {
		justify-content: center;
		border-style: dashed;
		box-shadow: none;
		background-color: transparent;
		text-align: center;
	}

	.soon .description {
		flex: 0 0 auto;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		.card {
			box-shadow: 3px 3px 0 var(--color-ink);
		}
	}
</style>
