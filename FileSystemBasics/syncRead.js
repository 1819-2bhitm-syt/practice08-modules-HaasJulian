const fs = require("fs");


const filename="todo.txt";
console.log();
console.log("Entire content of " + filename+ " will be read synchronously.");
let content = fs.readFileSync(filename, {encoding: "utf-8"});


console.log("Reading " + filename+ " finished sucessfully.");
console.log("Meanwhile Node.js app couldn`t do anything else.");
console.log();
console.log("Content of " + filename);
console.log(content);



