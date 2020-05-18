const fetch = require('node-fetch');
const sharp = require('sharp');

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters

  let response = await fetch(url)
  let image = await response.buffer()

  return sharp(image)
    .resize({ width: 32, height: 32, fit: 'cover'})
    .toFormat('jpg')
    .toBuffer()
    .then( data => ({
        statusCode: 200,
        headers: { 'Content-type': 'image/jpeg' },
        body: data.toString('base64'),
        isBase64Encoded: true
    }) )
    .catch(error => ({ 
      statusCode: 422, 
      body: String(error) 
    }));    
}
