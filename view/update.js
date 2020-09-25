const { updateStatus } = require('../controller/mongo');

const express = require('express');
const app = express.Router();

app.put('/:idGuru', updateStatus);

module.exports = app;