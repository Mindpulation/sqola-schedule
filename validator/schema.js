const joi = require('joi');

const schemaFindListSchedule = joi.object().keys({ 
  idGuru : joi.number().required(),
  sta : joi.boolean().required()
});

module.exports = {schemaFindListSchedule}
