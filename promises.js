import fs from 'fs';

const data =
new Promise((res, rej) => {
fs.readFile('data/targets.json', 'utf-8', (err, data) => {
  if(err){
    console.log(err)
    throw err
  }
  res(data)
})
}).catch(err => {
  console.log(err)
})
console.log(await data)