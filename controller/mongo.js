import { gzip } from 'mongooo/lib/compress/index.js';
import { save } from 'mongooo/lib/mongo/insert.js';
import { set } from 'mongooo/lib/mongo/update.js';
import { find } from 'mongooo/lib/mongo/find.js';
import Mongo from "mongooo/lib/mongo/index.js";

import sec from "../env/index.js";

const mongo = new Mongo();
const con = mongo.setup(sec.MONGO_URL, sec.MONGO_DB, sec.MONGO_COL)

export const getDataWithIdGuru = async (req, res) => {
  const param = req.body;
  const arr = await find(con, param);
  res.send(gzip(arr)).status(200);
}

export const insertDataRoom = async (req, res, next) => {
  const {param} = req.body;
  const data = await save(con, param); 
  (data) ? res.send(data).status(200) : res.send({res:false}).status(304);
}

export const updateStatus = async (req, res, next) => {
  const {idGuru} = req.params;
  const {param} = req.body;
  const data = await set(con, param, set, {
    "status": param
  });

  console.log(data);

  (data) ? res.send(data).status(200) : res.send({res:false}).status(304);
}

