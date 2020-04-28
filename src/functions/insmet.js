const fetch = require('node-fetch');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const got = require('got');

exports.handler = async (event, context) => {
  try {

    const response = await fetch( 'http://www.insmet.cu/asp/genesis.asp?TB0=PLANTILLAS&TB1=PTM&TB2=/Pronostico/ptrd.txt' );
    (async () => {
      try {
        const response = await got('http://www.insmet.cu/asp/genesis.asp?TB0=PLANTILLAS&TB1=PTM&TB2=/Pronostico/ptrd.txt');
        // console.log(response.body);
      } catch (error) {
        console.log(error.response.body);
      }
    })();

    const body = await response.textConverted();
    // console.log(body)
    // let html = iconv.decode(body, 'ISO-8859-1');
    const $ = cheerio.load( body );

    let date = $('[property="dc:date"]').attr('content')

    // if ( moment(date).isSame( moment(), 'day' ) ) {
      let data = {
        pronostico: $('td[align="justify"] table').html(),
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
