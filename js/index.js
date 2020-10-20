const BACKEND_URL = 'http://localhost:3000/api/series/list';
const urlImgPrefix  = 'https://image.tmdb.org/t/p/w500';


const xhr = new XMLHttpRequest();
xhr.open('GET', BACKEND_URL);
xhr.send(null);

xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        const tvShows = JSON.parse(xhr.response).results;
        console.log(tvShows);
        
        
        
        
        
        document.querySelector('.slide-img').style.backgroundImage = 'url("' + urlImgPrefix + tvShows[10].poster_path + '")';
        document.querySelector('.my-slider-synopsis-card').innerText = tvShows[10].overview;
        document.querySelector('.my-slider-synopsis-card').style.animation = 'card-appearence 0.4s linear forwards';
        
    } else {
        console.log('Une erreur est survenue. Statut de la requête : ' + xhr.status);
    }
});

xhr.addEventListener('error', e => {
    console.log('Une erreur est survenue. Contenu de l\'erreur : ', e)
});

/*
xhr.addEventListener('readystatechange', () => {
    console.log(xhr.readyState);
    if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300) {
            console.log(JSON.parse(xhr.response));
        } else {
            console.log('Une erreur est survenue. Statut de la requête : ' + xhr.status);
        }
    }
});
*/
