const objSchedule = (param = {}) => {
  const now = new Date();
  let res = new Object();
  res.idGuru = param.idGuru;  
  res.desc = param.desc;
  res.member = param.member;
  res.tanggal = now;
  res.room = generateUniqCode(now, param.idGuru);
  res.sta = true;
  return res;
}

const uuid = () =>  {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
     return v.toString(16);
  });
}

const generateUniqCode = (now = new Date(), uniq = new String()) => {
  return `${now.getFullYear()}${now.getMonth()}${now.getMilliseconds()}${now.getDate()}(${uniq})${uuid()}`;
}

module.exports = {objSchedule, generateUniqCode, uuid};