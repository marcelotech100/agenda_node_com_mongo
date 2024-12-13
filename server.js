const express = require('express');
const routes = require('./routes');
const path = require('path');


const app = express();


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar: localhost:3000');
})