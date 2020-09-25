import joi from 'joi';

export const schemaFindListSchedule = joi.object().keys({ 
  idGuru : joi.number().required(),
  sta : joi.boolean().required()
})