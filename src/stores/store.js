import { writable } from './localStorageStore'

export const preferences = writable( 'preferences', null )

export const q = writable( 'q', '' )
