import express from 'express';
import http from 'http';
import cors from 'cors';

import find from './view/find.js';
import insert from './view/insert.js';
import update from './view/update.js';
import sec from './env/index.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/find', find);
app.use('/api/insert', insert);
app.use('/api/update', update);

app.all("*", (req, res)=>{res.send({res:"Fuck you!"}).status(304)});

const serv = http.createServer(app);
serv.listen(sec.PORT);
