const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;

  return fetch('https://covid19cubadata.github.io/data/covid19-cuba.json')
    .then( response => response.json() )
    .then( ({casos}) => {

    // let { casos } = await windowfetch(url).then(r => r.json());
      
      let lastDay = Math.max(...Object.keys(casos.dias));
      let total = Object.values(casos.dias)
        .map( el => {
          return {
            ...el,
            diagnosticados_numero: (el.diagnosticados || []).length,
            recuperados_numero: el.recuperados_numero || 0,
            muertes_numero: el.muertes_numero || 0,
          }
        })
        .reduce( (a, b) => {
          return {
            diagnosticados_numero: a.diagnosticados_numero + b.diagnosticados_numero,
            recuperados_numero: a.recuperados_numero  + b.recuperados_numero,
            muertes_numero: a.muertes_numero + b.muertes_numero,
          }
        });
      let data =  {
        dia: casos.dias[lastDay],
        total: total,
      };

      return {
        statusCode: 200,
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      };
    })
    .catch(error => ({ 
    	statusCode: 422, 
    	body: String(error) 
    }));
}