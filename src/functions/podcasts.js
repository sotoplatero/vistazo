const fetch = require('node-fetch');
const cheerio = require('cheerio');
const moment = require('moment');
let Parser = require('rss-parser');
let parser = new Parser();

exports.handler = async (event, context) => {
  try {
    const response = await fetch( `https://raw.githubusercontent.com/lugodev/cuban-podcasts-feedr-bot/master/src/feeds.json` );
    const podcasts = await response.json();

    const randomPodcast = Math.floor(Math.random() * podcasts.length)

    let { items } = await parser.parseURL( podcasts[randomPodcast].url );
    let maxPubDate = Math.max( ...items.map( el => moment(el.pubDate) ) );
    let data = items.filter( el => moment(el.pubDate).isSame(maxPubDate,'day') )

    return {
      statusCode: 200,
      body: JSON.stringify( data[0] ),
      headers: { 'Content-Type': 'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

