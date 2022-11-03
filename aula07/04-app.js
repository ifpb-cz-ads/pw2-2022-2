const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api-router');

const app = express();
const staticPath = path.resolve(__dirname, 'static');

app.use('/public', express.static(staticPath));
app.use('/api', apiRouter);
app.listen(3000);
