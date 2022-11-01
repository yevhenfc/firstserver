const express = require('express');
const router = require('./router.js');
const {STATIC_PATH} = require('./constants.js');

const app = express();

app.use(express.static(STATIC_PATH));
app.use(express,json());
app.use('/api',router);
module.exports = app;

