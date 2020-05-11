const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  return fetch( 'http://www.insmet.cu/asp/genesis.asp?TB0=PLANTILLAS&TB1=PT&TB2=/Pronostico/pttn.txt' )
    .then( response => response.textConverted() )
    .then( body => {
      console.log(body)
      const $ = cheerio.load( body );
      let data = {
        pronostico: $('.tablaborde').html(),
      }

      return {
        statusCode: 200,
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      } 

    })
    .catch(error => ({ 
      statusCode: 422, 
      body: String(error) 
    }));

}
