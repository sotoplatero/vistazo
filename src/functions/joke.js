const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('./utils/random');

exports.handler = async (event, context) => {
  try {

    let urls = [
      'https://chistes.yavendras.com',
      'http://www.chistes.com/ChisteAlAzar.asp?n=4',
      // 'https://www.1000chistes.com/',
    ] 
    let data = [], response, body, $;
    let url = urls.random() 
    response = await fetch( url );
    body = await response.text();
    $ = cheerio.load( body );

    if ( /yavendras/g.test(url) ) {
      // abrir un menu aleatorio
      let randomMenu = $('#HUMOR .submenu a[href$=".php"]').map((i,a)=>$(a).attr('href')).get().random();
      response = await fetch( 'https:'+randomMenu );
      console.log(randomMenu)
      body = await response.text();
      $ = cheerio.load( body );

      // seleccionar una de las paginas
      let pages = ( $('.pagination').first().find('li').length - 4)
        console.log($('.pagination').first().find('li').length)
      if ( pages > 1 )  {
        let randomPage = Math.floor( (Math.random() * pages) + 1 )
        response = await fetch( `https:${randomMenu}?pagina_actual=${randomPage}` );
        body = await response.text();
        $ = cheerio.load( body );
      }

      let jokes = $('.search-result-item-body .row.fila')
      let indexJoke = Math.floor(Math.random() * jokes.length)
      $joke = $(jokes[ indexJoke ])
      console.log(jokes.length)

      data = {
        url: 'http:' + $joke.find('.search-result-item-heading a').attr('href'),
        content: $joke.find('.description').html(),
      }
    }

    if ( /ChisteAlAzar/g.test(url) ) {
      data = {
        url: 'http://www.chistes.com/' + $('.chisteid a').attr('href'),
        content: $('.chiste').html(),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
