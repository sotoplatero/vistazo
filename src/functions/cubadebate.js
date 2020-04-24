var moment = require('moment');
let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: [['slash:comments','comments_count']],
  }
});

exports.handler = async (event, context) => {
  try {

    let { items } = await parser.parseURL('http://www.cubadebate.cu/feed');

    items = items
      .sort( (a,b) => b.comments_count - a.comments_count )
      .filter( (el,idx) => idx < 3)
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
