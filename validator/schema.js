const joi = require('joi');

const schemaFindListSchedule = joi.object().keys({ 
  idGuru : joi.number().required(),
  sta : joi.boolean().required()
});

const schemaInsertSchedule = joi.object().keys({
  idGuru : joi.number().required(),
  desc: joi.string().required(),
  member: joi.array().required()
});

const schemaUpdateSchedule = joi.object().keys({
  find: joi.object().required(),
  update: joi.object().required()
})

module.exports = {schemaFindListSchedule, schemaInsertSchedule, schemaUpdateSchedule}
