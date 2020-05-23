require('dotenv').config();
const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

exports.handler = async (event, context) => {
  const { photo } = event.queryStringParameters;  

  return unsplash.photos.getPhoto(photo)
    .then( res => res.json() )
    .then( json => 
      unsplash.photos.downloadPhoto(json)
    )
    .catch(error => ({ 
      statusCode: 422, 
      body: String(error) 
    }));
    
}
