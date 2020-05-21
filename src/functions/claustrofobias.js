const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {
    let response, body, $
    let random

    response = await fetch( 'https://www.claustrofobias.com/tienda/' );
    body = await response.text();
    $ = cheerio.load( body );

    // const pages = $('a.page-numbers')
    const randomPage = Math.floor(Math.random() * 48)

    response = await fetch( `https://www.claustrofobias.com/tienda/page/${randomPage}/` );
    body = await response.text();
    $ = cheerio.load( body );

    const books = $('.product figure a').map( (i,el) => $(el).attr('href') ).get()
    const randomBook = Math.floor(Math.random() * books.length)

    response = await fetch( books[randomBook] );
    body = await response.text();
    console.log(body)
    $ = cheerio.load( body );

    const book = $('.product')

    let data = {
      title: $('.product_title').text(),
      description: $('.woocommerce-product-details__short-description').text(),
      author: $('.woocommerce-product-attributes-item--attribute_pa_escritor .woocommerce-product-attributes-item__value').text(),
      editorial: $('.woocommerce-product-attributes-item--attribute_pa_editorial .woocommerce-product-attributes-item__value').text(),
      url: books[randomBook],
      image: $('img.wp-post-image').attr('src'),
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

