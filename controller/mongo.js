import Mongo from "mongooo/lib/mongo/index.js";
import { find } from 'mongooo/lib/mongo/find.js';

import sec from "../env/index.js";

const mongo = new Mongo();
const con = mongo.setup(sec.MONGO_URL, sec.MONGO_DB, sec.MONGO_COL)

export const getDataWithIdGuru = async (req, res, next) => {

  const { idGuru } = req.params;
  const arr = await find(con);

  res.send(arr).status(200);

}


