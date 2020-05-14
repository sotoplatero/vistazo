const fetch = require('node-fetch');
const cheerio = require('cheerio');
var moment = require('moment');
let Parser = require('rss-parser');
let parser = new Parser();

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;
  
  try {
    let rss = await parser.parseURL('http://www.loslucas.icrt.cu/category/lucasnometrosemanal/rss');
    let maxPubDate = Math.max( ...rss.items.map( el => moment(el.pubDate) ) );

    lastItem = rss.items.find( el => moment(el.pubDate).isSame(maxPubDate,'day') )
    let response = await fetch(lastItem.link);
    let body = await response.text()

    const $ = cheerio.load( body );
    let $videos = $('h4 iframe')

    let data = $('h4')
      .filter( (i,el) => /^\d{2}\//.test( $(el).text() ) )
      .map( (i,el) => {
        return {
          title: $(el).text().replace(/^\d{2}\/(\d{2}|Estreno)\/\d{2}\.?\s?/,''),
          video: $videos[i].attribs['src'],
          position: ++i,
        }
      }).get()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type':'application/json' },
    }

  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
