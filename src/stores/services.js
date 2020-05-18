import { readable } from 'svelte/store';

export const services = readable([
    { 
      id: 'recipes' , 
      name: 'Recetas de Cocina', 
      description: 'Receta aleatorea desde recetasgratis.com',
    },
    { 
      id: 'tv' , 
      name: 'Programación de TV', 
      value: true
    },
    { id: 'rates', name: 'Tasas de Cambio', value: true},
    { id: 'cats', name: 'Fotos de Gaticos', value: true},
    { id: 'dogs', name: 'Fotos de Perritos', value: true},
    { id: 'number', name: 'Datos sobre los Números', value: true},
    { id: 'nasa', name: 'Foto del día de la Nasa', value: true},
    { id: 'podcats', name: 'Podcast Cubanos', value: true},
    { id: 'quotes', name: 'Frases Célebres', value: true},
    { id: 'ephemerides', name: 'Efemérides del día', value: true},
    { id: 'lucasnometro', name: 'Lucasnometro Semanal', value: true},
    { id: 'insmet', name: 'Estado del Tiempo', value: true},
    { id: 'ecured-curiosity', name: 'Curiosidades de Ecured', value: true},
  ])

