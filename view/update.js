const { updateStatus } = require('../controller/mongo');
const { upList } = require('../validator/index');

const express = require('express');
const app = express.Router();

app.put('/', upList ,updateStatus);

module.exports = app;