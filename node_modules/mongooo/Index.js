import { getCount, find, findOne, findRange, findPage } from "./lib/mongo/find.js";
import { gzip, unzip } from "./lib/compress/index.js";

import Mongo from "./lib/mongo/index.js";
import compression from 'compression';
import express from 'express';

const app = express();
app.use(express.json());
app.use(compression());

const mongo = new Mongo();
const mongo1 = new Mongo();

const obj1 = mongo.setup("mongodb://127.0.0.1:27017", "testing", "room");
const obj2 = mongo1.setup("mongodb://127.0.0.1:27017", "testing", "user");

app.get('/', async (req,res)=>{

  res.setHeader('content-type', 'application/json');

  let field = {email:1};  

  let [result, result2] = await Promise.all([find(obj1), findOne(obj2, {},field)]);  

  //let zip1 = gzip(result);
  let zip2 = gzip(result2);

  //let unzip1 = unzip(zip1);
  //let unzip2 = unzip(zip2, 100, 2);

  res.send(result2).status(200);

});

app.listen(4000);
