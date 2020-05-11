const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
  try {
    let response, body, $
    let random

    response = await fetch( 'https://www.recetasgratis.net' );
    body = await response.text();
    $ = cheerio.load( body );

    const menu = $('.lista_menu a').map( (i,el) => $(el).attr('href') ).get()
    const randomMenu = Math.floor(Math.random() * menu.length)

    response = await fetch( menu[randomMenu] );
    body = await response.text();
    $ = cheerio.load( body );

    const pages = $('.paginator a').map( (i,el) => $(el).attr('href') ).get()
    const randomPages = Math.floor(Math.random() * pages.length)

    response = await fetch( pages[randomPages] );
    body = await response.text();
    $ = cheerio.load( body );

    const recipes = $('.resultado')
    const randomRecipes = Math.floor(Math.random() * recipes.length)
    
    let $recipe = $(recipes[randomRecipes])
    let data = {
      title: $recipe.find('.titulo').text(),
      url: $recipe.find('a.titulo').attr('href'),
      image: $recipe.find('.imagen').attr('data-imagen'),
      description: $recipe.find('.intro').text(),
      author: $recipe.find('.nombre_autor a').text(),
      plates: $recipe.find('.property.comensales').text(),
    } 

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type':'application/json' },
    }
    
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

