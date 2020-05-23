const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('./utils/random');

exports.handler = async (event, context) => {
  try {

    let urls = [
      'https://chistes.yavendras.com',
      'http://www.todo-chistes.com/chistes-al-azar',
      // 'http://loschistes.com/',
    ] 
    let data = [], response, body, $, menu;
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

    if ( /todo-chistes/g.test(url) ) {
      data = {
        url: '  http://www.todo-chistes.com/' + $('.view-content article header h2 a').attr('href'),
        content: $('.field-chistes').html(),
      }
    }

    if ( /loschistes/g.test(url) ) {
      data = {
        url: '  http://www.todo-chistes.com/' + $('article header h2 a').attr('href'),
        content: $('.field-chistes').html(),
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
