import express from 'express';
import http from 'http';
import cors from 'cors';
import sec from './env/index.js';

const app = express();

app.use(express.json());
app.use(cors());

const serv = http.createServer(app);
serv.listen(sec.PORT);
