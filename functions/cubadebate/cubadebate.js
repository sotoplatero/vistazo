let Parser = require('rss-parser');
let parser = new Parser();
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'World'

    let feed = await parser.parseURL('http://www.cubadebate.cu/feed');

    return {
      statusCode: 200,
      body: JSON.stringify(feed.items),
      headers: { 'Content-Type':'application/json' },
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
