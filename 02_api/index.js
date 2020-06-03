const express = require('express');
const server = express();
const PORT = 3000;


//para que todas las peticiones se dividan en paquetes y puedan ser usadas
//facilmente por el body
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

//Hacer peticiones de get
server.get('/', (req, res) => res.status(201).send('Hello world'))
server.get('/perfil', (req, res) => res.json({
    first_name: 'Maui',
    last_name: 'Saaverdra',
}));

//Hacer peticines de post
server.post('/perfil', (req, res) => {
    const { body } = req;
    console.log(body.nombre);
    console.log(body.edad);
    res.send('Hiciste post');
})

//Agrega un endpoint '/api/' que responda a una petición de tipo GET
//con un código de estado 200 y el siguiente json {'mensaje:'hola mundo'}
server.get('/api/', (req, res) => res.status(200).json({
    mensaje: 'Hola mundo'
}));

//Agrega un endpoint '/api/suma' que responda a una 
//petición de tipo GET con la suma de dos números que 
//reciba mediante las querys num1 y num2. El servidor
//debe responder con un código de estado 200 y un json 
//como el siguiente:
// {'resultado': 7}

server.get('/api/suma', (req, res) => {
    console.log(req.query);
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    const result = (num1 + num2);
    res.status(200).json({
        resultado: (parseInt(num1) + parseInt(num2))
    });
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`))