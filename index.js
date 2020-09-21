import express from 'express';
import cors from 'cors';

import sec from './env/index.js';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(sec.PORT);