const fs = require("fs");
const path = require("path");

let readLines = fs
  .readFileSync(path.join(__dirname, "./data"), "utf-8")
  .split("\n")
  .map((line) => parseInt(line, 10));

//step 2
lines = [];

for (let i = 0; i < readLines.length - 2; i++) {
  lines.push(readLines[i] + readLines[i + 1] + readLines[i + 2]);
}

let increased = 0;

for (let i = 1; i < lines.length - 1; i++) {
  if (lines[i + 1] > lines[i]) increased++;
}
console.log(increased);
