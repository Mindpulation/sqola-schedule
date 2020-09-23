import { Buffer } from "buffer";
import zlib from "zlib";

export const gzip = (param = new String()) => {
  let buf = Buffer.from(JSON.stringify(param), 'utf-8');
  return zlib.gzipSync(buf);
}

export const unzip = (param, length = 0, page = 1) => {
  let parse = new Array();
  parse = JSON.parse(zlib.unzipSync(param).toString('utf8'));  
  if (length === 0 || length <= 0) return parse;
  else {
    let newArr = new Array();
    let i = 0;
    let start = length*(page-1);
    while(i<length){
      newArr.push(parse[start+i]);
      i++;
    }     
    return newArr;
  }

}