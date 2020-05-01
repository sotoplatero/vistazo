const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters

  return fetch(url)
    .then( response => response.buffer() )
    .then( image => ({
      statusCode: 200,
      headers: { 'Content-type': 'image/jpeg' },
      body: image.toString('base64'),
      isBase64Encoded: true
    }))
    .catch(error => ({ 
      statusCode: 422, 
      body: String(error) 
    }));    
}
