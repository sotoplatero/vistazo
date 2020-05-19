import { writable } from './localStorageStore'
import { readable } from 'svelte/store';

export const settings = writable( 'settings', [])
