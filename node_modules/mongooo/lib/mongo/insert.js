import { con } from './index.js';

export const save = async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.insertOne(param);    
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

export const saveMany = async (objCon, param = new Array()) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.insertMany(param);    
  } catch (error) {return false;}

  await conn.close();
  return true;
}