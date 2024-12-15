const express = require('express');
const app = express();
require('dotenv').config();

// Conexão com o MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
 .then(() => {
    console.log('Conectado ao Mongo');
    app.emit('pronto');
 })
 .catch((err => {
    console.error('Erro ao conectar ao Mongo', err)
 }))

// Middlewares de Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração de Sessões
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Uso do flash
const flash = require('connect-flash');

const sessionOptions = session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
     maxAge: 1000  * 60  * 60  * 24 * 7,
     httpOnly: true
    }
 });
 
 app.use(sessionOptions);
 app.use(flash());

// Middleware de Cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.COOKIE_PARSER_SECRET));

// Middleware de CSRF
const csrf = require('tiny-csrf');
const csrfProtection = csrf(process.env.CSRF_SECRET, ['POST'], ['PUT'], ['GET'], ['DELETE']);
app.use(csrfProtection);

// Middlewares Personalizados (CSRF e Tratamento de Erros)
const { middlewareGlobal, csrfMiddleware, checkCsrfError } = require('./src/middlewares/middleware');
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(checkCsrfError);

// Configuração de rotas
const routes = require('./routes');
const path = require('path');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public')));


app.use(routes);

// Inicialização do Servidor
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor local escutando na porta 3000');
    });
});