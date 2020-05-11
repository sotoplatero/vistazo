import { writable } from './localStorageStore'
import { readable } from 'svelte/store';

export const preferences = writable( 'preferences', null )

export const q = writable( 'q', '' )

export const provinces = readable([
	{ slug: '', name: 'Todas'},
	{ slug:	'pinar-del-rio', name: 'Pinar del Rio'},
	{ slug:	'la-habana', name: 'La Habana'},
	{ slug:	'artemisa', name: 'Artemisa'},
	{ slug:	'mayabeque', name: 'Mayabeque'},
	{ slug:	'isla-de-la-juventud', name:'Isla de la Juventud'},
	{ slug:	'matanzas', name: 'Matanzas'},
	{ slug:	'cienfuegos', name: 'Cienfuegos'},
	{ slug:	'villa-clara', name:'Villa Clara'},
	{ slug:	'santi-spiritus', name:'Santi Spiritus'},
	{ slug:	'ciego-de-avila', name: 'Ciego de Ávila'},
	{ slug:	'camaguey', name:'Camagüey'},
	{ slug:	'las-tunas', name:'Las Tunas'},
	{ slug:	'holguin', name: 'Holguín'},
	{ slug:	'granma', name:'Granma'},
	{ slug:	'santiago-de-cuba', name:'Santiago de Cuba'},
	{ slug:	'guatanamo', name:'Guatánamo'},
])

export const feeds = writable('feeds',[
	'https://actualidad.rt.com/feeds/all.rss',
	"https://www.claustrofobias.com/rss",
	"https://vistarmagazine.com/rss",
	"http://www.cubadebate.cu/feed",
	"https://dev.to/rss",
])
