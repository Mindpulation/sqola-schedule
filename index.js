import compression from 'compression';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());

app.listen(1200);