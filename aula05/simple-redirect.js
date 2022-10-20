const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.get('/', (request, response) => {
  console.log('IP da requisicao: ' + request.ip);
  response.send('Olá, boas-vindas à minha página!');
});

app.get('/hello/:nome', (request, response) => {
  const nome = request.params.nome;
  response.send(`Hello ${nome}, welcome to my page!`);
});

app.get('/previsao', (request, response) => {
  response.send('A previsão é tempo firme.');
});

app.use((request, response) => {
  response.redirect('https://ifpb.edu.br');
});

app.listen(3000, () => console.log('App executando...'));
