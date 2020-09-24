import express from 'express';

import { insertDataRoom } from '../controller/mongo.js';

const app = express.Router();

app.post('/', insertDataRoom);

export default app;