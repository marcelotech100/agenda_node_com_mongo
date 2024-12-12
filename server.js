const express = require('express');

const app = express();

// Rota raiz
app.get('/', (req, res) => {
    res.send('<h1>Está tudo ok! Agora sim!</h1>');
})


app.listen(3000, () => {
    console.log('Acessar: localhost:3000');
})