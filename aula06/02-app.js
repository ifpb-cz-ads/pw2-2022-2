let express = require('express');
let path = require('path');
let fs = require('fs');

let app = express();

app.use((req, res, next) => {
    console.log('Request URL: ' + req.url);
    console.log('Request date: ' + new Date());
    next();
});

app.use((req, res, next) => {
    var filePath = path.join(__dirname, 'static', req.url);

    fs.stat(filePath, (err, fileInfo) => {
        if (err) {
            next();
            return;
        }

        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.use((req, res) => {
    res.status(404).send('File not found!');
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
