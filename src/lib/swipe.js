const MIN_DISTANCE = 30;

/**
 * Svelte action: calls onswipe('left' | 'right' | 'up' | 'down') when a finger
 * or pen drags across the node. Mouse drags are ignored.
 */
export function swipe(node, onswipe) {
	let start = null;

	function handleDown(event) {
		if (event.pointerType === 'mouse') return;
		start = { x: event.clientX, y: event.clientY };
	}

	function handleUp(event) {
		if (!start) return;

		const dx = event.clientX - start.x;
		const dy = event.clientY - start.y;
		start = null;

		if (Math.max(Math.abs(dx), Math.abs(dy)) < MIN_DISTANCE) return;

		if (Math.abs(dx) > Math.abs(dy)) onswipe(dx > 0 ? 'right' : 'left');
		else onswipe(dy > 0 ? 'down' : 'up');
	}

	function handleCancel() {
		start = null;
	}

	node.addEventListener('pointerdown', handleDown);
	node.addEventListener('pointerup', handleUp);
	node.addEventListener('pointercancel', handleCancel);

	return {
		update(next) {
			onswipe = next;
		},
		destroy() {
			node.removeEventListener('pointerdown', handleDown);
			node.removeEventListener('pointerup', handleUp);
			node.removeEventListener('pointercancel', handleCancel);
		}
	};
}
