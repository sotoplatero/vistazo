require('dotenv').config()
const fetch = require('node-fetch');
var Twit = require('twit')
var t = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

exports.handler = async (event, context) => {
  try {
    const { username = 'callemonte', search } = event.queryStringParameters;

    if (!!search) {
      response = await t.get('users/search', { q: search, include_entities: false })
    } else {
      let timeline = await t.get('statuses/user_timeline', { screen_name: username, count: 1 })
      // console.log(timeline.data[0])
      let twitt = timeline.data[0]
      console.log(`https://twitter.com/${username}/status/${twitt.id_str}`)
      response = await t.get('statuses/oembed', { url: `https://twitter.com/${username}/status/${twitt.id_str}`, omit_script: true })

    }

    // let data = !!search ? response.data : response.data;

    return {
      statusCode: 200,
      body: JSON.stringify( response.data  ),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
