'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})


app.get('/', (req, res) => {
  res.send({text: 'hello world'});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);