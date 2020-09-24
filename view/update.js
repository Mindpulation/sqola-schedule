import express from 'express';

import { updateStatus } from '../controller/mongo.js';

const app = express.Router();

app.put('/:idGuru', updateStatus);

export default app;