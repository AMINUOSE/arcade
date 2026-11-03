import { slide, spawn, canMove, hasMoves } from '@aminuose/arcade-core';

const SIZE = 4;
const WIN_VALUE = 2048;

const emptyBoard = () => Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

/** Index of the first cell that is empty in `before` and filled in `after`. */
function newTileIndex(before, after) {
	for (let row = 0; row < SIZE; row++) {
		for (let col = 0; col < SIZE; col++) {
			if (before[row][col] === 0 && after[row][col] !== 0) return row * SIZE + col;
		}
	}
	return null;
}

class Game {
	board = $state(emptyBoard());
	score = $state(0);
	best = $state(0);
	won = $state(false);
	spawnedAt = $state(null);

	over = $derived(this.board.flat().some(Boolean) && !hasMoves(this.board));

	/**
	 * The board starts empty so the server and the browser render the same
	 * HTML; the first tiles are placed with start() once the page mounts.
	 */
	start() {
		if (!this.board.flat().some(Boolean)) this.newGame();
	}

	newGame() {
		const first = spawn(emptyBoard());
		this.board = spawn(first);
		this.score = 0;
		this.won = false;
		this.spawnedAt = newTileIndex(first, this.board);
	}

	/** Plays one move. Returns false (and changes nothing) if the move is not legal. */
	play(direction) {
		if (this.over || !canMove(this.board, direction)) return false;

		const result = slide(this.board, direction);
		const next = spawn(result.board);

		this.spawnedAt = newTileIndex(result.board, next);
		this.board = next;
		this.score += result.gained;
		this.best = Math.max(this.best, this.score);
		if (!this.won && next.flat().some((value) => value >= WIN_VALUE)) this.won = true;

		return true;
	}
}

export const game = new Game();
