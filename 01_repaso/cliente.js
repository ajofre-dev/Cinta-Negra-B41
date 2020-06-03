
const request = require('request');


request.get('https://rickandmortyapi.com/api/character', (err, res, body) => {
    if (res.statusCode === 200) {
        const characters = JSON.parse(body).results;
        characters.map(character => {
            console.log(character.name)
        })
    } else {
        console.log('Error en la petición');
    }
});

//Es lo mismo que lo de arriba, sólo que en uno es mucho más reducido pero es prácticamente lo mismo.
request.get('https://rickandmortyapi.com/api/character', (err, res, body) => {
    return new Promise((resolve, reject) => {
        res.StatusCode === 200
        ? resolve(Json.parse(body).results)
        : reject('Error en la petición');
    })
});

//el de abajo y el de arriba son similares, hacen lo mismo pero tienen que sefr un argumento 
//y una línea de código
.then((res) => console.log(res)) //se quitan las llaves porque es una sola línea de código
.catch((err)  => {console.log(err)})




