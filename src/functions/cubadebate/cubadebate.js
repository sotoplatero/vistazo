var moment = require('moment');
let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: [['slash:comments','comments_count']],
  }
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {

    let {items} = await parser.parseURL('http://www.cubadebate.cu/feed');

    items = items.map( el => Object.assign(el, { pubDate: moment(el.pubDate).format('lll') }) )

    return {
      statusCode: 200,
      body: JSON.stringify(items),
      headers: { 'Content-Type':'application/json' },
    }

  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
