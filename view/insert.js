const { insertDataRoom } = require('../controller/mongo');
const { inList } = require('../validator/index');

const express = require('express');
const app = express.Router();

app.post('/', inList ,insertDataRoom);

module.exports = app;