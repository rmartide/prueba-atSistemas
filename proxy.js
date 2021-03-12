const express = require('express');
const request = require('request');
const app = express();
const proxyURL = "http://localhost:9999";

app.use(express.static('dist/prueba-atsistemas'));

app.use('/', function (req, res) {
    req.pipe(request(proxyURL)).pipe(res);
});

app.listen(9999);