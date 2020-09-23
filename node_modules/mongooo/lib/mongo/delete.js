import { con } from "./index.js";

export const del = async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.deleteOne(param);
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}

export const delMany = async (objCon, param = {}) => {
  const {conn, client} = await con(objCon);
  
  try {
    await client.deleteMany(param);
  } catch (error) {return false;}
  
  await conn.close();
  return true;
}