const fs = require("fs");
const path = require("path");

// I didn't need to check for cols :D

let readLines = fs.readFileSync(path.join(__dirname, "./data"), "utf-8").split("\n");

const drawed = readLines.shift().split(",");
readLines.shift(); // remove empty line

const boards = [];

while (readLines.length > 0) {
  const board = [];
  board.push(
    readLines
      .shift()
      .split(" ")
      .filter((value) => value !== "")
      .map((value) => ({ value, found: false }))
  );
  board.push(
    readLines
      .shift()
      .split(" ")
      .filter((value) => value !== "")
      .map((value) => ({ value, found: false }))
  );
  board.push(
    readLines
      .shift()
      .split(" ")
      .filter((value) => value !== "")
      .map((value) => ({ value, found: false }))
  );
  board.push(
    readLines
      .shift()
      .split(" ")
      .filter((value) => value !== "")
      .map((value) => ({ value, found: false }))
  );
  board.push(
    readLines
      .shift()
      .split(" ")
      .filter((value) => value !== "")
      .map((value) => ({ value, found: false }))
  );
  boards.push(board);
  readLines.shift(); // remove empty line
}

const winningBoard = () => {
  for (const board of boards) {
    for (const row of board) {
      if (row.filter((col) => col.found).length === 5) {
        return board;
      }
    }
  }
  return undefined;
};
let foundBoard;
currentDrawed = 1;
while (boards.length > 0 && currentDrawed) {
  currentDrawed = drawed.shift();
  console.log(currentDrawed);
  // mark as found
  for (const board of boards) {
    for (const row of board) {
      for (const col of row) {
        if (col.value === currentDrawed) col.found = true;
      }
    }
  }
  // find winning board
  let tmp;
  while ((tmp = winningBoard())) {
    foundBoard = tmp;
    const index = boards.indexOf(tmp);
    boards.splice(index, 1);
  }
}

console.log(foundBoard, currentDrawed);

let sum = 0;
for (const row of foundBoard) {
  for (const col of row) {
    if (!col.found) sum += parseInt(col.value, 10);
  }
}
console.log(sum, currentDrawed, sum * currentDrawed);
