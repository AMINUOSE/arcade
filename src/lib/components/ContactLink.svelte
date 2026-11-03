<script>
	let { href, label, value } = $props();
</script>

<li>
	<a {href}>
		<span class="label">{label}</span>
		<span class="value">{value}</span>
	</a>
</li>

<style>
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: var(--tap-target);
		padding: var(--space-3) var(--space-4);
		background-color: var(--color-surface);
		border: 2px solid var(--color-ink);
		border-radius: var(--radius);
		box-shadow: 4px 4px 0 var(--color-ink);
		color: var(--color-text);
		text-decoration: none;
		transition:
			transform var(--transition),
			box-shadow var(--transition),
			background-color var(--transition);
	}

	a:hover {
		background-color: var(--color-paper-alt);
		transform: translate(2px, 2px);
		box-shadow: 2px 2px 0 var(--color-ink);
	}

	.label {
		color: var(--color-accent);
		font-size: var(--text-sm);
		font-weight: 800;
		letter-spacing: 0.04em;
	}

	.value {
		font-size: var(--text-lg);
		font-weight: 700;
		overflow-wrap: anywhere;
	}
</style>
