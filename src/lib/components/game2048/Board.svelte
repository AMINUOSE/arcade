<script>
	import Tile from '#lib/components/game2048/Tile.svelte';

	let { board, spawnedAt = null } = $props();

	let tiles = $derived(
		board.flatMap((cells, row) =>
			cells.map((value, col) => ({ id: row * cells.length + col, value, row, col }))
		).filter((tile) => tile.value !== 0)
	);
</script>

<div class="board" role="group" aria-label="2048 board">
	<div class="layer" aria-hidden="true">
		{#each board.flat() as _, index (index)}
			<div class="empty"></div>
		{/each}
	</div>
	<div class="layer">
		{#each tiles as tile (tile.id)}
			<Tile value={tile.value} row={tile.row} col={tile.col} isNew={tile.id === spawnedAt} />
		{/each}
	</div>
</div>

<style>
	.board {
		position: relative;
		container-type: inline-size;
		width: 100%;
		aspect-ratio: 1;
		padding: var(--space-2);
		background-color: var(--board-bg);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius-lg);
		box-shadow: 4px 4px 0 var(--color-ink);
	}

	.layer {
		position: absolute;
		inset: var(--space-2);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: var(--space-2);
	}

	.empty {
		background-color: var(--tile-empty);
		border-radius: var(--radius);
	}

	@media (max-width: 600px) {
		.board {
			box-shadow: 3px 3px 0 var(--color-ink);
		}
	}
</style>
