<script>
	let { onmove } = $props();

	const keys = [
		{ direction: 'up', symbol: '↑', label: 'Move up' },
		{ direction: 'left', symbol: '←', label: 'Move left' },
		{ direction: 'down', symbol: '↓', label: 'Move down' },
		{ direction: 'right', symbol: '→', label: 'Move right' }
	];
</script>

<div class="keys">
	{#each keys as { direction, symbol, label } (direction)}
		<button type="button" class={direction} aria-label={label} onclick={() => onmove(direction)}>
			<span aria-hidden="true">{symbol}</span>
		</button>
	{/each}
</div>

<style>
	/* Only touch devices and narrow screens need these; everyone else has arrow keys */
	.keys {
		display: none;
	}

	@media (pointer: coarse), (max-width: 600px) {
		.keys {
			display: grid;
			grid-template-columns: repeat(3, 3.5rem);
			grid-template-areas:
				'. up .'
				'left down right';
			gap: var(--space-2);
			justify-content: center;
			margin-top: var(--space-4);
		}
	}

	button {
		min-width: var(--tap-target);
		min-height: 3.5rem;
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
		box-shadow: 3px 3px 0 var(--color-ink);
		color: var(--color-ink);
		font: inherit;
		font-size: var(--text-xl);
		font-weight: 800;
		cursor: pointer;
		touch-action: manipulation;
		transition:
			background-color var(--transition),
			transform var(--transition);
	}

	button:active {
		background-color: var(--color-paper-alt);
		transform: translate(2px, 2px);
		box-shadow: 1px 1px 0 var(--color-ink);
	}

	.up {
		grid-area: up;
	}

	.left {
		grid-area: left;
	}

	.down {
		grid-area: down;
	}

	.right {
		grid-area: right;
	}
</style>
