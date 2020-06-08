const request = require('request');
// const { Banda } = require('./banda');

request.get('https://ghibliapi.herokuapp.com/films', (err, res, body) => {
    if (res.statusCode === 200) {
        const films = JSON.parse(body);
        films.map(films => {
            console.log(films.title)
        })
    } else {
        console.log('Error en la petición');
    }

});

// const pomiseGhibli = new Promise((resolve, reject) => {
//     request.get('https://ghibliapi.herokuapp.com/films'), (err, res, body) => {
//         if (res.statusCode === 200) resolve(JSON.parse(body));
//         reject(res.statusCode);

//     };
// });



// pomiseGhibli
//     .then(films => films.map(films => console.log(films.name)))
//     .catch(err => console.log(err))


// const pomiseLast = new Promise((resolve, reject) => {
//     request.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=birtney+spearss&api_key=7e4c33016dda25dc8ad05f453fe614bc&format=json`), (err, res, body) => {
//         if (res.statusCode === 200) resolve(JSON.parse(body));
//         reject(res.statusCode);

//     };
// });

// pomiseLast
//     .then(films => films.map(films => console.log(films.name)))
//     .catch(err => console.log(err))

request.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Kylie+Minogue&api_key=7e4c33016dda25dc8ad05f453fe614bc&format=json`, (err, res, body) => {


    if (res.statusCode === 200) {
        const artist = JSON.parse(body);
        artist.map(artist => {
            console.log(artist.name);
        })
        } else {
            console.log('Error en la petición');
        }
});