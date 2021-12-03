const fs = require("fs");
const path = require("path");

let readLines = fs
  .readFileSync(path.join(__dirname, "./data"), "utf-8")
  .split("\n")
  .map((line) => {
    const [direction, value] = line.split(" ");
    return { direction, value: parseInt(value) };
  });

let position = 0;
let aim = 0;
let depth = 0;

for (let line of readLines) {
  if (line.direction === "forward") {
    position += line.value;
    depth += aim * line.value;
  } else if (line.direction === "up") aim -= line.value;
  else if (line.direction === "down") aim += line.value;
  else console.log(line.direction);
}

console.log(position, depth, position * depth);
