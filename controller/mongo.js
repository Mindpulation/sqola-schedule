const { gzip } = require('mongooo').Compress;
const { set } = require('mongooo').Update;
const { find } = require('mongooo').Find;
const { save } = require('mongooo').Save;

const Mongo = require('mongooo').Mongooo;

const sec = require('../env/index');

const mongo = new Mongo()
const con = mongo.setup(sec.MONGO_URL, sec.MONGO_DB, sec.MONGO_COL)

const getDataWithIdGuru = async (req, res) => {
  const param = req.body;
  const arr = await find(con, param);
  res.send(gzip(arr)).status(200);
}

const insertDataRoom = async (req, res) => {
  const {param} = req.body;
  const data = await save(con, param); 
  (data) ? res.send(data).status(200) : res.send({res:false}).status(304);
}

const updateStatus = async (req, res) => {
  const {idGuru} = req.params;
  const {param} = req.body;
  const data = await set(con, param, set, {
    "status": param
  });

  console.log(data);

  (data) ? res.send(data).status(200) : res.send({res:false}).status(304);
}

module.exports = {getDataWithIdGuru, insertDataRoom, updateStatus};

