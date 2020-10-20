const BACKEND_URL = 'http://localhost:3000/api/series/list';
const urlImgPrefix  = 'https://image.tmdb.org/t/p/w500';

const xhr = new XMLHttpRequest();
xhr.open('GET', BACKEND_URL);
xhr.send(null);

xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        const tvShows = JSON.parse(xhr.response).results;

        const slides = tvShows.map(show => {
            return {src: show.poster_path, txt: show.overview}
        });

       new Slider('.my-slider', slides, 10);

    } else {
        console.log('Une erreur est survenue. Statut de la requête : ' + xhr.status);
    }
});

xhr.addEventListener('error', e => {
    console.log('Une erreur est survenue. Contenu de l\'erreur : ', e)
});



