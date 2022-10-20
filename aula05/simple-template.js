const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(logger('dev'));

app.get('/', (request, response) => {
  response.render('home', {
    message: 'Olá, boas-vindas à minhas página!',
  });
});

app.get('/hello/:nome', (request, response) => {
  const nome = request.params.nome;
  response.send(`Hello ${nome}, welcome to my page!`);
});

app.get('/previsao', (request, response) => {
  response.send('A previsão é tempo firme.');
});

app.use((request, response) => {
  response.status(404).send('Página não encontrada.');
});

app.listen(3000, () => console.log('App executando...'));
