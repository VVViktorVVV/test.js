const axios = require('axios');

// const Handlebars = require("handlebars");
// import cardRender from '../hbs/cardRender.hbs';

const list = document.querySelector(".gallery");


// const KEY = '2cf91cf1fed5026ae9524dc97ad33068';

async function fetchTopMovies() {
    try {
              
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2cf91cf1fed5026ae9524dc97ad33068',);
      console.log(response.data.results)
      renderImagesList(response.data.results);
      return response.data.results;
    }
    
    catch (error) {
      console.error(error);
  }


}
  
window.addEventListener('load', fetchTopMovies);


function createListImagesElement({ poster_path, original_title, title}) {
    return `<li>
    <img
      src='${poster_path}';
      alt='${original_title}'
      class='poster-img'
    />
    <h3 class='title'>${title}</h3>
    `
}

function renderImagesList(array) {
    const imageElList = array.map((element => createListImagesElement(element))).join('');
    return list.insertAdjacentHTML('beforeend', imageElList)
}


