require('dotenv').config();
const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: process.env.UNPLASH_APP_ACCESS_KEY });

exports.handler = async (event, context) => {
  
  return unsplash.photos.getRandomPhoto({ query: 'cuba', count: '4'})
    .then( res => res.json())
    .then( data => ({
      statusCode: 200,
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    }))
    .catch(error => ({ 
      statusCode: 422, 
      body: String(error) 
    }));
    
}
