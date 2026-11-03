<script>
	import { scale } from 'svelte/transition';
	import { motion } from '#lib/motion.js';

	let { value, row, col, isNew = false } = $props();

	let color = $derived(value > 2048 ? 'super' : value);
</script>

<div
	class="tile"
	class:small={value >= 128 && value < 1024}
	class:smallest={value >= 1024}
	style:grid-row={row + 1}
	style:grid-column={col + 1}
	style:background-color="var(--tile-{color}-bg)"
	style:color="var(--tile-{color}-text)"
	in:scale|global={{ duration: isNew ? motion(180) : 0, start: 0.4 }}
>
	{value}
</div>

<style>
	.tile {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
		font-size: 8cqw;
		font-weight: 800;
		line-height: 1;
	}

	.small {
		font-size: 6.5cqw;
	}

	.smallest {
		font-size: 5cqw;
	}
</style>
