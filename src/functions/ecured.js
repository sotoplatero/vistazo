// const fetch = require('node-fetch');
const cheerio = require('cheerio');
const moment = require('moment');
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  let today = moment().locale('es').format("D_[de]_MMMM")
  console.log(today)
  return fetch(`https://www.ecured.cu/api.php?action=parse&page=${today}&format=json`)
    .then(response => response.json())
    .then( (data) => ({
        statusCode: 200,
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
          day: moment().locale('es').format("D [de] MMMM"),
          content: data.parse.text['*']
        })
    }))
    .catch(error => ({ 
      statusCode: 422, 
      body: String(error) 
    }));

}
