// const fetch = require('node-fetch');
const cheerio = require('cheerio');
require('es6-promise').polyfill();
// require('isomorphic-fetch');
const fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.handler = async (event, context) => {

  let response = await fetch( 'http://meteoro.insmet.cu/asp/genesis.asp?TB0=PLANTILLAS&TB1=AVISO2&TB2=0' )
  let html = await  response.text()

  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
  });

  //   .then( body => {
      const document = dom.window.document;
      console.log(document.querySelector('.contenidoPagina[valign="top"]').innerHTML)

      const body = dom.serialize()
      const $ = cheerio.load( body );
      let $table = $('.contenidoPagina[valign="top"]')
      let data = {
        // html: $table.html().trim(),
        title: $('b',$table).first().html(),
        content: $table.find('p[align="justify"]').html(),
        author: $table.find('[id^="name"] ').text(),
        image: $('#conoi').attr('src')
      }

      return {
        statusCode: 200,
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      } 

    // })
    // .catch(error => ({ 
    //   statusCode: 422, 
    //   body: String(error) 
    // }));

}
