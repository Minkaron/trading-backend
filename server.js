const express = require("express");
const path = require("path");

const app = express();
const port = 3000

app.use(express.static(__dirname));


app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname + "/index.html" });
})