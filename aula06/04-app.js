let express = require('express');
let path = require('path');

const app = express();
const filePath = path.join(__dirname, 'static', 'logo.png');

app.use((req, res, next) => {
    res.sendFile(filePath, (err) => {
        if (err) {
            next(new Error('Error sending file'));
        }
    });
});

app.use((err, req, res, next) => {
    console.error(err);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal server error');
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
