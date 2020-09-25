const { insertDataRoom } = require('../controller/mongo');

const express = require('express');
const app = express.Router();

app.post('/', insertDataRoom);

module.exports = app;