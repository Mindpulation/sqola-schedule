const { gzip } = require('mongooo').Compress;
const { set } = require('mongooo').Update;
const { find } = require('mongooo').Find;
const { save } = require('mongooo').Save;

const { objSchedule } = require('./helper');
const Mongo = require('mongooo').Mongooo;

const sec = require('../env/index');

const mongo = new Mongo();
let con;

(async()=>{
  con = await mongo.setup(sec.MONGO_URL, sec.MONGO_DB, sec.MONGO_COL);
})();

const getDataWithIdGuru = async (req, res) => {
  const param = req.body;
  const arr = await find(con, param);
  res.send(gzip(arr)).status(200);
}

const insertDataRoom = async (req, res) => {
  const param = objSchedule(req.body);  
  const data = await save(con, param); 
  res.send({res:data});
}

const updateStatus = async (req, res) => {
  const {find,update} = req.body;
  const data = await set(con, find, update);
  res.send({res:data}).status(200);
}

module.exports = {getDataWithIdGuru, insertDataRoom, updateStatus};

