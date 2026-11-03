<script>
	let { score, best } = $props();
</script>

<dl>
	<div>
		<dt>Score</dt>
		<dd>{score}</dd>
	</div>
	<div>
		<dt>Best</dt>
		<dd>{best}</dd>
	</div>
</dl>

<style>
	dl {
		display: flex;
		gap: var(--space-3);
		margin: 0;
	}

	div {
		min-width: 5.5rem;
		padding: var(--space-2) var(--space-3);
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
		text-align: center;
	}

	dt {
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	dd {
		margin: 0;
		font-size: var(--text-xl);
		font-weight: 800;
		line-height: 1.2;
	}
</style>
