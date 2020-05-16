const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {
    let url = 'https://www.gacetaoficial.gob.cu'
    let response, body, $

    response = await fetch( url );
    body = await response.text();
    $ = cheerio.load( body );

    let date = $('[property="dc:date"]').attr('content')

    // if ( moment(date).isSame( moment(), 'day' ) ) {
    // let urlGaceta = url + $('.views-field-view-node a').attr('href')
      let data = {
        url: url + $('.views-field-view-node a').attr('href'),
        file: $('.views-field-field-fichero-gaceta a').attr('href'),
        type: $('.views-field-field-tipo-edicion-gaceta .field-content').first().text(),
        number: $('.views-field-field-numero-de-gaceta .field-content').first().text(),
        date: $('.views-field-field-fecha-gaceta .date-display-single').first().text(),
      }


    response = await fetch( data.url );
    body = await response.text();
    $ = cheerio.load( body );

    data.items = $('.node-norma-juridica').map((i,el)=>({
      title: $('.title',el).text(),
      content: $('.field-type-text-with-summary p',el).text(),
    })).get()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
