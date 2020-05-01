const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {
    let channels = [
      'cubavision', 
      'telerebelde', 
      'multivision', 
      'educativo', 
      'educativo2', 
      'clave', 
    ];
    var tv = []

    var requestAsync = (channel) => {
        return new Promise( (resolve, reject) => {
          fetch(`http://www.tvcubana.icrt.cu/cartv/${channel}.html`)
            .then((res) => res.text())
            .then( body => {
              $ = cheerio.load( body );
              console.log($('table').html())
              tv.push({ [channel]: $('table').html() })
            })
        });
    };

    let data = await Promise.all(channels.map(requestAsync));

    // let response, body, $
    // channels.forEach(name => {
    //   response = await fetch( `http://www.tvcubana.icrt.cu/cartv/${name}.html` );
    //   body = await response.text();
    //   $ = cheerio.load( body );
      
    // })

    return {
      statusCode: 200,
      body: JSON.stringify(tv),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
