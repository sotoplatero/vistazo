require('dotenv').config();
const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

exports.handler = async (event, context) => {
  const { q, size=4 } = event.queryStringParameters;  

  return unsplash.photos.getRandomPhoto({ query: q, count: size})
    .then( res => res.json())
    .then( data => {
      unsplash.photos.downloadPhoto(data[0]);
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
