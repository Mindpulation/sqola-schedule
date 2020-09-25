import { getDataWithIdGuru } from '../controller/mongo.js';
import { valList } from '../validator/index.js';
import express from 'express';

const app = express.Router();

app.post('/idGuru', valList, getDataWithIdGuru);


export default app;