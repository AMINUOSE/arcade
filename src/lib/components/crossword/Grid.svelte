<script>
	import Cell from '#lib/components/crossword/Cell.svelte';

	let { cells, values = [], onchange = () => {}, reveal = false, labelledby } = $props();
</script>

<div
	class="crossword"
	role={reveal ? undefined : 'group'}
	aria-labelledby={reveal ? undefined : labelledby}
	aria-hidden={reveal ? 'true' : undefined}
>
	{#each cells as cell, index (`${cell.row}-${cell.col}`)}
		<Cell {cell} {reveal} value={values[index]} onchange={(letter) => onchange(index, letter)} />
	{/each}
</div>

<style>
	.crossword {
		--cell-size: clamp(50px, 14vw, 64px);
		display: grid;
		grid-template-columns: repeat(5, var(--cell-size));
		grid-auto-rows: var(--cell-size);
		gap: 4px;
		width: max-content;
		max-width: 100%;
	}
</style>
