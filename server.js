var express = require('express');
var app = express();

app.use('/', express.static('./dist')); // change this if your app requires a different structure

module.exports = app;
