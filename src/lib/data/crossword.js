// '.' marks a blocked square
export const solution = ['CLASS', 'A.G.P', 'CURVE', 'H.E.N', 'EVENT'];

export const across = [
	{ number: 1, clue: 'Blueprint for creating objects in OOP', answer: 'CLASS' },
	{ number: 4, clue: 'A line that bends smoothly', answer: 'CURVE' },
	{ number: 5, clue: 'A mouse click or key press, to a GUI program', answer: 'EVENT' }
];

export const down = [
	{ number: 1, clue: 'Fast temporary storage near the processor', answer: 'CACHE' },
	{ number: 2, clue: 'Say yes', answer: 'AGREE' },
	{ number: 3, clue: 'Used up, like time or money', answer: 'SPENT' }
];

/**
 * Turns the solution rows into one object per square, numbering the squares
 * that start a word and building the screen reader label for each letter.
 */
export function buildCells(rows = solution) {
	const isLetter = (row, col) => {
		const char = rows[row]?.[col];
		return char !== undefined && char !== '.';
	};

	const numbers = {};
	let next = 1;
	rows.forEach((line, row) => {
		[...line].forEach((_, col) => {
			if (!isLetter(row, col)) return;
			const startsAcross = !isLetter(row, col - 1) && isLetter(row, col + 1);
			const startsDown = !isLetter(row - 1, col) && isLetter(row + 1, col);
			if (startsAcross || startsDown) numbers[`${row},${col}`] = next++;
		});
	});

	const wordNumber = (row, col, dRow, dCol) => {
		let startRow = row;
		let startCol = col;
		while (isLetter(startRow - dRow, startCol - dCol)) {
			startRow -= dRow;
			startCol -= dCol;
		}
		const isWord = isLetter(startRow + dRow, startCol + dCol);
		return isWord ? numbers[`${startRow},${startCol}`] : null;
	};

	return rows.flatMap((line, row) =>
		[...line].map((char, col) => {
			if (char === '.') return { row, col, block: true };

			const acrossNumber = wordNumber(row, col, 0, 1);
			const downNumber = wordNumber(row, col, 1, 0);
			const words = [
				acrossNumber && `${acrossNumber} Across`,
				downNumber && `${downNumber} Down`
			].filter(Boolean);

			return {
				row,
				col,
				block: false,
				answer: char,
				number: numbers[`${row},${col}`],
				label: `Row ${row + 1}, column ${col + 1}, ${words.join(' and ')}`
			};
		})
	);
}
