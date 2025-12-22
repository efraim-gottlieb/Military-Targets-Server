import fs from "fs";

// const data =
// new Promise((res, rej) => {
// fs.readFile('data/targets.json', 'utf-8', (err, data) => {
//   if(err){
//     console.log(err)
//     throw err
//   }
//   res(data)
// })
// }).catch(err => {
//   console.log(err)
// })
// console.log(await data)

// function sliceObject(obj, keys) {
//   return Object.fromEntries(
//     Object.entries(obj).filter(([key, value]) => keys.includes(key))
//   );
// }

// const myObj = {
//   id: "t-102",
//   codeName: "Iron Falcon",
//   region: "north",
//   priority: 4,
//   status: "new",
//   createdAt: "2025-12-21T09:30:00.000Z",
// };

// console.log(sliceObject(myObj, ["id", "codeName"]));

// function sliceObject(obj, ...keys) {
//   const data = ({ ...keys } = obj);
//   return { ...data };
// }
// const obj = {
//   name: "efraim",
//   age: 21,
//   city: "modiin",
// };

// console.log(sliceObject(obj, "name", "age"));
console.log(new Date)