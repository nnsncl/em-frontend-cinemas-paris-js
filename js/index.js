const BACKEND_URL   = 'http://localhost:3000/api/series/list';
const urlImgPrefix  = 'https://image.tmdb.org/t/p/w500';

const loadSeries = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', BACKEND_URL);
        xhr.send(null);

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = JSON.parse(xhr.response);
                const tvShows = response.results;
                console.log(JSON.parse(xhr.response));
                
                const slides = tvShows.map(show => {
                    return { src: urlImgPrefix + show.poster_path, txt: `<h5>${show.name}</h5><p>${show.overview}</p>` }
                });

                console.log(slides);
                new Slider(slides, '.my-slider', 20);


            } else {
                console.log('Une erreur est survenue. Statut de la requête : ' + xhr.status);
            }
        });

        xhr.addEventListener('error', e => { console.log(e); });
}


loadSeries();

