const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.use((request, response, next) => {
  const min = new Date().getMinutes();
  if (min % 2 === 0) {
    console.log('Usuário autenticado com sucesso! Exibindo informação secreta...');
    next();
  } else {
    console.log('Usuário não autorizado');
    response.status(403).send('Não autorizado!');
  }
});

app.use((request, response) => {
  response.send('A informação secreta é: 13');
});

app.listen(3000, () => console.log('App executando...'));
