require('dotenv').config()
const express = require('express');
const enrouten = require('express-enrouten');
const bodyParser = require('body-parser');
const path = require('path');
const app =  express();
const PORT = process.env.PORT;
require('./kafka/consumer/consume');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(enrouten({
    directory: path.join(__dirname, 'controllers'),
}));

app.listen(PORT, () => {
  console.log(`Server tracker connected with port ${PORT}`)
});