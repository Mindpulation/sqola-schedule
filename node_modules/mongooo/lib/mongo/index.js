import mongo from "mongodb";

const {MongoClient, ObjectID} = mongo;

export default class Mongo{

  constructor(){
    this.url = new String();
    this.database = new String();
    this.collection = new String();
  }

  setup = (u = new String(),d = new String(),c = new String()) => {
    this.url = u;this.database = d;this.collection = c;  
    return {url : this.url, database : this.database, collection : this.collection}
  }
  
}

export const objectID = (param = new String()) => {
  return new ObjectID(param);  
}

export const con = async ({url, database, collection}) => {
  const conn =  await MongoClient.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
  const client =  await conn.db(database).collection(collection);  
  return{conn, client};
}

