const fetch = require('node-fetch')
var fs = require('fs');
let studylist = []
studylist = fs.readFileSync('./studylist.json').toString();

let url = 'http://localhost:8080/annotationService/testSave.json';
fetch(url, {
  method: 'POST',
  // headers 加入 json 格式
  headers: {
    'Content-Type': 'application/json'
  },
  // body 將 json 轉字串送出
  body: JSON.stringify({
    "user_name": "jl-du",
    "file_name": "TW00100007",
    "study": {},
    "annotation": {}
  })
}).then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
}).catch((err) => {
  console.log('錯誤:', err);
})

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(makeid(50000));
