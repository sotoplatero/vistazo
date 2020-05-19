const services = [
    { 
      id: 'recipes' , 
      name: 'Recetas de Cocina', 
      description: 'Receta aleatorea desde recetasgratis.com',
    },
    { 
      id: 'tv' , 
      name: 'Televisión Cubana', 
      description: 'Programación de todos los canales disponible de la TV Cubana',
    },
    { 
    	id: 'rates', 
    	name: 'Tasas de Cambio', 
    	description: "Tasas de cambio de monedas actualizadas del Banco Central de Cuba"
    },
    { 
    	id: 'cats', 
    	name: 'Fotos de Gaticos', 
    	description: "Para los amantes de los gatos incluye una foto aleatoria sobre los gatos"
    },
    { 
    	id: 'dogs', 
    	name: 'Fotos de Perritos', 
        description: "Para quienes prefieren los perros una foto aleatoria sobre los perros"
    },
    { 
    	id: 'number', 
    	name: 'Números', 
    	description: "Muestra datos curiosos sobre los números"
    },
    { 
    	id: 'nasa', 
    	name: 'Foto de la NASA', 
    	description: "La foto del día publicada por la NASA incluyendo una amplia descripción"
    },
    { 
    	id: 'cubapod', 
    	name: 'Podcast Cubanos', 
    	description: "Una entrada aleatoria del listado de Podcast Cubanos desde cubapod"
    },
    { 
    	id: 'quotes', 
    	name: 'Frases Célebres', 
    	description: "Frases célebres que te harán reflexionar"
    },
    { 
    	id: 'ecured-ephemeris', 
    	name: 'Efemérides del día', 
    	description: "Desde el sitio de Ecured las efemerides que incluyen nacimientos, fallecimientos"
    },{ 
    	id: 'ecured-curiosity', 
    	name: 'Curiosidades de Ecured', 
    	description: "Curiosidades publicadas en la página principal de la Ecured"
    },{ 
    	id: 'lucasnometro', 
    	name: 'Lucasnometro Semanal', 
    	value: true
    },{ 
    	id: 'insmet', 
    	name: 'Estado del Tiempo', 
    	description: "Actualización del estado del tiempo para mañana"
    },{ 
        id: 'gaceta', 
        name: 'Gaceta Oficial de Cuba', 
        description: "Muestra la última gaceta publicada un resumen y el enlace de descarga"
    },
  ]

export default services.sort( (a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});