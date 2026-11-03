<script>
	let { href, onclick, children } = $props();
</script>

{#if href}
	<a class="button" {href}>{@render children()}</a>
{:else}
	<button class="button" type="button" {onclick}>{@render children()}</button>
{/if}

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		min-height: var(--tap-target);
		padding: var(--space-2) var(--space-4);
		border: 0;
		border-radius: var(--radius-pill);
		background-color: var(--color-accent);
		color: var(--color-on-accent);
		font: inherit;
		font-weight: 700;
		text-decoration: none;
		cursor: pointer;
		touch-action: manipulation;
		transition:
			background-color var(--transition),
			transform var(--transition);
	}

	.button:hover {
		background-color: var(--color-ink);
		color: var(--color-on-accent);
		transform: translateY(-2px);
	}
</style>
