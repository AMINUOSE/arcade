import { slide, spawn, canMove, hasMoves } from '@aminuose/arcade-core';

const SIZE = 4;
const WIN_VALUE = 2048;
const STORAGE_KEY = 'arcade-2048';

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

const isTile = (value) =>
	Number.isInteger(value) && (value === 0 || (value >= 2 && (value & (value - 1)) === 0));
const isCount = (value) => Number.isInteger(value) && value >= 0;

function isValidSave(saved) {
	return Boolean(
		saved &&
			Array.isArray(saved.board) &&
			saved.board.length === SIZE &&
			saved.board.every((row) => Array.isArray(row) && row.length === SIZE && row.every(isTile)) &&
			isCount(saved.score) &&
			isCount(saved.best) &&
			typeof saved.won === 'boolean'
	);
}

/** The saved game, or null if there is none, it is damaged, or storage is blocked. */
function readSave() {
	try {
		const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
		return isValidSave(saved) ? saved : null;
	} catch {
		return null;
	}
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
	 * HTML; start() runs once the page mounts and either restores the saved
	 * game or places the first tiles.
	 */
	start() {
		if (this.board.flat().some(Boolean)) return;

		const saved = readSave();
		if (saved) this.best = saved.best;

		if (saved?.board.flat().some(Boolean)) {
			this.board = saved.board;
			this.score = saved.score;
			this.won = saved.won;
		} else {
			this.newGame();
		}
	}

	save() {
		try {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({
					board: $state.snapshot(this.board),
					score: this.score,
					best: this.best,
					won: this.won
				})
			);
		} catch {
			// Storage can be full or blocked (private windows); the game still works without it.
		}
	}

	newGame() {
		const first = spawn(emptyBoard());
		this.board = spawn(first);
		this.score = 0;
		this.won = false;
		this.spawnedAt = newTileIndex(first, this.board);
		this.save();
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
		this.save();

		return true;
	}
}

export const game = new Game();
