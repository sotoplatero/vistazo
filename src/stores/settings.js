import { writable } from './localStorageStore'
import { readable } from 'svelte/store';

export const settings = writable( 'settings', [
		'insmet', 'recipes', 'cats', 'cubapod'
	])
export const rss = writable( 'rss', [ "http://www.cubadebate.cu/feed"])
