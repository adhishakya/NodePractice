const { readFileSync, writeFileSync } = require("fs");

console.log("Start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
// console.log(first, second);

writeFileSync("./content/new.txt", `\nText in new file: ${first} ${second}`, { flag: "a" });

console.log("Finished");
console.log("Starting the next task");
