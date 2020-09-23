import { con } from "./index.js";
import { createObjText } from "../transform/index.js";

export const setField = (field = new Array()) => {
  if(field.length === 0) return false;
  const {conn, client} = await con(objCon);      
  let i = 0;
  let len = field.length;
  while(i<len){    
    let tmp = createObjText(field[i]);
    await client.createIndex(tmp);
    i++;
  }
  await conn.close();
  return true;
}

export const searchText = (param = new String(), field = {}, lim = 100, sort = {}) => {
  const {conn, client} = await con(objCon);  
  let res = await client.find( { $text : { $search : param} }, { projection : field } ).limit(lim).sort(sort).toArray();  
  await conn.close();
  return res;
}