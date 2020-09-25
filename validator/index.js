import { schemaFindListSchedule } from "./schema.js";

export const valList = (req, res, next) => {    
  const {value,error} = schemaFindListSchedule.validate(req.body)  
  if(error === undefined){next();}
  else{res.send({res:"Salah Format"}).status(304);}
} 