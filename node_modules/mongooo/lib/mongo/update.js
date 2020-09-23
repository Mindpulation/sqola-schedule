import { con } from './index.js';

export const set = async (objCon, param = {}, set = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.updateOne(param, {
      $set: set,
      $currentDate: { lastModified: true }
    });
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

export const setMany = async (objCon, param = {}, set = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.updateMany(param, {
      $set: set,
      $currentDate: { lastModified: true}
    });
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}