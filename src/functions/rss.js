var moment = require('moment');
let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: [['slash:comments','comments_count']],
  }
});

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;
  
  try {
    let { items } = await parser.parseURL(url);

    let maxPubDate = Math.max( ...items.map( el => moment(el.pubDate) ) );
    items = items
              .filter( el => moment(el.pubDate).isSame(maxPubDate,'day') )
              .map( el => Object.assign(el, { pubDate: moment(el.pubDate).format('lll') }) )
    return {
      statusCode: 200,
      body: JSON.stringify(items),
      headers: { 'Content-Type':'application/json' },
    }

  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
