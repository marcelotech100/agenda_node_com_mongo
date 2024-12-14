const express = require('express');
const app = express();
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

const csrf = require('tiny-csrf');
const csrfProtection = csrf(process.env.CSRF_SECRET, ['POST'], ['PUT'], ['GET'], ['DELETE']);
app.use(csrfProtection);

const routes = require('./routes');
const path = require('path');
const { csrfMiddleware, checkCsrfError } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(csrfMiddleware);
app.use(checkCsrfError);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar: localhost:3000');
})