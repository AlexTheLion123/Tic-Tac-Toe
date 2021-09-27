import { writable } from 'svelte/store';
export const board = writable(Array(9).join(".").split("."))