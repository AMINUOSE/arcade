<script>
	import Grid from '#lib/components/crossword/Grid.svelte';
	import Clues from '#lib/components/crossword/Clues.svelte';
	import Solution from '#lib/components/crossword/Solution.svelte';
	import { buildCells, across, down } from '#lib/data/crossword.js';

	const cells = buildCells();

	let values = $state(cells.map(() => ''));
	let solved = $derived(cells.every((cell, index) => cell.block || values[index] === cell.answer));

	function setLetter(index, letter) {
		values[index] = letter;
	}
</script>

<svelte:head>
	<title>Mini Crossword | Side Quest</title>
	<meta name="description" content="A playable 5x5 mini crossword." />
</svelte:head>

<h1>Mini Crossword</h1>
<p class="page-intro">
	A CS-flavored 5&times;5 puzzle. Click or tab into a square and type a letter, then press Tab to
	move on to the next square. Correct letters turn green and wrong ones turn red.
</p>

<section class="page-section" aria-labelledby="grid-title">
	<h2 id="grid-title">The grid</h2>

	<div class="layout">
		<Grid {cells} {values} onchange={setLetter} labelledby="grid-title" />
		<Clues {across} {down} />
	</div>

	<p class="status" role="status">{solved ? 'Solved! Every letter is correct.' : ''}</p>
</section>

<section class="page-section" aria-labelledby="solution-title">
	<h2 id="solution-title">Stuck?</h2>
	<Solution {cells} {across} {down} />
</section>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
	}

	.status {
		margin-top: var(--space-3);
		color: var(--color-accent);
		font-weight: 800;
	}

	@media (min-width: 601px) {
		.layout {
			flex-direction: row;
			flex-wrap: wrap;
			align-items: flex-start;
		}

		.layout :global(.clues) {
			flex: 1 1 22rem;
		}
	}
</style>
