let Parser = require('rss-parser');
let parser = new Parser({
  customFields: {
    item: [['slash:comments','comments_count']],
  }
});
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const response = await fetch( 'https://www.planetacurioso.com/' );
    const body = await response.text();
    let data = $('article').each( el => {
      return {
        title: $(el).find('.post-title a').text(),
        ur: $(el).find('.post-title a').attr('href'),
        content: $(el).find('.entry').html(),
        image: $(el).find('.image-container img').attr('src'),
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(items),
      headers: { 'Content-Type':'application/json' },
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
