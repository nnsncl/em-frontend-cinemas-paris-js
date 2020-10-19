const BACKEND_URL = 'http://localhost:3000/api/cinemas/read';

const xhr = new XMLHttpRequest();
xhr.open('GET', BACKEND_URL);
xhr.send(null);

xhr.addEventListener('load', () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.response));
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
