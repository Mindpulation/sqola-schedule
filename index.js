import express from 'express';
import http from 'http';
import cors from 'cors';

import find from './view/find.js';
import sec from './env/index.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/find', find);

app.all("*", (req, res)=>{res.send({res:"Fuck you!"})});

const serv = http.createServer(app);
serv.listen(sec.PORT);
