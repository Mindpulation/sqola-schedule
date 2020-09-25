const express = require('express');
const http = require('http');
const cors = require('cors');

const sec = require('./env/index');

const update = require('./view/update');
const insert = require('./view/insert');
const find = require('./view/find');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/update', update);
app.use('/api/insert', insert);
app.use('/api/find', find);

app.all("*", (req, res)=>{res.send({res:"Fuck you!"}).status(304)});

const serv = http.createServer(app);
serv.listen(sec.PORT);
