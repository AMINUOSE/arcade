<script>
	let { across, down } = $props();
</script>

<section class="clues" aria-labelledby="clues-title">
	<h2 id="clues-title">Clues</h2>
	{#each [{ id: 'across', title: 'Across', items: across }, { id: 'down', title: 'Down', items: down }] as group (group.id)}
		<section aria-labelledby="{group.id}-title">
			<h3 id="{group.id}-title">{group.title}</h3>
			<ol role="list">
				{#each group.items as { number, clue } (number)}
					<li value={number}><span class="number">{number}</span> {clue}</li>
				{/each}
			</ol>
		</section>
	{/each}
</section>

<style>
	.clues {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: var(--space-4);
	}

	h2 {
		grid-column: 1 / -1;
		margin: 0;
	}

	ol {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		padding: var(--space-2) 0;
		border-bottom: 2px solid var(--color-border);
	}

	li:first-child {
		border-top: 2px solid var(--color-border);
	}

	.number {
		display: inline-block;
		min-width: 1.75rem;
		color: var(--color-accent);
		font-weight: 800;
	}
</style>
