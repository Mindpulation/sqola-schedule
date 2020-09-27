const {schemaFindListSchedule, schemaInsertSchedule, schemaUpdateSchedule} = require('./schema');

const valList = (req, res, next) => {    
  const {value,error} = schemaFindListSchedule.validate(req.body)  
  if(error === undefined){next();}
  else{res.send({res:"Salah Format"}).status(304);}
}

const inList = (req,res,next) => {
  const {value, error} = schemaInsertSchedule.validate(req.body);
  (error === undefined) ? next() : res.send({res:"Salah Format"}).status(304);
}

const upList = (req,res,next) => {
  const {value, error} = schemaUpdateSchedule.validate(req.body);
  (error === undefined) ? next() : res.send({res:"Salah Format"}).status(304);
}

module.exports = {valList, inList, upList};