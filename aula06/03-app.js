let express = require("express");
let path = require("path");
let fs = require("fs");
let logger = require("morgan");

const app = express();
const staticPath = path.join(__dirname, "static");

app.use(logger("short"));

app.use(express.static(staticPath));

app.use((req, res) => {
    res.status(404);
    res.send("File not found!");
});

app.listen(3000, () => {
    console.log("App started on port 3000");
});
