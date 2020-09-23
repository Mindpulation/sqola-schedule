import { con } from './index.js';

export const find =  async (objCon, param = {}, field = {}, sort = {}) => {
  const {conn, client} = await con(objCon);  
  let res = await client.find(param, {projection:field}).limit(100).sort(sort).toArray();
  
  await conn.close();
  return res;
}

export const findOne = async (objCon, param = {}, field={}) => {
  const {conn, client} = await con(objCon);
  let res = await client.findOne(param, {projection:field});
  
  await conn.close();
  return res;
}

export const findRange = async (objCon, start = 0, count = 1,param = {}, field={}, sort = {}) => {
  const {conn, client} = await con(objCon);
  let res = await client.find(param, {projection:field}).skip(start).limit(count).sort(sort).toArray();  
  
  await conn.close();
  return res;
}

export const findPage = async (objCon, page = 1,count = 10,param = {}, field = {}, sort = {}) => {  
  let skp = count * (page-1);
  let res = await findRange(objCon, skp, count, param, field, sort);  
  return res;
}

export const getCount = async (objCon, param = {}) => {  
  const {conn, client} = await con(objCon);
  let res = await client.countDocuments(param);
  
  await conn.close();
  return res;
}




