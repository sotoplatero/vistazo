// const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fetch = require('node-fetch');

exports.handler = async (event, context) => {

  return fetch(`https://www.ecured.cu/EcuRed:Enciclopedia_cubana`)
    .then(response => response.text())
    .then( (body) => {
      $ = cheerio.load( body );
      let data = $('#curiosidades_content')
        .html()
        .replace(/href="/g, 'target="_blank" href="https://www.ecured.cu')
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
