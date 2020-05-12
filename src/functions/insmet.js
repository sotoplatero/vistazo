// const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('es6-promise').polyfill();
require('isomorphic-fetch');

exports.handler = async (event, context) => {
  return fetch( 'http://www.insmet.cu/asp/genesis.asp?TB0=PLANTILLAS&TB1=PTM&TB2=/Pronostico/Ptm.txt' )
    .then( response => response.text() )
    .then( body => {
      console.log(body)
      const $ = cheerio.load( body );
      let $table = $('.contenidoPagina[valign="top"]')
      let data = {
        // html: $table.html().trim(),
        title: $table.find('b').first().html(),
        content: $table.find('p[align="justify"]').html(),
        author: $table.find('[id^="name"] ').text(),
        // map: $('table[style="border: thin"]').parent().html()
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
