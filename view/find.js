const { getDataWithIdGuru } = require('../controller/mongo');
const { valList } = require('../validator/index');

const express = require('express');
const app = express.Router();

app.post('/idGuru', valList, getDataWithIdGuru);

module.exports = app;