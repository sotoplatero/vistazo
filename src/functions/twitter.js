const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const { user = 'callemonte', search } = event.queryStringParameters;

    if (!!search) {
      const responseSearch = await fetch( 
          `https://api.twitter.com/1.1/users/search.json?q=${search}`, 
          { 
            headers: {
              'Authorization': 'OAuth oauth_consumer_key="zUjRLHOcXC0PVdl0RZo9dSY7W",oauth_token="15981009-WbtEHBM2poHS0xRzhy78vfFuSj5uXAAYXImysPf5q",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1588253015",oauth_nonce="ROSoTlmBsrm",oauth_version="1.0",oauth_signature="4pTqyekk9izxIvnMt5v2hlfSU%2FM%3D"', 
            }
          })
    }

    const response = await fetch( 
        `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=1`, 
        { 
          headers: {
                   'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAItyAAAAAAAAHcq0vddkcHNsfKqe7qIyGXTSFAo%3DeIdHYUqzMlIMqhzej3j9oIbqkgsv82ZgZFOEiIZCtcc0v5QIqv', 
                   'Content-Type': 'application/x-www-form-urlencoded'
           }
        })
    let data = await response.json();

    // let oembedUrl = `https://publish.twitter.com/oembed?url=https://twitter.com/${user}/status/${data[0].id}`
    const responseOembed = await fetch(`https://publish.twitter.com/oembed?url=https://twitter.com/${user}/status/${data[0].id_str}&omit_script=t`)
    // console.log(await responseOembed.text())
    data = await responseOembed.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
