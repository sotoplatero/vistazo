const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;

  return fetch(url)
    .then(response => {
    	console.log(response.headers)
    	return response.json()
    })
    .then(data => ({
      statusCode: 200,
      header: response.headers,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
}