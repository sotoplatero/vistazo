const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {

    const response = await fetch( 'https://www.gacetaoficial.gob.cu/es' );
    const body = await response.text();
    const $ = cheerio.load( body );

    let date = $('[property="dc:date"]').attr('content')

    // if ( moment(date).isSame( moment(), 'day' ) ) {
      let data = {
        url: $('.views-field-field-fichero-gaceta a').attr('href'),
        type: $('.views-field-field-tipo-edicion-gaceta .field-content').first().text(),
        number: $('.views-field-field-numero-de-gaceta .field-content').first().text(),
        date: $('.views-field-field-fecha-gaceta .date-display-single').first().text(),
      }
    // }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
