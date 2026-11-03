import { MediaQuery } from 'svelte/reactivity';

const reduced = new MediaQuery('prefers-reduced-motion: reduce');

/** Transition duration in ms, or 0 when the visitor asked for less motion. */
export const motion = (ms) => (reduced.current ? 0 : ms);
