const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=pop&api_key=3c91bb4ad33235db074421e228c73763&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280' ;
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=3c91bb4ad33235db074421e228c73763&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(function(data) {
      console.log(data.results);
      data.results.forEach(element => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const image = document.createElement('img');
        image.setAttribute('class', 'thumbnail');
        image.src = IMG_PATH + element.poster_path;

        const title = document.createElement('h3');
        title.innerHTML = element.title;

        const center = document.createElement('center');

        title.appendChild(center);
        center.appendChild(image);

        div_column.appendChild(title);
        div_row.appendChild(div_column);
        div_card.appendChild(div_row);

        main.appendChild(div_card);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }  
});
