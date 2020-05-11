const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {

    const response = await fetch( 'http://www.bc.gob.cu/' );
    const body = await response.text();
    const $ = cheerio.load( body );

    let data = {
      content: $('#tbcc .caption').html()
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
