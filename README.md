# Side Quest

A small arcade by Zekai Chen, built with SvelteKit (Svelte 5) for CS5610 (Project 2).

## Pages

- `/` – landing page
- `/crossword` – 5×5 mini crossword
- `/2048` – 2048, played with the arrow keys or the on-screen keys on mobile
- `/about` – education, projects, experience
- `/contact` – how to reach me

## The game logic

The rules of 2048 live in a separate package, [`@aminuose/arcade-core`](https://www.npmjs.com/package/@aminuose/arcade-core), which this app installs from npm. The app only draws the board and keeps the score.

## Structure

- `src/routes` – one folder per page
- `src/lib/components` – shared components, with `crossword/` and `game2048/` for each game
- `src/lib/state/game.svelte.js` – shared 2048 state
- `src/lib/data` – crossword, about, and contact content
- `src/lib/styles` – design tokens (colors, type scale, spacing, tile colors) and global styles

## Run it

```sh
npm install
npm run dev
```
