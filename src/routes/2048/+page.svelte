<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Board from '#lib/components/game2048/Board.svelte';
	import ScorePanel from '#lib/components/game2048/ScorePanel.svelte';
	import OnScreenKeys from '#lib/components/game2048/OnScreenKeys.svelte';
	import LiveRegion from '#lib/components/game2048/LiveRegion.svelte';
	import Button from '#lib/components/Button.svelte';
	import { game } from '#lib/state/game.svelte.js';
	import { motion } from '#lib/motion.js';
	import { swipe } from '#lib/swipe.js';

	const keys = {
		ArrowLeft: 'left',
		ArrowRight: 'right',
		ArrowUp: 'up',
		ArrowDown: 'down'
	};

	let announcement = $derived(
		`Score ${game.score}.` +
			(game.won ? ' You reached 2048.' : '') +
			(game.over ? ' Game over.' : '')
	);

	onMount(() => game.start());

	function onkeydown(event) {
		if (event.metaKey || event.ctrlKey || event.altKey) return;

		const direction = keys[event.key];
		if (!direction) return;

		event.preventDefault();
		game.play(direction);
	}
</script>

<svelte:head>
	<title>2048 | Side Quest</title>
	<meta name="description" content="Play 2048: slide the tiles and merge them to reach 2048." />
</svelte:head>

<svelte:window {onkeydown} />

<h1>2048</h1>
<p class="intro">Slide the tiles with the arrow keys and merge equal ones to reach 2048.</p>

<div class="game">
	<div class="controls">
		<ScorePanel score={game.score} best={game.best} />
		<Button onclick={() => game.newGame()}>New game</Button>
	</div>

	<div class="board-area" use:swipe={(direction) => game.play(direction)}>
		<Board board={game.board} spawnedAt={game.spawnedAt} />
	</div>

	<div class="message-slot">
		{#if game.over}
			<p class="message" transition:fade={{ duration: motion(200) }}>
				Game over. Final score {game.score}.
			</p>
		{:else if game.won}
			<p class="message" transition:fade={{ duration: motion(200) }}>
				You reached 2048! Keep playing for a higher score.
			</p>
		{/if}
	</div>

	<OnScreenKeys onmove={(direction) => game.play(direction)} />
</div>

<LiveRegion message={announcement} />

<style>
	h1 {
		margin-bottom: var(--space-2);
	}

	.intro {
		margin-bottom: var(--space-3);
		color: var(--color-text-muted);
	}

	/* Shrinks with the window height so the whole board stays on screen */
	.game {
		width: min(100%, 28rem, max(16rem, 100svh - 20rem));
	}

	.controls {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		margin-bottom: var(--space-3);
	}

	/* Lets a finger drag on the board swipe instead of scrolling the page */
	.board-area {
		touch-action: none;
	}

	.message-slot {
		min-height: 3rem;
		margin-top: var(--space-3);
	}

	.message {
		display: inline-block;
		margin: 0;
		padding: var(--space-2) var(--space-3);
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
		color: var(--color-accent);
		font-weight: 800;
	}
</style>
