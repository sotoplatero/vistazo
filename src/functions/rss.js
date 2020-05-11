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
    let rss = await parser.parseURL(url);
    let maxPubDate = Math.max( ...rss.items.map( el => moment(el.pubDate) ) );

    rss.items = rss.items
              .filter( el => moment(el.pubDate).isSame(maxPubDate,'day') )
              .map( el => Object.assign(el, { pubDate: moment(el.pubDate).format('lll') }) )
              
    return {
      statusCode: 200,
      body: JSON.stringify(rss),
      headers: { 'Content-Type':'application/json' },
    }

  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
