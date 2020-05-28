import { writable } from './localStorageStore'
import { readable } from 'svelte/store';

export const settings = writable( 'settings', [
		'insmet',
		'recipes', 
		'ecured-curiosities',
		'joke',
		'cats', 
		'cubapod',
		'dogs',
		'gaceta',
		'number'
	])
