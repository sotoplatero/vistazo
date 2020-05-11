const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {

    let urls = [
      'http://www.josemarti.cu/album/pinturas/',
      'http://www.josemarti.cu/album/dibujos-hechos-por-marti/',
      'http://www.josemarti.cu/album/fotos-de-jose-marti/',
      'http://www.josemarti.cu/album/familia-marti/',
    ] 

    let randomIndexUrl = Math.floor(Math.random() * urls.length)
    const response = await fetch( urls[randomIndexUrl] );
    const body = await response.text();
    const $ = cheerio.load( body );

    let data = $('.album-bimage').map( (i,el) => {
      return {
        url: '/.netlify/functions/image?url='+$(el).find('img').attr('src'),
        title: $(el).find('.title').text(),
        description: $(el).find('.desc').html(),
      }
    }).get()

    let randomIndexImage = Math.floor(Math.random() * data.length)

    return {
      statusCode: 200,
      body: JSON.stringify(data[ randomIndexImage ]),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
