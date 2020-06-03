const request = require('request');
const { Banda } = require('./banda');

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

const pomiseGhibli = new Promise((resolve, reject) => {
    request.get('https://ghibliapi.herokuapp.com/films'), (err, res, body) => {
        if (res.statusCode === 200) resolve(JSON.parse(body));
        reject(res.statusCode);

    };
});

pomiseGhibli
.then(films => films.map(films => console.log(films.name)))
.catch(err => console.log(err))