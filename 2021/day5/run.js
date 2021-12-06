const fs = require("fs");
const path = require("path");

let readLines = fs.readFileSync(path.join(__dirname, "./data"), "utf-8").split("\n");

const grid = [];

for (let i = 0; i < 999; i++) {
  grid[i] = [];
  for (let j = 0; j < 999; j++) {
    grid[i][j] = 0;
  }
}

for (const line of readLines) {
  const [coord1, coord2] = line.split(" -> ");
  const [x1, y1] = coord1.split(",").map((value) => parseInt(value, 10));
  const [x2, y2] = coord2.split(",").map((value) => parseInt(value, 10));
  if (x1 === x2) {
    for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
      grid[x1][i]++;
    }
  } else if (y1 === y2) {
    for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
      grid[i][y1]++;
    }
  } else {
    let tmpx1 = x1;
    let tmpy1 = y1;

    grid[tmpx1][tmpy1]++;
    do {
      console.log(`${tmpx1}-${tmpy1}`);
      if (tmpx1 > x2) tmpx1--;
      else tmpx1++;
      if (tmpy1 > y2) tmpy1--;
      else tmpy1++;
      grid[tmpx1][tmpy1]++;
    } while (tmpx1 !== x2);
    // break;
  }
}

let max = 0;

for (let i = 0; i < 999; i++) {
  for (let j = 0; j < 999; j++) {
    if (grid[i][j] > max) max = grid[i][j];
  }
}
let sum = 0;
for (let i = 0; i < 999; i++) {
  for (let j = 0; j < 999; j++) {
    if (grid[i][j] >= 2) sum++;
  }
}
console.log(max, sum);
