const express = require('express');

const app = express();

app.use((request, response) => {
  response.send('Olá, mundo!');
});

app.listen(3000, () => console.log('App executando...'));
