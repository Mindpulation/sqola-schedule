import express from 'express';

import { getDataWithIdGuru } from '../controller/mongo.js';

const app = express.Router();

app.get('/:idGuru', getDataWithIdGuru);


export default app;