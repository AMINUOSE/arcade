<script>
	import Grid from '#lib/components/crossword/Grid.svelte';

	let { cells, across, down } = $props();

	const list = (words) => words.map(({ number, answer }) => `${number} ${answer}`).join(', ');
</script>

<details>
	<summary>Reveal the solution</summary>
	<div class="body">
		<Grid {cells} reveal />
		<p><strong>Across:</strong> {list(across)}.</p>
		<p><strong>Down:</strong> {list(down)}.</p>
	</div>
</details>

<style>
	details {
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius-lg);
		box-shadow: 4px 4px 0 var(--color-ink);
	}

	summary {
		display: flex;
		align-items: center;
		min-height: var(--tap-target);
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-lg);
		color: var(--color-accent);
		font-weight: 800;
		cursor: pointer;
		transition: background-color var(--transition);
	}

	summary:hover {
		background-color: var(--color-paper-alt);
	}

	summary:focus-visible {
		outline-offset: -3px;
	}

	.body {
		padding: var(--space-4);
	}

	.body :global(.crossword) {
		margin-bottom: var(--space-3);
	}
</style>
