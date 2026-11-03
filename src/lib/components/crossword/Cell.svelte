<script>
	let { cell, value = '', onchange, reveal = false } = $props();

	let status = $derived(value === '' ? '' : value === cell.answer ? 'correct' : 'wrong');

	function handleInput(event) {
		const letter = event.currentTarget.value.slice(-1).toUpperCase();
		const clean = /^[A-Z]$/.test(letter) ? letter : '';
		event.currentTarget.value = clean;
		onchange(clean);
	}
</script>

{#if cell.block}
	<span class="cell block" aria-hidden="true"></span>
{:else if reveal}
	<span class="cell revealed">{cell.answer}</span>
{:else}
	<label class="cell" class:correct={status === 'correct'} class:wrong={status === 'wrong'}>
		{#if cell.number}
			<span class="number" aria-hidden="true">{cell.number}</span>
		{/if}
		<input
			type="text"
			maxlength="1"
			autocomplete="off"
			aria-label={cell.label}
			aria-invalid={status === 'wrong'}
			{value}
			oninput={handleInput}
		/>
	</label>
{/if}

<style>
	.cell {
		position: relative;
		display: block;
		border: 2px solid var(--color-ink);
		border-radius: var(--space-2);
		background-color: var(--color-surface);
		overflow: hidden;
		transition: background-color var(--transition);
	}

	.block {
		background-color: var(--color-block);
	}

	.number {
		position: absolute;
		top: 2px;
		left: 4px;
		color: var(--color-muted);
		font-size: 0.75rem;
		font-weight: 700;
		line-height: 1;
		pointer-events: none;
	}

	input {
		width: 100%;
		height: 100%;
		padding: 10px 0 0;
		border: 0;
		border-radius: 0;
		background-color: transparent;
		color: var(--color-ink);
		font-family: var(--font-body);
		font-size: var(--text-xl);
		font-weight: 800;
		text-align: center;
		text-transform: uppercase;
		caret-color: var(--color-accent);
	}

	input:hover {
		background-color: var(--color-paper-alt);
	}

	input:focus-visible {
		background-color: var(--color-paper-alt);
		outline: 4px solid var(--color-accent);
		outline-offset: -4px;
		border-radius: 0;
	}

	.correct {
		background-color: var(--color-correct);
	}

	.wrong {
		background-color: var(--color-wrong);
	}

	.revealed {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		color: var(--color-ink);
		font-size: var(--text-xl);
		font-weight: 800;
	}
</style>
