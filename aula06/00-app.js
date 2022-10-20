let express = require('express');
let path = require('path');
let fs = require('fs');

let app = express();

app.use((req, res, next) => {
    console.log('Request URL: ' + req.url);
    console.log('Request date: ' + new Date());
    next();
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
