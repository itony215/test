function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const fetch = require('node-fetch')

let garbage = makeid(24000000)
let url = 'http://52.68.178.105:38080/annotationService/testSave.json'
for (i = 0; i <= 40; i++) {
  console.log(i)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "user_name": "jl-du",
      "file_name": "TW00100007",
      "study": garbage,
      "annotation": garbage
    })
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log('error:', err))
}