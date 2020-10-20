const fetch = require('node-fetch')
var fs = require('fs');
let studylist = []
studylist = fs.readFileSync('./studylist.json').toString(); // 讀取檔案
//console.log(studylist); // 顯示在螢幕上
var textByLine = studylist.split("\n")
console.log(textByLine.length)
for (i = 0; i <= textByLine.length;i++){
  fetch(textByLine[i])
   .then(res => res.json())
   .then(json => console.log(json));
}
//console.log(userDir)
//console.log(JSON.stringify('\n', myData, this))
//console.log(JSON.stringify(data))
//fetch()
//  .then(res => res.json())
//  .then(json => console.log(json));